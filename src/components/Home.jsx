import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechStack from "./TechStack";
import Projects from "./Projects";
// import Languages from "./Languages";
import Button from "./reusable/Button";
import Social from "./Social";
import formatTime from "../util/formatTime";
import Stripes from "./reusable/Stripes";
import useWindowDimensions from "../lib/useWindow";

const propTypes = {
  cards: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  changeTheme: PropTypes.func.isRequired,
  currentTheme: PropTypes.string.isRequired
};

const Home = props => {
  const { classes, cards, projects, changeTheme, currentTheme } = props;

  const { width } = useWindowDimensions();

  return (
    <div className={classes.root}>
      <Stripes />
      <header className={classes.header}>
        <Button id="themeSwitch" width="150px" onClick={changeTheme}>
          {currentTheme === "LIGHT" ? "go dark" : "go blind"}
        </Button>
      </header>
      <div className={classes.stackHero}>
        <h1>My Stack.</h1>
      </div>
      {width < 650 && <Social />} {/* <Languages languages={props.languages} /> */}
      <TechStack cards={cards} />
      <Projects projects={projects} />
      <footer className={classes.footer}>updated {formatTime(1561622622196)}</footer>
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
    zIndex: 0,
    gridTemplateAreas: `
    'header'
    'stackHero'
    'stack'
    'social'
    'projects'
    'footer'
    `,
    overflow: "hidden",
    "@media (min-width: 650px)": {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "min-content 1fr min-content min-content min-content",
      gridTemplateAreas: `
      'header header'
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
    zIndex: 15,
    flexDirection: "column-reverse",
    "@media (min-width: 650px)": {
      textAlign: "right",
      justifyContent: "right"
    },
    "& h1": {
      margin: "auto 0",
      padding: "10px 0 0 0",
      color: theme.white,
      "@media (min-width: 650px)": {
        color: theme.color
      },
      fontWeight: 700
    }
  },
  footer: {
    gridArea: "footer",
    paddingBottom: "10px",
    display: "flex",
    flexShrink: 1,
    fontSize: 16,
    height: "125px",
    justifyContent: "center",
    alignItems: "flex-end",
    color: theme.color
  },
  header: {
    gridArea: "header",
    zIndex: 50
  }
});

Home.propTypes = propTypes;

export default withStyles(styles)(Home);
