import axios from "axios";
import { useAuthStore } from "../stores";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

// TODO: add interceptors
// Leer el store de auth
//
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  console.log(token);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
