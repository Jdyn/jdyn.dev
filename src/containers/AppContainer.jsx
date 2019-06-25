import React, { useState } from "react";
import Router from "../components/Router";
import { ThemeProvider } from "react-jss";
import themes from "../lib/theme";
import Baseline from "../components/reusable/Baseline";

const types = {
  dark: "DARK",
  light: "LIGHT"
};

const App = props => {
  const { theme } = props;
  const [type, setType] = useState(theme);

  const provideTheme = () => {
    switch (type) {
      case types.dark:
        return themes.dark;
      case types.light:
        return themes.light;
      default:
        return themes.dark;
    }
  };

  const changeTheme = type => {
    localStorage.setItem("theme", type);
    setType(type);
  };

  return (
    <>
      <ThemeProvider theme={provideTheme()}>
        <Baseline>
          <Router changeTheme={changeTheme} />
        </Baseline>
      </ThemeProvider>
    </>
  );
};

export default App;
