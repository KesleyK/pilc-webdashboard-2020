import React, {useState} from "react";
import useStyles from "./styles";
import axios from "../../services/axios-instance";
import { useSelector } from "react-redux";

const Turmas = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.user);

    return <h1>Turmas</h1>;
}
export default Turmas;
