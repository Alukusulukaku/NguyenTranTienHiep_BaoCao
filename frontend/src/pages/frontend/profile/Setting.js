import React, { useEffect, useState } from "react";
import { useAuth } from "../../../provider/UserProvider";
import userservice from "../../../services/UserService";
import { useNavigate } from "react-router-dom";

function Setting() {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState(0);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const result = await userservice.getById(token.id);
      setName(result.data.data.name);
      setEmail(result.data.data.email);
      setPhone(result.data.data.phone);
      setAddress(result.data.data.address);
      setUsername(result.data.data.username);
      setRoles(result.data.data.roles);
      setStatus(result.data.data.status);
    }
    fetchData();
  }, [token.id]);

  async function update(e) {
    e.preventDefault();
    var update = new FormData();
    update.append("name", name);
    update.append("email", email);
    update.append("phone", phone);
    update.append("username", username);
    update.append("address", address);
    update.append("status", status);
    update.append("roles", roles);

    const result = await userservice.update(update, token.id);
    if (result.data.success === true) {
      alert("thành công");
      setToken({ name: result.data.data.name, id: result.data.data.id });
      navigate("/");
    } else {
      alert("thất bại");
    }
  }

  return (
    <main className="col-md-9">
      <div className="card">
        <div className="card-body">
          <form onSubmit={update} method="post" className="row">
            <div className="col-md-9">
              <div className="form-row">
                <div className="col form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="col form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>{" "}
              {/* form-row.// */}
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>{" "}
                {/* form-group end.// */}
                <div className="form-group col-md-6">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>{" "}
                {/* form-group end.// */}
              </div>{" "}
              {/* form-row.// */}
              <button className="btn btn-primary">Save</button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>{" "}
            {/* col.// */}
            <div className="col-md">
              <img
                src={require("../../../assets/images/avatars/avatar1.jpg")}
                className="img-md rounded-circle border"
                alt=""
              />
            </div>{" "}
            {/* col.// */}
          </form>
        </div>{" "}
        {/* card-body.// */}
      </div>{" "}
      {/* card .// */}
    </main>
  );
}
export default Setting;
