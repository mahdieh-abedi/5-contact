import "./Home.css";
import React, { useEffect } from  "react";
import { Container } from "react-bootstrap";
import { FavoriteList, SortList} from "..";

const Home = ({person,setPerson,setNewPerson}) => {
  return (
    <Container>
      <div className="divider">Favorite List</div>
      <FavoriteList person={person} setPerson={setPerson} setNewPerson={setNewPerson} />
      <div className="divider">All Contacts</div>
      <SortList person={person} setPerson={setPerson} setNewPerson={setNewPerson}/>
    </Container>
  );
};

export default Home;
