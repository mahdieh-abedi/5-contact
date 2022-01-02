import React,{useContext} from "react";

import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import {PersonContext,NewPersonContext} from ".."

import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Work = ({sortDataByFirstName }) => {
  const{person,setPerson}=useContext(PersonContext)
  const{setNewPerson}=useContext(NewPersonContext)

  const handleDelet = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };
  return (
    <Container>
      <Row>
        <Link to="/setting">
          <ArrowBackIosNewIcon sx={{ fontSize: 30 }} color="action" />
        </Link>
      </Row>
      <div className="divider">Work list</div>
      {sortDataByFirstName
        .filter((item) => item.category === "Work").length === 0 ? (
        <h6>there is no work category in your contacts</h6>
      ) : (
        sortDataByFirstName
          .filter((item) => item.category === "Work")
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

export default Work;
