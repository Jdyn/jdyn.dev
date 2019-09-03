import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { useGesture } from 'react-with-gesture';
import {
  useSprings,
  animated,
  interpolate,
  useSpring,
  UseSpringProps,
  SpringUpdate
} from 'react-spring';
import styles from './styles.css';
import TechCard from '../TechCard';
import { Technology } from '../../lib/technologies';
import { to, from } from './springs';

interface Props {
  cards: Technology[];
}

const TechStack: React.FC<Props> = (props: Props): JSX.Element => {
  const { cards } = props;
  const [removed] = useState((): Set<Record<string, number>> => new Set());
  const [size, setSize] = useState(0);

  const [springs, set] = useSprings(
    cards.length,
    (index): UseSpringProps => ({
      ...to(index),
      from: from(),
      config: { mass: 1, tension: 225, friction: 55 }
    })
  );

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }): any => {
      const trigger = velocity > 0.2 && (xDelta < -35 || xDelta > 35); // Controls how much velocity is required to remove from stack.
      const dir = xDir < 0 ? -1 : 1; // Determines whether card was dragged left or right.
      if (!down && trigger) {
        removed.add(index); // If mouse button is up and velocity is reached, add the card to removed.
        setSize(removed.size);
        ReactGA.event({
          category: 'TechStack',
          action: 'swipe-card'
        });
      }
      set((i): SpringUpdate | null => {
        if (index !== i) return null; // Only change projects for the current card
        const isRemoved = removed.has(index);
        let x: number;
        let tension: number;

        // When a card is removed it flys out left or right, otherwise goes back to zero
        if (isRemoved) {
          x = (200 + window.innerWidth) * dir;
          tension = 200;
        } else if (down) {
          x = xDelta;
          tension = 800;
        } else {
          x = 0;
          tension = 500;
        }

        const rotation: number = xDelta / 100 + (isRemoved ? dir * 10 * velocity : 0); // Rotates the card as it is being removed.
        const scale: number = down ? 1.15 : 1; // Clicking the card increases it's scale.
        const friction = 50;

        return {
          x,
          rotation,
          scale,
          delay: undefined,
          config: { friction, tension }
        };
      });

      if (!down && removed.size === cards.length) {
        setTimeout((): void => {
          set((i): SpringUpdate => to(i));
          removed.clear();
        }, 700);

        setTimeout((): void => setSize(0), 900);
      }
    }
  );

  const hidden = useSpring({
    from: { opacity: 0 },
    to: { opacity: size > cards.length - 1 ? 1 : 0 }
  });

  return (
    <section className={styles.root}>
      <animated.div style={hidden} className={styles.label}>
        Cheers
      </animated.div>
      {springs.map(
        (spring, index): JSX.Element => (
          <animated.div
            className={styles.container}
            key={cards[index].name}
            style={{
              transform: interpolate(
                [spring.x, spring.y],
                (x, y): string => `translate3d(${x}px,${y}px,0)`
              )
            }}
          >
            <TechCard {...spring} index={index} bind={bind} card={cards[index]} />
          </animated.div>
        )
      )}
    </section>
  );
};

export default TechStack;
