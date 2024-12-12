import axios from "axios";
export const baseURL = "http://64.227.144.6:8080";
export const httpClient = axios.create({
  baseURL: baseURL,
});