import axios from "axios";
export default axios.create({
  baseURL: "http://127.0.0.1:5000",
  withCredentials: true,
  credentials: "include",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 30000,
});
