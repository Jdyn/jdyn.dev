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
        <div className={classes.header}>
          <h1 style={{ margin: "10px 0" }}>
            Hey I'm Jaden
            <br /> here's my stack.
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
    gridArea: "stack"
  },
  stackHero: {
    gridArea: "stackHero",
    textAlign: "center",
    justifyContent: "middle",
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 750px)": {
      textAlign: "right",
      justifyContent: "right"
    }
  },
  header: {
    margin: "auto 0"
  },
  projects: {

  }
});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
