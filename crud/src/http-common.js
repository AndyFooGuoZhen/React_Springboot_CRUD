import axios from "axios";

export default axios.create({
  baseURL:
    "https://backend-trial-5-rit-smitra-lab-research.apps.nimbus.las.iastate.edu/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
