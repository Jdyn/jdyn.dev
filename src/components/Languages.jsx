import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, useSprings, useSpring, interpolate } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired
};

// const interp = index => radians => {
//   return `translate3d(0, ${15 * Math.sin(radians + (index * 2 * Math.PI) / 1.6)}px, 0)`;
// };

const Languages = props => {
  const { classes, languages } = props;
  const [state, set] = useState(() =>
    languages.map(item => {
      item["flipped"] = false;
      item["hovered"] = false;
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
      transform: `perspective(600px) rotateX(${item.flipped ? 180 : 0}deg) scale(${
        item.hovered ? 1.05 : 1.0
      })`,
      config: { mass: 5, tension: 400, friction: 50 }
    }))
  );

  const flipCard = (event, index) => {
    event.preventDefault();
    let arr = [...state];
    arr[index] = { ...state[index], flipped: !state[index].flipped };
    set(arr);
  };

  return (
    <div className={classes.container}>
      <h1>My Suits.</h1>
      <div className={classes.wrapper}>
        {springs.map((style, index) => (
          <animated.div
            // style={{ transform: radians.interpolate(interp(index)) }}
            className={classes.language}
            key={index}
            onClick={e => flipCard(e, index)}
            onMouseOver={() => {
              let arr = [...state];
              arr[index] = { ...state[index], hovered: true };
              set(arr);
            }}
            onMouseLeave={() => {
              let arr = [...state];
              arr[index] = { ...state[index], hovered: false };
              set(arr);
            }}
          >
            <animated.div
              className={classes.back}
              style={{
                transform: style.transform,
                backgroundImage: `url(${state[index].icon})`
              }}
            />
            <animated.div
              className={classes.front}
              style={{
                transform: style.transform.interpolate(t => `${t} rotateX(180deg)`)
              }}
            >
              {/* <h1>Suit of {state[index].name}</h1> */}
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
    backgroundColor: theme.tertiary,
    "& h1": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px 0 20px 0",
      margin: 0,
      color: theme.color,
      fontWeight: 700
    }
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px 80px 10px",
    width: "100%",
    maxHeight: "1000px",
    "@media (min-width: 650px)": {
      flexDirection: "row"
    }
  },
  language: {
    display: "flex",
    width: "90%",
    height: "425px",
    position: "relative",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "15px",
    WebkitTapHighlightColor: "transparent",
    transformStyle: "preserve-3d",
    "@media (min-width: 650px)": {
      maxWidth: "250px",
      margin: "10px"
    }
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
    borderRadius: "10px",
    backfaceVisibility: "hidden"
  },
  front: {
    position: "absolute",
    extend: "card",
    backgroundColor: theme.primary,
    "& h1": {
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
  },
  back: {
    position: "absolute",
    extend: "card",
    backgroundColor: theme.primary,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "65%"
  }
});

Languages.propTypes = propTypes;

export default withStyles(styles)(Languages);
