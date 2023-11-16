import httpAxios from "../httpAxios";

async function getAll(limit, page = 1) {
  return await httpAxios.get(`page/index/${limit}/${page}`);
}
async function getAll_rev() {
  return await httpAxios.get(`page/index_rev`);
}
async function getById(id) {
  return await httpAxios.get(`page/show/${id}`);
}
async function create(page) {
  return await httpAxios.post("page/store", page);
}
async function remove(id) {
  return await httpAxios.delete(`page/destroy/${id}`);
}
async function update(page, id) {
  return await httpAxios.post(`page/update/${id}`, page);
}
async function getBySlug(slug) {
  return await httpAxios.get(`page/getBySlug/${slug}`);
}

const pageservice = {
  getAll_rev: getAll_rev,
  getBySlug: getBySlug,
  getAll: getAll,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default pageservice;
