import React, {useState,useEffect} from "react";
import axios from "../../services/axios-instance";

const Page = ( props ) => {
    const [pagina,setPagina] = useState({});

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
    return <h1>{JSON.stringify(pagina)}</h1>;
}
export default Page;