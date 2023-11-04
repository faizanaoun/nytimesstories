import axios from "axios";

export const BASE_URL = "http://localhost:8000";
const API_VERSION = "/api/v1/" 
export const API_URL = BASE_URL+API_VERSION;


export const SERVER_AXIOS = axios.create({
  baseURL: API_URL,
});

