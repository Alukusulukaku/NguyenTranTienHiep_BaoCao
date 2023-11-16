import { Link } from "react-router-dom";
import urlImage from "../../config";
import { useEffect, useState } from "react";
import cartservice from "../../services/CartService";

function CartItem(props) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [price_sale, setPrice_sale] = useState(0);

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        function fetchItems() {
          try {
            setQuantity(props.item.quantity);
            setPrice(props.item.product.price);
            if (props.item.product.productsale.length > 0)
              setPrice_sale(props.item.product.productsale[0].pricesale);
          } catch {
            setQuantity(1);
            setPrice(0);
            setPrice_sale(0);
          }
        }
        fetchItems();
      }, 20);
      return () => clearTimeout(delayDebounceFn);
    },
    [
      props.item.product.price,
      props.item.product.productsale,
      props.item.quantity,
    ]
  );

  const handlerQty = async (e) => {
    setQuantity(e.target.value);
    var updateCart = new FormData();
    updateCart.append("id", props.item.id);
    updateCart.append("quantity", e.target.value);
    await cartservice.update(updateCart).then((res) => {
      if (res.data.success === true) {
        props.change(quantity);
      }
    });
  };

  const handlerRemove = async (id) => {
    await cartservice.remove(id).then((res) => {
      if (res.data.success === true) {
        props.change(res.data.data.id);
      }
    });
  };

  const qty = Array.from(
    { length: props.item.product.productstore.qty },
    (_, index) => index + 1
  );

  return (
    <tr>
      <td>
        <figure className="itemside">
          <div className="aside">
            <img
              src={`${urlImage}product/${props.item.product.image}`}
              className="img-sm"
              alt=""
            />
          </div>
          <figcaption className="info">
            <Link
              to={`/san-pham/${props.item.product.category.slug}/${props.item.product.slug}`}
              className="title text-dark"
            >
              {props.item.product.name}
            </Link>
            <p className="text-muted small">
              Category: {props.item.product.category.name} <br /> Brand:{" "}
              {props.item.product.brand.name}
            </p>
          </figcaption>
        </figure>
      </td>
      <td>
        <select className="form-control" value={quantity} onChange={handlerQty}>
          {qty.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
      </td>
      <td>
        <div className="price-wrap">
          {price_sale !== 0 ? (
            <>
              <var className="price">${price_sale}</var>
              <strike className="text-muted">${price}</strike>
            </>
          ) : (
            <var className="price">${price}</var>
          )}
        </div>{" "}
        {/* price-wrap .// */}
      </td>
      <td className="text-right">
        <button
          to=""
          className="btn btn-light"
          onClick={() => handlerRemove(props.item.id)}
        >
          {" "}
          Remove
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
