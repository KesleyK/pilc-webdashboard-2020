import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    mainBox:{
        display: "flex",
        flexDirection: "column",
    },
    pageBox: {
        width: '80vw',
        paddingTop: 40,
        paddingBottom: 80
    },
    containerCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    card: {
        width: 300,
    }
}));