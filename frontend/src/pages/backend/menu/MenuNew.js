import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../../services/MenuService";
import AlertContext from "../../../provider/AlertProvider";
import { useAuth } from "../../../provider/AuthProvider";

function MenuNew() {
  let navigate = useNavigate();
  const { token } = useAuth();
  const [, setAlert] = useContext(AlertContext);
  const [isParent, setIsParent] = useState(false);
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [parent_id, setParent_id] = useState(0);
  const [status, setStatus] = useState(1);
  const [menus, setMenus] = useState([]);
  const handlerCheck = () => {
    setIsParent(!isParent);
    setParent_id(0);
  };
  useEffect(function () {
    (async function () {
      await menuservice.all().then(function (result) {
        setMenus(result.data.data);
      });
    })();
  }, []);

  async function menuStore(event) {
    event.preventDefault();
    var menu = new FormData();
    menu.append("name", name);
    menu.append("path", path);
    if (isParent) {
      menu.append("parent_id", parent_id);
    } else {
      menu.append("parent_id", 0);
    }
    menu.append("user_id", token.id);
    menu.append("status", status);
    await menuservice.create(menu).then(function (res) {
      navigate("/admin/menu/" + res.data.latest);
      setAlert({
        text: "Created a record successfully!!",
        type: "success",
      });
    });
  }
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
                Menu
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
                New a menu
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="tw-flex tw-justify-start">
        <button
          type="button"
          className="tw-flex tw-items-center focus:tw-outline-none tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
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
        <form method="post" onSubmit={menuStore}>
          <div className="tw-mb-6">
            <div>
              <label
                htmlFor="cat_name"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Menu name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="cat_name"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter menu name..."
                required
              />
            </div>
          </div>
          <div className="tw-mb-6">
            <>
              <label className="tw-relative tw-inline-flex tw-items-center tw-mr-5 tw-cursor-pointer">
                <input
                  type="checkbox"
                  checked={isParent}
                  className="tw-sr-only tw-peer"
                  onChange={handlerCheck}
                />
                <div className="tw-w-11 tw-h-6 tw-bg-gray-200 tw-rounded-full peer light:tw-bg-gray-700 peer-focus:tw-ring-4 peer-focus:tw-ring-green-300 light:peer-focus:tw-ring-green-800 peer-checked:after:tw-translate-x-full peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-0.5 after:tw-left-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all light:tw-border-gray-600 peer-checked:tw-bg-green-600" />
                <span className="tw-ml-3 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-gray-300">
                  Parent?
                </span>
              </label>
              <select
                id="parent"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
                disabled={!isParent}
                value={parent_id}
                onChange={(e) => setParent_id(e.target.value)}
              >
                <option selected value={0}>
                  Choose a menu
                </option>
                {menus.map((item, index) => {
                  if (item.parent_id === 0) {
                    return (
                      <option value={item.id} key={index}>
                        {item.name}
                      </option>
                    );
                  } else {
                    return "";
                  }
                })}
              </select>
            </>
          </div>
          <div className="tw-mb-6">
            <div>
              <label
                htmlFor="path"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Path
              </label>
              <input
                type="text"
                id="path"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter path key..."
                required
              />
            </div>
          </div>
          <div className="tw-mb-6">
            <label
              htmlFor="meta_desc"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Status
            </label>
            <select
              id="parent"
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="2">Inactive</option>
              <option value="1">Active</option>
            </select>
          </div>

          <button
            type="submit"
            className="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default MenuNew;
