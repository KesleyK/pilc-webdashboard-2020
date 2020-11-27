import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";


import {useSelector} from 'react-redux';

const UserLabel = () => {
    //Ainda falta terminar
    const user = useSelector(state => state.user)
    if(user.token){
        return (
            <Box>
                <Avatar alt={user.name} src={user.diretorio+user.img}/>
                <Typography paragraph>
                    {user.nome}
                </Typography>
            </Box>
        );
    }else{
        return null;
    }
    
}
export default UserLabel;