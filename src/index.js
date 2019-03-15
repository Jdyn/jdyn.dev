import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/AppContainer";
import Baseline from "./components/Baseline";
import ReactGA from "react-ga";
import theme from "./lib/theme";

(() => {
  ReactGA.initialize("UA-135635293-1");
  ReactGA.pageview("/");
})();

const app = (
  <>
    <BrowserRouter>
      <ThemeProvider theme={theme.dark}>
        <Baseline>
          <App />
        </Baseline>
      </ThemeProvider>
    </BrowserRouter>
  </>
);

ReactDOM.render(app, document.getElementById("root"));
