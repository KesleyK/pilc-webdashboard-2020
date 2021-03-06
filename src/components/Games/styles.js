import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    ...theme.box.main,
  },
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 25,
  },
  leftBox: {
    height: 600,
    backgroundColor: "#eee",
    flexBasis: "22%",
    boxShadow: "rgba(0, 0, 0, .3) 0 2px 5px",
    padding: 10,
    borderRadius: 3,
  },
  trophyTitleHolder: {
    display: "flex",
    alignItems: "flex-end",
  },
  trophyIcon: {
    color: "orange",
    marginRight: 5,
  },
  trophyText: {
    fontWeight: "bold",
    color: "#494949",
    fontSize: 14,
  },
  rightBox: {
    height: 600,
    backgroundColor: "#ccc",
    marginLeft: 40,
    flexBasis: "70%",
    boxShadow: "rgba(0, 0, 0, .3) 0 2px 5px",
    borderRadius: 10,
  },
  exerciseContent: {
    backgroundColor: "#fff",
    height: "85%",
    borderRadius: 10,
    padding: 20,
    border: "2px solid #fff",
    marginBottom: 10,
    boxShadow: "inset rgba(0, 0, 0, .3) 0 2px 5px",
  },
  rankItem: {
    marginTop: 15,
    paddingLeft: 3,
    color: "#2F7294",
  },
  rightBottomBox: {
    margin: 20,
  },
  gameTitle: {
    textAlign: "center",
    padding: "3px 0",
  },
}));
