import React from "react";
import Home from "../components/Home";
import cards from "../lib/cards";
import projects from "../lib/projects";

class HomeContainer extends React.Component {
  render() {
    return <Home cards={cards} projects={projects} />;
  }
}

export default HomeContainer;
