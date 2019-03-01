import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Footer = props => {
  return <div>Footer</div>;
};

const styles = {};

Footer.propTypes = propTypes;

export default withStyles(styles)(Footer);
