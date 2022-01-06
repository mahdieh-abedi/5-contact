import React, { useContext } from "react";
import "./Setting.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PersonContext} from "..";
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Switch from "@mui/material/Switch";

const Setting = ({theme,setTheme}) => {
  const { person } = useContext(PersonContext);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <Container style={{ width: 300, height: 600 }}>
      <Row>
        <Col xs={12}>
          <Link to="/">
            <ArrowBackIosNewIcon
              sx={{ fontSize: 25 }}
              style={{ color: "#E6E6E6" }}
            />
          </Link>
        </Col>
      </Row>
      <Row>
        <Switch color="default" defaultunChecked />
      </Row>
      <div className="divider">Setting</div>
      <Row>
        <Col xs={6}>
          <h6>{person.length} Contacts</h6>
        </Col>
      </Row>
      <div className="divider">Categories</div>
      <Link to="/family">
        <Row>
          <Col xs={2}>
            <FamilyRestroomIcon color="disabled" fontSize="large" />
          </Col>
          <Col>Family</Col>
        </Row>
      </Link>
      <Link to="/friend">
        <Row>
          <Col xs={2}>
            <GroupIcon color="disabled" fontSize="large" />
          </Col>
          <Col>Friend</Col>
        </Row>
      </Link>
      <Link to="/work">
        <Row>
          <Col xs={2}>
            <WorkIcon color="disabled" fontSize="large" />
          </Col>
          <Col>Work</Col>
        </Row>
      </Link>
    </Container>
  );
};

export default Setting;
