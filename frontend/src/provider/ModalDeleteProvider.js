import { createContext, useState } from "react";

const DeleteContext = createContext();

export const DeleteProvider = ({ children }) => {
  const [deleteStatus, setDelete] = useState({
    show: false,
    return: 0,
    id: 0,
    table: "slider",
    redirect: false,
  });

  return (
    <DeleteContext.Provider value={[deleteStatus, setDelete]}>
      {children}
    </DeleteContext.Provider>
  );
};

export default DeleteContext;
