import { useState, useEffect, createContext} from "react";

import {Data} from ".."

export const PersonContext = createContext({person:[],setPerson:()=>{}});

const PersonContextProvider = ({ children }) => {
    const [person, setPerson] = useState(
      JSON.parse(localStorage.getItem("contacts")) || Data
      );
    
  useEffect(() => {
    document.title = "my contacts";
    localStorage.setItem("contacts", JSON.stringify(person));
  }, [person]);

  return <PersonContext.Provider value={{person,setPerson}}>{children}</PersonContext.Provider>;
};
export default PersonContextProvider