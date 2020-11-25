import React, { Component } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Appbar from "./components/Appbar";
import GeneticsContent from "./components/GeneticsContent";
import Exercises from "./components/Exercises";

import theme from "./theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Appbar />
        <GeneticsContent />
        <Exercises />
      </ThemeProvider>
    );
  }
}

export default App;
