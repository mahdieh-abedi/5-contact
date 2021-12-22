import React from "react";
import { Row, Col } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Link } from "react-router-dom";

const SortList = ({ person, setPerson, setNewPerson, newPerson }) => {
  const handleDelet = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };
  return (
    <>
      {person
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        .map((item) => (
          <Row key={item.id} className="mt-3">
            <Col>
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
            <Col>
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
        ))}
    </>
  );
};

export default SortList;
