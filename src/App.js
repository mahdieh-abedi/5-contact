import './App.css';
import React, { useState } from "react";
import {Home, Contacts,Create,Search,Setting} from './components';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  const [person,setPerson] = useState(Contacts);
  return (
    <BrowserRouter className="App">
    <Routes >
      <Route path='/' element={<Home person={person} setPerson={setPerson}/>}/>
      <Route path='search' element={<Search person={person} setPerson={setPerson}/>}/>
      <Route path='create' element={<Create person={person} setPerson={setPerson}/>}/>
      <Route path='setting' element={<Setting person={person} setPerson={setPerson}/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
