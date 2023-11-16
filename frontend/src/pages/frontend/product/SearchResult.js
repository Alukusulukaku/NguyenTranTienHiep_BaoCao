import { Link, useNavigate, useParams } from "react-router-dom";
import productservice from "../../../services/ProductService";
import { useEffect, useState } from "react";
import ProductsByView from "../../../components/frontend/ProductsByView";

function SearchResult() {
  let navigate = useNavigate();
  const { search } = useParams("search");
  const { page } = useParams("page");
  const [viewtype, setViewType] = useState(true);
  const [searchbox, setSearchBox] = useState("");
  const [products, setProducts] = useState([]);
  const [total_products, setTotal_Products] = useState([]);
  const [total_pages, setTotal_Pages] = useState([]);
  const [products_length, setProducts_Length] = useState(0);
  const [products_total_length, setProductsTotalLength] = useState(0);
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          var searchbox = new FormData();
          searchbox.append("search", search);
          searchbox.append("limit", viewtype ? 4 : 12);
          searchbox.append("page", parseInt(page));
          const result = await productservice.productsBySearch(searchbox);

          try {
            setProducts(result.data.data);
            setTotal_Products(result.data.total_data);
            setTotal_Pages(result.data.total_page);
            setProducts_Length(result.data.data.length);
            setProductsTotalLength(result.data.total_data.length);
          } catch {
            setProducts([]);
            setTotal_Products([]);
            setTotal_Pages([]);
            setProducts_Length(0);
            setProductsTotalLength(0);
          }
        }
        fetchItems();
      }, 1500);
      return () => clearTimeout(delayDebounceFn);
    },
    [page, search, viewtype]
  );

  const pageNumbers = Array.from(
    { length: total_pages },
    (_, index) => index + 1
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-result/${searchbox}/1`);
  };

  return (
    <section className="section-content padding-y">
      <div className="container">
        <form className="w-100 mb-3" method="post" onSubmit={handleSubmit}>
          <label htmlFor="search" className="d-block">
            Search box
          </label>
          <input
            type="text"
            value={searchbox}
            onChange={(e) => setSearchBox(e.target.value)}
            className="form-control"
            id="search"
            placeholder="Search"
          />
        </form>
        <div className="row">
          {products.length !== 0 ? (
            <main className="col-md-12">
              <header className="mb-3">
                <div className="form-inline">
                  <strong className="mr-md-auto">
                    {total_products.length} items found
                  </strong>

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
                      <Link className="page-link" to="#">
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
                        to={`/search-result/${search}/${page1}`}
                      >
                        {page1}
                      </Link>
                    </li>
                  ))}
                  {products_total_length !== 0 ? (
                    <li
                      className={`page-item ${
                        (parseInt(page) - 1) * (viewtype ? 4 : 12) +
                          products_length ===
                        products_total_length
                          ? "disabled"
                          : ""
                      }`}
                    >
                      <Link className={`page-link`} to="#">
                        Next
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </nav>
            </main>
          ) : (
            <div className="col-md-12 text-center fw-bold tw-text-xl padding-y">
              No products are found with the information. Try another search!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
