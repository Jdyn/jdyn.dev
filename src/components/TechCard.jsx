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

const trans = (rotation, scale, perspective) =>
  `perspective(${"3000px"}) rotateX(30deg) rotateY(${rotation /
    10}deg) rotateZ(${rotation}deg) scale(${scale})`;

const TechCard = props => {
  const { classes, rotation, scale, index, bind } = props;

  return (
    <animated.div
      className={classes.card}
      style={{
        transform: interpolate([rotation, scale], trans)
      }}
      {...bind(index)}
    >
      <div className={classes.container}>
        <div className={classes.header} />
        <div className={classes.footer} />
      </div>
      {/* <div className={classes.header}>
        <img alt="technology icon" src={card.icon} className={classes.techLogo} />
        <h3 className={classes.name}>{card.name}</h3>
      </div> */}

      {/* <p className={classes.overview}>{card.overview}</p> */}
      <div className={classes.footer} />
    </animated.div>
  );
};

const styles = theme => ({
  card: {
    position: "relative",
    width: "45vh",
    maxWidth: "300px",
    height: "85vh",
    maxHeight: "570px",
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: "0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  techLogo: {
    position: "relative",
    width: "128px",
    height: "128px",
    userSelect: "none",
    marginTop: "20px",
    marginLeft: "20px"
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
    flexDirection: "row",
    height: "35%",
    borderRadius: 10,
    backgroundColor: theme.secondaryWhite
  },
  name: {
    display: "flex",
    margin: 0,
    marginLeft: "15px",
    flexGrow: 1,
    // justifyContent: "middle",
    // alignItems: "flex-end"
    justifyContent: "middle",
    alignItems: "center"
  }
});

TechCard.propTypes = propTypes;

export default withStyles(styles)(TechCard);
