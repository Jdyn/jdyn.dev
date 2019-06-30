import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, interpolate } from "react-spring";

const propTypes = {
  card: PropTypes.object.isRequired,
  bind: PropTypes.func.isRequired,
  scale: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  rotation: PropTypes.object.isRequired
};

const trans = (rotation, scale) =>
  `perspective(${"1500px"}) rotateX(30deg) rotateY(${rotation /
    10}deg) rotateZ(${rotation}deg) scale(${scale})`;

const TechCard = props => {
  const { classes, card, rotation, scale, index, bind } = props;

  return (
    <animated.div
      className={classes.root}
      style={{ transform: interpolate([rotation, scale], trans) }}
      {...bind(index)}
    >
      <div className={classes.container}>
        <div className={classes.header}>
          <img alt="tech icon" src={card.icon} />
          <h2>{card.name}</h2>
        </div>
        <p>{card.overview}</p>
      </div>
    </animated.div>
  );
};

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%",
    maxWidth: "285px",
    height: "100%",
    borderRadius: 10,
    cursor: "grab",
    backgroundColor: theme.primary,
    boxShadow: `0 12.5px 50px -10px ${theme.shadow}, 0 10px 10px -10px ${theme.shadow}`,
    "& p": {
      margin: 0,
      padding: "20px",
      userSelect: "none",
      fontSize: 17,
      flexGrow: 1,
      color: theme.color,
      fontWeight: 500,
      letterSpacing: "0.085em"
    }
  },
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%",
    "& *": {
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none"
    }
  },
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    height: "195px",
    borderRadius: "10px 10px 0 0",
    backgroundColor: theme.tertiary,
    color: theme.color,
    "& img": {
      position: "relative",
      maxWidth: "35%",
      height: "60%",
      userSelect: "none",
      marginTop: "5%",
      marginLeft: "5%"
    },
    "& h2": {
      display: "inline-flex",
      margin: "5px 15px 5px 15px",
      fontSize: 20,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.125em",
      justifyContent: "middle",
      alignItems: "center",
      "& span": {
        textAlign: "right",
        width: "100%"
      }
    }
  }
});

TechCard.propTypes = propTypes;

export default withStyles(styles)(TechCard);
