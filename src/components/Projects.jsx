import React, { useState, useRef, useEffect } from "react";
import { useTransition, useSpring, useChain, config, animated } from "react-spring";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import ProjectCard from "./ProjectCard";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Projects = props => {
  const { classes, projects } = props;
  const [open, set] = useState(false);
  const [hovering, isHovering] = useState(false);
  const myRef = useRef();

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      set(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, []);

  const titleSpring = useSpring({
    config: config.slow,
    opacity: 1,
    height: "50vh",
    from: { opacity: 0, height: "0px" }
  });

  const openingRef = useRef();
  const { width, height, opacity, ...rest } = useSpring({
    ref: openingRef,
    config: config.default,
    from: {
      width: "20%",
      background: "#555abf",
      boxShadow: "0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
    },
    to: {
      width: open ? "100%" : "20%",
      background: open ? "white" : "#555abf",
      transform: open ? `translateY(0px)` : `translateY(${hovering ? "-10px" : "0px"})`,
      boxShadow: open
        ? "0 50px 200px -20px rgba(50,50,93,.25), 0 30px 120px -30px rgba(0,0,0,.3)"
        : hovering
        ? "0 25px 100px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
        : "0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
    }
  });

  const itemsRef = useRef();
  const transitions = useTransition(open ? projects : [], item => item.name, {
    ref: itemsRef,
    unique: true,
    trail: 400 / projects.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  useChain(open ? [openingRef, itemsRef] : [itemsRef, openingRef]);

  return (
    <div className={classes.container}>
      <animated.div
        ref={myRef}
        className={classes.display}
        style={{ ...rest, width: width, height: height }}
        onClick={() => set(true)}
        onMouseOver={() => isHovering(true)}
        onMouseOut={() => isHovering(false)}
      >
        {transitions.map(({ item, key, props }) => (
          <ProjectCard key={key} style={{ ...props, background: item.css }} />
        ))}
        {!open && (
          <animated.div className={classes.buttonTitle} style={titleSpring}>
            projects
          </animated.div>
        )}
      </animated.div>
    </div>
  );
};

const styles = theme => ({
  container: {
    gridArea: "projects",
    display: "flex",
    backgroundColor: theme.quartinaryWhite,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "350px"
  },
  display: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    borderRadius: 10,
    minWidth: "128px",
    cursor: "pointer",
    margin: "25px",
    "@media (min-width: 700px)": {
      margin: "25px 65px"
    },
    padding: "10px",
    willChange: "width, height",
  },
  buttonTitle: {
    display: "flex",
    color: "white",
    fontWeight: 600,
    justifyContent: "center",
    flexGrow: 1,
    width: "100%",
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    justifyContent: "center",
    alignItems: "center"
  }
});

Projects.propTypes = propTypes;

export default withStyles(styles)(Projects);
