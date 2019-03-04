import React, { useState } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated, useSpring, config } from "react-spring";
import Modal from "./Modal";

const propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};

const ProjectCard = props => {
  const { classes, style, handleModal, project } = props;

  const handleOnClick = event => {
    event.preventDefault();
    handleModal(project);
  };

  return (
    <animated.div style={style} className={classes.container} onClick={e => handleOnClick(e)} />
  );
};

const styles = {
  container: {
    display: "flex",
    position: "relative",
    flexGrow: 1,
    flexBasis: "auto",
    width: "100%",
    maxWidth: "350px",
    height: "400px",
    margin: "0 0 20px 0",
    "@media (min-width: 700px)": {
      margin: "10px"
    },
    borderRadius: 10,
    willChange: "transform, opacity"
  }
};

ProjectCard.propTypes = propTypes;

export default withStyles(styles)(ProjectCard);
