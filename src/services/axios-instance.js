import axios from "axios";

export default axios.create({
  baseURL: "https://genetica.opessoa.com.br/api/",
  headers: { "Content-Type": "multipart/form-data" },
});
