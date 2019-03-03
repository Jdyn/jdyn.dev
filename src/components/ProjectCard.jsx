import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import { animated } from "react-spring";

const propTypes = {
  classes: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired
};

const ProjectCard = props => {
  const { classes, style } = props;
  return <animated.div style={style} className={classes.container} />;
};

const styles = {
  container: {
    display: "flex",
    position: "relative",
    flexGrow: 1,
    flexBasis: "auto",
    width: "100%",
    maxWidth: "350px",
    height: "350px",
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
