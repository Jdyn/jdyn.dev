import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, useSprings, useSpring, interpolate } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const interp = index => radians => {
  return `translate3d(0, ${15 * Math.sin(radians + (index * 2 * Math.PI) / 1.6)}px, 0)`;
};

const Languages = props => {
  const { classes, languages } = props;
  const [state, set] = useState(() =>
    languages.map(item => {
      item["flipped"] = false;
      return item;
    })
  );

  // const { radians } = useSpring({
  //   to: async next => {
  //     while (1) await next({ radians: 2 * Math.PI });
  //   },
  //   from: {
  //     radians: 0
  //   },
  //   config: { duration: 7500 },
  //   reset: true
  // });

  const springs = useSprings(
    languages.length,
    state.map(item => ({
      opacity: item.flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${item.flipped ? 180 : 0}deg) rotateY(${
        item.flipped ? 180 : 0
      }deg)`,
      config: { mass: 5, tension: 500, friction: 60 }
    }))
  );

  return (
    <div className={classes.container}>
      <h1>My Suits.</h1>
      <div className={classes.wrapper}>
        {springs.map((style, index) => (
          <animated.div
            // style={{ transform: radians.interpolate(interp(index)) }}
            className={classes.language}
            key={index}
            onClick={() => {
              let arr = [...state];
              arr[index] = { ...state[index], flipped: !state[index].flipped };
              set(arr);
            }}
          >
            <animated.div
              className={classes.back}
              style={{
                transform: style.transform,
                opacity: style.opacity.interpolate(o => 1 - o),
                backgroundImage: `url(${state[index].icon})`
              }}
            />
            <animated.div
              className={classes.front}
              style={{
                transform: style.transform.interpolate(t => `${t} rotateX(180deg) rotateY(180deg)`),
                opacity: style.opacity
              }}
            >
              {/* {state[index].name} */}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gridArea: "languages",
    "& h1": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 0 20px 0",
      margin: 0,
      color: theme.color, 
      fontWeight: 700,
      backgroundColor: theme.tertiary
    }
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    // alignItems: "center",
    justifyContent: "center",
    paddingBottom: "80px",
    width: "100%",
    maxHeight: "1000px",
    backgroundColor: theme.tertiary,
    "@media (min-width: 650px)": {
      flexDirection: "row"
    }
  },
  language: {
    display: "flex",
    width: "250px",
    height: "425px",
    position: "relative",
    margin: "15px",
    borderRadius: "10px",
    cursor: "pointer"
  },
  card: {
    width: "100%",
    height: "100%",
    position: "absolute",
    willChange: "transform, opacity",
    position: "absolute",
    padding: "15px",
    zIndex: 100,
    boxShadow: "0 15px 35px rgba(0,0,0,.1), 0 3px 10px rgba(0,0,0,.07)",
    borderRadius: "10px"
  },
  front: {
    extend: "card",
    backgroundColor: theme.primary
  },
  back: {
    extend: "card",
    backgroundColor: theme.primary,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "65%"
  }
});

Languages.propTypes = propTypes;

export default withStyles(styles)(Languages);
