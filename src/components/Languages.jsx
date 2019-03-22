import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, useSprings } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired
};

// const interp = index => radians => {
//   return `translate3d(0, ${15 * Math.sin(radians + (index * 2 * Math.PI) / 1.6)}px, 0)`;
// };

const Languages = props => {
  const { classes, languages, theme } = props;
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
      transform: `perspective(600px) rotateX(${item.flipped ? 180 : 0}deg)`,
      scale: `scale(${item.hovered ? 1.05 : 1.0})`,
      boxShadow: item.hovered
        ? `0 30px 60px -8px ${
            theme.shadow
          }, 0 18px 36px -18px rgba(0,0,0,.3),0 -12px 36px -8px rgba(0,0,0,.025)`
        : `0 13px 27px -5px ${
            theme.shadow
          }, 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)`,
      config: { mass: 5, tension: 400, friction: 50 }
    }))
  );

  const flipCard = (event, index) => {
    // event.preventDefault();
    event.persist();
    let arr = [...state];
    arr[index] = { ...state[index], flipped: !state[index].flipped };
    set(arr);
  };

  return (
    <div className={classes.container}>
      {/* <h1>My Suits.</h1> */}
      <div className={classes.wrapper}>
        {springs.map((style, index) => (
          <animated.div
            className={classes.language}
            key={index}
            style={{ transform: style.scale }}
            onMouseOver={e => {
              e.preventDefault();
              let arr = [...state];
              arr[index] = { ...state[index], hovered: true };
              set(arr);
            }}
            onMouseLeave={e => {
              e.preventDefault();
              let arr = [...state];
              arr[index] = { ...state[index], hovered: false };
              set(arr);
            }}
            onClick={e => flipCard(e, index)}
          >
            <animated.div
              className={classes.back}
              style={{
                transform: style.transform,
                backgroundImage: `url(${state[index].icon})`,
                boxShadow: style.boxShadow
              }}
            />
            <animated.div
              className={classes.front}
              style={{
                transform: style.transform.interpolate(t => `${t} rotateX(180deg)`),
                boxShadow: style.boxShadow
              }}
            />
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
    padding: "0 10px 0 10px",
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
      margin: "8px"
    },
    zIndex: 100,
    "&:hover": {
      zIndex: 105
    }
  },
  card: {
    width: "100%",
    height: "100%",
    position: "absolute",
    willChange: "transform, opacity",
    padding: "15px",
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

export default withStyles(styles, { injectTheme: true })(Languages);
