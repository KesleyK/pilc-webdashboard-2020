import React, {useState,useEffect} from "react";
import axios from "../../services/axios-instance";

import Box from "@material-ui/core/Box";
import VideoCarousel from "../VideoCarousel";



const Pages = () => {
    const [paginas,setPaginas] = useState([]);

    const carregarPaginas = () => {
        let body = new FormData();
        body.append("class", "Pagina");
        body.append("function", "getPaginas");
        axios.post('/', body)
        .then(el => {
            if(el.data.status == 'sucesso'){
                setPaginas(el.data.dados);
            }
        })
        .catch(() => {console.log('erro')})
    }
    useEffect(carregarPaginas,[])
    return (
        <Box>
            <h1>{JSON.stringify(paginas)}</h1>
            <VideoCarousel />
        </Box>
    );
}
export default Pages;