import "./Home.css"
import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {FavoriteList,SortList} from ".."
import {Link} from "react-router-dom"

const Home = ({ person, setPerson }) => {
  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <MenuIcon color="action" fontSize="large" className="mx-2" />
        </Col>
        <Col xs={7}>
          <Form>
            <Link>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            </Link>
          </Form>
        </Col>
        <Col>
          <AddBoxIcon color="success" fontSize="large" />
        </Col>
      </Row>
      <div className="divider">Favorite List</div>
      <FavoriteList person={person} setPerson={setPerson} />
      <div className="divider">All Contacts</div>
      <SortList person={person} setPerson={setPerson} />
    </Container>
  );
};

export default Home;
