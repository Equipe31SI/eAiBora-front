import axios from "axios";

const api = axios.create({
  baseURL: "https://iae-bora.herokuapp.com/",
});

export default api;