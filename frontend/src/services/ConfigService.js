import httpAxios from "../httpAxios";

async function getAll(limit, page) {
  return await httpAxios.get(`category/index/${limit}/${page}`);
}

async function getById(id) {
  return await httpAxios.get(`category/show/${id}`);
}

async function create(category) {
  return await httpAxios.post("category/store", category);
}
async function remove($id) {
  return await httpAxios.delete(`category/destroy/${$id}`);
}
async function update(category, id) {
  return await httpAxios.post(`category/update/${id}`, category);
}

const configservice = {
  getAll: getAll,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default configservice;
