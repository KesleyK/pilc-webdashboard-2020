import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
    backgroundColor: "#DFF2FA",
    marginLeft: 40,
    padding: 30,
    flexBasis: "70%",
    boxShadow: "rgba(0, 0, 0, .3) 0 2px 5px",
    borderRadius: 3,
  },
  exerciseContent: {
    backgroundColor: "#fff",
    height: "90%",
    borderRadius: 10,
    padding: 10,
    border: "2px solid #C9E9F6",
    marginBottom: 10,
  },
  rankItem: {
    marginTop: 15,
    paddingLeft: 3,
    color: "#2F7294",
  },
}));
