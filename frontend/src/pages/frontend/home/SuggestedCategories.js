import React from "react";
import { Link } from "react-router-dom";
const SuggestedCategories = () => (
  <div className="container">
    <section className="padding-bottom">
      <div className="row no-gutters">
        {/* col.// */}{" "}
        <div className="col-md-12 category">
          <div
            className="home-category-banner bg-light-orange text-white"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/sm_banner_kanken.jpg"
              })`,
              backgroundSize: "cover",
            }}
          >
            <h5 className="title">Best trending clothes only for summer</h5>
            <p>
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
            <Link
              to="../../../assets/images/"
              className="btn btn-primary rounded-pill"
            >
              Source now
            </Link>
          </div>
        </div>
        {/* col.// */}
        {/* row.// */}
      </div>{" "}
      {/* card.// */}
    </section>
  </div>
);
export default SuggestedCategories;
