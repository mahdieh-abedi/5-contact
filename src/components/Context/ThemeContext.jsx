import { useState,createContext } from "react";

export const LightTheme = {
  body: "#fff",
  fontColor: "000",
  header: "#E6E6E6",
  headerBtn: "#248888",
  deletBtn: "#E7475E",
  starCheck: "#F0D879",
  starUnChech: "#E6E6E6",
};
export const DarkTheme = {
  body: "#000",
  fontColor: "#fff",
  header: "#E6E6E6",
  headerBtn: "#248888",
  deletBtn: "#E7475E",
  starCheck: "#F0D879",
  starUnChech: "#E6E6E6",
};
export const ThemeContext = createContext({ theme: {}, setTheme: () => {} });
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
