import React from "react";

import { Form, Row, Col } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom"; 

import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Header = () => {
  return (
    <>
      <Row position="sticky" className="secondColor">
        <Col>
          <Link to="/setting">
            <MenuIcon color="action" fontSize="large" className="mx-2" />
          </Link>
        </Col>
        <Col xs={7}>
          <Link to="/search">
            <Form>
                <Form.Control
                  type="text"
                  placeholder="Search ..."
                />
            </Form>
          </Link>
        </Col>
        <Col>
          <Link to="/createandupdate">
            <AddBoxIcon color="success" fontSize="large" />
          </Link>
        </Col>
      </Row>
      <Outlet />
    </>
  );
};
export default Header;
