import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Avatar } from "@mui/material";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { PersonContext, NewPersonContext } from "../..";
import { ThemeContext } from "../../Context/ThemeContext";

const Family = ({ sortDataByFirstName }) => {
  const { theme } = useContext(ThemeContext);
  const { person, setPerson } = useContext(PersonContext);
  const {setNewPerson } = useContext(NewPersonContext);
  const handleDelet = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };
  return (
    <Container style={{ backgroundColor: theme.backGround }}>
      <Row>
        <Link to="/setting">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={{ color: theme.iconColor }}
          />
        </Link>
      </Row>
      <div
        style={{
          padding: 10,
          fontSize: 14,
          fontWeight: 900,
          backgroundColor: theme.dividerBackground,
          borderRadius: 10,
        }}
      >
        Family list
      </div>
      {sortDataByFirstName.filter((item) => item.category === "Family")
        .length === 0 ? (
        <h6 style={{ color: theme.color }}>
          there is no family category in your contacts
        </h6>
      ) : (
        sortDataByFirstName
          .filter((item) => item.category === "Family")
          .map((item) => (
            <Row key={item.id} className="mt-3">
              <Col>
                <StarIcon
                  color={
                    person.favorite === true
                      ? theme.favoriteColor
                      : theme.iconColor
                  }
                />
              </Col>
              <Col xs={2}>
                <Link to={`/profile/${item.id}`}>
                  <Avatar {...stringAvatar("Kent Dodds")} src={item.image} />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to={`/profile/${item.id}`}>
                  <h6 style={{ color: theme.color }}>{item.firstName}</h6>
                </Link>
              </Col>
              <Col>
                <ClearIcon
                  style={{ color: theme.deleteIcon }}
                  onClick={() => handleDelet(item.id)}
                />
              </Col>
              <Col>
                <Link to="/createandupdate">
                  <ModeEditIcon
                    style={{ color: theme.iconColor }}
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

export default Family;
