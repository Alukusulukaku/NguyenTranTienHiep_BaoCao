import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pageservice from "../../services/PageService";
import categoryservice from "../../services/CategoryService";

function Footer() {
  const [pages, setPages] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result = await pageservice.getAll_rev();
        setPages(result.data.data);
        const result1 = await categoryservice.getAll(4, 1);
        setCategories(result1.data.data);
      }
      fetchItems();
    }, 130);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  return (
    <footer className="section-footer bg-primary">
      <div className="container">
        <section className="footer-top padding-y-lg text-white">
          <div className="row">
            <aside className="col-md col-6">
              <h6 className="title">Categories</h6>
              <ul className="list-unstyled">
                {categories.map((item, index) => {
                  return (
                    <li>
                      <Link to="#" key={index}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
            <aside className="col-md col-6">
              <h6 className="title">Company</h6>
              <ul className="list-unstyled">
                {pages.map((item, index) => {
                  return (
                    <li>
                      <Link to={`/company/${item.slug}`} key={index}>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <aside className="col-md col-6">
              <h6 className="title">Account</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="#"> User Login </Link>
                </li>
                <li>
                  <Link to="#"> User register </Link>
                </li>
                <li>
                  <Link to="#"> Account Setting </Link>
                </li>
                <li>
                  <Link to="#"> My Orders </Link>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Social</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook" /> Facebook
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" /> Twitter
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram" /> Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube" /> Youtube
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          {/* row.// */}
        </section>
        {/* footer-top.// */}
        <section className="footer-bottom text-center">
          <p className="text-white">
            Privacy Policy - Terms of Use - User Information Legal Enquiry Guide
          </p>
          <p className="text-muted">
            © 2023 Nguyen Tran Tien Hiep, All rights reserved
          </p>
          <br />
        </section>
      </div>
      {/* //container */}
    </footer>
  );
}

export default Footer;
