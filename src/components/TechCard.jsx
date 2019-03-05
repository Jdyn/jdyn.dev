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
  `perspective(${"2000px"}) rotateX(30deg) rotateY(${rotation /
    10}deg) rotateZ(${rotation}deg) scale(${scale})`;

const TechCard = props => {
  const { classes, card, rotation, scale, index, bind } = props;

  return (
    <animated.div
      className={classes.container}
      style={{
        transform: interpolate([rotation, scale], trans)
      }}
      {...bind(index)}
    >
      <div className={classes.card}>
        <div className={classes.header}>
          <img alt="technology icon" src={card.icon} className={classes.techLogo} />
          <h2 className={classes.name}>{card.name}</h2>
        </div>
        <div className={classes.footer} />
      </div>
    </animated.div>
  );
};

const styles = theme => ({
  container: {
    position: "relative",
    width: "45vh",
    maxWidth: "300px",
    height: "85vh",
    maxHeight: "570px",
    borderRadius: 10,
    backgroundColor: "white",
    cursor: "grab",
    boxShadow: "0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  techLogo: {
    position: "relative",
    maxWidth: "35%",
    height: "60%",
    userSelect: "none",
    marginTop: "5%",
    marginLeft: "5%"
  },
  overview: {
    margin: "20px",
    userSelect: "none",
    flexShrink: 1
  },
  footer: {
    display: "flex",
    position: "relative",
    flexBasis: "50px",
    flexGrow: 1,
    width: "100%",
    borderRadius: "10px 10px 10px 10px"
  },
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    padding: "10px",
    height: "35%",
    borderRadius: 10,
    backgroundColor: theme.secondaryWhite
  },
  name: {
    display: "inline-flex",
    margin: 0,
    marginTop: "5px",
    marginLeft: "15px",
    fontSize: "1.1em",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    justifyContent: "middle",
    alignItems: "center"
  }
});

TechCard.propTypes = propTypes;

export default withStyles(styles)(TechCard);
