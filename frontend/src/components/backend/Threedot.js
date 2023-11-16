import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DeleteContext from "../../provider/ModalDeleteProvider";

function Threedot(props) {
  const [, setDelete] = useContext(DeleteContext);
  const [dot, setDot] = useState(false);

  const handlerShow = () => {
    setDelete({
      show: true,
      id: props.id,
      table: props.table,
      redirect: false,
    });
  };
  return (
    <>
      <button
        className="tw-inline-flex tw-items-center tw-bg-white tw-p-0.5 tw-text-sm tw-font-medium tw-text-center tw-text-gray-500 hover:tw-text-gray-800 tw-rounded-lg focus:tw-outline-none light:tw-text-gray-400 light:hover:tw-text-gray-100"
        type="button"
        onMouseOver={() => setDot(true)}
        onMouseLeave={() => setDot(false)}
      >
        <svg
          className="tw-w-5 tw-h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
      <div
        className={`${
          dot ? "tw-block" : "tw-hidden"
        } tw-z-10 tw-absolute tw-transition-all tw-duration-300 tw-w-44 tw-bg-white tw-rounded tw-divide-y tw-divide-gray-100 tw-shadow light:tw-bg-gray-700 light:tw-divide-gray-600`}
        onMouseOver={() => setDot(true)}
        onMouseLeave={() => setDot(false)}
      >
        <ul
          className="tw-py-1 tw-text-sm tw-text-gray-700 light:tw-text-gray-200"
          aria-labelledby="dropdown-button"
        >
          <li>
            <Link
              to={`/admin/${props.table}/detail/${props.id}`}
              className="tw-block tw-py-2 tw-transition-all tw-duration-300 tw-px-4 hover:tw-bg-gray-100 light:hover:tw-bg-gray-600 light:hover:tw-text-white"
            >
              Show
            </Link>
          </li>

          {props.table !== "order" ? (
            <li>
              <Link
                to={`/admin/${props.table}/edit/${props.id}`}
                className="tw-block tw-py-2 tw-transition-all tw-duration-300 tw-px-4 hover:tw-bg-gray-100 light:hover:tw-bg-gray-600 light:hover:tw-text-white"
              >
                Edit
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>

        <button
          className="tw-block tw-text-left tw-transition-all tw-duration-300 tw-w-full tw-py-2 tw-px-4 tw-text-sm tw-bg-white tw-text-gray-700 hover:tw-bg-gray-100 light:hover:tw-bg-gray-600 light:tw-text-gray-200 light:hover:tw-text-white"
          onClick={handlerShow}
        >
          {props.table === "order" ? "Cancel order" : "Delete"}
        </button>
      </div>
    </>
  );
}

export default Threedot;
