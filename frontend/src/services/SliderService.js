import httpAxios from "../httpAxios";

async function getAll(limit, page) {
  return await httpAxios.get(`slider/index/${limit}/${page}`);
}
async function getSliderByPosition(position, status = 1) {
  return await httpAxios.get(
    `slider/getSliderByPosition/${position}/${status}`
  );
}
async function getById(id) {
  return await httpAxios.get(`slider/show/${id}`);
}
async function create(slider) {
  return await httpAxios.post("slider/store", slider);
}
async function remove(id) {
  return await httpAxios.delete(`slider/destroy/${id}`);
}
async function update(slider, id) {
  return await httpAxios.post(`slider/update/${id}`, slider);
}

const sliderservice = {
  getAll: getAll,
  getSliderByPosition: getSliderByPosition,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default sliderservice;
