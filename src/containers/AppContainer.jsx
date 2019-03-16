import React, { useState } from "react";
import Header from "../components/Header";
import Router from "../components/Router";
import Footer from "../components/Footer";
import { ThemeProvider } from "react-jss";
import themes from "../lib/theme";
import Baseline from "../components/Baseline";

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
        return themes.light;
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
          <Header />
          <Router changeTheme={changeTheme} />
          <Footer />
        </Baseline>
      </ThemeProvider>
    </>
  );
};

export default App;
