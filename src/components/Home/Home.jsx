import "./Home.css";

import { Container } from "react-bootstrap";

import { FavoriteList, SortList} from "..";

const Home = ({sortDataByFirstName}) => {
  return (
    <Container>
      <div className="divider">Favorite List</div>
      <FavoriteList sortDataByFirstName={sortDataByFirstName}/>
      <div className="divider">All Contacts</div>
      <SortList sortDataByFirstName={sortDataByFirstName}/>
    </Container>
  );
};

export default Home;
