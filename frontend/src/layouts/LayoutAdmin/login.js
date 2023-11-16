import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import userservice from "../../services/UserService";
import { useAuth } from "../../provider/AuthProvider";

function Login() {
  const { setToken } = useAuth();
  let navigate = useNavigate();
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

  function loginSubmit(event) {
    event.preventDefault();
    var user = new FormData();
    user.append("username", username);
    user.append("pass", password);
    user.append("roles", 1);

    userservice.login(user).then(function (res) {
      if (res.data.success === true) {
        setToken({ name: res.data.data.name, id: res.data.data.id });
        navigate("/admin", { replace: true });
      } else {
        setToken();
        setMessage(res.data.message);
      }
    });
  }

  return (
    <>
      <main className="tw-mt-0 tw-transition-all tw-duration-200 tw-ease-soft-in-out">
        <section>
          <div className="tw-relative tw-flex tw-items-center tw-p-0 tw-overflow-hidden tw-bg-center tw-bg-cover tw-min-75-screen">
            <div className="tw-container tw-z-10">
              <div className="tw-flex tw-flex-wrap tw-mt-0 -tw-mx-3">
                <div className="tw-flex tw-flex-col tw-w-full tw-max-w-full tw-px-3 tw-mx-auto md:tw-flex-0 tw-shrink-0 md:tw-w-6/12 lg:tw-w-5/12 xl:tw-w-4/12">
                  <div className="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-mt-32 tw-break-words tw-bg-transparent tw-border-0 tw-shadow-none tw-rounded-2xl tw-bg-clip-border">
                    <div className="tw-p-6 tw-pb-0 tw-mb-0 tw-bg-transparent tw-border-b-0 tw-rounded-t-2xl tw-text-lg">
                      <h3 className="tw-relative tw-z-10 tw-font-bold tw-text-transparent tw-bg-gradient-to-tl tw-from-rose-700 tw-to-red-300 tw-bg-clip-text">
                        Welcome back
                      </h3>
                      <p className="tw-mb-0">
                        Enter your username and password to sign in
                      </p>
                    </div>
                    <div className="tw-flex-auto tw-p-6">
                      <form method="post" onSubmit={loginSubmit}>
                        <label className="tw-mb-2 tw-ml-1 tw-font-bold tw-text-xs tw-text-slate-700">
                          Username
                        </label>
                        <div className="tw-mb-4">
                          <input
                            type="text"
                            className="focus:tw-shadow-soft-primary-outline tw-text-sm tw-leading-5.6 tw-ease-soft tw-block tw-w-full tw-appearance-none tw-rounded-lg tw-border tw-border-solid tw-border-gray-300 tw-bg-white tw-bg-clip-padding tw-px-3 tw-py-2 tw-font-normal tw-text-gray-700 tw-transition-all focus:tw-border-rose-400 focus:tw-outline-none focus:tw-transition-shadow"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="username-addon"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <label className="tw-mb-2 tw-ml-1 tw-font-bold tw-text-xs tw-text-slate-700">
                          Password
                        </label>
                        <div className="tw-mb-4">
                          <input
                            type="password"
                            className="focus:tw-shadow-soft-primary-outline tw-text-sm tw-leading-5.6 tw-ease-soft tw-block tw-w-full tw-appearance-none tw-rounded-lg tw-border tw-border-solid tw-border-gray-300 tw-bg-white tw-bg-clip-padding tw-px-3 tw-py-2 tw-font-normal tw-text-gray-700 tw-transition-all focus:tw-border-rose-400 focus:tw-outline-none focus:tw-transition-shadow"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="tw-text-center">
                          <button
                            type="submit"
                            className="tw-inline-block tw-w-full tw-px-6 tw-py-3 tw-mt-6 tw-mb-0 tw-font-bold tw-text-center tw-text-white tw-uppercase tw-align-middle tw-transition-all tw-bg-transparent tw-border-0 tw-rounded-lg tw-cursor-pointer tw-shadow-soft-md tw-bg-x-25 tw-bg-150 tw-leading-pro tw-text-xs tw-ease-soft-in tw-tracking-tight-soft tw-bg-gradient-to-tl tw-from-rose-700 tw-to-red-300 hover:tw-scale-102 hover:tw-shadow-soft-xs active:tw-opacity-85"
                          >
                            Sign in
                          </button>
                          <div class="tw-text-sm tw-mb-4 tw-w-max tw-text-red-500">
                            {message == null ? "" : message}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tw-w-full tw-max-w-full tw-px-3 lg:tw-flex-0 tw-shrink-0 md:tw-w-6/12">
                  <div className="tw-absolute tw-top-0 tw-hidden tw-w-3/5 tw-h-full -tw-mr-32 tw-overflow-hidden -tw-skew-x-12 -tw-right-40 tw-rounded-bl-xl md:tw-block">
                    <div
                      className="tw-absolute tw-inset-x-0 tw-top-0 tw-z-0 tw-h-full -tw-ml-16  tw-bg-cover tw-skew-x-12"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "/flower.jpg"
                        })`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="tw-py-12">
        <div className="tw-container">
          <div className="tw-flex tw-flex-wrap -tw-mx-3">
            <div className="tw-flex-shrink-0 tw-w-full tw-max-w-full tw-mx-auto tw-mb-6 tw-text-center lg:tw-flex-0 lg:tw-w-8/12">
              <Link
                to="#"
                target="_blank"
                className="tw-mb-2 tw-mr-4 tw-text-slate-400 sm:tw-mb-0 xl:tw-mr-12"
              >
                Company
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mb-2 tw-mr-4 tw-text-slate-400 sm:tw-mb-0 xl:tw-mr-12"
              >
                About Us
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mb-2 tw-mr-4 tw-text-slate-400 sm:tw-mb-0 xl:tw-mr-12"
              >
                Team
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mb-2 tw-mr-4 tw-text-slate-400 sm:tw-mb-0 xl:tw-mr-12"
              >
                Products
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mb-2 tw-mr-4 tw-text-slate-400 sm:tw-mb-0 xl:tw-mr-12"
              >
                Blog
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mb-2 tw-mr-4 tw-text-slate-400 sm:tw-mb-0 xl:tw-mr-12"
              >
                Pricing
              </Link>
            </div>
            <div className="tw-flex-shrink-0 tw-w-full tw-max-w-full tw-mx-auto tw-mt-2 tw-mb-6 tw-text-center lg:tw-flex-0 lg:tw-w-8/12">
              <Link
                to="#"
                target="_blank"
                className="tw-mr-6 tw-text-slate-400"
              >
                <span className="text-lg fab fa-dribbble" />
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mr-6 tw-text-slate-400"
              >
                <span className="text-lg fab fa-twitter" />
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mr-6 tw-text-slate-400"
              >
                <span className="text-lg fab fa-instagram" />
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mr-6 tw-text-slate-400"
              >
                <span className="text-lg fab fa-pinterest" />
              </Link>
              <Link
                to="#"
                target="_blank"
                className="tw-mr-6 tw-text-slate-400"
              >
                <span className="text-lg fab fa-github" />
              </Link>
            </div>
          </div>
          <div className="tw-flex tw-flex-wrap -tw-mx-3">
            <div className="tw-w-8/12 tw-max-w-full tw-px-3 tw-mx-auto tw-mt-1 tw-text-center tw-flex-0">
              <p className="tw-mb-0 tw-text-slate-400">Created by Tao.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Login;
