import { Link } from "react-router-dom";

function Search() {
  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="col-md-12 text-center">
          <h2>We found some products base on your information</h2>
          {/* search-wrap .end// */}
        </div>
        <div className="row row-sm padding-y">
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 products">
            <div className="card card-sm card-product-grid">
              <Link to="/product-detail/6" className="img-wrap">
                {" "}
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 products">
            <div className="card card-sm card-product-grid">
              <Link to="/product-detail/6" className="img-wrap">
                {" "}
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 products">
            <div className="card card-sm card-product-grid">
              <Link to="/product-detail/6" className="img-wrap">
                {" "}
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 products">
            <div className="card card-sm card-product-grid">
              <Link to="/product-detail/6" className="img-wrap">
                {" "}
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 products">
            <div className="card card-sm card-product-grid">
              <Link to="/product-detail/6" className="img-wrap">
                {" "}
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-6 products">
            <div className="card card-sm card-product-grid">
              <Link to="/product-detail/6" className="img-wrap">
                {" "}
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  alt=""
                />{" "}
              </Link>
              <figcaption className="info-wrap">
                <Link to="#" className="title">
                  Just another product name
                </Link>
                <div className="price mt-1">$179.00</div> {/* price-wrap.// */}
              </figcaption>
            </div>
          </div>
          <div className="col-md-12 text-center padding-y">
            <h5>
              No items that you are looking for? Try{" "}
              <Link className="text-danger" to={"#"}>
                contact us
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
