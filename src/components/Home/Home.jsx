import "./Home.css";

import { Container } from "react-bootstrap";

import { FavoriteList, SortList} from "..";

const Home = ({sortDataByFirstName}) => {
  return (
    <Container>
      <h3 className="divider">Favorite List</h3>
      <FavoriteList sortDataByFirstName={sortDataByFirstName}/>
      <h3 className="divider">All Contacts</h3>
      <SortList sortDataByFirstName={sortDataByFirstName}/>
    </Container>
  );
};

export default Home;
