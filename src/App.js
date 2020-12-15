import React, { Component } from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Login from "./components/Login";
import Routes from "./routes";

import theme from "./theme";

import { Provider } from "react-redux";

import store from "./services/store";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
