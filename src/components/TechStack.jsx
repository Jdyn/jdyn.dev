import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechCard from "./TechCard";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const to = index => ({
  x: 0,
  y: index * -4,
  rotation: -10 + Math.random() * 20, // Randomize initial position in stack
  scale: 1,
  delay: index * 300
});

const from = index => ({
  x: 0,
  y: index * -4,
  rotation: 0,
  scale: 1.5,
  y: -1000,
});

const TechStack = props => {
  const { classes, cards } = props;
  const [removed] = useState(() => new Set());
  const [springs, set] = useSprings(cards.length, index => ({
    ...to(index),
    from: from(index)
  }));

  const bind = useGesture(
    ({ args: [index], down, delta: [xDelta], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // Controls how much velocity is required to remove from stack.
      const dir = xDir < 0 ? -1 : 1; // Determines whether card was dragged left or right.
      if (!down && trigger) removed.add(index); // If mouse button is up and velocity is reached, add the card to removed.
      set(i => {
        if (index !== i) return; // Only change data for the current card
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
      if (!down && removed.size === cards.length)
        setTimeout(() => removed.clear() || set(i => to(i)), 600);
    }
  );

  return springs.map((props, index) => (
    <animated.div
      className={classes.container}
      key={index}
      style={{
        transform: interpolate([props.x, props.y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <TechCard
        {...props}
        index={index}
        bind={bind}
        card={cards[index]}
        iconColor={cards[index].iconColor}
      />
    </animated.div>
  ));
};

const styles = {
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    willChange: "transform",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

TechStack.propTypes = propTypes;

export default withStyles(styles)(TechStack);