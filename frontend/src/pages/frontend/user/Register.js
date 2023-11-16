import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import userservice from "../../../services/UserService";

function Register(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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

  async function register(event) {
    if (password === repassword) {
      event.preventDefault();
      var user = new FormData();
      user.append("name", lastname.trim() + " " + firstname.trim());
      user.append("username", username.trim());
      user.append("email", email.trim());
      user.append("address", address.trim());
      user.append("phone", phone.trim());
      user.append("password", password);
      user.append("roles", 2);
      user.append("status", 1);

      await userservice.create(user).then(function (res) {
        if (res.data.success === true) {
          props.change(true);
        } else {
          setMessage(res.data.message);
        }
      });
    } else {
      return;
    }
  }

  return (
    <>
      <div
        className="card mx-auto"
        style={{
          maxWidth: 520,
          marginTop: 40,
          borderRadius: 17,
        }}
      >
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Sign up</h4>
          </header>
          <form onSubmit={register} method="post">
            <div className="form-row">
              <div className="col form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name..."
                  required
                />
              </div>
              <div className="col form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name..."
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username..."
                required
              />
              <small className="form-text text-muted">
                You'll use this to login to our site.
              </small>
            </div>
            <div className="form-row">
              <div className="col form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremailhere@gmail.com"
                  required
                />
                <small className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="col form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1234567890"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="custom-control custom-radio custom-control-inline">
                <input
                  className="custom-control-input"
                  defaultChecked=""
                  type="radio"
                  name="gender"
                  defaultValue="option1"
                />
                <span className="custom-control-label"> Male </span>
              </label>
              <label className="custom-control custom-radio custom-control-inline">
                <input
                  className="custom-control-input"
                  type="radio"
                  name="gender"
                  defaultValue="option2"
                />
                <span className="custom-control-label"> Female </span>
              </label>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="1501 Ocean Ave, Santa Monica, CA 90401, USA"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Create password</label>
                <input
                  className={`form-control ${
                    password !== "" && repassword !== ""
                      ? password === repassword
                        ? "tw-border-green-400"
                        : "tw-border-red-400"
                      : ""
                  }`}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="*********"
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
              <div className="form-group col-md-6">
                <label>Repeat password</label>
                <input
                  className={`form-control ${
                    password !== "" && repassword !== ""
                      ? password === repassword
                        ? "tw-border-green-400"
                        : "tw-border-red-400"
                      : ""
                  }`}
                  type="password"
                  value={repassword}
                  onChange={(e) => setRepassword(e.target.value)}
                  placeholder="*********"
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
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
              {message == null ? (
                ""
              ) : (
                <small className="form-text text-muted tw-text-red-500 tw-text-sm mt-2">
                  {message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                  required
                />
                <div className="custom-control-label">
                  I am agree with <Link to="#">terms and contitions</Link>
                </div>
              </label>
            </div>
          </form>
        </article>

        <p className="text-center mb-4">
          Already a member?{" "}
          <Link to="#" onClick={() => props.change(true)}>
            Sign in
          </Link>
        </p>
      </div>

      <br />
      <br />
    </>
  );
}

export default Register;
