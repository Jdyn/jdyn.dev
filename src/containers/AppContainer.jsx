import React, { useState } from "react";
import { ThemeProvider } from "react-jss";
import themes from "../lib/theme";
import Baseline from "../components/Baseline";
import HomeContainer from "./HomeContainer";

const types = {
  dark: "DARK",
  light: "LIGHT"
};

const App = props => {
  const [type, setType] = useState("dark");

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
          <HomeContainer />
        </Baseline>
      </ThemeProvider>
    </>
  );
};

export default App;
