import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#237099",
    },
    logoColor: {
      main: "#eee",
    },
  },
  typography: {
    headerTitle: {
      fontFamily: "Snell Roundhand, cursive",
      fontWeight: "bold",
    },
  },
  box:{
    main:{
      padding: 30
    }
  },
});
