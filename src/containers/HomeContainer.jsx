import React from "react";
import Home from "../components/Home";
import tech from "../lib/technologies";
import project from "../lib/projects";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.introCard = {

    }

    this.cards = [
      tech.docker,
      tech.django,
      tech.css,
      tech.phoenix,
      tech.ios,
      tech.react,
      tech.node,
    ];

    this.projects = [
      project.academus,
      project.typer,
      project.deepBlue,
      project.lemonade,
      project.window
    ];
  }

  render() {
    return <Home cards={this.cards} projects={this.projects} />;
  }
}

export default HomeContainer;
