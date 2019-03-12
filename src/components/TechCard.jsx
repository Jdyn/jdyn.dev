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
  `perspective(${"3000px"}) rotateX(30deg) rotateY(${rotation /
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
          <img alt="technology icon" src={card.icon} />
          <h2 className={classes.name}>
            {/* {card.name} <span>{card.level}</span> */}
            {card.name}
          </h2>
        </div>
        <div className={classes.rating}>
          <div className={classes.rate} style={{ width: card.level }} />
        </div>
        <div className={classes.overview}>{card.overview}</div>
      </div>
    </animated.div>
  );
};

const styles = theme => ({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "300px",
    height: "100%",
    // maxHeight: "650px",
    borderRadius: 10,
    cursor: "grab",
    backgroundColor: theme.primary,
    boxShadow: `0 12.5px 85px -5px ${theme.shadow}, 0 10px 10px -10px ${theme.shadow}`
  },
  card: {
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
  overview: {
    padding: "20px",
    userSelect: "none",
    fontSize: "17px",
    flexGrow: 1,
    color: theme.color,
    fontWeight: 500,
    // lineHeight: "20px",
    letterSpacing: "0.085em"
  },
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    height: "195px",
    borderRadius: "10px 10px 0 0",
    backgroundColor: theme.cardHeader,
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
      fontSize: "20px",
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
  },
  rating: {
    display: "flex",
    width: "100%",
    height: "15px",
    fontSize: "0.5em",
    textAlign: "center",
    backgroundColor: theme.quartinary
  },
  rate: {
    backgroundColor: theme.primaryGrey
  }
});

TechCard.propTypes = propTypes;

export default withStyles(styles)(TechCard);
