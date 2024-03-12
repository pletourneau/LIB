import axios from "axios";

const instance = axios.create({
  baseURL: "https://libdata-ua5o.onrender.com",
});

export default instance;
