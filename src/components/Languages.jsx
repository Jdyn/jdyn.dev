import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, useSpring } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const interp = (index, dir) => radians => {
  return `translate3d(${dir * Math.sin(radians + (index * 2 * Math.PI) / 5)}px, ${dir *
    Math.sin(radians + (index * 2 * Math.PI) / 1)}px, 0)`;
};

const Languages = props => {
  const { classes, languages } = props;
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: {
      radians: 0
    },
    config: { duration: 15000 },
    reset: true
  });

  return (
    <div className={classes.container}>
      {languages.map((item, key) => (
        <animated.div
          className={classes.language}
          key={key}
          style={{
            transform: radians.interpolate(
              interp(
                key,
                window.matchMedia("(min-width: 750px)").matches === true
                  ? Math.random() > 0.5
                    ? Math.random() * (100 - 50 + 1) + 50
                    : Math.random() * (-100 + -50 + 1) + 50
                  : Math.random() > 0.5
                  ? 55
                  : -55
              )
            ),
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
    height: "400px",
    backgroundColor: theme.tertiary,
    "@media (min-width: 750px)": {
      flexDirection: "row"
    }
  },
  language: {
    height: "175px",
    width: "100px",
    boxShadow: "0 15px 35px rgba(0,0,0,.1), 0 3px 10px rgba(0,0,0,.07)",
    zIndex: 100,
    backgroundColor: theme.primary,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    willChange: "transform",
    borderRadius: "50%",
    backgroundSize: "65%",
    transitionDuration: "0.2s !important",
    "@media (min-width: 750px)": {
      flexDirection: "row",
      height: "175px",
      width: "175px"
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
      borderRadius: "50%"
    }
  },
  languageHover: {
    extend: "language"
  }
});

Languages.propTypes = propTypes;

export default withStyles(styles)(Languages);
