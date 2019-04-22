import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired
};

const ProjectCard = props => {
  const { classes, style, project, handleModal, tabIndex } = props;

  const keyPressed = event => {
    if (event.key === "Enter") {
      if (`${document.activeElement.tabIndex}` === tabIndex) {
        handleModal(project);
      }
    }
  };

  return (
    <animated.div
      style={style}
      tabIndex={tabIndex}
      className={classes.container}
      onClick={() => handleModal(project)}
      onKeyDown={keyPressed}
    />
  );
};

const styles = theme => ({
  container: props => ({
    display: "flex",
    position: "relative",
    flexGrow: 1,
    cursor: "pointer",
    flexBasis: props.project.width,
    overflow: "hidden",
    borderRadius: 10,
    outline: "none",
    willChange: "transform, opacity, height, margin",
    justifyContent: "center",
    boxShadow: `0px 0px 10px -3px ${theme.shadow}`,
    backgroundImage: `url(${props.project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  })
});

ProjectCard.propTypes = propTypes;

export default withStyles(styles)(ProjectCard);
