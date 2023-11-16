import httpAxios from "../httpAxios";

async function getAll($limit, $offset = 0) {
  return await httpAxios.get(`post/index/${$limit}/${$offset}`);
}
async function getById(id) {
  return await httpAxios.get(`post/show/${id}`);
}
async function post_list(slug, limit, page = 1) {
  return await httpAxios.get(`post/post_list/${slug}/${limit}/${page}`);
}
async function postByLimit(limit) {
  return await httpAxios.get(`post/postByLimit/${limit}`);
}
async function create(post1) {
  return await httpAxios.post("post/store", post1);
}
async function remove($id) {
  return await httpAxios.delete(`post/destroy/${$id}`);
}
async function update(post, id) {
  return await httpAxios.post(`post/update/${id}`, post);
}
async function getBySlug(slug, limit) {
  return await httpAxios.get(`post/postByTopic/${slug}/${limit}`);
}
async function post_detail(topic, slug) {
  return await httpAxios.get(`post/post_detail/${topic}/${slug}`);
}

const postservice = {
  post_detail: post_detail,
  getBySlug: getBySlug,
  getAll: getAll,
  post_list: post_list,
  postByLimit: postByLimit,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default postservice;
