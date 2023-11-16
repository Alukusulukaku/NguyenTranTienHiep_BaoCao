import httpAxios from "../httpAxios";

async function getAll(limit, page) {
  return await httpAxios.get(`contact/index/${limit}/${page}`);
}
async function getById(id) {
  return await httpAxios.get(`contact/show/${id}`);
}
async function create(contact) {
  return await httpAxios.post("contact/store", contact);
}
async function remove(id) {
  return await httpAxios.delete(`contact/destroy/${id}`);
}
async function update(contact, id) {
  return await httpAxios.post(`contact/update/${id}`, contact);
}

const contactservice = {
  getAll: getAll,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default contactservice;
