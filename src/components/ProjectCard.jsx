import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired
};

const ProjectCard = props => {
  const { classes, style, handleModal, project } = props;

  return (
    <animated.div
      style={style}
      className={classes.container}
      onClick={() => handleModal(project)}
    />
  );
};

const styles = {
  container: props => ({
    display: "flex",
    position: "relative",
    flexGrow: 1,
    flexBasis: props.project.width,
    overflow: "hidden",
    borderRadius: 10,
    willChange: "transform, opacity",
    justifyContent: "center",
    backgroundImage: `url(${props.project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  })
};

ProjectCard.propTypes = propTypes;

export default withStyles(styles)(ProjectCard);
