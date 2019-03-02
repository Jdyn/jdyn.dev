import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Footer = props => {
  const { classes } = props;
  return <div className={classes.root}></div>;
};

const styles = {
  root: {
    position: "relative",
  }
};
Footer.propTypes = propTypes;

export default withStyles(styles)(Footer);
