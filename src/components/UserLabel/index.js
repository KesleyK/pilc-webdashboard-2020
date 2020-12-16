import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import Popover from '@material-ui/core/Popover';

import { MudarSenha, AdicionarAluno, AdicionarProfessor } from './Popups';

import {useSelector, useDispatch} from 'react-redux';

import useStyles from './styles';

const UserLabel = () => {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMudarSenha, setOpenMudarSenha] = useState(false);
    const [openAdicionarAluno, setOpenAdicionarAluno] = useState(false);
    const [openAdicionarProfessor, setOpenAdicionarProfessor] = useState(false);
    
    const open = Boolean(anchorEl);
    const id = open ? 'popover' : undefined;
    
    const user = useSelector(state => state.user)

    const classes = useStyles();

    const dispatch = useDispatch();

    const ClosePopups = () => {
        setOpenMudarSenha(false)
        setOpenAdicionarAluno(false)
        setOpenAdicionarProfessor(false)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout = () => {
        handleClose();
        dispatch({type: 'Logout'});
    };
    if(user.token){
        return (
            <Box component="span">
                <Button
                    onClick={handleClick}
                >
                    <Avatar className={classes.avatar} alt={user.name} src={user.diretorio+'/'+user.img}/>
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <Typography paragraph className={classes.textCenter}>{user.email}</Typography>
                    <MenuItem onClick={()=>{setOpenMudarSenha(!openMudarSenha)}}>Mudar Senha</MenuItem>
                    <MudarSenha open={openMudarSenha} close={ClosePopups} token={user.token}/>
                    {user.conta === 'professor'? 
                    <>
                        <AdicionarAluno open={openAdicionarAluno} close={ClosePopups} token={user.token}/>
                        <AdicionarProfessor open={openAdicionarProfessor} close={ClosePopups} token={user.token}/>
                        <MenuItem onClick={()=>{setOpenAdicionarAluno(!openAdicionarAluno)}}>Adicionar Aluno</MenuItem>
                        <MenuItem onClick={()=>{setOpenAdicionarProfessor(!openAdicionarProfessor)}}>Adicionar Professor</MenuItem>
                        <MenuItem onClick={()=>{console.log(history.push('/turma'))}}>Minhas Turma</MenuItem>
                    </>
                    :null}
                    <MenuItem onClick={logout}>Sair</MenuItem>
                </Popover>
            </Box>
        );
    }else{
        return null;
    }
    
}
export default UserLabel;