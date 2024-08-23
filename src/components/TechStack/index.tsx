/* eslint-disable no-nested-ternary */
import { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useSprings, animated, useSpring, to } from "@react-spring/web";
import { stackConfig, trans } from "./springs";
import styles from "./index.module.css";
import technologies from "../../lib/technologies";

const cards = Object.values(technologies).filter((t) =>
  ["iOS", "Node.js", "React.js", "Phoenix"].includes(t.name)
);

const TechStack = (): JSX.Element => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [size, setSize] = useState(0);

  const [springs, api] = useSprings(
    cards.length,
    (index) => ({
      ...stackConfig(index).to,
      from: stackConfig(index).from,
      config: { mass: 1, tension: 225, friction: 55 },
    }),
    []
  );

  const hidden = useSpring({
    from: { opacity: 0 },
    to: { opacity: size > cards.length - 1 ? 1 : 0 },
  });

  const bind: any = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.1 && (mx < -30 || mx > 30);
      const dir = xDir < 0 ? -1 : 1;
      if (!active && trigger) gone.add(index);

      api.start((i) => {
        if (index !== i) return null;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : active ? mx : 0;
        const rotation = active
          ? 0
          : Math.floor(Math.random() * 30) +
            mx / 100 +
            (isGone ? dir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;
        if (isGone) setSize((val) => val + 1);
        return {
          x,
          rotation,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!active && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => stackConfig(i).to);
          setSize(0);
        }, 1000);
    }
  );

  return (
    <section className={styles.root}>
      <animated.div style={hidden} className={styles.label}>
        Cheers
      </animated.div>
      {springs.map((props, index): JSX.Element => {
        const card = cards[index];
        return (
          <animated.div
            className={styles.container}
            key={cards[index].name}
            style={props}
          >
            <animated.div
              className={styles.card}
              style={{ transform: to([props.rotation, props.scale], trans) }}
              {...bind(index)}
            >
              <div className={styles.cardHeader}>
                <img alt={card.name} src={card.icon} width={125} height={125} />
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
