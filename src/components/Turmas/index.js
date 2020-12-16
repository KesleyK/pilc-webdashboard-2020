import React, {useState, useEffect} from "react";
import useStyles from "./styles";
import axios from "../../services/axios-instance";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Turmas = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.user);
    const [turmas, setTurmas] = useState([]);
    const [turmaAdd, setTurmaAdd] = useState('');
    const [alunoAdd, setAlunoAdd] = useState('');
    const [turmaAddAluno, setTurmaAddAluno] = useState('');
    const [errorMessageAddAluno, setErrorMessageAddAluno] = useState(['','error']);
    const [errorMessageAddTurma, setErrorMessageAddTurma] = useState(['','error']);


    const errorMessageAddTurmaAlert = errorMessageAddTurma[0] ? (
        <Alert severity={errorMessageAddTurma[1]} className={classes.alert}>
            {errorMessageAddTurma[0]}
        </Alert>
    ) : null;
    const errorMessageAddAlunoAlert = errorMessageAddAluno[0] ? (
        <Alert severity={errorMessageAddAluno[1]} className={classes.alert}>
            {errorMessageAddAluno[0]}
        </Alert>
    ) : null;

    const addTurma = () => {
        if(turmaAdd.length >= 1){
            let body = new FormData();
            body.append("class", "Professor");
            body.append("function", "addTurma");
            body.append("token", user.token);
            body.append("turma", turmaAdd);
            axios.post('/', body).then(res=>{
                setErrorMessageAddTurma(['Turma adicionada','success'])
                carregarTurmas()
            }).catch(err =>{
                setErrorMessageAddTurma(['Turma já existente','error'])
            })
        }else{
            setErrorMessageAddTurma(['Informe uma turma.','error'])
        }
    }

    const addAlunoTurma = () => {
        if(alunoAdd.length >= 1 && turmaAddAluno.length >= 1){
            let body = new FormData();
            body.append("class", "Professor");
            body.append("function", "addAlunoTurma");
            body.append("token", user.token);
            body.append("turma", turmaAddAluno);
            body.append("aluno", alunoAdd);
            axios.post('/', body).then(res=>{
                setErrorMessageAddAluno(['Aluno adicionado','success'])
                carregarTurmas()
            }).catch(err =>{
                setErrorMessageAddAluno([err.response.data.dados,'error'])
            })
        }else{
            setErrorMessageAddAluno(['Informe uma Aluno e Turma.','error'])
        }
    }

    const carregarTurmas = () =>{
        let body = new FormData();
        body.append("class", "Turma");
        body.append("function", "getTurmasProfessor");
        body.append("professor", user.matricula);
        axios.post('/', body).then(res=>{
            if(res.data.status === 'sucesso'){
                setTurmas(res.data.dados);
            }
        }).catch(err =>{
            console.log(err)
        })
    }

    useEffect(carregarTurmas,[user.matricula]);
    return (
        <Box>
            <Box className={classes.boxForms}>
                <Box className={classes.paper}>
                    {errorMessageAddTurmaAlert}
                    <TextField 
                        className={classes.margin}
                        label="Turma"
                        type="text"
                        onChange={e=>{setTurmaAdd(e.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <SchoolIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={addTurma}
                    >
                        Criar Turma
                    </Button>
                </Box>

                <Box className={classes.paper}>
                    {errorMessageAddAlunoAlert}
                    <TextField 
                        className={classes.margin}
                        label="Turma"
                        type="text"
                        onChange={e=>{setTurmaAddAluno(e.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <SchoolIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField 
                        className={classes.margin}
                        label="Matricula do Aluno"
                        type="number"
                        onChange={e=>{setAlunoAdd(e.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={addAlunoTurma}
                    >
                        Adicionar Aluno
                    </Button>
                </Box>
            </Box>
            <Box>
                <List>
                    {turmas.map(turma=>(
                        <ListItem key={turma.id}>
                            <ListItemText>{turma?.id}</ListItemText>
                            <ListItemText>Professor: {turma?.nome} - {turma?.email}</ListItemText>
                            <List>
                                {turma.alunos.map(aluno=>(
                                    <ListItem key={aluno?.matricula}>
                                        <ListItemText>{aluno?.nome} | {aluno?.matricula}</ListItemText>
                                    </ListItem>
                                ))}
                            </List>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}
export default Turmas;
