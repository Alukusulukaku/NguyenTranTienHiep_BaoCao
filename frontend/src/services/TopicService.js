import httpAxios from "../httpAxios";

async function getAll(limit, page = 1) {
  return await httpAxios.get(`topic/index/${limit}/${page}`);
}
async function all() {
  return await httpAxios.get(`topic/all`);
}
async function getById(id) {
  return await httpAxios.get(`topic/show/${id}`);
}
async function create(topic) {
  return await httpAxios.post("topic/store", topic);
}
async function remove(id) {
  return await httpAxios.delete(`topic/destroy/${id}`);
}
async function update(topic, id) {
  return await httpAxios.post(`topic/update/${id}`, topic);
}

const topicservice = {
  getAll: getAll,
  all: all,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default topicservice;
