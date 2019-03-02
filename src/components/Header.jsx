import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Header = props => {
  const { classes } = props;
  return <div className={classes.root} />;
};

const styles = {
  root: {
    position: "relative"
  }
};

Header.propTypes = propTypes;

export default withStyles(styles)(Header);
