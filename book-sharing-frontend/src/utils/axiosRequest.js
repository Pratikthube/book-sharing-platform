import axios from "axios";
import tokenManager from "./tokenManager";

const instance = () =>
  axios.create({
    baseURL: "http://localhost:5004",
    headers: {
      Authorization: `Bearer ${tokenManager.getToken()}`,
    },
  });

export default instance;
