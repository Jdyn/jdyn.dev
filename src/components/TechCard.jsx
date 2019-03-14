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
  `perspective(${"3500px"}) rotateX(30deg) rotateY(${rotation /
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
          <div className={classes.suitContainer}>
            <img className={classes.icon} alt="tech" src={card.icon} />
            <img className={classes.suit} alt="suit" src={card.suit} />
          </div>
        </div>
        {/* <div className={classes.rating}>
          <div className={classes.rate} style={{ width: card.level }} />
        </div> */}
        <div className={classes.overview} />
        <div className={classes.footer}>
          <div className={classes.suitContainer}>
            <img className={classes.suit} alt="suit" src={card.suit} />
            <img className={classes.icon} alt="tech" src={card.icon} />
          </div>
        </div>
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
    boxShadow: `0 12.5px 45px -5px ${theme.shadow}, 0 10px 10px -10px ${theme.shadow}`
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
    fontSize: "18px",
    flexGrow: 1,
    color: theme.color,
    fontWeight: 400,
    // lineHeight: "20px",
    letterSpacing: "0.085em"
  },
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    height: "151px",
    borderRadius: "10px 10px 0 0",
    // backgroundColor: theme.cardHeader,
    color: theme.color,
    "& div": {
      top: 0,
      left: 0,
      margin: "5% 0 0 5%",
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
  icon: {
    position: "relative",
    width: "64px",
    margin: "0 auto",
    // height: "84px",
    userSelect: "none"
  },
  suit: {
    width: "46px",
    height: "46px",
    margin: "0 auto"
  },
  footer: {
    display: "flex",
    position: "relative",
    // flexDirection: "column",
    height: "151px",
    borderRadius: "0 0 10px 10px",
    // backgroundColor: theme.cardHeader,
    "& div": {
      bottom: 0,
      right: 0,
      margin: "0 5% 5% 0",
    }
  },
  suitContainer: {
    display: "flex",
    // height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    width: "84px",
    position: "absolute",
    // backgroundColor: theme.primary,
    borderRadius: "100% 0 10px 0"
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
