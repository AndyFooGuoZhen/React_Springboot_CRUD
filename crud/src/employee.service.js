import httpClient from "./http-common";

const getAll = () => {
  return httpClient.get("/employees");
};

const create = (data) => {
  return httpClient.post("/employees", data);
};

const getById = (id) => {
  return httpClient.get(`/employees/${id}`);
};

const update = (data) => {
  return httpClient.put("/employees", data);
};

const deleteById = (id) => {
  return httpClient.delete(`/employees/${id}`);
};

export default { getAll, create, getById, update, deleteById };
