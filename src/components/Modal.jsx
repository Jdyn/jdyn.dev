import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { useSpring, config, animated } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const Modal = props => {
  const { classes, setModal, project } = props;

  const handleClickOutside = event => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      set({ width: "0%", opacity: 0, transform: "scale(0)" });
      document.body.style.overflow = "visible";
    }
  };

  const [{ opacity, ...rest }, set, stop] = useSpring(() => ({
    config: config.stiff,
    to: {
      width: "100%",
      transform: "scale(1)",
      opacity: 1
    },
    from: {
      width: "0%",
      opacity: 0,
      transform: "scale(0)"
    },
    onRest: changes => {
      if (!changes.opacity) {
        setModal(false); // A proper hack...
      }
    }
  }));

  return (
    <animated.div
      id="root"
      style={{ opacity: opacity }}
      className={classes.root}
      onClick={e => handleClickOutside(e)}
    >
      <animated.div className={classes.container} style={{ opacity: opacity, ...rest }}>
        {project.name}
        <div style={{ width: "800px", height: "900px" }} />
      </animated.div>
    </animated.div>
  );
};

const styles = {
  root: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    overflowY: "auto",
    padding: "50px 0"
  },
  container: {
    position: "relative",
    display: "flex",
    maxWidth: "650px",
    borderRadius: 10,
    padding: "15px",
    margin: "auto",
    zIndex: 150,
    boxShadow: "0 50px 200px -20px rgba(50,50,93,.25), 0 30px 120px -30px rgba(0,0,0,.3)",
    backgroundColor: "white"
  }
};

Modal.propTypes = propTypes;

export default withStyles(styles)(Modal);
