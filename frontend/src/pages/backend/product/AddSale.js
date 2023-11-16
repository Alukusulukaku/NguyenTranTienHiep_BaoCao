import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../../../provider/AlertProvider";
import brandservice from "../../../services/BrandService";
import categoryservice from "../../../services/CategoryService";
import productservice from "../../../services/ProductService";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import SaleProduct from "../../../components/backend/SaleProduct";

function AddSale() {
  let navigate = useNavigate();
  const [, setAlert] = useContext(AlertContext);

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(0);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(0);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [product_id, setProductId] = useState(0);
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [sale_qty, setSale_Qty] = useState(0);
  const [sale, setSale] = useState(0);
  const [product, setProduct] = useState([]);
  const [pricesale, setPriceSale] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selected_products, setSelectedProducts] = useState([]);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const handleChangePrice = (sale) => {
    setSale(sale);
    setPriceSale((price - price * (sale / 100)).toFixed(2));
  };

  const addToSelectedProducts = () => {
    const existingProduct = selected_products.find(
      (product1) => product1.id === product.id
    );

    if (existingProduct) {
      setAlert({
        text: "Sản phẩm đã tồn tại ở danh sách phía dưới",
        type: "failed",
      });
      return;
    }
    if (sale_qty === 0) {
      setAlert({
        text: "Vui lòng nhập số lượng muốn giảm giả",
        type: "failed",
      });
      return;
    }

    const newProduct = {
      id: product.id,
      name: product.name,
      price: price,
      qty: sale_qty,
      pricesale: pricesale,
      startDate: startDate,
      endDate: endDate,
    };
    setSelectedProducts([...selected_products, newProduct]);
    handleChangePrice(0);
  };

  const removeProductByID = (id) => {
    const updatedProducts = selected_products.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(updatedProducts);
  };

  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result = await brandservice.All(1);
        setBrands(result.data.data);
        const result1 = await categoryservice.All(1);
        setCategories(result1.data.data);
      }
      fetchItems();
    }, 0);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          var filters = new FormData();
          filters.append("category", category);
          filters.append("brand", brand);
          filters.append("search", search);
          const result = await productservice.filterProducts(filters);
          setProducts(result.data.data);
        }
        fetchItems();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    },
    [brand, category, search]
  );
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          if (product_id !== 0) {
            const result = await productservice.getById(product_id);
            setProduct(result.data.data);
            setPrice(product.price);
            if (result.data.data.productstore != null) {
              setQty(result.data.data.productstore.qty);
            } else {
              setQty(0);
              setSale_Qty(0);
            }
          }
        }
        fetchItems();
      }, 200);
      return () => clearTimeout(delayDebounceFn);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [product_id]
  );

  async function productAddSale(event) {
    event.preventDefault();
    var product = new FormData();
    product.append("products", JSON.stringify(selected_products));
    await productservice.saleStore(product).then(function (res) {
      navigate("/admin/product/1");

      if (res.data.success === true) {
        setAlert({
          text: "Thêm những sản phẩm sale thành công!",
          type: "success",
        });
      } else {
        setAlert({
          text: "Có lỗi đã xảy ra. Vui lòng thử lại!",
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
                Add sale
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
          <div>
            <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white">
              Select a category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              size={5}
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
            >
              <option value={0}>All categories</option>

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
            <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white">
              Select a brand
            </label>
            <select
              id="categories"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              size={5}
              className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
            >
              <option value={0}>All brands</option>
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
            htmlFor="searchbox"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >
            Search
          </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
            placeholder="Enter keyword..."
            required
          />
        </div>

        <div className="tw-mb-6">
          <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white">
            Select a product
          </label>
          <select
            id="categories"
            size={5}
            value={product_id}
            onChange={(e) => setProductId(e.target.value)}
            required
            className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
          >
            {products.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>

        <hr className="tw-w-48 tw-h-1 tw-mx-auto tw-my-4 tw-bg-gray-300 tw-border-0 tw-rounded md:tw-my-10 light:tw-bg-gray-700" />
        <div className="tw-mb-6">
          <label
            htmlFor="meta_key"
            className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
          >
            Original price
          </label>
          <input
            type="text"
            id="meta_key"
            value={price}
            className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
            disabled
            required
          />
        </div>
        <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div className="tw-mb-6">
              <ReactDatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                className="tw-inline-block"
              />
            </div>
            <div>
              <div className="tw-mb-6">
                <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white">
                  Start date
                </label>
                <ReactDatePicker
                  selected={startDate}
                  dateFormat={"dd/MM/yyyy"}
                  onChange={(date) => setStartDate(date)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                />
              </div>
              <div className="tw-mb-6">
                <label className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white">
                  End date
                </label>
                <ReactDatePicker
                  selected={endDate}
                  dateFormat={"dd/MM/yyyy"}
                  onChange={(date) => setEndDate(date)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="tw-mb-6">
            <div className="tw-mb-6">
              <label
                htmlFor="input-group-1"
                className="tw-block mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
              >
                <span className="tw-text-xs tw-font-semibold tw-inline-block tw-py-1 tw-px-2 tw-uppercase tw-rounded tw-text-pink-600 tw-bg-pink-200 tw-uppercase last:tw-mr-0 tw-mr-1">
                  Sale: {sale}%
                </span>
              </label>
              <input
                id="disabled-range"
                type="range"
                min={0}
                max={100}
                value={sale}
                onChange={(e) => handleChangePrice(e.target.value)}
                className="tw-w-full tw-h-2 tw-bg-gray-200 tw-rounded-lg tw-appearance-none tw-cursor-pointer light:tw-bg-gray-700"
              />
            </div>
            <div className="tw-mb-6">
              <label
                htmlFor="meta_key"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Price after sale
              </label>
              <input
                type="text"
                id="meta_key"
                value={pricesale}
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                disabled
                required
              />
            </div>
            <div className="tw-mb-6">
              <label
                htmlFor="input-group-1"
                className="tw-block mb-2 tw-text-sm tw-font-medium tw-text-gray-900 light:tw-text-white"
              >
                <span className="tw-text-xs tw-font-semibold tw-inline-block tw-py-1 tw-px-2 tw-uppercase tw-rounded tw-text-pink-600 tw-bg-pink-200 tw-uppercase last:tw-mr-0 tw-mr-1">
                  How many you wanna sale? {sale_qty} product
                </span>
              </label>
              <input
                id="disabled-range"
                type="range"
                min={0}
                max={qty}
                value={sale_qty}
                onChange={(e) => setSale_Qty(e.target.value)}
                className="tw-w-full tw-h-2 tw-bg-gray-200 tw-rounded-lg tw-appearance-none tw-cursor-pointer light:tw-bg-gray-700"
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="tw-flex tw-items-center focus:tw-outline-none tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 dark:tw-bg-blue-600 dark:hover:tw-bg-blue-700 dark:focus:tw-ring-blue-800"
          onClick={addToSelectedProducts}
        >
          <svg
            className="tw-w-4 tw-h-4 tw-pr-1 tw-text-gray-800 dark:tw-text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
          Add below
        </button>
      </div>
      <div className="tw-relative tw-overflow-x-auto tw-shadow-md tw-bg-white sm:tw-rounded-lg tw-mt-5 tw-p-10">
        <form method="post" onSubmit={productAddSale}>
          <div className="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg">
            <table className="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 light:tw-text-gray-400">
              <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-200 light:tw-bg-gray-700 light:tw-text-gray-400">
                <tr>
                  <th scope="col" className="tw-px-6 tw-py-3">
                    Product name
                  </th>
                  <th scope="col" className="tw-px-6 tw-py-3">
                    OG Price
                  </th>
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
                    ID
                  </th>
                  <th scope="col" className="tw-px-6 tw-py-3">
                    <span className="tw-sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {selected_products.map((item, index) => {
                  return (
                    <SaleProduct
                      index={index}
                      item={item}
                      remove={removeProductByID}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <button
            className="tw-text-white tw-mt-5 tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
            onClick={addToSelectedProducts}
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}

export default AddSale;
