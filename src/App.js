import './App.css';
import React, { useState } from "react";
import {Home, Contacts} from './components';

function App() {
  const [person,setPerson] = useState(Contacts);
  return (
    <div className="App">
      <Home person={person} setPerson={setPerson}/>
    </div>
  );
}

export default App;
