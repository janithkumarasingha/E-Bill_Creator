import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.110.133:8080",
});

export default instance;
