import "./App.css";
import React, { useState } from "react";
import { Header, Home, Search, Create, Drawer, Contacts } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [person, setPerson] = useState(Contacts);
  const [filter, setFilter] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header setFilter={setFilter} />}>
          <Route
            index
            element={<Home person={person} setPerson={setPerson} />}
          />
          <Route
            path="search"
            element={
              <Search
                person={person}
                setPerson={setPerson}
                filter={filter}
                setFilter={setFilter}
              />
            }
          />
          <Route path="create" element={<Create />} />
          <Route path="drawer" element={<Drawer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
