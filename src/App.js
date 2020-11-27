import React, { Component } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Appbar from "./components/Appbar";
import GeneticsContent from "./components/GeneticsContent";
import Exercises from "./components/Exercises";
import Login from "./components/Login";
import Ranking from "./components/Ranking";

import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Login />
        <Appbar />
        <GeneticsContent />
        <Exercises />
        <Ranking />
      </ThemeProvider>
    );
  }
}

export default App;
