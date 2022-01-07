import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonContext } from "..";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "../Context/ThemeContext";

const Setting = () => {
  const Themes = {
    dark: {
      status: true,
      color: "white",
      buttonColor: "#248888",
      iconColor: "#E6E6E6",
      favoriteColor:"#F0D879",
      deleteIcon:"#E7475E",
      dividerBackground: "#248888",
      backGround: "black",
      headerBachGround: "black",
    },

    light: {
      status: false,
      color: "black",
      buttonColor: "#248888",
      iconColor: "#E6E6E6",
      favoriteColor:"#F0D879",
      deleteIcon:"#E7475E",
      dividerBackground: "#248888",
      backGround: "white",
      headerBachGround: "#E6E6E6",
    },
  };
  const { theme, setTheme } = useContext(ThemeContext);
  const { person } = useContext(PersonContext);
  const handleChangeTheme = (e) => {
    e.preventDefault();
    e.target.checked ? setTheme(Themes.dark) : setTheme(Themes.light);
  };
  return (
    <Container
      style={{
        width: 300,
        height: 600,
        backgroundColor: theme.backGround,
        color: theme.color,
      }}
    >
      <Row>
        <Col xs={12}>
          <Link to="/">
            <ArrowBackIosNewIcon
              sx={{ fontSize: 25 }}
              style={{ color: theme.iconColor }}
            />
          </Link>
        </Col>
      </Row>
      <Row>
        <Switch
          checked={theme.status}
          color="default"
          onChange={(e) => handleChangeTheme(e)}
        />
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
        Setting
      </div>
      <Row>
        <Col xs={6}>
          <h6 style={{color:theme.color}}>{person.length} Contacts</h6>
        </Col>
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
        Categories
      </div>
      <Link to="/family">
        <Row>
          <Col xs={2}>
            <FamilyRestroomIcon
              style={{ color: theme.iconColor }}
              fontSize="large"
            />
          </Col>
          <Col style={{color:theme.color}}>Family</Col>
        </Row>
      </Link>
      <Link to="/friend">
        <Row>
          <Col xs={2}>
            <GroupIcon style={{ color: theme.iconColor }} fontSize="large" />
          </Col>
          <Col style={{color:theme.color}}>Friend</Col>
        </Row>
      </Link>
      <Link to="/work">
        <Row>
          <Col xs={2}>
            <WorkIcon style={{ color: theme.iconColor }} fontSize="large" />
          </Col>
          <Col style={{color:theme.color}}>Work</Col>
        </Row>
      </Link>
    </Container>
  );
};

export default Setting;
