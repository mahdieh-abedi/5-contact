import "./Create.css";
import { Form, Container, Row, Col, FormSelect, option } from "react-bootstrap";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import { red } from "@mui/material/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const Create = ({ person, setPerson, newPerson, setNewPerson }) => {
  const handleAdd = (e) => {
    e.preventDefault();
    if (newPerson.id) {
      setPerson(
        person.map((oldPerson) =>
          oldPerson.id === newPerson.id ? newPerson : oldPerson
        )
      );
    } else {
      setPerson([
        ...person,
        {
          id: Math.floor(Math.randomm() * 10000),
          ...newPerson,
        },
      ]);
    }
    setPerson({
      firstName: "",
      familyName: "",
      number: "",
      email: "",
      category: "",
      favorite: false,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };
  return (
    <>
      <Container>
        <Row>
          <Link to="/">
            <ArrowBackIosNewIcon sx={{ fontSize: 30 }} color="action" />
          </Link>
        </Row>
        <Row className="mt-3">
          <Col className="ImgContainer">
            <img
              height={250}
              src="https://i.pinimg.com/564x/4c/f3/79/4cf379eb39ef955bb3e2df4be81f4503.jpg"
              alt="avatar"
            />
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={2}>
            <PermContactCalendarOutlinedIcon fontSize="large" />
          </Col>
          <Col>
            <Form onSubmit={handleAdd}>
              <Form.Control
                type="text"
                placeholder="First Name ..."
                name={"firstName"}
                value={newPerson.firstName}
                onChange={handleChange}
              />
            </Form>
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={2}>
            <PermContactCalendarOutlinedIcon fontSize="large" />
          </Col>
          <Col>
            <Form onSubmit={handleAdd}>
              <Form.Control
                type="text"
                placeholder="Family Name ..."
                name={"familyName"}
                value={newPerson.familyName}
                onChange={handleChange}
              />
            </Form>
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={2}>
            <CallOutlinedIcon fontSize="large" />
          </Col>
          <Col>
            <Form onSubmit={handleAdd}>
              <Form.Control
                type="text"
                placeholder="Phone Number ..."
                name={"number"}
                value={newPerson.number}
                onChange={handleChange}
              />
            </Form>
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={2}>
            <MarkunreadOutlinedIcon fontSize="large" />
          </Col>
          <Col>
            <Form onSubmit={handleAdd}>
              <Form.Control
                type="text"
                placeholder="Email ..."
                name={"email"}
                value={newPerson.email}
                onChange={handleChange}
              />
            </Form>
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={2}>
            <CategoryOutlinedIcon fontSize="large" />
          </Col>
          <Col>
            <Form onSubmit={handleAdd}>
              <Form.Select
                aria-label="Select a Category"
                name={"category"}
                value={newPerson.category}
                onChange={handleChange}
              >
                <option value="1">family</option>
                <option value="2">Friend</option>
                <option value="3">Work</option>
              </Form.Select>
            </Form>
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={3}>
            <StarOutlineOutlinedIcon fontSize="large" color="warning" />
          </Col>
          <Col xs={3}>
            <ModeEditIcon fontSize="large" />
          </Col>
          <Col xs={3}>
            <AddOutlinedIcon fontSize="large" color="success" type="submit" />
          </Col>
          <Col xs={3}>
            <ClearIcon fontSize="large" sx={{ color: red[500] }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Create;
