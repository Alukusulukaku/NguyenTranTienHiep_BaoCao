import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
import brandservice from "../../../services/BrandService";
import productservice from "../../../services/ProductService";
import ProductsByView from "../../../components/frontend/ProductsByView";

function CategoryList() {
  const [viewtype, setViewType] = useState(true);
  const { parent } = useParams("parent");
  const { children } = useParams("children");
  const { page } = useParams("page");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [products, setProducts] = useState([]);
  const [products_total, setProducts_Total] = useState([]);
  const [total_pages, setTotal_Pages] = useState([]);
  const [products_length, setProducts_Length] = useState(0);
  const [products_total_length, setProductsTotalLength] = useState(0);
  const [flag, setFlag] = useState(false);
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result = await categoryservice.getBySlug(parent);
          setCategories(result.data.data);
          const result1 = await brandservice.All(1);
          setBrands(result1.data.data);
        }
        fetchItems();
      }, 700);
      return () => clearTimeout(delayDebounceFn);
    },
    [parent]
  );
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          var filters = new FormData();
          filters.append("parent", parent);
          filters.append("child", children);
          if (max != null && min != null) {
            filters.append("min", min);
            filters.append("max", max);
          } else {
            filters.append("min", 0);
            filters.append("max", 0);
          }
          filters.append("brands", JSON.stringify(selectedBrands));
          const result = await productservice.filterProductsPagination(
            filters,
            page,
            viewtype ? 4 : 12
          );
          setProducts(result.data.data);
          setProducts_Total(result.data.data_total);
          try {
            setTotal_Pages(result.data.total_page);
            setProducts_Length(result.data.data.length);
            setProductsTotalLength(result.data.data_total.length);
          } catch {
            setTotal_Pages([]);
            setProducts_Length(0);
            setProductsTotalLength(0);
          }
        }
        fetchItems();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [children, flag, page, parent, selectedBrands, viewtype]
  );

  const pageNumbers = Array.from(
    { length: total_pages },
    (_, index) => index + 1
  );
  const handlerFlag = () => {
    setFlag(!flag);
  };

  console.log(parent);
  console.log(children);
  console.log(page);

  return (
    <section className="section-content padding-y">
      <div className="container">
        {/* ============================  FILTER TOP  ================================= */}
        <div className="card mb-3">
          <div className="card-body">
            <ol className="breadcrumb float-left">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li
                className={`breadcrumb-item ${
                  children === "all" ? "active" : ""
                }`}
              >
                {children === "all" ? parent : <Link to="#">{parent}</Link>}
              </li>
              {children !== "all" ? (
                <li className="breadcrumb-item active">{children}</li>
              ) : (
                ""
              )}
            </ol>
          </div>{" "}
          {/* card-body .// */}
        </div>{" "}
        {/* card.// */}
        {/* ============================ FILTER TOP END.// ================================= */}
        <div className="row">
          <aside className="col-md-2">
            <article className="filter-group">
              <h6 className="title">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_1"
                >
                  {" "}
                  Product type{" "}
                </Link>
              </h6>
              <div className="filter-content collapse show" id="collapse_1">
                <div className="inner">
                  <ul className="list-menu">
                    <li
                      className={
                        children === "all" ? "tw-pointer-events-none" : ""
                      }
                    >
                      <Link to={`/category/${parent}/all/1`}>All products</Link>
                    </li>
                    {categories.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={
                            children === item.slug
                              ? "tw-pointer-events-none"
                              : ""
                          }
                        >
                          <Link to={`/category/${parent}/${item.slug}/1`}>
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>{" "}
                {/* inner.// */}
              </div>
            </article>{" "}
            {/* filter-group  .// */}
            <article className="filter-group">
              <h6 className="title">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_2"
                >
                  {" "}
                  Brands{" "}
                </Link>
              </h6>
              <div className="filter-content collapse show" id="collapse_2">
                <div className="inner">
                  {brands.map((item, index) => {
                    return (
                      <label
                        className="custom-control custom-checkbox"
                        key={index}
                      >
                        <input
                          type="checkbox"
                          defaultChecked=""
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedBrands((prevIds) => [
                                ...prevIds,
                                item.id,
                              ]); // Thêm id vào mảng
                            } else {
                              setSelectedBrands((prevIds) =>
                                prevIds.filter((prevId) => prevId !== item.id)
                              ); // Loại bỏ id khỏi mảng
                            }
                          }}
                          className="custom-control-input"
                        />
                        <div className="custom-control-label">
                          {item.name}
                          <b className="badge badge-pill badge-light float-right">
                            120
                          </b>
                        </div>
                      </label>
                    );
                  })}
                </div>{" "}
                {/* inner.// */}
              </div>
            </article>
            <article className="filter-group">
              <h6 className="title">
                <Link
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="collapse"
                  data-target="#collapse_3"
                >
                  {" "}
                  Price range{" "}
                </Link>
              </h6>
              <div className="filter-content collapse show" id="collapse_3">
                <div className="inner">
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Min</label>
                      <input
                        className="form-control"
                        placeholder="$0"
                        type="number"
                        max={10000}
                        onChange={(e) => setMin(e.target.value)}
                        min={0}
                      />
                    </div>
                    <div className="form-group text-right col-md-6">
                      <label>Max</label>
                      <input
                        className="form-control"
                        placeholder="$10,000"
                        max={10000}
                        type="number"
                        onChange={(e) => setMax(e.target.value)}
                        min={0}
                      />
                    </div>
                  </div>{" "}
                  {/* form-row.// */}
                  <button
                    className="btn btn-block btn-primary"
                    onClick={() => handlerFlag()}
                  >
                    Apply
                  </button>
                </div>{" "}
                {/* inner.// */}
              </div>
            </article>
          </aside>{" "}
          {/* col.// */}
          <main className="col-md-10">
            <header className="mb-3">
              <div className="form-inline">
                <strong className="mr-md-auto">
                  {products_total.length} items found
                </strong>
                <select className="mr-2 form-control">
                  <option>Latest items</option>
                  <option>Trending</option>
                  <option>Most Popular</option>
                  <option>Cheapest</option>
                </select>
                <div className="btn-group">
                  <button
                    className={`btn btn-light ${viewtype ? "active" : ""}`}
                    onClick={() => setViewType(true)}
                    title="List view"
                  >
                    <i className="fa fa-bars" />
                  </button>
                  <button
                    className={`btn btn-light ${!viewtype ? "active" : ""}`}
                    onClick={() => setViewType(false)}
                    title="Grid view"
                  >
                    <i className="fa fa-th" />
                  </button>
                </div>
              </div>
            </header>
            <ProductsByView view={viewtype} products={products} />

            {/* card-product .// */}
            <nav className="mb-4" aria-label="Page navigation sample">
              <ul className="pagination">
                {products_length !== 0 ? (
                  <li
                    className={`page-item ${
                      parseInt(page) === 1 ? "disabled" : ""
                    }`}
                  >
                    <Link
                      className="page-link"
                      to={`/category/${parent}/${children}/${
                        parseInt(page) - 1
                      }`}
                    >
                      Previous
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {pageNumbers.map((page1, index) => (
                  <li
                    className={`page-item ${
                      page1 === parseInt(page) ? "active" : ""
                    }`}
                    key={index}
                  >
                    <Link
                      className="page-link"
                      to={`/category/${parent}/${children}/${page1}`}
                    >
                      {page1}
                    </Link>
                  </li>
                ))}
                {products_total_length !== 0 ? (
                  <li
                    className={`page-item ${
                      (parseInt(page) + 1) * (viewtype ? 4 : 12) +
                        products_length ===
                      products_total_length
                        ? "disabled"
                        : ""
                    }`}
                  >
                    <Link
                      className={`page-link`}
                      to={`/category/${parent}/${children}/${
                        parseInt(page) + 1
                      }`}
                    >
                      Next
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </nav>
          </main>{" "}
          {/* col.// */}
        </div>
      </div>{" "}
      {/* container .//  */}
    </section>
  );
}

export default CategoryList;
