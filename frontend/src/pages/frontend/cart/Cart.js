import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/UserProvider";
import cartservice from "../../../services/CartService";
import CartItem from "../../../components/frontend/CartItem";

function Cart() {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [catchChange, setCatchChange] = useState(null);
  var total_price = 0;
  var total_discount = 0;
  const timerRef = useRef(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setCatchChange(null);
    }, 500);
  }, [catchChange]);

  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result1 = await cartservice.getAll(token.id);
          if (result1.data.success === true) {
            setProducts(result1.data.data);
          } else {
            setProducts([]);
          }
        }
        fetchItems();
      }, 250);
      return () => clearTimeout(delayDebounceFn);
    },
    [token, catchChange]
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!token) {
    // user is not authenticated
    return <Navigate to="/user-auth" />;
  }
  return (
    <>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <main className="col-md-9">
              <div className="card">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width={120}>
                        Quantity
                      </th>
                      <th scope="col" width={120}>
                        Price
                      </th>
                      <th scope="col" className="text-right" width={200}>
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length !== 0 ? (
                      products.map((item, index) => {
                        total_price =
                          total_price + item.product.price * item.quantity;
                        if (item.product.productsale.length !== 0) {
                          total_discount =
                            total_discount +
                            (item.product.price -
                              item.product.productsale[0].pricesale) *
                              item.quantity;
                        }
                        return (
                          <CartItem
                            item={item}
                            change={setCatchChange}
                            location={index}
                          />
                        );
                      })
                    ) : (
                      <td colSpan={"100%"}>Cart is empty. Go shopping!!</td>
                    )}
                  </tbody>
                </table>
                <div className="card-body border-top">
                  {products.length !== 0 ? (
                    <>
                      <Link
                        className="btn btn-primary float-md-right"
                        to={`/cart/checkout`}
                      >
                        {" "}
                        Make Purchase <i className="fa fa-chevron-right" />{" "}
                      </Link>
                      <Link to="/" className="btn btn-light">
                        {" "}
                        <i className="fa fa-chevron-left" /> Continue shopping{" "}
                      </Link>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>{" "}
              {/* card.// */}
              <div className="alert alert-success mt-3">
                <p className="icontext">
                  <i className="icon text-success fa fa-truck" /> Free Delivery
                  within 1-2 weeks
                </p>
              </div>
            </main>{" "}
            {/* col.// */}
            <aside className="col-md-3">
              {" "}
              {/* card .// */}
              <div className="card">
                <div className="card-body">
                  <dl className="dlist-align">
                    <dt>Total price:</dt>
                    <dd className="text-right">USD {total_price.toFixed(2)}</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Discount:</dt>
                    <dd className="text-right">
                      USD {total_discount.toFixed(2)}
                    </dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="text-right  h5">
                      <strong>
                        ${(total_price - total_discount).toFixed(2)}
                      </strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center mb-3">
                    <img
                      src={require("../../../assets/images/misc/payments.png")}
                      height={26}
                      alt=""
                    />
                  </p>
                </div>{" "}
                {/* card-body.// */}
              </div>{" "}
              {/* card .// */}
            </aside>{" "}
            {/* col.// */}
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>
      {/* ========================= SECTION CONTENT END// ========================= */}
      {/* ========================= SECTION  ========================= */}
    </>
  );
}

export default Cart;
