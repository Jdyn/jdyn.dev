import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const propTypes = {
  classes: PropTypes.object.isRequired
};

const Home = props => {
  return <div>Home</div>;
};

const styles = {};

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
