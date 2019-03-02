import React from "react";
import Home from "../components/Home";
import cards from "../lib/cards";

class HomeContainer extends React.Component {
  render() {
    return <Home cards={cards} />;
  }
}

export default HomeContainer;
