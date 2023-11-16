import httpAxios from "../httpAxios";

async function getAll(status, limit, page) {
  return await httpAxios.get(`product/index/${status}/${limit}/${page}`);
}
async function getByCategory(id, limit) {
  return await httpAxios.get(`getProducts/${id}/${limit}`);
}
async function getLatestProducts(limit) {
  return await httpAxios.get(`getLatestProducts/${limit}`);
}
async function getTrendingProducts(limit) {
  return await httpAxios.get(`getTrendingProducts/${limit}`);
}
async function getProductBySlug(category, slug) {
  return await httpAxios.get(`/product/getProductBySlug/${category}/${slug}`);
}
async function getSaleProducts(limit) {
  return await httpAxios.get(`getSaleProducts/${limit}`);
}
async function filterProductsPagination(filters, page = 1, limit) {
  return await httpAxios.post(
    `/product/filterProductsPagination/${page}/${limit}`,
    filters
  );
}
async function filterProducts(filters) {
  return await httpAxios.post(`/product/filterProducts`, filters);
}
async function productsBySearch(search) {
  return await httpAxios.post(`/product/productBySearch`, search);
}
async function getLatest($limit, $status = 1) {
  return await httpAxios.get(`product/getLatestProduct/${$limit}/${$status}`);
}
async function getById(id) {
  return await httpAxios.get(`product/show/${id}`);
}
async function create(product) {
  return await httpAxios.post("product/store", product);
}
async function remove($id) {
  return await httpAxios.delete(`product/destroy/${$id}`);
}
async function update(product, id) {
  return await httpAxios.post(`product/update/${id}`, product);
}
async function saleStore(products) {
  return await httpAxios.post(`product/sale_store`, products);
}
async function saleRemove(id) {
  return await httpAxios.delete(`product/saleRemove/${id}`);
}
async function addStock(products) {
  return await httpAxios.post(`product/stock_add`, products);
}

const productservice = {
  getAll: getAll,
  getProductBySlug: getProductBySlug,
  getLatestProducts: getLatestProducts,
  getTrendingProducts: getTrendingProducts,
  productsBySearch: productsBySearch,
  getSaleProducts: getSaleProducts,
  saleStore: saleStore,
  addStock: addStock,
  saleRemove: saleRemove,
  filterProductsPagination: filterProductsPagination,
  getByCategory: getByCategory,
  filterProducts: filterProducts,
  getLatest: getLatest,
  getById: getById,
  create: create,
  remove: remove,
  update: update,
};
export default productservice;
