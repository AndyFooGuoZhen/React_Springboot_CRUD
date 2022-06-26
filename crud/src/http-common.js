import axios from "axios";

export default axios.create({
  baseURL: "http://172.30.187.211:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
