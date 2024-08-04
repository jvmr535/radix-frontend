import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: Cookies.get("jwt") ? `Bearer ${Cookies.get("jwt")}` : null,
  },
});

export default api;
