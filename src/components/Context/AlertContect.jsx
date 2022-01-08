import { useState, createContext } from "react";

export const AlertContext = createContext({ alert: "", setAlert: () => {} });

const AlertContextProvider = ({ children }) => {
    const [alert, setAlert] = useState("none");
    return (
    <AlertContext.Provider value={{ alert, setAlert }}>{children}</AlertContext.Provider>
  );
};
export default AlertContextProvider;