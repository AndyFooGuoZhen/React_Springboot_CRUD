import httpClient from "./http-common";

const getAll = () => {
  return httpClient.get("/employees");
};

const create = (data) => {
  return httpClient.post("/employees", data);
};

export default { getAll, create };
