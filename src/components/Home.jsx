import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechStack from "./TechStack";

const propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired
};

const Home = props => {
  const { classes, cards } = props;
  return (
    <div className={classes.root}>
      <div className={classes.stack}>
        <TechStack cards={cards} />
      </div>
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
    position: "relative"
  },
  stack: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    "@media (min-width: 650px)": {
      width: "100%"
    }
  }
});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
