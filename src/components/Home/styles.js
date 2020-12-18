import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    ...theme.box.main,
    margin: "5em 7em",
    padding: "3em 5em",
    marginBottom: 30,
    backgroundColor: "#eee",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#494949",
    marginBottom: 10,
  },
  paragraph: {
    textAlign: "justify",
  },
  link: {
    color: "#1C82B4",
  },
  cardMedia:{
    maxWidth: '70%',
    margin:'20px auto'
  },
  txACenter:{
    textAlign: "center"
  }
}));
