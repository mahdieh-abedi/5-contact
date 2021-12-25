import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Outlet, Link } from "react-router-dom";

const Header = ({ setFilter }) => {
  return (
    <>
      <Row position="sticky">
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
