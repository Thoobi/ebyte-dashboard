import axios from "axios";
import { API_URL } from "@/constant";

export const apiInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  method: "GET",
});
