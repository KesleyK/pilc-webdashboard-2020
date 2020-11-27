import axios from "axios";

export default axios.create({
  baseURL: "http://genetica.opessoa.com.br/api/",
  headers: { "Content-Type": "multipart/form-data" },
});
