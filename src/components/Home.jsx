import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Languages from "./Languages";
import Social from "./Social";

const propTypes = {
  classes: PropTypes.object.isRequired,
  cards: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired
};

const Home = props => {
  const { classes, cards, projects, languages, changeTheme, theme } = props;
  const [currentTheme, set] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    const newTheme = localStorage.getItem("theme");
    set(newTheme);
  }, [theme]);

  const handleSwitch = () => {
    if (currentTheme === "LIGHT") {
      changeTheme("DARK");
    } else if (currentTheme === "DARK") {
      changeTheme("LIGHT");
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.stackHero}>
        <h1>My Stack.</h1>
        <button className={classes.themeButton} onClick={() => handleSwitch()}>
          {currentTheme === "LIGHT" ? "go dark" : "go blind"}
        </button>
      </div>
      <Social />
      <TechStack cards={cards} />
      {/* <Languages languages={languages} /> */}
      <Projects projects={projects} />
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    position: "relative",
    transitionDuration: "0.2s",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "min-content min-content 1fr",
    backgroundColor: theme.secondary,
    gridTemplateAreas: `
    'stackHero'
    'stack'
    'social'
    'projects'
    `,
    overflow: "hidden",
    "@media (min-width: 650px)": {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr min-content min-content",
      gridTemplateAreas: `
      'stackHero stack'
      'social stack'
      'projects projects'`
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
  themeButton: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    outline: "none",
    border: "none",
    backgroundColor: theme.accent,
    borderRadius: 10,
    fontSize: "15px",
    height: "50px",
    lineHeight: "40px",
    padding: "0 15px",
    margin: "20px auto",
    "@media (min-width: 650px)": {
      margin: "20px auto 20px 20px"
    },
    fontWeight: 700,
    cursor: "pointer",
    width: "150px",
    zIndex: 50,
    boxShadow:
      "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
    textTransform: "uppercase",
    letterSpacing: "0.125em",
    transitionDuration: ".2s",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow:
        "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 35px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)"
    },
    "&:active": {
      transform: "translateY(3px)"
    }
  }
});

Home.propTypes = propTypes;

export default withStyles(styles, { injectTheme: true })(Home);
