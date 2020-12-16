import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainBox: {
    ...theme.box.main,
    display: "flex",
    flexDirection: "column",
  },
  containerCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pageBox: {
    width: "80vw",
    paddingTop: 40,
    paddingBottom: 80,
  },
  containerImg: {
    margin: "auto",
    width: "50vw",
    marginTop: 40,
    marginBottom: 60,
  },
  mx5: {
    marginLeft: 5,
    marginRight: 5,
  },
  cardsHolder: {
    display: "flex",
    marginBottom: 80,
    justifyContent: "center",
  },
  card: {
    width: 300,
    margin: "0px 20px",
  },
}));
