import React,{useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CallIcon from "@mui/icons-material/Call";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StarIcon from '@mui/icons-material/Star';
import {PersonContext} from ".."
import { ThemeContext } from "../Context/ThemeContext";

const PersonProfile = () => {
  const{theme}=useContext(ThemeContext)

  const{person}=useContext(PersonContext)
  const { ID } = useParams();
  return (
    <Container  style={{ backgroundColor: theme.backGround}}>
      <Row>
        <Link to="/">
        <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={{ color: "#E6E6E6" }}
          />
        </Link>
      </Row>
      <div>
        {person
          .filter((item) => item.id === JSON.parse(ID))
          .map((item) => (
            <>
              <Row className="mt-2">
                <Col className="ImgContainer">
                  <img height={250} src={item.image} alt="avatar" />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <h6>
                    {item.firstName}
                    {" "}
                    {item.familyName}
                  </h6>
                </Col>
                <Col xs={2}>
                  <StarIcon
                    color={item.favorite === true ? "warning" : "disabled"}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <h6>{item.number}</h6>
              </Row>
              <Row className="mt-2">
                <h6>{item.category}</h6>
              </Row>
              <Row className="mt-2">
                <h6>{item.email}</h6>
              </Row>
              <Row className="mt-3">
                <Col>
                  <CallIcon color="success"  fontSize="large" />
                </Col>
                <Col>
                  <ChatBubbleOutlineIcon color="action"  fontSize="large" />
                </Col>
                <Col>
                  <WhatsAppIcon color="success"  fontSize="large" />
                </Col>
                <Col>
                  <LinkedInIcon color="primary"  fontSize="large" />
                </Col>
              </Row>
            </>
          ))}
      </div>
    </Container>
  );
};

export default PersonProfile;
