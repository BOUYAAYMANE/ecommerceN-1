import axios from "axios";

// create baseURL qui repete dans api 

const baseUrl = axios.create({ baseURL: "http://127.0.0.1:8000" });
export default baseUrl;
