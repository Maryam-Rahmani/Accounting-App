import http from "./http-common";

const getAll = () => {
  return http.get("/currency/");
};

const get = (id) => {
  return http.get(`/currency/${id}`);
};

const create = (data) => {
  return http.post("/currency/", data);
};

const update = (id, data) => {
  return http.put(`/currency/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/currency/${id}`);
};

const removeAll = () => {
  return http.delete(`/currency/`);
};

const findByTitle = (title) => {
  return http.get(`/currency?title=${title}`);
};

const FormDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default FormDataService;