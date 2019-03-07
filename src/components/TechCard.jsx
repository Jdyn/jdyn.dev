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
            {card.name} <span>{card.level}</span>
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
    width: "85%",
    maxWidth: "300px",
    height: "85%",
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
    height: "100%",
    "& *": {
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none"
    }
  },
  overview: {
    padding: "20px",
    userSelect: "none",
    fontSize: "0.87em",
    flexGrow: 1,
    letterSpacing: "0.055em"
    // textAlign: "justify"
  },
  header: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    height: "195px",
    borderRadius: "10px 10px 0 0",
    backgroundColor: theme.tertiaryWhite,
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
      fontSize: "1.1em",
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
    backgroundColor: theme.quartinaryWhite
  },
  rate: {
    backgroundColor: theme.primaryGrey
  }
});

TechCard.propTypes = propTypes;

export default withStyles(styles)(TechCard);
