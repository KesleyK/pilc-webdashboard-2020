import React, {useState,useEffect} from "react";
import axios from "../../services/axios-instance";
import useStyles from "./style";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import VideoCarousel from "../VideoCarousel";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


const Page = ( props ) => {
    const [pagina,setPagina] = useState({});
    const classes = useStyles();

    const carregarPagina = () => {
        let body = new FormData();
        body.append("class", "Pagina");
        body.append("function", "getPagina");
        body.append("id", props.match.params.id);
        axios.post('/', body)
        .then(el => {
            if(el.data.status == 'sucesso'){
                setPagina(el.data.dados);
            }
        })
        .catch(() => {console.log('erro')})
    }
    useEffect(carregarPagina,[])
    return (
        <Box className={classes.mainBox}>
            <Breadcrumbs separator="›">
                <Link color="inherit" href="/">
                    Home
                </Link>
                <Link color="inherit" href="/page">
                    Páginas
                </Link>
                <Link color="textPrimary" aria-current="page">
                    {pagina.titulo?pagina.titulo:''}
                </Link>
            </Breadcrumbs>
            <Box className={classes.containerCenter}>
                <Box className={classes.pageBox}>
                    <Typography variant="h1">{pagina.titulo}</Typography>
                    {pagina.tags?
                        pagina.tags.map(tag => {
                            return (<Chip variant="outlined" size="small" label={tag} className={classes.mx5}/>)
                        })
                        :null
                    }
                    <Box className={classes.containerImg}>
                        <CardMedia image={pagina.img} component="img"/>
                    </Box>
                    {pagina.body?
                    pagina.body.split('\n').map(paragraph => <Typography paragraph>{paragraph}</Typography>)
                    :null
                    }
                    
                </Box>
            </Box>
            {Object.keys(pagina).length != 0?<VideoCarousel />:null}
        </Box>
    );
}
export default Page;