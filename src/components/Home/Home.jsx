import { Container } from "react-bootstrap";
import { FavoriteList, SortList } from "..";

const Home = ({ sortDataByFirstName }) => {
  return (
    <Container>
      <div
        style={{
          padding: 10,
          fontSize: 14,
          fontWeight: 900,
          backgroundColor: "#248888",
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
          backgroundColor: "#248888",
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
