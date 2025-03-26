import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext({
  adminData: {},
  setAdminData: () => {},
});

export const AdminProvider = ({ children }) => {
  const storedAdminData = localStorage.getItem("adminData");
  const [adminData, setAdminData] = useState(JSON.parse(storedAdminData));

  useEffect(() => {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }, [adminData]);

  return (
    <AdminContext.Provider value={{ adminData, setAdminData }}>
      {children}
    </AdminContext.Provider>
  );
};
