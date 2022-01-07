import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {PersonContext,NewPersonContext} from "../.."

const Friend = ({sortDataByFirstName }) => {
  const{person,setPerson}=useContext(PersonContext)
  const{setNewPerson}=useContext(NewPersonContext)
  const handleDelet = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };
  return (
    <Container>
      <Row>
        <Link to="/setting">
        <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={{ color: "#E6E6E6" }}
          />
        </Link>
      </Row>
      <div className="divider">Friend list</div>
      {sortDataByFirstName
        .filter((item) => item.category === "Friend").length === 0 ? (
        <h6>there is no friend category in your contacts</h6>
      ) : (
        sortDataByFirstName
          .filter((item) => item.category === "Friend")
          .map((item) => (
            <Row key={item.id} className="mt-3">
              <Col>
                <StarIcon
                  color={item.favorite === true ? "warning" : "disabled"}
                />
              </Col>
              <Col xs={2}>
                <Link to={`/profile/${item.id}`}>
                  <Avatar {...stringAvatar("Kent Dodds")} src={item.image} />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to={`/profile/${item.id}`}>
                  <h6>{item.firstName}</h6>
                </Link>
              </Col>
              <Col>
                <ClearIcon
                  sx={{ color: red[500] }}
                  onClick={() => handleDelet(item.id)}
                />
              </Col>
              <Col>
                <Link to="/createandupdate">
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

export default Friend;
