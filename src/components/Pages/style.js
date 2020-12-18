import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainBox: {
    ...theme.box.main,
    display: "flex",
    flexDirection: "column",
  },
  pageBox: {
    width: "90vw",
    paddingTop: 40,
    paddingBottom: 80,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  containerCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    maxWidth: '100%',
    width: 300,
    margin: "30px",
  },
  cardActionArea: {
    minHeight: 280,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  chips:{
    margin: '3px 1px'
  },
  chipsHolder: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
}));
