import "./App.css";
import React, { useState } from "react";
import { Header, Home, Search, Create, Drawer, Contacts } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [person, setPerson] = useState(Contacts);
  const [filter, setFilter] = useState("");
  const [newPerson, setNewPerson] = useState({
    firstName: "",
    familyName: "",
    number: "",
    email: "",
    category: "",
    favorite: false,
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header setFilter={setFilter} />}>
          <Route
            index
            element={
              <Home
                person={person}
                setPerson={setPerson}
                newPerson={newPerson}
                setNewPerson={setNewPerson}
              />
            }
          />

          <Route path="drawer" element={<Drawer />} />
        </Route>
        <Route
          path="search"
          element={
            <Search
              person={person}
              setPerson={setPerson}
              setNewPerson={setNewPerson}
              filter={filter}
              setFilter={setFilter}
            />
          }
        />
        <Route
          path="create"
          element={
            <Create
              person={person}
              setPerson={setPerson}
              newPerson={newPerson}
              setNewPerson={setNewPerson}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
