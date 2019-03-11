import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/AppContainer";
import Baseline from "./components/Baseline";
import ReactGA from "react-ga";

const theme = {
  light: {
    color: "#212121",
    primary: "#fafafa",
    secondary: "#f6f9fc",
    tertiary: "#eef2f7",
    quartinary: "#e6ebf1",
    primaryGrey: "#d7dadc",
    cardHeader: "#eef2f7",
    project: "#e6ebf1",
    modal: "#fafafa",
    divider: "rgba(0, 0, 0, 0.05)",
    shadow: "rgba(50, 50, 73, 0.4)"
  },
  dark: {
    color: "#fafafa",
    primary: "#323232",
    secondary: "#212121",
    tertiary: "#181818",
    quartinary: "#1A1A1B",
    primaryGrey: "#616161",
    cardHeader: "#212121",
    project: "#212121",
    modal: "#212121",
    divider: "rgba(0, 0, 0, 0.05)",
    shadow: "rgba(0, 0, 0, 0.3)"
  }
};

(() => {
  ReactGA.initialize("UA-135635293-1");
  ReactGA.pageview("/");
})();

const app = (
  <>
    <BrowserRouter>
      <ThemeProvider theme={theme.light}>
        <Baseline>
          <App />
        </Baseline>
      </ThemeProvider>
    </BrowserRouter>
  </>
);

ReactDOM.render(app, document.getElementById("root"));
