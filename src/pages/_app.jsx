import React from "react";
import App, { Container } from "next/app";
import Baseline from "../components/Baseline";

class Application extends App {
  componentDidMount() {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Baseline>
          <Component {...pageProps} />
        </Baseline>
      </Container>
    );
  }
}

export default Application;
