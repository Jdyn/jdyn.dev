import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, useSpring } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const interp = index => radians =>
  `translate3d(0, ${15 * Math.sin(radians + (index * 2 * Math.PI) / 1.6)}px, 0)`;

const Languages = props => {
  const { classes, languages } = props;
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: {
      radians: 0
    },
    config: { duration: 7500 },
    reset: true
  });

  return (
    <div className={classes.container}>
      {languages.map((item, key) => (
        <animated.div
          className={classes.language}
          key={key}
          style={{
            transform: radians.interpolate(interp(key)),
            backgroundImage: `url(${item.icon})`
          }}
        />
      ))}
    </div>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    gridArea: "languages",
    padding: "0 25px",
    maxHeight: "600px",
    backgroundColor: theme.secondary,
    "@media (min-width: 750px)": {
      flexDirection: "row"
    },
    "& > div:hover": {
      transform: "scale(1.1) !important"
    }
  },
  language: {
    width: "100%",
    height: "100px",
    boxShadow: `0 0 100px -10px ${theme.shadow}, 0 30px 120px -30px ${theme.shadow}`,
    zIndex: 100,
    backgroundColor: theme.primary,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    willChange: "transform",
    borderRadius: "10px",
    margin: "5px",
    backgroundSize: "contain",
    transitionDuration: "0.2s !important",
    "@media (min-width: 750px)": {
      flexDirection: "row",
      margin: "25px",
      height: "450px",
      width: "225px",
      backgroundSize: "145%",
      backgroundPosition: "right"
    },
    "&:after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 155,
      background: theme.languageMask,
      borderRadius: "8px 8px 0 0",
      borderRadius: 10
    }
  },
  languageHover: {
    extend: "language"
  }
});

Languages.propTypes = propTypes;

export default withStyles(styles)(Languages);
