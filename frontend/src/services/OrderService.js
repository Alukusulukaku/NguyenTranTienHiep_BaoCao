import httpAxios from "../httpAxios";

async function getAll(type, limit, page) {
  return await httpAxios.post(`order/index/${limit}/${page}`, type);
}
async function getById(id) {
  return await httpAxios.get(`order/show/${id}`);
}
async function create(infor) {
  return await httpAxios.post(`order/store`, infor);
}
async function remove(id) {
  return await httpAxios.delete(`order/destroy/${id}`);
}
async function update(id) {
  return await httpAxios.post(`order/update/${id}`);
}

const orderservice = {
  getAll: getAll,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default orderservice;
