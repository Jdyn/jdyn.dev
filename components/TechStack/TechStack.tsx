import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { useGesture, GestureState } from 'react-with-gesture';
import {
  useSprings,
  animated,
  interpolate,
  useSpring,
  UseSpringProps,
  SpringUpdate
} from 'react-spring';
import styles from './styles.css';
import { Technology } from '../../lib/technologies';
import { stackConfig, trans } from './springs';

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
      ...stackConfig(index).to,
      from: stackConfig(index).from,
      config: { mass: 1, tension: 225, friction: 55 }
    })
  );

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }: GestureState): void => {
      const trigger = velocity > 0.2 && (xDelta < -35 || xDelta > 35); // Controls how much velocity is required to remove from stack.
      const dir = xDir < 0 ? -1 : 1; // Determines whether card was dragged left or right.
      if (!down && trigger) {
        removed.add(index); // If mouse button is up and trigger velocity is reached, remove the card.
        setSize(removed.size);
        ReactGA.event({
          category: 'TechStack',
          action: 'swipe-card'
        });
      }
      set((i): SpringUpdate | null => {
        if (index !== i) return null; // Only apply changes to the selected card.
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
          tension = 400;
        }

        const rotation: number = xDelta / 100 + (isRemoved ? dir * 15 * velocity : 0); // Rotates the card as it is being removed.
        const scale: number = down ? 1.15 : 1; // Clicking the card increases it's scale.

        return {
          x,
          rotation,
          scale,
          config: { friction: 50, tension }
        };
      });

      if (!down && removed.size === cards.length) {
        setTimeout((): void => {
          set((i): SpringUpdate => stackConfig(i).to);
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
        (spring, index): JSX.Element => {
          const card = cards[index];

          return (
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
              <animated.div
                className={styles.card}
                style={{ transform: interpolate([spring.rotation, spring.scale], trans) }}
                {...bind(index)}
              >
                <div className={styles.cardHeader}>
                  <img alt="tech icon" src={card.icon} />
                  <h2>{card.name}</h2>
                </div>
                <p>{card.overview}</p>
              </animated.div>
            </animated.div>
          );
        }
      )}
    </section>
  );
};

export default TechStack;
