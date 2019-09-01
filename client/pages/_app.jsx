import React from "react";
import App from "next/app";
import Baseline from "../components/shared/Baseline";
import theme from "../lib/theme";
import { ThemeProvider } from "react-jss";
import SEO from "../components/shared/SEO";
import ReactGA from "react-ga";

const type = {
  dark: "DARK",
  light: "LIGHT"
};

(() => {
  ReactGA.initialize("UA-135635293-1");
  ReactGA.pageview("/");
})();

class Application extends App {
  constructor(props) {
    super(props);
    this.state = {
      theme: "DARK"
    };
  }

  componentDidMount() {
    const style = document.getElementById("server-side-styles");
    if (style) {
      style.parentNode.removeChild(style);
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      this.setState({ theme: storedTheme });
    }
  }

  provideTheme = stateTheme => {
    switch (stateTheme) {
      case type.dark:
        return theme.dark;
      case type.light:
        return theme.light;
      default:
        return theme.dark;
    }
  };

  changeTheme = type => {
    localStorage.setItem("theme", type);
    this.setState({ theme: type });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { theme } = this.state;

    return (
      <ThemeProvider theme={this.provideTheme(theme)}>
        <Baseline>
          <SEO />
          <Component {...pageProps} {...this.state} changeTheme={this.changeTheme} />
        </Baseline>
      </ThemeProvider>
    );
  }
}

export default Application;
