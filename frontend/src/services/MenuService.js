import httpAxios from "../httpAxios";

async function getAll(limit, page) {
  return await httpAxios.get(`menu/index/${limit}/${page}`);
}
async function getById(id) {
  return await httpAxios.get(`menu/show/${id}`);
}
async function all(id) {
  return await httpAxios.get(`menu/all`);
}
async function getMenus() {
  return await httpAxios.get(`getMenus`);
}

async function create(menu) {
  return await httpAxios.post("menu/store", menu);
}
async function remove(id) {
  return await httpAxios.delete(`menu/destroy/${id}`);
}
async function update(menu, id) {
  return await httpAxios.post(`menu/update/${id}`, menu);
}

const menuservice = {
  getAll: getAll,
  getById: getById,
  getMenus: getMenus,
  all: all,
  create: create,
  remove: remove,
  update: update,
};
export default menuservice;
