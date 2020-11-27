import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Typography from "@material-ui/core/Typography";


import {useSelector, useDispatch} from 'react-redux';

import useStyles from './styles';

const UserLabel = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const user = useSelector(state => state.user)

    const classes = useStyles();

    const dispatch = useDispatch();

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
                    <Avatar className={classes.avatar} alt={user.name} src={user.diretorio+user.img}/>
                </Button>
                <Menu
                    style={{marginTop: 50}}
                    anchorEl={anchorEl}
                    open={open}
                    keepMounted
                    elevation={0}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <Typography paragraph className={classes.textCenter}>{user.email}</Typography>
                    <MenuItem>Mudar Senha</MenuItem>
                    <MenuItem onClick={logout}>Sair</MenuItem>
                </Menu>
            </Box>
        );
    }else{
        return null;
    }
    
}
export default UserLabel;