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
import Themes from "../Context/Themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Setting = () => {
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
      <Row  className="mt-3" >
        <Col xs={12}>
          <Link to="/">
            <ArrowBackIosNewIcon
              sx={{ fontSize: 25 }}
              style={{ color: theme.iconColor }}
            />
          </Link>
        </Col>
      </Row>
      <Row  className="mt-3">
        <Col xs={6} style={{ color: theme.color, fontWeight:500}}>
            Change Mode:
        </Col>
        <Col xs={6}>
          <LightModeIcon sx={{ fontSize: 20 }} style={{ color: theme.color }} />
          <Switch
            checked={theme.status}
            color="default"
            onChange={(e) => handleChangeTheme(e)}
          />
          <DarkModeIcon sx={{ fontSize: 20 }} style={{ color: theme.color }} />
        </Col>
      </Row>
      <div className="mt-5"
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
          <h6 style={{ color: theme.color }}>{person.length} Contacts</h6>
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
        <Row  className="mt-3">
          <Col xs={2}>
            <FamilyRestroomIcon
              style={{ color: theme.iconColor }}
              fontSize="large"
            />
          </Col>
          <Col style={{ color: theme.color }}>Family</Col>
        </Row>
      </Link>
      <Link to="/friend">
        <Row  className="mt-3">
          <Col xs={2}>
            <GroupIcon style={{ color: theme.iconColor }} fontSize="large" />
          </Col>
          <Col style={{ color: theme.color }}>Friend</Col>
        </Row>
      </Link>
      <Link to="/work">
        <Row  className="mt-3">
          <Col xs={2}>
            <WorkIcon style={{ color: theme.iconColor }} fontSize="large" />
          </Col>
          <Col style={{ color: theme.color }}>Work</Col>
        </Row>
      </Link>
    </Container>
  );
};

export default Setting;
