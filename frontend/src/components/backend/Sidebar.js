import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";

function Sidebar(props) {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const [isActive, setIsActive] = useState({ key: "", status: false });
  console.log(token);
  const handleChange = () => {
    props.setShow(!props.show);
  };
  const handlerSignOut = () => {
    setToken();
    navigate("/admin", { replace: true });
  };
  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
        key: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <nav className="tw-fixed tw-top-0 tw-z-50 tw-w-full tw-bg-white tw-border-b tw-border-gray-200 light:tw-bg-gray-800 light:tw-border-gray-700">
        <div className="tw-px-3 tw-py-3 lg:tw-px-5 lg:tw-pl-3">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-justify-start">
              <button
                data-drawer-target="separator-sidebar"
                data-drawer-toggle="separator-sidebar"
                aria-controls="separator-sidebar"
                onClick={handleChange}
                type="button"
                className="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-text-gray-500 tw-rounded-lg sm:tw-hidden hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:focus:tw-ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="tw-w-6 tw-h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/admin" className="tw-flex tw-ml-2 md:tw-mr-24">
                <img
                  src={require("../../assets/backend/images/logo.png")}
                  width={34}
                  height={34}
                  className=" tw-mr-3"
                  alt="FlowBite Logo"
                />
                <span
                  style={{ fontFamily: "cursive" }}
                  className="tw-self-center tw-text-xl tw-font-semibold sm:tw-text-2xl tw-whitespace-nowrap light:tw-text-white"
                >
                  Fjallraven
                </span>
              </Link>
            </div>
            <div className="tw-flex tw-items-center">
              <div className="tw-flex tw-items-center tw-ml-3">
                <span className="tw-text-sm tw-text-gray-500 sm:tw-text-center light:tw-text-gray-400">
                  Hello, {token.name}.
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="separator-sidebar"
        className={`tw-fixed tw-top-0 tw-left-0 tw-z-40 tw-w-64 tw-h-screen tw-pt-20 tw-bg-white tw-border-r tw-border-gray-200 tw-transition-transform ${
          props.show ? "" : "-tw-translate-x-full"
        } light:tw-bg-gray-800 light:tw-border-gray-700 sm:-tw-translate-x-0 sidebar`}
      >
        <div className="tw-h-full tw-px-3 tw-py-4 tw-overflow-y-auto tw-bg-white light:tw-bg-gray-800">
          <ul className="tw-space-y-2 tw-font-medium">
            <li>
              <Link
                to="/admin"
                className="tw-flex tw-items-center tw-transition-all tw-duration-300 tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
          </ul>
          <ul className="tw-pt-4 tw-mt-4 tw-space-y-2 tw-font-medium tw-border-t tw-border-gray-200 light:tw-border-gray-700">
            <li>
              <Link
                to="/admin/menu/1"
                className="tw-flex tw-items-center tw-transition-all tw-duration-300 tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Menu
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/slider/1"
                className="tw-flex tw-items-center tw-transition-all tw-duration-300 tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Slider
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/page/1"
                className="tw-flex tw-items-center tw-transition-all tw-duration-300 tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  class="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Page
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/contact/1"
                className="tw-flex tw-items-center tw-transition-all tw-duration-300 tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Contact
                </span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className={`tw-flex tw-items-center tw-w-full tw-p-2 tw-text-base ${
                  isActive.status && isActive.key === "news"
                    ? "tw-bg-gray-100"
                    : "tw-bg-white"
                } tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700`}
                onClick={() => handleToggle("news")}
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-text-left tw-whitespace-nowrap">
                  News
                </span>
                <svg
                  className="tw-w-3 tw-h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <nav
                className={`${
                  isActive.key === "news" ? "tw-block" : "tw-hidden"
                } tw-py-2 tw-space-y-2`}
              >
                <ul className="tw-py-2 tw-space-y-2">
                  <li>
                    <Link
                      to="/admin/topic/1"
                      className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Topic
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/post/1"
                      className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Post
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li>
              <button
                type="button"
                className={`tw-flex tw-items-center tw-w-full tw-p-2 tw-text-base ${
                  isActive.status && isActive.key === "ecommerce"
                    ? "tw-bg-gray-100"
                    : "tw-bg-white"
                } tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700`}
                onClick={() => handleToggle("ecommerce")}
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.876.517A1 1 0 0 0 17 0H3a1 1 0 0 0-.871.508C1.63 1.393 0 5.385 0 6.75a3.236 3.236 0 0 0 1 2.336V19a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.044a3.242 3.242 0 0 0 1-2.294c0-1.283-1.626-5.33-2.124-6.233ZM15.5 14.7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8v2.4ZM16.75 8a1.252 1.252 0 0 1-1.25-1.25 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0 1.25 1.25 0 0 1-2.5 0 1 1 0 0 0-2 0A1.252 1.252 0 0 1 3.25 8 1.266 1.266 0 0 1 2 6.75C2.306 5.1 2.841 3.501 3.591 2H16.4A19.015 19.015 0 0 1 18 6.75 1.337 1.337 0 0 1 16.75 8Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-text-left tw-whitespace-nowrap">
                  E-Commerce
                </span>
                <svg
                  className="tw-w-3 tw-h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <nav
                className={`${
                  isActive.key === "ecommerce" ? "tw-block" : "tw-hidden"
                } tw-py-2 tw-space-y-2`}
              >
                <ul className="tw-py-2 tw-space-y-2">
                  <li>
                    <Link
                      to="/admin/category/1"
                      className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/brand/1"
                      className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Brands
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li>
              <button
                type="button"
                className={`tw-flex tw-items-center tw-w-full tw-p-2 tw-text-base ${
                  isActive.status && isActive.key === "product"
                    ? "tw-bg-gray-100"
                    : "tw-bg-white"
                } tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700`}
                onClick={() => handleToggle("product")}
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M19.9 6.58c0-.009 0-.019-.006-.027l-2-4A1 1 0 0 0 17 2h-4a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1h.3c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0A3.173 3.173 0 0 0 7.7 12h4.6c-.03.165-.047.332-.051.5a3.25 3.25 0 1 0 6.5 0 3.177 3.177 0 0 0-.049-.5h.3a1 1 0 0 0 1-1V7a.99.99 0 0 0-.1-.42ZM16.382 4l1 2H13V4h3.382ZM4.5 13.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm11 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-text-left tw-whitespace-nowrap">
                  Stocks
                </span>
                <svg
                  className="tw-w-3 tw-h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <nav
                className={`${
                  isActive.key === "product" ? "tw-block" : "tw-hidden"
                } tw-py-2 tw-space-y-2`}
              >
                <ul className="tw-py-2 tw-space-y-2">
                  <li>
                    <Link
                      to="/admin/product/1"
                      className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/product/sale"
                      className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Add sale
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/product/stock"
                      className="tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Add stock
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li>
              <button
                type="button"
                className={`tw-flex tw-transition-all tw-duration-300 tw-items-center tw-w-full tw-p-2 tw-text-base ${
                  isActive.status && isActive.key === "user"
                    ? "tw-bg-gray-100"
                    : "tw-bg-white"
                } tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700`}
                onClick={() => handleToggle("user")}
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                  <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-text-left tw-whitespace-nowrap">
                  User
                </span>
                <svg
                  className="tw-w-3 tw-h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <nav
                className={`${
                  isActive.key === "user" ? "tw-block" : "tw-hidden"
                } tw-py-2 tw-transition-all tw-duration-300 tw-space-y-2`}
              >
                <ul className="tw-py-2 tw-space-y-2">
                  <li>
                    <Link
                      to="/admin/user/customers/1"
                      className="tw-flex tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/user/employees/1"
                      className="tw-flex tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                    >
                      Employees
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>

            <li>
              <Link
                to="/admin/order/1"
                className="tw-flex tw-items-center tw-transition-all tw-duration-300 tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-text-left tw-whitespace-nowrap">
                  Order
                </span>
              </Link>
            </li>
          </ul>
          <ul className="tw-pt-4 tw-mt-4 tw-space-y-2 tw-font-medium tw-border-t tw-border-gray-200 light:tw-border-gray-700">
            <li>
              <button
                to="#"
                className="tw-flex tw-w-full tw-transition-all tw-duration-300 tw-text-start tw-bg-white tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
                onClick={handlerSignOut}
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Sign Out
                </span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
