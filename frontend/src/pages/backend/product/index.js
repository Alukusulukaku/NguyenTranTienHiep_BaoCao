import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteContext from "../../../provider/ModalDeleteProvider";
import Skeleton from "../../../components/backend/Skeleton";
import productservice from "../../../services/ProductService";
import urlImage from "../../../config";
import DatetimeFormat from "../../../helpers/DateFormat";
import Threedot from "../../../components/backend/Threedot";

function Product() {
  let navigate = useNavigate();
  const { page } = useParams("page");
  const [deleteId] = useContext(DeleteContext);
  const [products, setProducts] = useState([]);
  const [total_products, setTotal_Products] = useState([]);
  const [status, setStatus] = useState(1);
  const limit = 5;

  const newBtn = () => {
    let path = "/admin/product/new";
    navigate(path);
  };
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await productservice.getAll(status, limit, page);
          setProducts(result.data.data);
          setTotal_Products(result.data.total_data);
        }
        fetchItems();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    },
    [page, deleteId, status]
  );
  const skeleton = () => {
    return (
      <tr>
        <td colSpan={"100%"}>
          <Skeleton />
        </td>
      </tr>
    );
  };
  const result = () => {
    return (
      <>
        {products.map((item, index) => {
          return (
            <tr
              key={index}
              className="tw-bg-white tw-border-b light:tw-bg-gray-800 light:tw-border-gray-700 hover:tw-bg-gray-50 light:hover:tw-bg-gray-600"
              style={{ cursor: "pointer" }}
            >
              <td className="tw-w-32 tw-p-4">
                <img
                  src={`${urlImage}product/${item.image}`}
                  alt="Apple MacBook Pro 17"
                />
              </td>
              <th
                scope="row"
                className="tw-px-6 py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap light:tw-text-white"
              >
                {item.name}
              </th>
              <td className="tw-px-6 tw-py-4">
                {(() => {
                  switch (item.status) {
                    case 1:
                      return "Active";
                    case 2:
                      return "Inactive";
                    default:
                      return "";
                  }
                })()}
              </td>
              <td className="tw-px-6 tw-py-4">
                {DatetimeFormat(item.created_at)}
              </td>
              <td className="tw-px-6 tw-py-4">{item.id}</td>
              <td className="tw-px-6 tw-py-4 tw-flex tw-items-center tw-justify-end">
                <Threedot id={item.id} table={`product`} />
              </td>
            </tr>
          );
        })}
      </>
    );
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
        </ol>
      </nav>
      <div className="tw-flex tw-justify-end tw-mb-3">
        <select
          id="countries"
          className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-me-3 tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={1}>Active</option>
          <option value={2}>Inactive</option>
          <option value={3}>Trash</option>
        </select>
        <button
          type="button"
          onClick={newBtn}
          className="tw-flex tw-transition-all tw-duration-300 tw-items-center focus:tw-outline-none tw-text-white tw-bg-green-700 hover:tw-bg-green-800 focus:tw-ring-2 focus:tw-ring-green-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 dark:tw-bg-green-600 dark:hover:tw-bg-green-700 dark:focus:tw-ring-green-800"
        >
          <svg
            className="tw-w-6 tw-h-6 tw-text-gray-800 dark:tw-text-white tw-me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
          </svg>
          New
        </button>
      </div>

      <div className="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg">
        <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 light:tw-text-gray-400">
          <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-200 light:tw-bg-gray-700 light:tw-text-gray-400">
            <tr>
              <th scope="col" className="tw-px-6 tw-py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Product name
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Status
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Created at
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                ID
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                <span className="tw-sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>{products.length > 0 ? result() : skeleton()}</tbody>
        </table>
      </div>
      <div className="tw-flex tw-flex-col tw-items-center tw-mt-5">
        <span className="tw-text-sm tw-text-gray-700 light:tw-text-gray-400">
          Showing{" "}
          <span className="tw-font-semibold tw-text-gray-900 light:tw-text-white">
            {(() => {
              return (parseInt(page) - 1) * limit + 1;
            })()}
          </span>{" "}
          to{" "}
          <span className="tw-font-semibold tw-text-gray-900 light:tw-text-white">
            {(() => {
              return (parseInt(page) - 1) * limit + products.length;
            })()}
          </span>{" "}
          of{" "}
          <span className="tw-font-semibold tw-text-gray-900 light:tw-text-white">
            {total_products.length}
          </span>{" "}
          Entries
        </span>
        <div className="tw-flex tw-mt-2 tw-space-x-2 xs:tw-mt-0">
          {(() => {
            if (parseInt(page) === 1)
              return (
                <button
                  className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
                  disabled
                  onClick={() =>
                    navigate(`/admin/product/${parseInt(page) - 1}`)
                  }
                >
                  Prev
                </button>
              );
            else
              return (
                <button
                  className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
                  onClick={() =>
                    navigate(`/admin/product/${parseInt(page) - 1}`)
                  }
                >
                  Prev
                </button>
              );
          })()}
          {(() => {
            if (
              (parseInt(page) - 1) * limit + products.length ===
              total_products.length
            )
              return (
                <button
                  className="tw-flex tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-border-0 tw-border-l tw-border-gray-700 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
                  onClick={() =>
                    navigate(`/admin/product/${parseInt(page) + 1}`)
                  }
                  disabled
                >
                  Next
                </button>
              );
            else
              return (
                <button
                  className="tw-flex tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-border-0 tw-border-l tw-border-gray-700 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
                  onClick={() =>
                    navigate(`/admin/product/${parseInt(page) + 1}`)
                  }
                >
                  Next
                </button>
              );
          })()}
        </div>
      </div>
    </>
  );
}

export default Product;
