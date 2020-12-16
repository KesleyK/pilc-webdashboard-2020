import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainBox: {
    ...theme.box.main,
    display: "flex",
    flexDirection: "column",
  },
  pageBox: {
    width: "80vw",
    paddingTop: 40,
    paddingBottom: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    width: 300,
    margin: "0px 30px",
  },
  cardActionArea: {
    minHeight: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  chipsHolder: {
    width: "100%",
  },
}));
