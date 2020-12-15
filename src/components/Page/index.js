import React, {useState,useEffect} from "react";
import axios from "../../services/axios-instance";
import { useHistory } from 'react-router-dom';
import useStyles from "./style";

import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Typography from "@material-ui/core/Typography";
import VideoCarousel from "../VideoCarousel";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


const Page = ( props ) => {
    const history = useHistory();
    const [pagina,setPagina] = useState({});
    const [jogos, setJogos] = useState([]);
    const classes = useStyles();

    const getJogos = (tag) => {
        let body = new FormData();
        body.append("class", "Jogos");
        body.append("function", "getJogosByTag");
        body.append("tag", tag);
        axios.post('/', body)
        .then(el => {
            if(el.data.status == 'sucesso'){
                let arr = [...jogos, ...el.data.dados]
                setJogos(
                    arr.filter(function(este, i) {
                        return arr.indexOf(este) === i;
                    })
                );
            }
        })
        .catch(() => {console.log('Erro')})
    }

    const carregarPagina = () => {
        let body = new FormData();
        body.append("class", "Pagina");
        body.append("function", "getPagina");
        body.append("id", props.match.params.id);
        axios.post('/', body)
        .then(el => {
            if(el.data.status == 'sucesso'){
                setPagina(el.data.dados);
                el.data.dados.tags.forEach(tag => {
                    getJogos(tag)
                });
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
            <Box>
                {jogos.map(jogo => 
                        <Card className={classes.card}>
                            <CardActionArea onClick={()=>{history.push('/game/'+jogo.id)}}>
                                <CardMedia 
                                    component="img"
                                    image={jogo.imgTipo}
                                    title={jogo.nome}
                                    alt={jogo.nome}
                                    height="140"
                                />
                                <CardContent>
                                <Typography gutterBottom component="h5">
                                    {jogo.nome}
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    {jogo.tags?
                                        jogo.tags.map(tag => 
                                            <Chip variant="outlined" size="small" label={tag} className={classes.mx5}/>
                                        )
                                        :null
                                    }
                                </CardActions>
                            </CardActionArea>
                        </Card>
                )}
            </Box>
            {Object.keys(pagina).length != 0?<VideoCarousel />:null}
        </Box>
    );
}
export default Page;