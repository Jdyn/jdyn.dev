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
      <div className={classes.stackHero}>
        <h1 style={{ margin: "auto 0", userSelect: "none" }}>My stack.</h1>
      </div>
      <TechStack cards={cards} />
      <Projects projects={projects} />
    </div>
  );
};

const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "min-content 100vh 1fr",
    gridTemplateAreas: `
    'stackHero'
    'stack'
    'projects'
    `,
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
  }
};

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
