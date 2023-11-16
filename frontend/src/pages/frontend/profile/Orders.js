import React from "react";
import { Link } from "react-router-dom";

const Orders = () => (
  <main className="col-md-9">
    <article className="card mb-4">
      <header className="card-header">
        <Link to="#" className="float-right">
          {" "}
          <i className="fa fa-print" /> Print
        </Link>
        <strong className="d-inline-block mr-3">Order ID: 6123456789</strong>
        <span>Order Date: 16 December 2018</span>
      </header>
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h6 className="text-muted">Delivery to</h6>
            <p>
              Michael Jackson <br />
              Phone +1234567890 Email: myname@gmail.com <br />
              Location: Home number, Building name, Street 123, <br />
              P.O. Box: 100123
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="text-muted">Payment</h6>
            <span className="text-success">
              <i className="fab fa-lg fa-cc-visa" />
              Visa **** 4216
            </span>
            <p>
              Subtotal: $356 <br />
              Shipping fee: $56 <br />
              <span className="b">Total: $456 </span>
            </p>
          </div>
        </div>{" "}
        {/* row.// */}
      </div>{" "}
      {/* card-body .// */}
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td width={65}>
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  className="img-xs border"
                  alt=""
                />
              </td>
              <td>
                <p className="title mb-0">Product name goes here </p>
                <var className="price text-muted">USD 145</var>
              </td>
              <td>
                {" "}
                Seller <br /> Nike clothing{" "}
              </td>
              <td width={250}>
                {" "}
                <Link to="#" className="btn btn-outline-primary">
                  Track order
                </Link>
                <div className="dropdown d-inline-block">
                  <Link
                    to="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle btn btn-outline-secondary"
                  >
                    More
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      Return
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Cancel order
                    </Link>
                  </div>
                </div>{" "}
                {/* dropdown.// */}
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={require("../../../assets/images/items/2.jpg")}
                  className="img-xs border"
                  alt=""
                />
              </td>
              <td>
                <p className="title mb-0">Another name goes here </p>
                <var className="price text-muted">USD 15</var>
              </td>
              <td>
                {" "}
                Seller <br /> ABC shop{" "}
              </td>
              <td>
                <Link to="#" className="btn btn-outline-primary">
                  Track order
                </Link>
                <div className="dropdown d-inline-block">
                  <Link
                    to="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle btn btn-outline-secondary"
                  >
                    More
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      Return
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Cancel order
                    </Link>
                  </div>
                </div>{" "}
                {/* dropdown.// */}
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={require("../../../assets/images/items/3.jpg")}
                  className="img-xs border"
                  alt=""
                />
              </td>
              <td>
                <p className="title mb-0">The name of the product goes here </p>
                <var className="price text-muted">USD 145</var>
              </td>
              <td>
                {" "}
                Seller <br /> Wallmart{" "}
              </td>
              <td>
                {" "}
                <Link to="#" className="btn btn-outline-primary">
                  Track order
                </Link>
                <div className="dropdown d-inline-block">
                  <Link
                    to="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle btn btn-outline-secondary"
                  >
                    More
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      Return
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Cancel order
                    </Link>
                  </div>
                </div>{" "}
                {/* dropdown.// */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      {/* table-responsive .end// */}
    </article>{" "}
    {/* card order-item .// */}
    <article className="card order-item mb-4">
      <header className="card-header">
        <Link to="#" className="float-right">
          {" "}
          <i className="fa fa-print" /> Print
        </Link>
        <strong className="d-inline-block mr-3">Order ID: 6123456789</strong>
        <span>Order Date: 16 December 2018</span>
      </header>
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h6 className="text-muted">Delivery to</h6>
            <p>
              Michael Jackson <br />
              Phone +1234567890 Email: myname@pixsellz.com <br />
              Location: Home number, Building name, Street 123, Tashkent, UZB{" "}
              <br />
              P.O. Box: 100123
            </p>
          </div>
          <div className="col-md-4">
            <h6 className="text-muted">Payment</h6>
            <span className="text-success">
              <i className="fab fa-lg fa-cc-visa" />
              Visa **** 4216
            </span>
            <p>
              Subtotal: $356 <br />
              Shipping fee: $56 <br />
              <span className="b">Total: $456 </span>
            </p>
          </div>
        </div>{" "}
        {/* row.// */}
      </div>{" "}
      {/* card-body .// */}
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td width={65}>
                <img
                  src={require("../../../assets/images/items/1.jpg")}
                  className="img-xs border"
                  alt=""
                />
              </td>
              <td>
                <p className="title mb-0">Product name goes here </p>
                <var className="price text-muted">USD 145</var>
              </td>
              <td>
                {" "}
                Seller <br /> Nike clothing{" "}
              </td>
              <td width={250}>
                {" "}
                <Link to="#" className="btn btn-outline-primary">
                  Track order
                </Link>
                <div className="dropdown d-inline-block">
                  <Link
                    to="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle btn btn-outline-secondary"
                  >
                    More
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      Return
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Cancel order
                    </Link>
                  </div>
                </div>{" "}
                {/* dropdown.// */}
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={require("../../../assets/images/items/2.jpg")}
                  className="img-xs border"
                  alt=""
                />
              </td>
              <td>
                <p className="title mb-0">Another name goes here </p>
                <var className="price text-muted">USD 15</var>
              </td>
              <td>
                {" "}
                Seller <br /> ABC shop{" "}
              </td>
              <td>
                {" "}
                <Link to="#" className="btn btn-outline-primary">
                  Track order
                </Link>
                <div className="dropdown d-inline-block">
                  <Link
                    to="#"
                    data-toggle="dropdown"
                    className="dropdown-toggle btn btn-outline-secondary"
                  >
                    More
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      Return
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Cancel order
                    </Link>
                  </div>
                </div>{" "}
                {/* dropdown.// */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>{" "}
      {/* table-responsive .end// */}
    </article>{" "}
    {/* card order-item .// */}
  </main>
);

export default Orders;
