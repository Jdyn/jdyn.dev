/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSprings, animated, useSpring, to } from 'react-spring';
import { Technology } from '../../lib/technologies';
import { stackConfig, trans } from './springs';
import styles from './index.module.css';

interface Props {
  cards: Technology[];
}

const TechStack: React.FC<Props> = ({ cards }: Props): JSX.Element => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out

  const [springs, api] = useSprings(
    cards.length,
    (index) => ({
      ...stackConfig(index).to,
      from: stackConfig(index).from,
      config: { mass: 1, tension: 225, friction: 55 }
    })
  );

  const bind: any = useDrag(
    ({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
      const trigger = vx > 0.1 && (mx < -15 || mx > 15);
      const dir = xDir < 0 ? -1 : 1;
      if (!active && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : active ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * vx : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1; // Active cards lift up a bit
        // eslint-disable-next-line consistent-return
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => stackConfig(i).to);
        }, 600);
    }
  );

  const hidden = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 }
  });

  return (
    <section className={styles.root}>
      {gone.size >= cards.length && (
        <animated.div style={hidden} className={styles.label}>
          Cheers
        </animated.div>
      )}

      {springs.map((spring, index): JSX.Element => {
        const card = cards[index];

        return (
          <animated.div
            className={styles.container}
            key={cards[index].name}
            style={{
              transform: to(
                [spring.x, spring.y],
                (x, y): string => `translate3d(${x}px, ${y}px, 0)`
              )
            }}
          >
            <animated.div
              className={styles.card}
              style={{ transform: to([spring.rotation, spring.scale], trans) }}
              {...bind(index)}
            >
              <div className={styles.cardHeader}>
                <img alt={card.name} src={card.icon} />
                <h2>{card.name}</h2>
              </div>
              <div className={styles.body}>
                <p>{card.overview}</p>
              </div>
            </animated.div>
          </animated.div>
        );
      })}
    </section>
  );
};

export default TechStack;
