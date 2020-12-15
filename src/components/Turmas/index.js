import React, {useState, useEffect} from "react";
import useStyles from "./styles";
import axios from "../../services/axios-instance";
import { useSelector } from "react-redux";

const Turmas = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const [turmas, setTurmas] = useState([]);

    const carregarTurmas = () =>{
        let body = new FormData();
        body.append("class", "Turma");
        body.append("function", "getTurmasProfessor");
        body.append("professor", user.matricula);
        axios.post('/', body).then(res=>{
            if(res.data.status == 'sucesso'){
                setTurmas(res.data.dados);
                console.log(res.data.dados)
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    useEffect(carregarTurmas,[]);
    return <h1>Turmas {JSON.stringify(turmas)}</h1>;
}
export default Turmas;
