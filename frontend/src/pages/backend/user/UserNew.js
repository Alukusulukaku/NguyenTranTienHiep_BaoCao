import { Link, useNavigate } from "react-router-dom";
import AlertContext from "../../../provider/AlertProvider";
import { useContext, useEffect, useRef, useState } from "react";
import userservice from "../../../services/UserService";

function UserNew() {
  let navigate = useNavigate();
  const [, setAlert] = useContext(AlertContext);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [message, setMessage] = useState(null);
  const timerRef = useRef(null);
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setMessage(null);
    }, 10000);
  }, [message]);

  const [status, setStatus] = useState(1);
  const [roles, setRoles] = useState(2);

  async function userStore(event) {
    if (password === repassword) {
      event.preventDefault();
      var user = new FormData();
      user.append("name", lastname.trim() + " " + firstname.trim());
      user.append("username", username.trim());
      user.append("email", email.trim());
      user.append("address", address.trim());
      user.append("phone", phone.trim());
      user.append("password", password);
      user.append("roles", roles);
      user.append("status", status);

      await userservice.create(user).then(function (res) {
        if (res.data.success === true) {
          navigate(
            `/admin/user/${
              res.data.data.roles === 1 ? "employees" : "customers"
            }/1`
          );
          setAlert({
            text: "Created a record successfully!!",
            type: "success",
          });
        } else {
          setAlert({
            text: res.data.message,
            type: "failed",
          });
        }
      });
    } else {
      return;
    }
  }
  return (
    <>
      <nav
        className="tw-flex tw-px-5 tw-py-3 tw-text-gray-700 tw-border tw-border-gray-200 tw-rounded-lg tw-bg-gray-50 light:tw-bg-gray-800 light:tw-border-gray-700 tw-mb-5 tw-shadow-md"
        aria-label="Breadcrumb"
      >
        <ol className="tw-inline-flex tw-items-center tw-space-x-1 md:tw-space-x-3">
          <li className="tw-inline-flex tw-items-center">
            <Link
              to="#"
              className="tw-inline-flex tw-items-center tw-text-sm tw-font-medium tw-text-gray-700 hover:tw-text-blue-600 light:tw-text-gray-400 light:hover:tw-text-white"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="tw-flex tw-items-center">
              <svg
                className="tw-w-3 tw-h-3 tw-mx-1 tw-text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="tw-ml-1 tw-text-sm tw-font-medium tw-text-gray-500 md:tw-ml-2 light:tw-text-gray-400">
                User
              </span>
            </div>
          </li>
          <li>
            <div className="tw-flex tw-items-center">
              <svg
                className="tw-w-3 tw-h-3 tw-mx-1 tw-text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="tw-ml-1 tw-text-sm tw-font-medium tw-text-gray-500 md:tw-ml-2 light:tw-text-gray-400">
                New a user
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="tw-flex tw-justify-start">
        <button
          type="button"
          className="tw-flex tw-items-center focus:tw-outline-none tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-2 focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2 tw-mr-2 tw-mb-2 light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
          onClick={() => navigate(-1)}
        >
          <svg
            className="tw-w-5 tw-h-5 tw-text-gray-800 dark:tw-text-white tw-me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
          Go Back
        </button>
      </div>
      <div className="tw-relative tw-overflow-x-auto tw-shadow-md tw-bg-white sm:tw-rounded-lg tw-p-10">
        <form method="post" onSubmit={userStore}>
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <div>
                <label
                  htmlFor="fname"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="fname"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                  placeholder="Enter first name..."
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="lname"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lname"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                  placeholder="Enter last name..."
                  required
                />
              </div>
            </div>
          </div>
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                  placeholder="Enter username..."
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                  placeholder="Enter email..."
                  required
                />
              </div>
            </div>
          </div>
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                  placeholder="Enter phone number..."
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500"
                  placeholder="Enter address..."
                  required
                />
              </div>
            </div>
          </div>
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`tw-bg-gray-50 tw-border ${
                    password !== "" && repassword !== ""
                      ? password === repassword
                        ? "tw-border-green-400"
                        : "tw-border-red-400"
                      : "tw-border-gray-300"
                  } tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500`}
                  placeholder="************"
                  required
                />
                {password !== "" && repassword !== "" ? (
                  password === repassword ? (
                    <small className="form-text text-muted tw-text-green-400">
                      Password matched.
                    </small>
                  ) : (
                    <small className="form-text text-muted tw-text-red-400">
                      Password doesn't match.
                    </small>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="repass"
                  className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
                >
                  Repeat password
                </label>
                <input
                  type="password"
                  id="repass"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                  className={`tw-bg-gray-50 tw-border ${
                    password !== "" && repassword !== ""
                      ? password === repassword
                        ? "tw-border-green-400"
                        : "tw-border-red-400"
                      : "tw-border-gray-300"
                  } tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500`}
                  placeholder="************"
                  required
                />
                {password !== "" && repassword !== "" ? (
                  password === repassword ? (
                    <small className="form-text text-muted tw-text-green-400">
                      Password matched.
                    </small>
                  ) : (
                    <small className="form-text text-muted tw-text-red-400">
                      Password doesn't match.
                    </small>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <hr className="tw-w-48 tw-h-1 tw-mx-auto tw-my-4 tw-bg-gray-300 tw-border-0 tw-rounded md:tw-my-10 light:tw-bg-gray-700" />
          <div className="tw-grid tw-gap-6 tw-mb-6 md:tw-grid-cols-2">
            <div>
              <label
                htmlFor="roles"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Status
              </label>
              <select
                id="roles"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
              >
                <option value="2">Customer</option>
                <option value="1">Administrator</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 light:text-white"
              >
                Status
              </label>
              <select
                id="status"
                className="tw-bg-gray-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 light:tw-bg-gray-700 light:tw-border-gray-600 light:tw-placeholder-gray-400 light:tw-text-white light:focus:tw-ring-blue-500 light:focus:tw-border-blue-500 disabled:tw-bg-gray-400"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="2">Inactive</option>
                <option value="1">Active</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="tw-text-white tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-w-full sm:tw-w-auto tw-px-5 tw-py-2.5 tw-text-center light:tw-bg-blue-600 light:hover:tw-bg-blue-700 light:focus:tw-ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default UserNew;
