import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, interpolate } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired,
  card: PropTypes.object.isRequired,
  rotation: PropTypes.object.isRequired,
  scale: PropTypes.object.isRequired,
  bind: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

const trans = (rotation, scale) =>
  `perspective(1500px) rotateX(30deg) rotateY(${rotation /
    10}deg) rotateZ(${rotation}deg) scale(${scale})`;

const TechCard = props => {
  const { classes, card, rotation, scale, index, bind } = props;

  return (
    <animated.div
      className={classes.card}
      style={{
        transform: interpolate([rotation, scale], trans)
      }}
      {...bind(index)}
    >
      <img alt="technology icon" src={card.icon} className={classes.techLogo} />
    </animated.div>
  );
};

const styles = {
  card: {
    width: "45vh",
    maxWidth: 300,
    height: "85vh",
    maxHeight: 570,
    borderRadius: 10,
    padding: "20px",
    backgroundColor: "white",
    boxShadow: "0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)"
  },
  techLogo: {
    maxHeight: "50%",
    width: "45%",
    lineHeight: 1
  }
};

TechCard.propTypes = propTypes;

export default withStyles(styles)(TechCard);
