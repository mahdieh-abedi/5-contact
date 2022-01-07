import React,{useContext} from "react";
import { Container } from "react-bootstrap";
import { FavoriteList, SortList } from "..";
import { ThemeContext } from "../Context/ThemeContext";

const Home = ({ sortDataByFirstName }) => {
  const{theme}=useContext(ThemeContext)

  return (
    <Container  style={{ backgroundColor: theme.backGround, color:theme.color} }>
      <div
        style={{
          padding: 10,
          fontSize: 14,
          fontWeight: 900,
          backgroundColor: theme.dividerBackground,
          borderRadius: 10,
        }}
      >
        Favorite List
      </div>
      <FavoriteList sortDataByFirstName={sortDataByFirstName} />
      <div
        style={{
          padding: 10,
          fontSize: 14,
          fontWeight: 900,
          backgroundColor: theme.dividerBackground,
          borderRadius: 10,
        }}
      >
        All Contacts
      </div>
      <SortList sortDataByFirstName={sortDataByFirstName} />
    </Container>
  );
};

export default Home;
