import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const propTypes = {
  classes: PropTypes.object.isRequired
};
    
const Header = props => {
  return <div>Header</div>;
};

const styles = {};

Header.propTypes = propTypes;

export default withStyles(styles)(Header);
