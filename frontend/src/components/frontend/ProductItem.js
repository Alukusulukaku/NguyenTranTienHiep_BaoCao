import { Link, useNavigate } from "react-router-dom";
import urlImage from "../../config";
import { NumericFormat } from "react-number-format";
import { useAuth } from "../../provider/UserProvider";
import cartservice from "../../services/CartService";

function ProductItem(props) {
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
    <div className="col-xl-2 col-lg-3 col-md-4 col-6" key={props.location}>
      <div className="card card-sm card-product-grid rounded-2xl">
        <div className="product-grid">
          <div className="product-image image-container">
            <Link
              to={`/san-pham/${props.product.category.slug}/${props.product.slug}`}
              className="image"
            >
              <img
                className="img-1"
                src={`${urlImage}product/${props.product.image}`}
                alt=""
              />
              <img
                className="img-2"
                src={`${urlImage}product_back/${props.product.back_image}`}
                alt=""
              />
            </Link>
            <ul className="product-links">
              <li>
                <button>
                  <i className="fa fa-heart" />
                </button>
              </li>
              <li>
                <button onClick={() => addToCart(props.product.id)}>
                  <i className="fa fa-shopping-cart" />
                </button>
              </li>
            </ul>
          </div>
          <div className="product-content">
            <ul className="rating">
              <li className="fas fa-star" />
              <li className="fas fa-star" />
              <li className="fas fa-star" />
              <li className="fas fa-star" />
              <li className="fas fa-star disable" />
              <li className="disable">(1 reviews)</li>
            </ul>

            <small id="emailHelp" className="text-muted tw-text-sm">
              {props.product.brand.name}
            </small>
            <h3 className="title" style={{ fontWeight: "bold" }}>
              <Link
                to={`/san-pham/${props.product.category.slug}/${props.product.slug}`}
              >
                {props.product.name}
              </Link>
            </h3>

            <div className="price tw-font-bold text-center">
              {props.productsale != null ? (
                <>
                  <div className="price1">
                    <NumericFormat
                      value={props.product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      decimalScale={0}
                      prefix={"$"}
                      style={{ color: "#939393" }}
                    />
                  </div>
                  <NumericFormat
                    value={props.productsale[0].pricesale}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={0}
                    prefix={"$"}
                    style={{ color: "#cc3333" }}
                  />
                </>
              ) : (
                <NumericFormat
                  value={props.product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  decimalScale={0}
                  prefix={"$"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
