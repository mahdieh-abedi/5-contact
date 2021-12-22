import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Avatar } from "@mui/material";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const Search = ({ person, setPerson,setNewPerson, filter, setFilter }) => {
  const handleDelet = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };
  return (
    <Container>
      <Row>
        <Link to="/">
          <ArrowBackIosNewIcon sx={{ fontSize: 30 }} color="action" />
        </Link>
      </Row>
      <Row className="mt-3">
        <Col xs={12}>
          <Form>
            <Form.Control
              type="text"
              placeholder="Search ..."
              onChange={(e) => setFilter(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      {person.filter(
        (item) =>
          item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
          item.familyName.toLowerCase().includes(filter.toLowerCase()) ||
          item.email.toLowerCase().includes(filter.toLowerCase()) ||
          item.number.includes(filter)
      ).length === 0 ? (
        <h6>o0ops... there is no contact with this name</h6>
      ) : (
        person
          .filter(
            (item) =>
              item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
              item.familyName.toLowerCase().includes(filter.toLowerCase()) ||
              item.email.toLowerCase().includes(filter.toLowerCase()) ||
              item.number.includes(filter)
          )
          .map((item) => (
            <Row key={item.id} className="mt-3">
              <Col xs={2}>
                <StarIcon
                  color={item.favorite === true ? "warning" : "disabled"}
                />
              </Col>
              <Col xs={2}>
                <Avatar {...stringAvatar("Kent Dodds")} src={item.image} />
              </Col>
              <Col xs={4}>
                <h6>{item.firstName}</h6>
              </Col>
              <Col xs={2}>
                <ClearIcon
                  sx={{ color: red[500] }}
                  onClick={() => handleDelet(item.id)}
                />
              </Col>
              <Col>
              <Link to="/create">
                <ModeEditIcon
                  color="action"
                  onClick={() => {
                    setNewPerson(item);
                  }}
                />
              </Link>
            </Col>
            </Row>
          ))
      )}
    </Container>
  );
};

export default Search;
