import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  project: PropTypes.array.isRequired,
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
    height: "350px",
    marginBottom: "20px",
    borderRadius: 10,
    willChange: "transform, opacity",
    justifyContent: "center",
    border: "1px solid rgba(0,0,0,.05)",
    backgroundImage: `url(${props.project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (min-width: 700px)": {
      margin: "10px"
    }
  })
};

ProjectCard.propTypes = propTypes;

export default withStyles(styles)(ProjectCard);
