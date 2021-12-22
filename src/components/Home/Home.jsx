import "./Home.css";
import React, { useEffect } from  "react";
import { Container } from "react-bootstrap";
import { FavoriteList, SortList} from "..";

const Home = ({person,setPerson}) => {
  useEffect(()=>{
    document.title="my contacts";
  },[person])
  return (
    <Container>
      <div className="divider">Favorite List</div>
      <FavoriteList person={person} setPerson={setPerson} />
      <div className="divider">All Contacts</div>
      <SortList person={person} setPerson={setPerson} />
    </Container>
  );
};

export default Home;
