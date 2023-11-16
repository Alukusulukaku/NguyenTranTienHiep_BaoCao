import httpAxios from "../httpAxios";

async function getAll(status, limit, page) {
  return await httpAxios.get(`brand/index/${status}/${limit}/${page}`);
}
async function All(status = 3) {
  return await httpAxios.get(`brand/getAll/${status}`);
}
async function getById(id) {
  return await httpAxios.get(`brand/show/${id}`);
}
async function create(brand) {
  return await httpAxios.post("brand/store", brand);
}
async function remove(id) {
  return await httpAxios.delete(`brand/destroy/${id}`);
}
async function update(brand, id) {
  return await httpAxios.post(`brand/update/${id}`, brand);
}
const brandservice = {
  getAll: getAll,
  All: All,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default brandservice;
