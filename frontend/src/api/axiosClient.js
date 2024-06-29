import axios from "axios";
import { readFromLocalStorage } from "./localStorage";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
})

axiosClient.interceptors.request.use(function (config) {
  
  const token = readFromLocalStorage("TOKEN");

  if (token) {
    config.headers.Authorization = 'Bearer ' + token
  }

  return config;

})

export {axiosClient}