import "./App.css";

import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Header,
  Home,
  Search,
  Create,
  Family,
  Contacts,
  Setting,
  Work,
  Friend,
  PersonProfile,
} from "./components";


function App() {
  const [person, setPerson] = useState(Contacts, [], () => {
    const LocalData = localStorage.getItem("contacts");
    return LocalData ? JSON.parse(LocalData) : Contacts;
  });

  const [filter, setFilter] = useState("");

  const [newPerson, setNewPerson] = useState({
    firstName: "",
    familyName: "",
    number: "",
    email: "",
    category: "",
    favorite: false,
  });

  useEffect(() => {
    document.title = "my contacts";
    localStorage.setItem("contacts", JSON.stringify(person));
  }, [person]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route
            index
            element={
              <Home
                person={person}
                setPerson={setPerson}
                setNewPerson={setNewPerson}
              />
            }
          />
        </Route>
        <Route
          path="profile/:ID"
          element={<PersonProfile person={person}/>}
        />
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
          path="setting"
          element={<Setting person={person} />}
        />
        <Route
          path="createandupdate"
          element={
            <Create
              person={person}
              setPerson={setPerson}
              newPerson={newPerson}
              setNewPerson={setNewPerson}
            />
          }
        />
        <Route
          path="family"
          element={
            <Family
              person={person}
              setPerson={setPerson}
              setNewPerson={setNewPerson}
            />
          }
        />
        <Route
          path="friend"
          element={
            <Friend
              person={person}
              setPerson={setPerson}
              setNewPerson={setNewPerson}
            />
          }
        />
        <Route
          path="work"
          element={
            <Work
              person={person}
              setPerson={setPerson}
              setNewPerson={setNewPerson}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
