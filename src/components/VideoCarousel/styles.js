import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginBottom: 80,
    padding: "0 80px",
  },
  button: {
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
    padding: "5px 7px",
    fontWeight: "bold",
    border: "none",
    boxShadow: "rgba(0,0,0,.4) 0 2px 2px",
    fontSize: 20,
    borderRadius: 1,
    "&:hover": {
      cursor: "pointer",
    },
    "&:focus": {
      outline: "none",
    },
  },
}));
