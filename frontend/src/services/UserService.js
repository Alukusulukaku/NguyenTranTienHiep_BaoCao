import httpAxios from "../httpAxios";

async function getAll(roles, limit, page = 1, status = 1) {
  return await httpAxios.get(`user/index/${roles}/${limit}/${page}/${status}`);
}
async function login(user) {
  return await httpAxios.post(`user/login`, user);
}
async function getById(id) {
  return await httpAxios.get(`user/show/${id}`);
}
async function create(user) {
  return await httpAxios.post("user/store", user);
}
async function remove(id) {
  return await httpAxios.delete(`user/destroy/${id}`);
}
async function update(user, id) {
  return await httpAxios.post(`user/update/${id}`, user);
}

const userservice = {
  getAll: getAll,
  getById: getById,
  login: login,
  create: create,
  remove: remove,
  update: update,
};
export default userservice;
