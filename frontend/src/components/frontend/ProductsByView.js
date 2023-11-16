import { Link, useNavigate } from "react-router-dom";
import urlImage from "../../config";
import { useAuth } from "../../provider/UserProvider";
import cartservice from "../../services/CartService";

function ProductsByView(props) {
  const { token } = useAuth();
  const navigate = useNavigate();
  async function addToCart(id) {
    if (!token) {
      navigate("/user-auth", { replace: true });
      return;
    }
    var product = new FormData();
    product.append("product_id", id);
    product.append("user_id", token.id);
    product.append("qty", 1);
    await cartservice.create(product).then((res) => {
      if (res.data.success === true) {
        alert("Thêm vào giỏ hàng thành công!");
      }
    });
  }
  return (
    <>
      {props.view ? (
        <div>
          {/* sect-heading */}
          {props.products.map((item, index) => {
            return (
              <article className="card card-product-list" key={index}>
                <div className="row no-gutters">
                  <aside className="col-md-3">
                    <Link
                      to={`/san-pham/${item.category.slug}/${item.slug}`}
                      className="img-wrap"
                    >
                      <span className="badge badge-danger"> NEW </span>
                      <img src={`${urlImage}product/${item.image}`} alt="" />
                    </Link>
                  </aside>{" "}
                  {/* col.// */}
                  <div className="col-md-6">
                    <div className="info-main">
                      <Link
                        to={`/san-pham/${item.category.slug}/${item.slug}`}
                        className="h5 title"
                      >
                        {item.name}
                      </Link>
                      {/* rating-wrap.// */}
                      <p className="mb-3">
                        <span className="tag">
                          <i className="fa fa-check" /> Verified
                        </span>
                      </p>
                      <p>{item.description}</p>
                    </div>
                    {/* info-main.// */}
                  </div>
                  {/* col.// */}
                  <aside className="col-sm-3">
                    <div className="info-aside">
                      <div className="price-wrap">
                        {item.productsale.length !== 0 ? (
                          <>
                            <span className="h5 price">
                              $
                              {item.productsale.map((subitem) => {
                                return subitem.pricesale;
                              })}
                            </span>
                            <strike className="text-muted">{item.price}</strike>
                          </>
                        ) : (
                          <span className="h5 price">${item.price}</span>
                        )}
                      </div>{" "}
                      {/* price-wrap.// */}
                      <p className="text-muted mt-3">{item.brand.name}</p>
                      <p className="mt-3">
                        <button
                          onClick={() => addToCart(item.id)}
                          className="btn btn-outline-primary mr-2"
                        >
                          <i className="fa fa-cart-plus" /> Add to cart
                        </button>
                        <Link to="#" className="btn btn-light">
                          <i className="fa fa-heart" /> Save{" "}
                        </Link>
                      </p>
                    </div>
                    {/* info-aside.// */}
                  </aside>
                  {/* col.// */}
                </div>
                {/* row.// */}
              </article>
            );
          })}
        </div>
      ) : (
        <div className="row">
          {props.products.map((item, index) => {
            return (
              <div className="col-md-3" key={index}>
                <figure className="card card-product-grid">
                  <div className="img-wrap">
                    <span className="badge badge-danger"> NEW </span>
                    <img src={`${urlImage}product/${item.image}`} alt="" />
                  </div>{" "}
                  {/* img-wrap.// */}
                  <figcaption className="info-wrap">
                    <Link
                      to={`/san-pham/${item.category.slug}/${item.slug}`}
                      className="title mb-2"
                    >
                      {item.name}
                    </Link>
                    <div className="price-wrap">
                      <span className="price">${item.price}</span>
                    </div>{" "}
                    {/* price-wrap.// */}
                    <p className="text-muted ">{item.brand.name}</p>
                    <hr />
                    <p className="mb-3">
                      <span className="tag">
                        {" "}
                        <i className="fa fa-check" /> Verified
                      </span>
                    </p>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="btn btn-outline-primary"
                    >
                      {" "}
                      <i className="fa fa-cart-plus"></i> Add to cart{" "}
                    </button>
                  </figcaption>
                </figure>
              </div>
            );
          })}

          {/* col.// */}
        </div>
      )}
    </>
  );
}

export default ProductsByView;
