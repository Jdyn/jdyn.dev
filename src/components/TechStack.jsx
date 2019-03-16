import React, { useState } from "react";
import { useSprings, animated, interpolate, useSpring, config } from "react-spring";
import { useGesture } from "react-with-gesture";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechCard from "./TechCard";
import ReactGA from "react-ga";

const propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired
};

const to = index => ({
  x: 0,
  y: index * -5,
  rotation: -10 + Math.random() * 20, // Randomize initial rotation in stack
  scale: 1,
  delay: index * 225
});

const from = index => ({
  x: Math.random() > .55 ? window.innerWidth * 1 : window.innerWidth * -1,
  y: 0,
  rotation: 0,
  scale: 0.5
});

const TechStack = props => {
  const { classes, cards } = props;
  const [removed] = useState(() => new Set());
  const [size, setSize] = useState(0);
  const [springs, set] = useSprings(cards.length, index => ({
    ...to(index),
    from: from(index),
    config: {mass: 1, tension: 225, friction: 55} //config.slow
  }));

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2 && (xDelta < -25 || xDelta > 25); // Controls how much velocity is required to remove from stack.
      const dir = xDir < 0 ? -1 : 1; // Determines whether card was dragged left or right.
      if (!down && trigger) {
        removed.add(index); // If mouse button is up and velocity is reached, add the card to removed.
        setSize(removed.size);
        ReactGA.event({
          category: "TechStack",
          action: "swipe-card"
        });
      }
      set(i => {
        if (index !== i) return; // Only change projects for the current card
        const isRemoved = removed.has(index);
        const x = isRemoved ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is removed it flys out left or right, otherwise goes back to zero
        const rotation = xDelta / 100 + (isRemoved ? dir * 10 * velocity : 0); // Rotates the card as it is being removed.
        const scale = down ? 1.1 : 1; // Clicking the card increases it's scale.
        return {
          x,
          rotation,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isRemoved ? 200 : 500 }
        };
      });
      if (!down && removed.size === cards.length) {
        setTimeout(() => removed.clear() || set(i => to(i)), 700);
        setTimeout(() => setSize(0), 900);
      }
    }
  );

  const hidden = useSpring({
    from: { opacity: 0 },
    to: { opacity: size > cards.length - 1 ? 1 : 0 }
  });

  return (
    <div className={classes.container}>
      <animated.div style={hidden} className={classes.hidden}>
      <span role="img" aria-label="victory-hand">✌</span>
      </animated.div>
      {springs.map((props, index) => (
        <animated.div
          className={classes.card}
          key={index}
          style={{
            transform: interpolate([props.x, props.y], (x, y) => `translate3d(${x}px,${y}px,0)`)
          }}
        >
          <TechCard {...props} index={index} bind={bind} card={cards[index]} />
        </animated.div>
      ))}
    </div>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    margin: "2.5% 0",
    height: "535px",
    gridArea: "stack",
    zIndex: 85
  },
  card: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    willChange: "transform",
    justifyContent: "center"
  },
  hidden: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    verticalAlign: "middle",
    margin: "auto 0",
    color: theme.color,
    fontWeight: "bold"
  }
});

TechStack.propTypes = propTypes;

export default withStyles(styles)(TechStack);
