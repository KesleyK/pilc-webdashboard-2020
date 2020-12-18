import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainBox: {
    ...theme.box.main,
    display: "flex",
    flexDirection: "column",
  },
  breakWord:{
    wordWrap: "normal"
  },
  h1:{
    [theme.breakpoints.down('sm')]:{
      fontSize: '2em',
    },
    margin: "30px auto",
    textAlign: "center"
  },
  h2:{
    fontSize: '1.5em',
    lineHeight: 3
  },
  p:{
    fontSize: '1em',
    lineHeight: 1.5,
    textAlign: 'justify',
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
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 50,
    justifyContent: "center",
  },
  card: {
    maxWidth: '100%',
    width: 300,
    margin: "30px",
  },
  chips:{
    margin: '3px 1px'
  },
  chipsHolder:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }
}));
