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
        <h1>My stack.</h1>
      </div>
      <TechStack cards={cards} />
      <Projects projects={projects} />
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "min-content min-content 1fr",
    gridTemplateAreas: `
    'stackHero'
    'stack'
    'projects'
    `,
    "@media (min-width: 750px)": {
      gridTemplateColumns: "1fr 50%",
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
    },
    "& h1": {
      margin: "auto 20px",
      userSelect: "none",
      paddingTop: "20px",
      color: theme.color
    }
  }
});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
