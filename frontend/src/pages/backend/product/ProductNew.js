import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import productservice from "../../../services/ProductService";
import AlertContext from "../../../provider/AlertProvider";
import brandservice from "../../../services/BrandService";
import categoryservice from "../../../services/CategoryService";
import { useAuth } from "../../../provider/AuthProvider";

function ProductNew() {
  let navigate = useNavigate();
  const { token } = useAuth();
  const [, setAlert] = useContext(AlertContext);
  const [name, setName] = useState("");
  const [metakey, setMetakey] = useState("");
  const [metadesc, setMetadesc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(0);
  const [brand, setBrand] = useState(0);
  const [status, setStatus] = useState(2);
  const [images, setImages] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleFile = (e) => {
    const newFiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      newFiles.push(e.target.files[i]);
    }
    setImages(newFiles);
  };

  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result = await brandservice.All();
        setBrands(result.data.data);
        const result1 = await categoryservice.All();
        setCategories(result1.data.data);
      }
      fetchItems();
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, []);

  async function productStore(event) {
    event.preventDefault();
    const image = document.querySelector("#image");
    const image1 = document.querySelector("#image1");
    var product = new FormData();
    product.append("name", name);
    product.append("metakey", metakey);
    product.append("metadesc", metadesc);
    product.append("status", status);
    product.append("price", price);
    product.append("description", description);
    product.append("status", status);
    product.append("category_id", category);
    product.append("brand_id", brand);

    product.append("user_id", token.id);
    if (image.files.length === 0) {
      product.append("image", "");
    } else {
      product.append("image", image.files[0]);
    }
    if (image1.files.length === 0) {
      product.append("back_image", "");
    } else {
      product.append("back_image", image1.files[0]);
    }
    if (images.length !== 0) {
      images.forEach((imagefile) => {
        product.append("images[]", imagefile);
      });
    } else {
      product.append("images[]", []);
    }
    await productservice.create(product).then(function (res) {
      navigate("/admin/product/1");
      if (res.data.success === true) {
        setAlert({
          text: res.data.message,
          type: "success",
        });
      } else {
        setAlert({
          text: res.data.message,
          type: "failed",
        });
      }
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
                New a product
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
        <form method="post" onSubmit={productStore}>
          <div className="tw-mb-6">
            <div>
              <label
                htmlFor="brand_name"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Product name
              </label>
              <input
                type="text"
                id="brand_name"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter product name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white">
                First image
              </label>
              <input
                className="tw-block tw-w-full tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 light:tw-text-gray-400 focus:tw-outline-none light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400"
                aria-describedby="file_input_help"
                id="image"
                type="file"
              />
              <p
                className="tw-mt-1 tw-text-sm tw-text-gray-500 light:tw-text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div>
              <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white">
                Second image
              </label>
              <input
                className="tw-block tw-w-full tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 light:tw-text-gray-400 focus:tw-outline-none light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400"
                aria-describedby="file_input_help"
                id="image1"
                type="file"
              />
              <p
                className="tw-mt-1 tw-text-sm tw-text-gray-500 light:tw-text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
          </div>

          <div className="tw-mb-6">
            <div className="tw-flex tw-items-center tw-justify-center tw-w-full">
              <label
                htmlFor="dropzone-file"
                className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full tw-h-64 tw-border-2 tw-border-gray-300 tw-border-dashed tw-rounded-lg tw-cursor-pointer tw-bg-gray-50 light:hover:tw-bg-bray-800 light:tw-bg-gray-700 hover:tw-bg-gray-100 light:tw-border-gray-600 light:hover:tw-border-gray-500 light:hover:tw-bg-gray-600"
              >
                <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-5 tw-pb-6">
                  <svg
                    className="tw-w-8 tw-h-8 tw-mb-4 tw-text-gray-500 light:tw-text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="tw-mb-2 tw-text-sm tw-text-gray-500 light:tw-text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="tw-text-xs tw-text-gray-500 light:tw-text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleFile}
                />
              </label>
            </div>
          </div>

          <hr className="tw-w-48 tw-h-1 tw-mx-auto tw-my-4 tw-bg-gray-300 tw-border-0 tw-rounded md:tw-my-10 light:tw-bg-gray-700" />
          <div className="tw-mb-6">
            <label
              htmlFor="meta_key"
              className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
            >
              Price
            </label>
            <input
              type="text"
              id="meta_key"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
              placeholder="Enter meta key..."
              required
            />
          </div>

          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <label
                htmlFor="meta_key"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Category
              </label>
              <select
                id="parent"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected value={0}>
                  Choose a category
                </option>
                {categories.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label
                htmlFor="meta_desc"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Brand
              </label>
              <select
                id="parent"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option selected value={0}>
                  Choose a brand
                </option>
                {brands.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
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
              className="tw-block tw-p-2.5 tw-w-full tw-text-sm tw-text-gray-900 tw-bg-gray-50 tw-rounded-lg tw-border tw-border-gray-300 focus:tw-ring-primary-500 focus:tw-border-primary-500 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-primary-500 light:focus:tw-border-primary-500"
              placeholder="Your description here"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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
                value={metakey}
                onChange={(e) => setMetakey(e.target.value)}
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter meta key..."
                required
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
                value={metadesc}
                onChange={(e) => setMetadesc(e.target.value)}
                id="meta_desc"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                placeholder="Enter meta description..."
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

export default ProductNew;
