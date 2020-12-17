import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    main:{
      ...theme.box.main
    },
    paper: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: 20,
        minWidth: 300,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5, 6, 5),
        "&:focus": {
          outline: "none",
        },
      },
      margin: {
        marginBottom: 10,
      },
      button: {
        marginTop: 10,
      },
      alert: {
        marginBottom: 20,
      },
      boxForms:{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around"
      },
      boxContainer:{
        marginTop: 40,
        marginBottom: 40
      },
      list:{
        display: "flex",
        flexDirection: "column",
        boxShadow: theme.shadows[2],
        width: "fit-content",
        minWidth: '50%',
        margin: "auto !important",
        padding: 10
      },
      listItem:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      },
      textAlignCenter:{
        textAlign: "center",
      }
}))