import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechStack from "./TechStack";
import Projects from "./Projects";

const propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired
};

const Home = props => {
  const { classes, cards, projects } = props;

  return (
    <div className={classes.root}>
      {/* <div className={classes.stripe} /> */}
      <div className={classes.stackHero}>
        <div className={classes.header}>
          <h1 style={{ margin: "10px 0" }}>
            My stack.
          </h1>
        </div>
      </div>
      <div className={classes.stack}>
        <TechStack cards={cards} />
      </div>
      <Projects projects={projects} />
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "min-content 100vh 1fr",
    gridTemplateAreas: `
    'stackHero'
    'stack'
    'projects'`,

    "@media (min-width: 750px)": {
      gridTemplateColumns: "1fr 50vw",
      gridTemplateRows: "min-content min-content",
      gridTemplateAreas: `
      'stackHero stack'
      'projects projects'`
    },

    overscrollBehaviorY: "contain",
    overflow: "hidden",
    position: "relative"
  },
  stack: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    height: "650px",
    width: "100%",
    marginTop: "10%",
    gridArea: "stack"
  },
  stackHero: {
    gridArea: "stackHero",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 750px)": {
      textAlign: "right",
      justifyContent: "right"
    }
  },
  header: {
    margin: "auto 0",
    userSelect: "none"
  },
  stripe: {
    zIndex: -1,
    width: "100vw",
    height: "100vh",
    top: 0,
    boxShadow: "0 0px 20px 0 rgba(50, 50, 73, 0.4)",
    overflow: "hidden",
    WebkitTransform: "skwY(-12deg)",
    transform: "skewY(-20deg)",
    WebkitTransformOrigin: 0,
    transformOrigin: 0,
    backgroundColor: theme.tertiaryWhite,
    position: "absolute"
  }
});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
