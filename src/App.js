import React, { Component } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Appbar from "./components/Appbar";
import GeneticsContent from "./components/GeneticsContent";
import Exercises from "./components/Exercises";
import Login from "./components/Login";
import Ranking from "./components/Ranking";
import VideoCarousel from "./components/VideoCarousel";

import theme from "./theme";

import { Provider } from "react-redux";

import store from "./services/store";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Login />
          <Appbar />
          <GeneticsContent />
          <VideoCarousel />
          <Exercises />
          <Ranking />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
