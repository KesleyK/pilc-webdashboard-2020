import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    mainBox:{
        display: "flex",
        flexDirection: "column",
    },
    containerCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    pageBox: {
        width: '80vw'
    },
    containerImg:{
        margin: "auto",
        width: "50vw",
        marginTop: 20,
        marginBottom: 20
    }
}));