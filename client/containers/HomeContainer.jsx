import React, { Component } from "react";
import Home from "../components/Home";
import tech from "../lib/technologies";
import project from "../lib/projects";
import lang from "../lib/languages";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.cards = [tech.css, tech.phoenix, tech.ios, tech.node, tech.react];

    this.projects = [
      project.academus,
      project.typer,
      project.jdyn,
      project.window,
      project.new
    ];

    this.languages = [lang.Python, lang.Swift, lang.javaScript, lang.elixir];
  }

  handleThemeChange = () => {
    const { theme, changeTheme } = this.props;

    if (theme === "LIGHT") {
      changeTheme("DARK");
    } else if (theme === "DARK") {
      changeTheme("LIGHT");
    }
  };

  render() {
    console.log(this.props);
    return (
      <Home
        changeTheme={this.handleThemeChange}
        currentTheme={this.props.theme}
        cards={this.cards}
        projects={this.projects}
        languages={this.languages}
      />
    );
  }
}

export default HomeContainer;
