import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Languages from "./Languages";

const propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired
};

const Home = props => {
  const { classes, cards, projects, languages } = props;

  return (
    <div className={classes.root}>
      <div className={classes.stackHero}>
        <h1>My Stack.</h1>
      </div>
      <TechStack cards={cards} />
      <Languages languages={languages} />
      <Projects projects={projects} />
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    position: "relative",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "min-content min-content 1fr",
    gridTemplateAreas: `
    'stackHero'
    'stack'
    'languages'
    'projects'
    `,
    overflow: "hidden",
    "@media (min-width: 750px)": {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "min-content min-content",
      gridTemplateAreas: `
      'stackHero stack'
      'languages languages'
      'projects projects'`
    }
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
      padding: "50px 0",
      color: theme.color,
      // textTransform: "uppercase",
      // letterSpacing: "0.125em",
      // fontSize: "32px",
      // fontWeight: 700
    }
  }
});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
