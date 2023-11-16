import httpAxios from "../httpAxios";

async function getAll(limit, page) {
  return await httpAxios.get(`category/index/${limit}/${page}`);
}
async function All(status = 3) {
  return await httpAxios.get(`category/all/${status}`);
}
async function getById(id) {
  return await httpAxios.get(`category/show/${id}`);
}
async function getBySlug(slug) {
  return await httpAxios.get(`category/getBySlug/${slug}`);
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
async function getAllButNotId(id) {
  return await httpAxios.get(`category/categoryExceptById/${id}`);
}
async function getAllWithChildren() {
  return await httpAxios.get(`category/getAllWithChildren`);
}

const categoryservice = {
  getAll: getAll,
  getAllWithChildren: getAllWithChildren,
  getAllButNotId: getAllButNotId,
  All: All,
  getBySlug: getBySlug,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default categoryservice;
