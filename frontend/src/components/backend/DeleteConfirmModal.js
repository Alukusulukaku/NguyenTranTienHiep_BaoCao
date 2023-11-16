import brandservice from "../../services/BrandService";
import { useNavigate } from "react-router-dom";
import categoryservice from "../../services/CategoryService";
import menuservice from "../../services/MenuService";
import { useContext } from "react";
import DeleteContext from "../../provider/ModalDeleteProvider";
import AlertContext from "../../provider/AlertProvider";
import contactservice from "../../services/ContactService";
import sliderservice from "../../services/SliderService";
import productservice from "../../services/ProductService";
import topicservice from "../../services/TopicService";
import postservice from "../../services/PostService";
import userservice from "../../services/UserService";
import orderservice from "../../services/OrderService";
import pageservice from "../../services/PageService";

function DeleteConfirmModal() {
  const navigate = useNavigate();
  const [deleteStatus, setDelete] = useContext(DeleteContext);
  const [, setAlert] = useContext(AlertContext);
  const handlerShow = () => {
    setDelete({
      show: false,
    });
  };

  function remove(id) {
    switch (deleteStatus.table) {
      case "brand": {
        brandservice.remove(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a record successfully!!",
              type: "success",
            });
          } catch {}

          if (deleteStatus.redirect) navigate(`/admin/brand/1`);
        });
        break;
      }
      case "page": {
        pageservice.remove(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a record successfully!!",
              type: "success",
            });
          } catch {}

          if (deleteStatus.redirect) navigate(`/admin/page/1`);
        });
        break;
      }
      case "user": {
        userservice.remove(id).then((result) => {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a user successfully!!",
              type: "success",
            });
          } catch {}
          if (deleteStatus.redirect)
            navigate(
              `/admin/user/${
                result.data.data.roles === 1 ? "employees" : "customers"
              }/1`
            );
        });
        break;
      }
      case "productsale": {
        productservice.saleRemove(id).then((result) => {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a sale successfully!!",
              type: "success",
            });
          } catch {}
          if (deleteStatus.redirect) navigate(`/admin/product/1`);
        });
        break;
      }
      case "contact": {
        contactservice.remove(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a record successfully!!",
              type: "success",
            });
          } catch {}

          if (deleteStatus.redirect) navigate(`/admin/contact/1`);
        });
        break;
      }
      case "slider": {
        sliderservice.remove(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a record successfully!!",
              type: "success",
            });
          } catch {}

          if (deleteStatus.redirect) navigate(`/admin/slider/1`);
        });
        break;
      }
      case "post": {
        postservice.remove(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
          } catch {}
          if (result.data.success === true) {
            setAlert({
              text: "Xóa thành công!!",
              type: "success",
            });
          } else {
            setAlert({
              text: "Xóa không thành công!!",
              type: "failed",
            });
          }

          if (deleteStatus.redirect) navigate(`/admin/topic/1`);
        });
        break;
      }
      case "order": {
        orderservice.remove(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
          } catch {}
          if (result.data.success === true) {
            setAlert({
              text: result.data.message,
              type: "success",
            });
          } else {
            setAlert({
              text: result.data.message,
              type: "failed",
            });
          }

          if (deleteStatus.redirect) navigate(`/admin/topic/1`);
        });
        break;
      }
      case "order_confirm": {
        orderservice.update(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
          } catch {}
          if (result.data.success === true) {
            setAlert({
              text: result.data.message,
              type: "success",
            });
          } else {
            setAlert({
              text: result.data.message,
              type: "failed",
            });
          }

          if (deleteStatus.redirect) navigate(`/admin/order/1`);
        });
        break;
      }
      case "topic": {
        topicservice.remove(id).then(function (result) {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
          } catch {}
          if (result.data.success === true) {
            setAlert({
              text: "Xóa thành công!!",
              type: "success",
            });
          } else {
            setAlert({
              text: "Xóa không thành công!!",
              type: "failed",
            });
          }

          if (deleteStatus.redirect) navigate(`/admin/order/1`);
        });
        break;
      }
      case "category": {
        categoryservice.remove(id).then((result) => {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a record successfully!!",
              type: "success",
            });
          } catch {}
          if (deleteStatus.redirect) navigate(`/admin/category/1`);
        });
        break;
      }
      case "menu": {
        menuservice.remove(id).then((result) => {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a record successfully!!",
              type: "success",
            });
          } catch {}
          if (deleteStatus.redirect) navigate(`/admin/menu/1`);
        });
        break;
      }
      case "product": {
        productservice.remove(id).then((result) => {
          try {
            setDelete({
              show: false,
              return: result.data.data.id,
            });
            setAlert({
              text: "Deleted a record successfully!!",
              type: "success",
            });
          } catch {}
          if (deleteStatus.redirect) navigate(`/admin/product/1`);
        });
        break;
      }
      default: {
      }
    }
  }

  return (
    <>
      <div
        className="overlay1"
        style={{
          visibility: `${deleteStatus.show ? "visible" : "hidden"}`,
          opacity: `${deleteStatus.show ? "50%" : "0%"}`,
        }}
        onClick={handlerShow}
      ></div>
      <div
        id="popup-modal"
        tabIndex={-1}
        className={`${
          deleteStatus.show ? "tw-block" : "tw-hidden"
        } tw-fixed tw-flex tw-justify-center tw-items-center tw-top-0 tw-left-0 tw-right-0 tw-z-50 tw-p-4 tw-overflow-x-hidden tw-overflow-y-auto md:tw-inset-0 tw-h-[calc(100%-1rem)] tw-max-h-full`}
      >
        <div className="tw-relative tw-w-full tw-max-w-md tw-max-h-full">
          <div className="tw-relative tw-bg-white tw-rounded-lg tw-shadow light:tw-bg-gray-700">
            <button
              type="button"
              className="tw-absolute tw-top-3 tw-right-2.5 tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-w-8 tw-h-8 tw-ml-auto tw-inline-flex tw-justify-center tw-items-center light:hover:tw-bg-gray-600 light:hover:tw-text-white"
              onClick={handlerShow}
            >
              <svg
                className="tw-w-3 tw-h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="tw-sr-only">Close modal</span>
            </button>
            <div className="tw-p-6 tw-text-center">
              <svg
                className="tw-mx-auto tw-mb-4 tw-text-gray-400 tw-w-12 tw-h-12 light:tw-text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 light:text-gray-400">
                {deleteStatus.table !== "order"
                  ? deleteStatus.table === "order_confirm"
                    ? "Are you sure to confirm this order is delivered?"
                    : "Are you sure that you want to delete this record?"
                  : "Cancel this order?"}
              </h3>
              <button
                onClick={() => remove(deleteStatus.id)}
                type="button"
                className="tw-text-white tw-transition-all tw-duration-300 tw-bg-red-600 hover:tw-bg-red-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-red-300 light:focus:tw-ring-red-800 tw-font-medium tw-rounded-lg tw-text-sm tw-inline-flex tw-items-center tw-px-5 tw-py-2.5 tw-text-center tw-mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={handlerShow}
                type="button"
                className="tw-text-gray-500 tw-transition-all tw-duration-300 tw-bg-white hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-gray-200 tw-rounded-lg tw-border tw-border-gray-200 tw-text-sm tw-font-medium tw-px-5 tw-py-2.5 hover:tw-text-gray-900 focus:tw-z-10 light:tw-bg-gray-700 light:tw-text-gray-300 light:tw-border-gray-500 light:hover:tw-text-white light:hover:tw-bg-gray-600 light:focus:tw-ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteConfirmModal;
