import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Setting = ({ person }) => {
  return (
    <Container style={{width:300, height:600}}>
      <Row>
        <Col xs={12}>
          <Link to="/">
            <ArrowBackIosNewIcon sx={{ fontSize: 30 }} color="action" />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="mt-3">
          <h5>Setting</h5>
        </Col>
      </Row>
      <Row>
        <Col  xs={6}>
        <h6>{person.length} {" "} Contacts</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={4} className="mt-3">
          <h5>Categories</h5>
        </Col>
      </Row>
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
          <WorkIcon color="disabled" fontSize="large"/>
        </Col>
        <Col>Work</Col>
      </Row>
      </Link>
    </Container>
  );
};

export default Setting;
