import { Link, Navigate, useParams } from "react-router-dom";
import Overview from "./Overview";
import Address from "./Address";
import Orders from "./Orders";
import Setting from "./Setting";
import { useAuth } from "../../../provider/UserProvider";

function Account() {
  const option = useParams("chucnang");

  const { token, setToken } = useAuth();
  if (!token) {
    // user is not authenticated
    return <Navigate to="/user-auth" />;
  }
  const handlerSignOut = () => {
    setToken();
  };
  return (
    <>
      <section className="section-pagetop bg-gray">
        <div className="container">
          <h2 className="title-page">My account</h2>
        </div>{" "}
        {/* container //  */}
      </section>
      <section className="section-content padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="list-group">
                <Link className="list-group-item" to="/account/overview">
                  {" "}
                  Account overview
                </Link>
                <Link className="list-group-item active" to="/account/address">
                  {" "}
                  My Address{" "}
                </Link>
                <Link className="list-group-item" to="/account/orders">
                  {" "}
                  My Orders{" "}
                </Link>

                <Link className="list-group-item" to="/account/setting">
                  {" "}
                  Settings{" "}
                </Link>
                <Link
                  className="list-group-item"
                  onClick={() => handlerSignOut()}
                  to={"/user-auth"}
                >
                  {" "}
                  Log out{" "}
                </Link>
              </nav>
            </aside>{" "}
            {/* col.// */}
            {(() => {
              switch (option.chucnang) {
                case "overview":
                  return <Overview />;
                case "address":
                  return <Address />;
                case "orders":
                  return <Orders />;
                case "setting":
                  return <Setting />;
                default:
                  return "";
              }
            })()}
            {/* col.// */}
          </div>
        </div>{" "}
        {/* container .//  */}
      </section>
    </>
  );
}

export default Account;
