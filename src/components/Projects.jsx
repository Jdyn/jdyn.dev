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
  });

  const springRef = useRef();
  const { width, height, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.gentle,
    from: {
      width: "20%",
      height: "auto",
      background: "hotpink",
      boxShadow: "0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
    },
    to: {
      width: open ? "100%" : "20%",
      height: open ? "auto" : "auto",
      background: open ? "white" : "hotpink",
      transform: `translateY(${hovering ? "-10px" : "0px"})`,
      boxShadow: open
        ? "0 50px 200px -20px rgba(50,50,93,.25), 0 30px 120px -30px rgba(0,0,0,.3)"
        : hovering
        ? "0 25px 100px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
        : "0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
    }
  });

  const transRef = useRef();
  const transitions = useTransition(open ? projects : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / projects.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" }
  });

  useChain(open ? [springRef, transRef] : [transRef, springRef]);

  return (
    <div className={classes.container}>
      <animated.div
        ref={myRef}
        className={classes.display}
        style={{ ...rest, width: width, height: height }}
        onClick={() => set(true)}
        onMouseOver={e => isHovering(true)}
        onMouseOut={e => isHovering(false)}
      >
        {transitions.map(({ item, key, props }) => (
          <ProjectCard key={key} style={{ ...props, background: item.css }} />
        ))}
      </animated.div>
      {/* <div className={classes.projectsHero}> hello</div> */}
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
    minHeight: "64px",
    minWidth: "128px",
    cursor: "pointer",
    margin: "25px",
    "@media (min-width: 700px)": {
      margin: "25px 65px"
    },
    padding: "10px",
    willChange: "width, height",
    "&:hover": {
      transform: "translateY(-1px)"
    }
  },
  projectsHero: {
    display: "flex",
    position: "relative",
    height: "100%",
    width: "45%"
  }
});

Projects.propTypes = propTypes;

export default withStyles(styles)(Projects);
