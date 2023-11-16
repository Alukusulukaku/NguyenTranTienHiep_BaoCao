import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteContext from "../../../provider/ModalDeleteProvider";
import DatetimeFormat from "../../../helpers/DateFormat";
import Threedot from "../../../components/backend/Threedot";
import Skeleton from "../../../components/backend/Skeleton";
import orderservice from "../../../services/OrderService";

function Order() {
  let navigate = useNavigate();
  const [deleteId] = useContext(DeleteContext);
  const [orders, setOrders] = useState([]);
  const [total_orders, setTotal_Orders] = useState([]);
  const [type, setType] = useState({
    undelivered: true,
    delivered: false,
    cancelled: false,
  });
  const limit = 5;
  const { page } = useParams("page");

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          var type1 = new FormData();
          if (type.undelivered) type1.append("status", 2);
          if (type.delivered) type1.append("status", 1);
          if (type.cancelled) type1.append("status", 0);

          const result = await orderservice.getAll(type1, limit, page);
          setOrders(result.data.data);
          setTotal_Orders(result.data.total_data);
        }
        fetchItems();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    },
    [page, deleteId, type]
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
        {orders.map((item, index) => {
          return (
            <tr
              key={index}
              className="tw-bg-white tw-border-b light:tw-bg-gray-800 light:tw-border-gray-700 hover:tw-bg-gray-50 light:hover:tw-bg-gray-600"
              style={{ cursor: "pointer" }}
            >
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
                      return "Delivered";
                    case 2:
                      return "Undelivered";
                    case 0:
                      return "Cancelled";
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
                <Threedot id={item.id} table={`order`} />
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
                Order
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="tw-flex tw-justify-end tw-gap-4 tw-my-3">
        <ul className="tw-items-center tw-w-full tw-text-sm tw-font-medium tw-text-gray-900 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg sm:tw-flex light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-text-white">
          <li className="tw-w-full tw-border-b tw-border-gray-200 sm:tw-border-b-0 sm:tw-border-r light:tw-border-gray-600">
            <div className="tw-flex tw-items-center tw-pl-3">
              <input
                type="checkbox"
                checked={type.undelivered}
                onChange={(e) =>
                  setType({
                    ...type,
                    undelivered: e.target.checked,
                    delivered: false,
                    cancelled: false,
                  })
                }
                className="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-blue-500 light:focus:tw-ring-blue-600 light:tw-lightring-offset-gray-700 light:focus:tw-ring-offset-gray-700 focus:tw-ring-2 light:tw-bg-gray-600 light:tw-border-gray-500"
              />
              <label
                htmlFor="vue-checkbox-list"
                className="tw-w-full tw-pt-2 tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-gray-300"
              >
                Undelivered orders
              </label>
            </div>
          </li>
          <li className="tw-w-full tw-border-b tw-border-gray-200 sm:tw-border-b-0 sm:tw-border-r light:tw-border-gray-600">
            <div className="tw-flex tw-items-center tw-pl-3">
              <input
                type="checkbox"
                checked={type.delivered}
                onChange={(e) =>
                  setType({
                    ...type,
                    undelivered: false,
                    delivered: e.target.checked,
                    cancelled: false,
                  })
                }
                className="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-blue-500 light:focus:tw-ring-blue-600 light:tw-lightring-offset-gray-700 light:focus:tw-ring-offset-gray-700 focus:tw-ring-2 light:tw-bg-gray-600 light:tw-border-gray-500"
              />
              <label
                htmlFor="vue-checkbox-list"
                className="tw-w-full tw-pt-2 tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-gray-300"
              >
                Delivered orders
              </label>
            </div>
          </li>
          <li className="tw-w-full light:tw-border-gray-600">
            <div className="tw-flex tw-items-center tw-pl-3">
              <input
                type="checkbox"
                checked={type.cancelled}
                onChange={(e) =>
                  setType({
                    ...type,
                    undelivered: false,
                    delivered: false,
                    cancelled: e.target.checked,
                  })
                }
                className="tw-w-4 tw-h-4 tw-text-blue-600 tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-blue-500 light:focus:tw-ring-blue-600 light:tw-ring-offset-gray-700 light:focus:tw-ring-offset-gray-700 focus:tw-ring-2 light:tw-bg-gray-600 light:tw-border-gray-500"
              />
              <label
                htmlFor="laravel-checkbox-list"
                className="tw-w-full tw-pt-2 tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-gray-300"
              >
                Cancelled orders
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg">
        <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 light:tw-text-gray-400">
          <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-200 light:tw-bg-gray-700 light:tw-text-gray-400">
            <tr>
              <th scope="col" className="tw-px-6 tw-py-3">
                Name
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
          <tbody>{orders.length !== 0 ? result() : skeleton()}</tbody>
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
              return (parseInt(page) - 1) * limit + orders.length;
            })()}
          </span>{" "}
          of{" "}
          <span className="tw-font-semibold tw-text-gray-900 light:tw-text-white">
            {total_orders.length}
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
                  onClick={() => navigate(`/admin/order/${parseInt(page) - 1}`)}
                >
                  Prev
                </button>
              );
            else
              return (
                <button
                  className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
                  onClick={() => navigate(`/admin/order/${parseInt(page) - 1}`)}
                >
                  Prev
                </button>
              );
          })()}
          {(() => {
            if (
              (parseInt(page) - 1) * limit + orders.length ===
              total_orders.length
            )
              return (
                <button
                  className="tw-flex tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-border-0 tw-border-l tw-border-gray-700 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
                  onClick={() => navigate(`/admin/order/${parseInt(page) + 1}`)}
                  disabled
                >
                  Next
                </button>
              );
            else
              return (
                <button
                  className="tw-flex tw-items-center tw-justify-center tw-px-7 tw-h-8 tw-text-sm tw-font-medium tw-text-white tw-bg-gray-800 tw-border-0 tw-border-l tw-border-gray-700 tw-rounded hover:tw-bg-gray-900 light:tw-bg-gray-800 light:tw-border-gray-700 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:hover:tw-text-white disabled:tw-opacity-50"
                  onClick={() => navigate(`/admin/order/${parseInt(page) + 1}`)}
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

export default Order;
