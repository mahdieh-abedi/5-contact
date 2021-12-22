import React from "react";
import { Row, Col } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Link } from "react-router-dom";

const FavoriteList = ({ person, setPerson, setNewPerson, newPerson }) => {
  const handleDelet = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };
  return (
    <>
      {person.filter((item) => item.favorite === true).length === 0 ? (
        <h6>Please select favorite contacts to reach easy to them</h6>
      ) : (
        person
          .filter((item) => item.favorite === true)
          .map((item) => (
            <Row className="mt-3" key={item.id}>
              <Col>
                <StarIcon color="warning" />
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
          ))
      )}
    </>
  );
};

export default FavoriteList;
