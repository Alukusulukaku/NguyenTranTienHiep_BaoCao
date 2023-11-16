import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import gif from "../../../assets/test.gif";
import { useAuth } from "../../../provider/UserProvider";
import { Navigate } from "react-router-dom";

function LoginAndRegister() {
  const { token } = useAuth();
  const [form, setForm] = useState(true);
  if (token) {
    // user is authenticated
    return <Navigate to="/" />;
  }

  return (
    <section
      className="section-content padding-y"
      style={{
        minHeight: "84vh",
        backgroundImage: `url(${gif})`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
      }}
    >
      {form ? <Login change={setForm} /> : <Register change={setForm} />}
    </section>
  );
}

export default LoginAndRegister;
