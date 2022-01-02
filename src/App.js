import "./App.css";

import { useContext } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  Header,
  Home,
  Search,
  Create,
  Family,
  Setting,
  Work,
  Friend,
  PersonProfile,
  PersonContext,
  FilterProvider,
} from "./components";

function App() {
  const { person } = useContext(PersonContext);
  const sortDataByFirstName = person.sort((a, b) =>
    a.firstName > b.firstName ? 1 : -1
  );
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={<Home sortDataByFirstName={sortDataByFirstName} />}
            />
          </Route>
          <Route path="profile/:ID" element={<PersonProfile />} />
          <Route path="search" element={<Search />} />
          <Route path="setting" element={<Setting />} />
          <Route path="createandupdate" element={<Create />} />
          <Route
            path="family"
            element={<Family sortDataByFirstName={sortDataByFirstName} />}
          />
          <Route
            path="friend"
            element={<Friend sortDataByFirstName={sortDataByFirstName} />}
          />
          <Route
            path="work"
            element={<Work sortDataByFirstName={sortDataByFirstName} />}
          />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

export default App;
