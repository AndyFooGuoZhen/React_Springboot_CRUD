import axios from "axios";

export default axios.create({
  baseURL:
    "https://backend2-andy-guozhen-dev.apps.sandbox.x8i5.p1.openshiftapps.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
