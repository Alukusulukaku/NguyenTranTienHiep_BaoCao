import { Component } from "react";

class NewModal extends Component {
  state = {};
  render() {
    switch (this.props.type) {
      case "product": {
        return (
          <div
            id="newProduct"
            tabIndex={-1}
            aria-hidden="true"
            className="tw-hidden tw-flex tw-overflow-y-auto tw-overflow-x-hidden tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-z-50 tw-justify-center tw-items-center tw-w-full md:tw-inset-0 tw-h-modal md:tw-h-full"
          >
            <div className="tw-relative tw-p-4 tw-w-full tw-max-w-2xl tw-h-full md:tw-h-auto">
              {/* Modal content */}
              <div className="tw-relative tw-p-4 tw-bg-white tw-rounded-lg tw-shadow light:tw-bg-gray-800 sm:tw-p-5">
                {/* Modal header */}
                <div className="tw-flex tw-justify-between tw-items-center tw-pb-4 tw-mb-4 tw-rounded-t tw-border-b sm:tw-mb-5 light:tw-border-gray-600">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 light:tw-text-white">
                    Add Product
                  </h3>
                  <button
                    type="button"
                    className="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-ml-auto tw-inline-flex tw-items-center light:hover:tw-bg-gray-600 light:hover:tw-text-white"
                    data-modal-toggle="newProduct"
                  >
                    <svg
                      aria-hidden="true"
                      className="tw-w-5 tw-h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="tw-sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <form action="#">
                  <div className="tw-grid tw-gap-4 tw-mb-4 sm:tw-grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
                        placeholder="Type product name"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="brand"
                        className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
                      >
                        Brand
                      </label>
                      <input
                        type="text"
                        name="brand"
                        id="brand"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
                        placeholder="Product brand"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="tw-block mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
                      >
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
                        placeholder="$2999"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="category"
                        className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
                      >
                        Category
                      </label>
                      <select
                        id="category"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
                      >
                        <option selected="">Select category</option>
                        <option value="TV">TV/Monitors</option>
                        <option value="PC">PC</option>
                        <option value="GA">Gaming/Console</option>
                        <option value="PH">Phones</option>
                      </select>
                    </div>
                    <div className="sm:tw-col-span-2">
                      <label
                        htmlFor="description"
                        className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        rows={4}
                        className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-primary-500 focus:tw-border-primary-500 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
                        placeholder="Write product description here"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="tw-text-white tw-inline-flex tw-items-center tw-bg-green-600 tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-primary-600 light:hover:tw-bg-primary-700 light:focus:tw-ring-primary-800"
                  >
                    <svg
                      className="tw-mr-1 -tw-ml-1 tw-w-6 tw-h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add new product
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }
      case "user": {
        return (
          <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="tw-block tw-overflow-y-auto tw-overflow-x-hidden  z-50 tw-justify-center tw-items-center tw-w-full md:tw-inset-0 tw-h-modal md:tw-h-full"
          >
            <div className="tw-relative tw-p-4 tw-w-full tw-max-w-2xl tw-h-full md:tw-h-auto">
              {/* Modal content */}
              <div className="tw-relative tw-p-4 tw-bg-white tw-rounded-lg tw-shadow light:tw-bg-gray-800 sm:tw-p-5">
                {/* Modal header */}
                <div className="tw-flex tw-justify-between tw-items-center tw-pb-4 tw-mb-4 tw-rounded-t tw-border-b sm:tw-mb-5 light:tw-border-gray-600">
                  <h3 className="tw-text-lg tw-font-semibold tw-text-gray-900 light:tw-text-white">
                    Add User
                  </h3>
                  <button
                    type="button"
                    className="tw-text-gray-400 tw-bg-transparent hover:tw-bg-gray-200 hover:tw-text-gray-900 tw-rounded-lg tw-text-sm tw-p-1.5 tw-ml-auto tw-inline-flex tw-items-center light:hover:tw-bg-gray-600 light:hover:tw-text-white"
                    data-modal-toggle="defaultModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="tw-w-5 tw-h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="tw-sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <form action="#">
                  <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
                    <div>
                      <label
                        for="meta_desc"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        id="meta_desc"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                        placeholder="Enter meta description..."
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="meta_desc"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="meta_desc"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                        placeholder="Enter meta description..."
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="meta_key"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="meta_key"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                        placeholder="Enter meta key..."
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="meta_desc"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="meta_desc"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                        placeholder="Enter meta description..."
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="meta_desc"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="meta_desc"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                        placeholder="Enter meta description..."
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="meta_desc"
                        className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="meta_desc"
                        className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                        placeholder="Enter meta description..."
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="tw-text-white tw-inline-flex tw-items-center tw-bg-green-600 tw-bg-primary-700 hover:tw-bg-primary-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-primary-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-primary-600 light:hover:tw-bg-primary-700 light:focus:tw-ring-primary-800"
                  >
                    <svg
                      className="tw-mr-1 -tw-ml-1 tw-w-6 tw-h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add new product
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      }
      default:
        return "";
    }
  }
}

export default NewModal;
