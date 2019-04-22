import React, { Component } from "react";
import Home from "../components/Home";
import tech from "../lib/technologies";
import project from "../lib/projects";
import lang from "../lib/languages";

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: localStorage.getItem("theme")
    };

    this.cards = [
      tech.docker,
      tech.django,
      tech.css,
      tech.phoenix,
      tech.ios,
      tech.node,
      tech.react
    ];

    this.projects = [
      project.academus,
      project.typer,
      project.jdyn,
      project.lemonade,
      project.window
    ];

    this.languages = [lang.Python, lang.Swift, lang.javaScript, lang.elixir];
  }

  handleThemeChange = () => {
    if (this.state.currentTheme === "LIGHT") {
      this.props.changeTheme("DARK");
      this.setState({ currentTheme: "DARK" });
    } else if (this.state.currentTheme === "DARK") {
      this.props.changeTheme("LIGHT");
      this.setState({ currentTheme: "LIGHT" });
    }
  };

  render() {
    return (
      <Home
        changeTheme={this.handleThemeChange}
        currentTheme={this.state.currentTheme}
        cards={this.cards}
        projects={this.projects}
        languages={this.languages}
      />
    );
  }
}

export default HomeContainer;
