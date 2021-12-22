import React from "react";
import { Row, Col } from "react-bootstrap";
import { Avatar } from "@mui/material";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import { red } from "@mui/material/colors";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Search = ({ person, setPerson, filter, setFilter }) => {
  const handleDelet = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };
  return (
    <>
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
              <Col>
                <StarIcon
                  color={item.favorite === true ? "warning" : "disabled"}
                />
              </Col>
              <Col xs={2}>
                <Avatar {...stringAvatar("Kent Dodds")} />
              </Col>
              <Col xs={4}>
                <h6>{item.firstName}</h6>
              </Col>
              <Col>
                <ClearIcon
                  sx={{ color: red }}
                  onClick={() => handleDelet(item.id)}
                />
              </Col>
              <Col>
                <ModeEditIcon color="action" />
              </Col>
            </Row>
          ))
      )}
    </>
  );
};

export default Search;
