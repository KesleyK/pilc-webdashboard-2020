import React, {useEffect, useState} from "react";

import Box from "@material-ui/core/Box";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import LineChart from './LineChart';

import useStyles from "./styles";
import axios from "../../services/axios-instance";
import { useSelector } from "react-redux";

const Turma = (props) => {
    const turma = props.match.params.turma
    const user = useSelector((state) => state.user);
    const [arrRelatorio, setArrRelatorio] = useState([])
    const classes = useStyles();

    const carregarRelatorio = () => {
        let body = new FormData();
        body.append("class", "Turma");
        body.append("function", "getRelatorioTurma");
        body.append("token", user.token);
        body.append("turma", turma);

        axios.post('/',body).then(res=>{
            setArrRelatorio(res.data.dados)
        }).catch(err=>{
            console.log('Erro')
        })
    }
    useEffect(carregarRelatorio,[turma,user.token])
    return(
        <Box className={classes.main}>
            <Breadcrumbs separator="›">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Link color="inherit" href="/turma">
                    Minhas Turmas
                </Link>
                <Link color="textPrimary" aria-current="page">
                    Turma {turma}
                </Link>
            </Breadcrumbs>
            <Box>
                <LineChart relatorio={arrRelatorio}/>
            </Box>
        </Box>
    );
}
export default Turma;
