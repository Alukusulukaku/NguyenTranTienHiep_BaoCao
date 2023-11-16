import httpAxios from "../httpAxios";

async function create(review) {
  return await httpAxios.post("review/store", review);
}
async function remove(id) {
  return await httpAxios.delete(`review/destroy/${id}`);
}
async function getReviewsByProductId(id) {
  return await httpAxios.get(`review/getReviewsByProductId/${id}`);
}

const reviewservice = {
  create: create,
  remove: remove,
  getReviewsByProductId: getReviewsByProductId,
};
export default reviewservice;
