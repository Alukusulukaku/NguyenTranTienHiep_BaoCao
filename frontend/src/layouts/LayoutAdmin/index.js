import { Navigate, Outlet } from "react-router-dom";
import "../../assets/backend/css/styles.css";
import "../../assets/css/test.css";
import Sidebar from "../../components/backend/Sidebar";
import Footer from "./Footer";

import { useState } from "react";
import { useAuth } from "../../provider/AuthProvider";
import Alert from "../../components/backend/Alert";
import DeleteConfirmModal from "../../components/backend/DeleteConfirmModal";

function LayoutAdmin() {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  if (user) {
    return <Navigate to="/admin/login" />;
  }
  return (
    <>
      <Sidebar show={show} setShow={setShow} />
      <div
        className="overlay"
        style={{
          visibility: `${show ? "visible" : "hidden"}`,
          opacity: `${show ? "50%" : "0%"}`,
        }}
        onClick={() => setShow(false)}
      ></div>

      <div className="tw-p-4 sm:tw-ml-64 tw-mt-14">
        <Alert />
        <DeleteConfirmModal />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default LayoutAdmin;
