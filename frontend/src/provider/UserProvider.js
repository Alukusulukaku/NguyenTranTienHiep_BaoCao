import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
const UserContext = createContext("");

const UserProvider = ({ children }) => {
  const [token, setToken_] = useState(
    JSON.parse(sessionStorage.getItem("usertoken"))
  );

  // call this function when you want to authenticate the user
  const setToken = (newToken) => {
    setToken_(newToken);
  };
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      sessionStorage.setItem("usertoken", JSON.stringify(token));
    } else {
      delete axios.defaults.headers.common["Authorization"];
      sessionStorage.removeItem("usertoken");
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [token]
  );
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};
export default UserProvider;
