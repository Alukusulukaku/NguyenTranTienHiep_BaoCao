import { useEffect, useState } from "react";
import userservice from "../../../services/UserService";
import { useAuth } from "../../../provider/UserProvider";
import { Navigate, useNavigate } from "react-router-dom";
import orderservice from "../../../services/OrderService";

function Payment() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          const result1 = await userservice.getById(token.id);
          setName(result1.data.data.name);
          setEmail(result1.data.data.email);
          setPhone(result1.data.data.phone);
          setAddress(result1.data.data.address);
        }
        fetchItems();
      }, 0);
      return () => clearTimeout(delayDebounceFn);
    },
    [token]
  );

  async function orderConfirm(e) {
    e.preventDefault();
    var infor = new FormData();
    infor.append("name", name);
    infor.append("email", email);
    infor.append("phone", phone);
    infor.append("address", address);
    infor.append("note", note);
    infor.append("user_id", token.id);

    const result = await orderservice.create(infor);
    if (result.data.success === true) {
      alert("Đặt hàng thành công");
      navigate("/");
    } else {
      alert("thất bại");
    }
  }

  if (!token) {
    // user is not authenticated
    return <Navigate to="/user-auth" />;
  }
  return (
    <section className="section-content padding-y">
      <div className="container" style={{ maxWidth: 720 }}>
        <form onSubmit={orderConfirm} method="post">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-3">Delivery info</h4>
              <div className="form-group">
                <label>Full name*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex. John Wick"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>{" "}
              {/* form-group end.// */}
              {/* form-row end.// */}
              <div className="form-row">
                <div className="col form-group">
                  <label>Email*</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="johnwick@gmail.com"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="col form-group">
                  <label>Phone*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0969696969"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>{" "}
              {/* form-row end.// */}
              <div className="form-group">
                <label>Address*</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Ocean Avenue"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>{" "}
              {/* form-row.// */}
              <div className="form-group">
                <label>Note</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Note here..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>{" "}
              {/* form-group// */}
            </div>{" "}
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title mb-4">Payment</h4>
              <div className="form-group">
                <label htmlFor="username">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Ex. John Smith"
                  required=""
                />
              </div>{" "}
              {/* form-group.// */}
              <div className="form-group">
                <label htmlFor="cardNumber">Card number</label>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="cardNumber"
                    placeholder="0000-0000-0000-0000"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fab fa-cc-visa" /> &nbsp;{" "}
                      <i className="fab fa-cc-amex" /> &nbsp;
                      <i className="fab fa-cc-mastercard" />
                    </span>
                  </div>
                </div>{" "}
                {/* input-group.// */}
              </div>{" "}
              {/* form-group.// */}
              <div className="row">
                <div className="col-md flex-grow-0">
                  <div className="form-group">
                    <label className="hidden-xs">Expiration</label>
                    <div className="input-group" style={{ minWidth: 150 }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM"
                      />
                      <span
                        style={{ width: 20, textAlign: "center", fontSize: 20 }}
                      >
                        {" "}
                        /{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="YY"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label
                      data-toggle="tooltip"
                      title="3 digits code on back side of the card"
                    >
                      CVV <i className="fa fa-question-circle" />
                    </label>
                    <input className="form-control" required="" type="text" />
                  </div>{" "}
                  {/* form-group.// */}
                </div>
              </div>{" "}
              {/* row.// */}
              <button
                className="subscribe btn btn-primary btn-block"
                type="submit"
              >
                {" "}
                Confirm
              </button>
            </div>{" "}
            {/* card-body.// */}
          </div>{" "}
          {/* card .// */}
        </form>
        <br />
        <br />
      </div>{" "}
      {/* container .//  */}
    </section>
  );
}

export default Payment;
