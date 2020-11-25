import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: "#fff 1px solid",
  },
  toolbar: {
    minHeight: 108,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  textLogo: {
    fontFamily: "Snell Roundhand, cursive",
    fontSize: 45,
    fontWeight: "bold",
    textShadow: "rgba(0,0,0,.3) 0 2px 10px",
    color: theme.palette.logoColor.main,
  },
  rightContent: {
    height: 80,
    display: "flex",
    flexDirection: "row",
  },
  linksHolder: {
    alignSelf: "flex-end",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginRight: 15,
    fontSize: 22,
  },
  menuButton: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
    justifyContent: "start",
  },
  title: {
    alignSelf: "flex-end",
    justifySelf: "flex-end",
  },
}));
