import "./Create.css";

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import { PersonContext, NewPersonContext } from "..";

import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { useContext } from "react";

const Create = ({ InputAtribute }) => {
  const {dispatch } = useContext(PersonContext);
  const { newPerson, setNewPerson } = useContext(NewPersonContext);

  const handleAdd = (e) => {
    e.preventDefault();
    const firstName=newPerson.firstName
    const familyName=newPerson.familyName
    const number=newPerson.number
    const email=newPerson.email
    const category=newPerson.category
    const favorite=false
    const image="https://i.pinimg.com/564x/4c/f3/79/4cf379eb39ef955bb3e2df4be81f4503.jpg"
    if (!newPerson.id) {
      dispatch({type: "Add",payload:{e,firstName,familyName,number,email,category,favorite,image}})
    }
    setNewPerson({
      firstName: "",
      familyName: "",
      number: "",
      email: "",
      category: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };
  return (
    <Container>
      <Row>
        <Link to="/">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={{ color: "#E6E6E6" }}
          />{" "}
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
          {InputAtribute.map((item) => (
            <div key={item.key}>
              <label htmlFor={item.name} className="m-2">
                {item.icon}
              </label>
              <input
                className="m-2"
                required
                type="text"
                placeholder={item.name}
                name={item.name}
                value={item.value}
                id={item.value}
                onChange={handleChange}
              ></input>
              <br />
            </div>
          ))}
          <Row>
            <Col>
              <Button type="submit" className="SubmitBtn">
                  <AddBoxIcon style={{ color: "#248888" }} fontSize="large" />
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
  );
};

export default Create;
