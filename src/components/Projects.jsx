import React, { useState, useRef, useEffect } from "react";
import { useTransition, useSpring, useChain, config, animated } from "react-spring";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import ReactGA from "react-ga";

const propTypes = {
  classes: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired
};

const Projects = props => {
  const { classes, projects } = props;
  const [open, set] = useState(false);
  const [modal, setModal] = useState(false);
  const [currentProject, setProject] = useState({});

  const myRef = useRef();
  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target) && modal === false) {
      set(false);
    }
  };

  const handleModal = project => {
    document.body.style.overflow = "hidden";
    ReactGA.event({
      category: "Projects",
      action: `open-project-card-${project.name}`
    });
    setProject(project);
    setModal(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [modal]);

  const titleSpring = useSpring({
    from: { opacity: 0, height: "0px" },
    to: {
      opacity: 1,
      height: open ? "0" : "50%"
    }
  });

  const containerRef = useRef();
  const { width, opacity, ...rest } = useSpring({
    ref: containerRef,
    config: config.stiff,
    from: {
      width: "20%",
      background: "#555abf",
      boxShadow: "0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
    },
    to: {
      width: open ? "100%" : "20%",
      background: open ? "white" : "#555abf",
      cursor: open ? "default" : "pointer",
      boxShadow: open
        ? "0 0px 200px -20px rgba(50,50,93,.25), 0 30px 120px -30px rgba(0,0,0,.3)"
        : "0 0px 75px 10px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)"
    }
  });

  const itemsRef = useRef();
  const transitions = useTransition(projects, item => item.name, {
    ref: itemsRef,
    unique: true,
    config: config.default,
    trail: 400 / projects.length,
    enter: { margin: "0px", height: "0px  ", opacity: 0, transform: "scale(0)" },
    update: {
      height: open ? "350px" : "0px",
      margin: open ? "10px" : "0px",
      transform: open ? "scale(1)" : "scale(0)",
      opacity: open ? 1 : 0
    }
  });

  useChain(open ? [containerRef, itemsRef] : [itemsRef, containerRef], [0, 0.1]);

  return (
    <div className={classes.container}>
      {modal && <Modal setModal={setModal} item={currentProject} />}
      <animated.div
        ref={myRef}
        className={classes.display}
        style={{ ...rest, width: width }}
        onClick={() => {
          ReactGA.event({
            category: "Projects",
            action: "open-container"
          });
          set(true);
        }}
      >
        {transitions.map(({ item, key, props }) => (
          <ProjectCard
            key={key}
            project={item}
            style={{
              ...props,
              background: item.css,
              border: open ? "1px solid rgba(0,0,0,.05)" : "none"
            }}
            handleModal={handleModal}
          />
        ))}
        <animated.div className={classes.buttonTitle} style={titleSpring}>
          my work
        </animated.div>
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
    minWidth: "200px",
    maxWidth: "1195px",
    cursor: "pointer",
    margin: "25px",
    "@media (min-width: 700px)": {
      margin: "25px 65px",
      padding: "10px"
    },
    willChange: "width, height"
  },
  buttonTitle: {
    display: "flex",
    color: "white",
    fontWeight: 700,
    justifyContent: "center",
    flexGrow: 1,
    width: "100%",
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    alignItems: "center"
  }
});

Projects.propTypes = propTypes;

export default withStyles(styles)(Projects);
