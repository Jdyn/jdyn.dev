import React from "react";
import Home from "../components/Home";

class HomeContainer extends React.Component {
  render() {
    return <Home {...this.props} />;
  }
}

export default HomeContainer;
