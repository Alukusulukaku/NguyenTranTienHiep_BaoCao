import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";
import { useAuth } from "../../../provider/UserProvider";

function Login(props) {
  let navigate = useNavigate();
  const { setToken } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  function LoginCheck(event) {
    event.preventDefault();
    var user = new FormData();
    user.append("username", username);
    user.append("pass", password);
    user.append("roles", 2);

    userservice.login(user).then(function (res) {
      if (res.data.success === true) {
        setToken({ name: res.data.data.name, id: res.data.data.id });
        navigate("/", { replace: true });
      } else {
        setToken();
        setMessage(res.data.message);
      }
    });
  }

  return (
    <>
      {/* ============================ COMPONENT LOGIN   ================================= */}
      <div
        className="card mx-auto"
        style={{ maxWidth: 380, marginTop: 100, borderRadius: 17 }}
      >
        <div className="card-body">
          <h4 className="card-title mb-4">Sign in</h4>
          <form onSubmit={LoginCheck} method="post">
            <Link to="#" className="btn btn-facebook btn-block mb-2">
              <i className="fab fa-facebook-f" /> &nbsp; Sign in with Facebook
            </Link>
            <Link to="#" className="btn btn-google btn-block mb-4">
              <i className="fab fa-google" /> &nbsp; Sign in with Google
            </Link>
            <div className="form-group">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder="Username"
                required
                type="text"
              />
            </div>
            {/* form-group// */}
            <div className="form-group">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            {/* form-group// */}
            <div className="form-group">
              <Link to="#" className="float-right">
                Forgot password?
              </Link>
              <label className="float-left custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  defaultChecked=""
                />
                <div className="custom-control-label"> Remember </div>
              </label>
            </div>
            {/* form-group form-check .// */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              {message == null ? (
                ""
              ) : (
                <small className="form-text text-muted tw-text-red-500 tw-text-sm mt-2">
                  {message}
                </small>
              )}
            </div>
            {/* form-group// */}
          </form>
        </div>
        {/* card-body.// */}
        <p className="text-center mb-4">
          Don't have account?{" "}
          <Link to="#" onClick={() => props.change(false)}>
            Sign up
          </Link>
        </p>
      </div>
      {/* card .// */}

      <br />
      <br />
      {/* ============================ COMPONENT LOGIN  END.// ================================= */}
    </>
  );
}

export default Login;
