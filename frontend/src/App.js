import "./assets/sass/app.scss";

import { Route, Routes } from "react-router-dom";
import LayoutSite from "./layouts/LayoutSite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterSite from "./routers";
import Login from "./layouts/LayoutAdmin/login";
import AuthProvider from "./provider/AuthProvider";
import { ProtectedRoute } from "./components/backend/ProtectedRoute";
import { AlertProvider } from "./provider/AlertProvider";
import { DeleteProvider } from "./provider/ModalDeleteProvider";
import UserProvider from "./provider/UserProvider";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AlertProvider>
          <DeleteProvider>
            <Routes>
              <Route path="/" element={<LayoutSite />}>
                {RouterSite.RouterPublic.map((route, index) => {
                  const Page = route.component;
                  return (
                    <Route key={index} path={route.path} element={<Page />} />
                  );
                })}
              </Route>
              <Route path="/admin/login" element={<Login />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <LayoutAdmin />
                  </ProtectedRoute>
                }
              >
                {RouterSite.RouterPrivate.map((route, index) => {
                  const Page = route.component;
                  return (
                    <Route key={index} path={route.path} element={<Page />} />
                  );
                })}
              </Route>
            </Routes>
          </DeleteProvider>
        </AlertProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
