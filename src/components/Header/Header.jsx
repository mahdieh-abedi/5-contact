import "./Header.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Form, Row, Col } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Header = () => {
  return (
    <>
      <Row
        position="sticky"
        style={{ backgroundColor: "#E6E6E6", borderRadius: 5, padding: 5 }}
      >
        <Col>
          <Link to="/setting">
            <MenuIcon
              style={{ color: "#248888" }}
              fontSize="large"
              className="mx-2"
            />
          </Link>
        </Col>
        <Col xs={7}>
          <Link to="/search">
            <Form.Control type="text" placeholder="Search ..." />
          </Link>
        </Col>
        <Col>
          <Link to="/create">
            <AddBoxIcon style={{ color: "#248888" }} fontSize="large" />
          </Link>
        </Col>
      </Row>
      <Outlet />
    </>
  );
};
export default Header;
