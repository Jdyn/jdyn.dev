import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Languages from "./Languages";
import Button from "./reusable/Button";
import Social from "./Social";
import formatTime from "../util/formatTime"

const propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired
};

const Home = props => {
  const { classes, cards, projects, changeTheme, currentTheme } = props;

  return (
    <div className={classes.root}>
      <div className={classes.stackHero}>
        <h1>My Stack.</h1>
        <Button id="themeSwitch" width="150px" onClick={changeTheme}>
          {currentTheme === "LIGHT" ? "go dark" : "go blind"}
        </Button>
      </div>
      <Social />
      <TechStack cards={cards} />
      <Projects projects={projects} />
      <footer className={classes.footer}>updated {formatTime(1556855531299)}</footer>
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    position: "relative",
    transitionDuration: "0.2s",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "min-content min-content 1fr min-content",
    backgroundColor: theme.secondary,
    gridTemplateAreas: `
    'stackHero'
    'stack'
    'social'
    'projects'
    'footer'
    `,
    overflow: "hidden",
    "@media (min-width: 650px)": {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr min-content min-content min-content",
      gridTemplateAreas: `
      'stackHero stack'
      'social stack'
      'projects projects'
      'footer footer'
      `
    }
  },
  stackHero: {
    gridArea: "stackHero",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column-reverse",
    "@media (min-width: 650px)": {
      textAlign: "right",
      justifyContent: "right"
    },
    "& h1": {
      margin: "auto 0",
      userSelect: "none",
      padding: "15px 0 0 0",
      color: theme.color,
      fontWeight: 700
    }
  },
  footer: {
    gridArea: "footer",
    paddingBottom: "10px",
    display: "flex",
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.quartinary,
    color: theme.color
  }
});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
