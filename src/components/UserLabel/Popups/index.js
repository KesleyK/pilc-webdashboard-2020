import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Alert from "@material-ui/lab/Alert";


import useStyles from "./styles";

import axios from "../../../services/axios-instance";


export const MudarSenha = ({open, close, token}) => {
    const classes = useStyles();
    const [senha, setSenha] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const errorAlert = errorMessage ? (
        <Alert severity="error" className={classes.alert}>
          {errorMessage}
        </Alert>
      ) : null;
    
    const mudarSenha = () => {
        let body = new FormData();
        body.append("class", "Auth");
        body.append("function", "newPass");
        body.append("token", token);
        body.append("senha", senha);
        if(senha.length > 3){
            axios.post("/",body).then(res =>{
                setErrorMessage("")
                close()
            }).catch(err =>{
                setErrorMessage(err)
            })
        }else{
            setErrorMessage('Senha muito curta')
        }
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box className={classes.paper}>
                    <IconButton className={classes.iconClose} aria-label="close" color="inherit" size="small" onClick={close}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    {errorAlert}
                    <TextField
                        className={classes.margin}
                        label="Senha"
                        type="password"
                        onChange={pass=>{setSenha(pass.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={mudarSenha}
                    >
                        Mudar Senha
                    </Button>
                </Box>
            </Fade>

        </Modal>
    );
    
}
export const AdicionarAluno = ({open, close, token}) => {
    const classes = useStyles();
    const [errorMessage, setErrorMessage] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [matricula, setMatricula] = useState('')

    const errorAlert = errorMessage ? (
        <Alert severity="error" className={classes.alert}>
          {errorMessage}
        </Alert>
      ) : null;

    const addAluno = () => {
        let body = new FormData();
        body.append("class", "Professor");
        body.append("function", "addAluno");
        body.append("token", token);
        body.append("matricula", matricula);
        body.append("nome", nome);
        body.append("email", email);
        if(matricula.length > 2 && nome.length > 3 && email.length > 3){
            axios.post("/",body).then(res =>{
                setErrorMessage("")
                close()
            }).catch(err =>{
                setErrorMessage(err.response.data.dados)
            })
        }else{
            setErrorMessage('Campos muito curtos')
        }
    }
    
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box className={classes.paper}>
                    <IconButton className={classes.iconClose} aria-label="close" color="inherit" size="small" onClick={close}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    {errorAlert}
                    <TextField
                        className={classes.margin}
                        label="Email"
                        type="email"
                        onChange={e=>{setEmail(e.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        label="Nome"
                        type="text"
                        onChange={e=>{setNome(e.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        label="Matricula"
                        type="number"
                        onChange={e=>{setMatricula(e.target.value)}}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={addAluno}
                    >
                        Adicionar Aluno
                    </Button>
                </Box>
            </Fade>

        </Modal>
    );
}
export const AdicionarProfessor = ({open, close, token}) => {
    const classes = useStyles();
    const [errorMessage, setErrorMessage] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [matricula, setMatricula] = useState('')

    const errorAlert = errorMessage ? (
        <Alert severity="error" className={classes.alert}>
          {errorMessage}
        </Alert>
      ) : null;

    const addProfessor = () => {
        let body = new FormData();
        body.append("class", "Professor");
        body.append("function", "addProfessor");
        body.append("token", token);
        body.append("matricula", matricula);
        body.append("nome", nome);
        body.append("email", email);
        if(matricula.length > 2 && nome.length > 3 && email.length > 3){
            axios.post("/",body).then(res =>{
                setErrorMessage("")
                close()
            }).catch(err =>{
                setErrorMessage(err.response.data.dados)
            })
        }else{
            setErrorMessage('Campos muito curtos')
        }
    }
    
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box className={classes.paper}>
                    <IconButton className={classes.iconClose} aria-label="close" color="inherit" size="small" onClick={close}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    {errorAlert}
                    <TextField
                        className={classes.margin}
                        label="Email"
                        type="email"
                        onChange={e=>{setEmail(e.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        label="Nome"
                        type="text"
                        onChange={e=>{setNome(e.target.value)}}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        className={classes.margin}
                        label="Matricula"
                        type="number"
                        onChange={e=>{setMatricula(e.target.value)}}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={addProfessor}
                    >
                        Adicionar Professor
                    </Button>
                </Box>
            </Fade>

        </Modal>
    );
}
export const AdicionarTurma = ({open, close, token}) => {
    
}
export const AdicionarAlunoTurma = ({open, close, token}) => {
    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box className={classes.paper}>
                    <IconButton className={classes.iconClose} aria-label="close" color="inherit" size="small" onClick={close}>
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    <TextField
                        className={classes.margin}
                        label="Senha"
                        type="password"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Mudar Senha
                    </Button>
                </Box>
            </Fade>

        </Modal>
    );
}
