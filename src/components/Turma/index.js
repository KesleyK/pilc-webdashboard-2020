import React, {useState} from "react";
import useStyles from "./styles";
import axios from "../../services/axios-instance";
import { useSelector } from "react-redux";

const Turma = (props) => {
    const turma = props.match.params.turma
    const user = useSelector((state) => state.user);
    const classes = useStyles();

    return <h1>Turma {turma}.</h1>;
}
export default Turma;
