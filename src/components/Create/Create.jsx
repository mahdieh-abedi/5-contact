import "./Create.css";

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import StarIcon from "@mui/icons-material/Star";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddBoxIcon from "@mui/icons-material/AddBox";

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
          id: Math.floor(Math.random() * 10000),
          ...newPerson,
        },
      ]);
    }
    setNewPerson({
      firstName: "",
      familyName: "",
      number: "",
      email: "",
      category: "",
      favorite: false,
      image:
        "https://i.pinimg.com/564x/4c/f3/79/4cf379eb39ef955bb3e2df4be81f4503.jpg",
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
        <Row className="mt-3">
          <form onSubmit={handleAdd}>
            <label htmlFor="firstName" className="m-2">
              {" "}
              <PermContactCalendarOutlinedIcon fontSize="large" />
            </label>
            <input
              className="m-2"
              required
              type="text"
              placeholder="First Name"
              name={"firstName"}
              value={newPerson.firstName}
              id="firstName"
              onChange={handleChange}
            ></input>
            <br />{" "}
            <label htmlFor="familyname" className="m-2">
              <PermContactCalendarOutlinedIcon fontSize="large" />
            </label>
            <input
              className="m-2"
              required
              type="text"
              placeholder="Family Name"
              id="familyname"
              onChange={handleChange}
              name={"familyName"}
              value={newPerson.familyName}
            ></input>
            <br />
            <label htmlFor="number" className="m-2">
              {" "}
              <CallOutlinedIcon fontSize="large" />
            </label>
            <input
              className="m-2"
              required
              type="text"
              placeholder="Phone Number"
              id="number"
              onChange={handleChange}
              name={"number"}
              value={newPerson.number}
            ></input>
            <br />
            <label htmlFor="email" className="m-2">
              <MarkunreadOutlinedIcon fontSize="large" />
            </label>
            <input
              className="m-2"
              required
              type="text"
              placeholder="Email Address"
              id="email"
              onChange={handleChange}
              name={"email"}
              value={newPerson.email}
            ></input>
            <br />
            <label htmlFor="category" className="m-2">
              <CategoryOutlinedIcon fontSize="large" />
            </label>
            <input
              className="m-2"
              required
              type="text"
              placeholder="Category"
              id="category"
              onChange={handleChange}
              name={"category"}
              value={newPerson.category}
            ></input>
            <br />
            <Row>
              <Col>
                <Button type="submit" className="SubmitBtn">
                  {newPerson.id ? (
                    <ModeEditIcon
                      color="action"
                      className="m-2"
                      fontSize="large"
                    />
                  ) : (
                    <AddBoxIcon color="success" fontSize="large" />
                  )}
                </Button>
              </Col>
              <Col xs={3}>
                <Button>
                  <StarIcon
                    fontSize="large"
                    color={newPerson.favorite === true ? "warning" : "disabled"}
                    className="x-2"
                  />
                </Button>
              </Col>
            </Row>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default Create;
