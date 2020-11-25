import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 50,
  },
  leftBox: {
    height: 400,
    backgroundColor: "#eee",
    flexBasis: "20%",
    boxShadow: "rgba(0, 0, 0, .3) 0 2px 5px",
    padding: "5px",
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
    height: 400,
    backgroundColor: "#DFF2FA",
    marginLeft: 40,
    padding: 30,
    flexBasis: "50%",
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
  buttonsHolder: {
    marginLeft: 10,
  },
  orangeButton: {
    backgroundColor: "#D8AC4D",
    color: "#fff",
    marginRight: 20,
    "&:hover": {
      backgroundColor: "#E7B955",
    },
  },
  redButton: {
    backgroundColor: "#F0602E",
    color: "#fff",
    marginRight: 20,
    "&:hover": {
      backgroundColor: "#FB7546",
    },
  },
  greenButton: {
    backgroundColor: "#44AF2A",
    color: "#fff",
    marginRight: 20,
    "&:hover": {
      backgroundColor: "#4EC232",
    },
  },
}));
