import React, {useState,useEffect} from "react";
import axios from "../../services/axios-instance";


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
    return <h1>{JSON.stringify(paginas)}</h1>;
}
export default Pages;