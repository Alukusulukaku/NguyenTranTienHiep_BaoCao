import httpAxios from "../httpAxios";

async function getAll(user_id) {
  return await httpAxios.get(`cart/index/${user_id}`);
}
async function create(cart) {
  return await httpAxios.post("cart/store", cart);
}
async function remove(id) {
  return await httpAxios.delete(`cart/destroy/${id}`);
}
async function update(cart) {
  return await httpAxios.post(`cart/update`, cart);
}
const cartservice = {
  getAll: getAll,
  create: create,
  remove: remove,
  update: update,
};
export default cartservice;
