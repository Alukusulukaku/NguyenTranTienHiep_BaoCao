import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuservice from "../../services/MenuService";
import Submenu from "../../components/frontend/Submenu";
import productservice from "../../services/ProductService";
import urlImage from "../../config";
import { useAuth } from "../../provider/UserProvider";
function Header() {
  let navigate = useNavigate();
  const [menus, setMenus] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { token, setToken } = useAuth();
  const logout = () => {
    setToken();
    navigate("/user-auth", { replace: true });
  };

  useEffect(function () {
    const delayDebounceFn = setTimeout(() => {
      async function fetchItems() {
        const result = await menuservice.getMenus();
        setMenus(result.data.data);
      }
      fetchItems();
    }, 100);
    return () => clearTimeout(delayDebounceFn);
  }, []);
  useEffect(
    function () {
      const delayDebounceFn = setTimeout(() => {
        async function fetchItems() {
          var searchbox = new FormData();
          searchbox.append("search", search);
          searchbox.append("limit", -1);
          searchbox.append("page", -1);
          const result = await productservice.productsBySearch(searchbox);
          setProducts(result.data.data);
        }
        fetchItems();
      }, 1500);
      return () => clearTimeout(delayDebounceFn);
    },
    [search]
  );

  return (
    <>
      <header className={`section-header`}>
        <section className="header-main border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-1 col-lg-2 col-md-12 text-center padding-y-sm">
                <Link to="/" className="brand-wrap header--logo">
                  <img
                    className="logo"
                    src={require("../../assets/images/logo.png")}
                    alt=""
                  />
                </Link>
                {/* brand-wrap.// */}
              </div>

              {/* col.// */}
              <div className="col-xl-11 col-lg-10 col-sm-12 col-md-12">
                <div className="widgets-wrap d-flex float-lg-right justify-content-center padding-y-sm">
                  <div className="widget-header">
                    <Link to="#" className="ml-4 icontext">
                      <div className="icon">
                        <i className="text-primary fa fa-lg fa-heart" />
                      </div>
                      <div className="text">
                        <small className="text-muted">Favorites</small>
                        <div>0 item</div>
                      </div>
                    </Link>
                  </div>{" "}
                  {/* widget .// */}
                  <div className="widget-header">
                    <Link to="/cart" className="ml-4 icontext">
                      <div className="icon">
                        <i className="text-primary fa fa-lg fa-shopping-cart" />
                      </div>
                      <div className="text">
                        <small className="text-muted">Cart</small>
                        <div>3 items</div>
                      </div>
                    </Link>
                  </div>{" "}
                  {/* widget .// */}
                  <div className="widget-header dropdown">
                    {!token ? (
                      <Link to={`/user-auth`} className="ml-4 icontext">
                        <div className="icon">
                          <i className="text-primary fa fa-lg fa-user" />
                        </div>
                        <div className="text">
                          <small className="text-muted">Hello.</small>
                          <div>{"Login"}</div>
                        </div>
                      </Link>
                    ) : (
                      <Link
                        to={`#`}
                        className="ml-4 icontext"
                        data-toggle="dropdown"
                        data-offset="20,10"
                      >
                        <div className="icon">
                          <i className="text-primary fa fa-lg fa-user" />
                        </div>
                        <div className="text">
                          <small className="text-muted">Hello.</small>
                          <div>
                            <span className="text12">{token.name}</span>
                            <i className="fa fa-caret-down" />
                          </div>
                        </div>
                      </Link>
                    )}
                    {!token ? (
                      ""
                    ) : (
                      <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to="/account/overview">
                          Profile setting
                        </Link>
                        <Link className="dropdown-item" to="/account/orders">
                          My orders
                        </Link>
                        <hr className="dropdown-divider" />
                        <button className="dropdown-item" onClick={logout}>
                          Log out
                        </button>
                      </div>
                    )}{" "}
                    {/*  dropdown-menu .// */}
                  </div>{" "}
                  {/* widget  dropdown.// */}
                </div>
              </div>
              {/* col.// */}
            </div>
            {/* row.// */}
          </div>
          {/* container.// */}
        </section>
        {/* header-main .// */}
      </header>
      <nav
        className={`navbar navbar-main navbar-expand-lg border-bottom main-menu`}
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              {menus.map((item, index) => {
                if (item.parent_id === 0 && item.children.length !== 0) {
                  return (
                    <li className="nav-item dropdown" key={index}>
                      <Link
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        to={item.path}
                      >
                        {item.name}
                      </Link>
                      <div className={`dropdown-menu dropdown-large `}>
                        <div className="row bg-white rounded-0 m-0 shadow-sm">
                          <div className="col-lg-7 col-xl-8">
                            <div className="p-4">
                              <div className="row">
                                <div className="col-lg-12 d-flex flex-wrap mb-4">
                                  <ul className="list-unstyled">
                                    <Submenu children={item.children} />
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*  row end .// */}
                      </div>
                      {/*  dropdown-menu dropdown-large end.// */}
                    </li>
                  );
                } else if (item.parent_id === 0 && item.children.length === 0) {
                  return (
                    <li className="nav-item">
                      <Link
                        to={item.path}
                        className="nav-link text-small pb-0 "
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                } else {
                  return "";
                }
              })}
            </ul>
            <ul className="navbar-nav ml-md-auto padding-y-sm">
              <li className="nav-item dropdown">
                <div className="col-md-12">
                  <form action="#" className="search-header">
                    <div className="input-group w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                      {search !== "" &&
                      products != null &&
                      search.length >= 3 ? (
                        <ul
                          className="search-results"
                          style={{ position: "absolute", left: 0, top: 40 }}
                        >
                          {products.map((item, index) => {
                            return (
                              <li key={index} className="search-item">
                                <Link
                                  to={`/san-pham/${item.category.slug}/${item.slug}`}
                                  className="search-link"
                                >
                                  <span className="thumbnail">
                                    <img
                                      src={`${urlImage}product/${item.image}`}
                                      alt=""
                                    />
                                  </span>
                                  <span className="title">{item.name}</span>
                                </Link>
                              </li>
                            );
                          })}
                          <li>
                            <Link
                              to={`/search-result/${search}/1`}
                              className="search-link"
                            >
                              <span className="title">See all results...</span>
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>

                  {/* search-wrap .end// */}
                </div>
              </li>
            </ul>
          </div>
          {/* collapse .// */}
        </div>
        {/* container .// */}
      </nav>
    </>
  );
}

export default Header;
