import React,{useContext} from "react";
import { Outlet, Link } from "react-router-dom";
import {Form, Row, Col } from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { ThemeContext } from "../Context/ThemeContext";
const Header = () => {
  const{theme}=useContext(ThemeContext)
  return (
    <div  style={{ backgroundColor: theme.backGround ,color:theme.color}} >
      <Row
        position="sticky"
        style={{ backgroundColor: theme.headerBachGround, borderRadius: 5 }}
      >
        <Col>
          <Link to="/setting">
            <MenuIcon
              style={{ color:theme.buttonColor }}
              fontSize="large"
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
            <AddBoxIcon  style={{ color:theme.buttonColor }} fontSize="large" />
          </Link>
        </Col>
      </Row>
      <Outlet />
      </div>
  );
};
export default Header;
