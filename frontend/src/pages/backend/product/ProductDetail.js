import { useContext, useEffect, useState } from "react";
import DeleteContext from "../../../provider/ModalDeleteProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../../services/ProductService";
import urlImage from "../../../config";
import DatetimeFormat from "../../../helpers/DateFormat";
import { NumericFormat } from "react-number-format";

function ProductDetail() {
  let navigate = useNavigate();
  const [deleteId, setDelete] = useContext(DeleteContext);
  const { id } = useParams("id");
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [sales, setSales] = useState([]);
  const handlerShow = () => {
    setDelete({
      show: true,
      id: id,
      table: "product",
      redirect: true,
    });
  };

  useEffect(
    function () {
      (async function () {
        await productservice.getById(id).then(function (result) {
          setProduct(result.data.data);
          setCategory(result.data.data.category);
          setBrand(result.data.data.brand);
          setSales(result.data.data.productsale);
        });
      })();
    },
    [id, deleteId]
  );
  const removeSaleByID = (sale_id) => {
    setDelete({
      show: true,
      id: sale_id,
      table: "productsale",
      redirect: false,
    });
  };

  return (
    <>
      <nav
        className="tw-flex tw-px-5 tw-py-3 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded-lg tw-bg-gray-50 light:tw-bg-gray-800 light:tw-border-gray-700 tw-mb-5 tw-shadow-md"
        aria-label="Breadcrumb"
      >
        <ol className="tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
          <li className="tw-inline-flex tw-items-center">
            <Link
              to="#"
              className="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-blue-600 light:tw-text-gray-400 light:hover:tw-text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="tw-flex tw-items-center">
              <svg
                className="tw-w-3 tw-h-3 tw-mx-1 tw-text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="tw-ml-1 tw-text-sm tw-font-medium tw-text-gray-500 md:tw-ml-2 light:tw-text-gray-400">
                Product
              </span>
            </div>
          </li>
          <li>
            <div className="tw-flex tw-items-center">
              <svg
                className="tw-w-3 tw-h-3 tw-mx-1 tw-text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="tw-ml-1 tw-text-sm tw-font-medium tw-text-gray-500 md:tw-ml-2 light:tw-text-gray-400">
                Product detail
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="tw-flex tw-justify-start">
        <button
          type="button"
          className="tw-flex tw-items-center focus:tw-outline-none tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
          onClick={() => navigate(-1)}
        >
          <svg
            className="tw-w-5 tw-h-5 tw-text-gray-800 dark:tw-text-white tw-me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
          Go Back
        </button>
      </div>
      <div className="tw-relative tw-overflow-x-auto tw-shadow-md tw-bg-white sm:tw-rounded-lg tw-p-10">
        <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div className="tw-flex tw-justify-center">
              <img
                className="tw-h-60 tw-max-w-xs tw-rounded-lg tw-shadow-xl light:tw-shadow-gray-800"
                src={`${urlImage}product/${product.image}`}
                alt=""
              />
            </div>
            <div className="tw-flex tw-justify-center">
              <img
                className="tw-h-60 tw-max-w-xs tw-rounded-lg tw-shadow-xl light:tw-shadow-gray-800"
                src={`${urlImage}product_back/${product.back_image}`}
                alt=""
              />
            </div>
          </div>
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-rows-2">
            <div>
              <label
                htmlFor="created_at"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Created at
              </label>
              <input
                type="text"
                id="created_at"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                value={DatetimeFormat(product.created_at)}
                required
                disabled
              />
            </div>
            <div>
              <label
                htmlFor="updated_at"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Updated at
              </label>
              <input
                type="text"
                id="updated_at"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                value={DatetimeFormat(product.updated_at)}
                required
                disabled
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="created_by"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Created by
            </label>
            <input
              type="text"
              id="created_by"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              value={product.created_by}
              required
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="updated_by"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Updated by
            </label>
            <input
              type="text"
              id="updated_by"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              value={product.updated_by}
              required
              disabled
            />
          </div>
        </div>
        <hr className="tw-w-48 tw-h-1 tw-mx-auto tw-my-4 tw-bg-gray-300 tw-border-0 tw-rounded md:tw-my-10 light:tw-bg-gray-700" />
        <div className="tw-mb-6">
          <div>
            <label
              htmlFor="product_name"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Product name
            </label>
            <input
              type="text"
              id="product_name"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              value={product.name}
              required
              disabled
            />
          </div>
        </div>
        <div className="tw-mb-6">
          <div>
            <label
              htmlFor="slug"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Slug
            </label>
            <input
              type="text"
              id="slug"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              value={product.slug}
              required
              disabled
            />
          </div>
        </div>
        <div className="tw-mb-6">
          <label
            htmlFor="description"
            className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
          >
            Description for product
          </label>
          <textarea
            id="description"
            rows={8}
            className="tw-block tw-resize-none tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-primary-500 focus:tw-border-primary-500 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
            value={product.description}
          />
        </div>
        <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
          <div>
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              value={brand.name}
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              required
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Category
            </label>
            <input
              type="text"
              value={category.name}
              id="category"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              required
              disabled
            />
          </div>
        </div>
        <div className="tw-mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >
            Price
          </label>
          <div className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500">
            <NumericFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              decimalScale={0}
              id="price"
              prefix={"$"}
            />
          </div>
        </div>
        <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
          <div>
            <label
              htmlFor="meta_key"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Meta key
            </label>
            <input
              type="text"
              id="meta_key"
              value={product.metakey}
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              placeholder="Enter meta key..."
              required
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="meta_desc"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Meta description
            </label>
            <input
              type="text"
              value={product.metadesc}
              id="meta_desc"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              required
              disabled
            />
          </div>
        </div>
        <div className="tw-mb-6">
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Status
            </label>
            <input
              type="text"
              value={product.status === 1 ? "Active" : "Inactive"}
              id="status"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              required
              disabled
            />
          </div>
        </div>
        <button
          className="tw-text-white tw-mr-4 tw-bg-yellow-500 hover:tw-bg-yellow-600 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-yellow-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-yellow-600 light:hover:tw-bg-yellow-700 light:focus:tw-ring-yellow-800"
          onClick={() => navigate(`/admin/product/edit/${product.id}`)}
        >
          Edit
        </button>
        <button
          className="tw-text-white tw-mt-3 tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
          onClick={handlerShow}
        >
          Delete
        </button>
      </div>

      <div className="tw-relative tw-mt-3 tw-overflow-x-auto tw-shadow-md tw-bg-white sm:tw-rounded-lg tw-p-10">
        <div className="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg">
          <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 light:tw-text-gray-400">
            <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-200 light:tw-bg-gray-700 light:tw-text-gray-400">
              <tr>
                <th scope="col" className="tw-px-6 tw-py-3">
                  Price sale
                </th>
                <th scope="col" className="tw-px-6 tw-py-3">
                  Quantity
                </th>
                <th scope="col" className="tw-px-6 tw-py-3">
                  Start date
                </th>
                <th scope="col" className="tw-px-6 tw-py-3">
                  End date
                </th>

                <th scope="col" className="tw-px-6 tw-py-3">
                  <span className="tw-sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sales.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="tw-bg-white tw-border-b light:tw-bg-gray-800 light:tw-border-gray-700 hover:tw-bg-gray-50 light:hover:tw-bg-gray-600"
                  >
                    <td className="tw-px-6 tw-py-4">{item.pricesale}</td>
                    <td className="tw-px-6 tw-py-4">{item.qty}</td>
                    <td className="tw-px-6 tw-py-4">
                      {DatetimeFormat(item.date_begin)}
                    </td>
                    <td className="tw-px-6 tw-py-4">
                      {DatetimeFormat(item.date_end)}
                    </td>
                    <td className="tw-px-6 tw-py-4 tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-text-white tw-bg-gradient-to-br tw-from-pink-500 tw-to-orange-400 hover:tw-bg-gradient-to-bl focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-pink-200 light:focus:tw-ring-pink-800 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mr-2 tw-mb-2"
                        onClick={() => removeSaleByID(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
