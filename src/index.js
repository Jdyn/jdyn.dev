import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/AppContainer";
import Baseline from "./components/Baseline";
import ReactGA from "react-ga";

(() => {
  ReactGA.initialize("UA-135635293-1");
  ReactGA.pageview("/");
})();

let theme = localStorage.getItem("theme");
if (!theme) {
  theme = localStorage.setItem("theme", "LIGHT");
}

const app = (
  <>
    <BrowserRouter>
        <App theme={theme} />
    </BrowserRouter>
  </>
);

ReactDOM.render(app, document.getElementById("root"));
