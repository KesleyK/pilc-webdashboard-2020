import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(5, 6, 5),
    "&:focus": {
      outline: "none",
    },
  },
  margin: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
  alert: {
    marginBottom: 20,
  },
  linearProgress: {
    marginTop: 10,
  },
}));
