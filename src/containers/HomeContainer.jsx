import React from "react";
import Home from "../components/Home";
import tech from "../lib/technologies";
import project from "../lib/projects";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.cards = [
      tech.docker,
      tech.django,
      tech.html,
      tech.ios,
      tech.phoenix,
      tech.node,
      tech.react
    ];

    this.projects = [
      project.academus,
      project.typer,
      project.deepBlue,
      project.ripeMalinka,
      project.perfectWhite
    ];
  }

  render() {
    return <Home cards={this.cards} projects={this.projects} />;
  }
}

export default HomeContainer;
