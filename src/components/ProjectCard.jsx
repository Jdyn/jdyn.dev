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
  const { classes, style, handleModal, project, tabIndex } = props;

  return (
    <animated.div
      style={style}
      tabIndex={tabIndex}
      className={classes.container}
      onClick={() => handleModal(project)}
      onKeyDown={e => {
        if (e.key === "Enter") {
          if (`${document.activeElement.tabIndex}` === tabIndex) {
            handleModal(project);
          }
        }
      }}
    />
  );
};

const styles = {
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
    // border: "1px solid rgb(0,0,0,.05)",
    boxShadow: "0px 0px 10px rgb(30,30,70,.4)",
    backgroundImage: `url(${props.project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  })
};

ProjectCard.propTypes = propTypes;

export default withStyles(styles)(ProjectCard);
