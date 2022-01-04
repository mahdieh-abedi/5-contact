import "./Edit.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { PersonContext, NewPersonContext } from "..";

import StarIcon from "@mui/icons-material/Star";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { useContext } from "react";

const Edit = ({ InputAtribute }) => {
  const { person, dispatch } = useContext(PersonContext);
  const { newPerson, setNewPerson } = useContext(NewPersonContext);
  const { ID } = useParams();

  const handleEdit = (ID, e) => {
    e.preventDefault();
    const firstName = newPerson.firstName;
    const familyName = newPerson.familyName;
    const number = newPerson.number;
    const email = newPerson.email;
    const category = newPerson.category;
    const favorite = newPerson.favorite;
    const image =newPerson.image
    dispatch({
      type: "Edit",
      payload: {
        e,
        ID,
        firstName,
        familyName,
        number,
        email,
        category,
        favorite,
        image,
      },
    });
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
      {person
        .filter((item) => item.id === JSON.parse(ID))
        .map((item) => (
          <div key={item.id}>
            <Row className="mt-3">
              <Col className="ImgContainer">
                <img height={250} src={item.image} alt="avatar" />
              </Col>
            </Row>
            <Row className="mt-3">
              <form onSubmit={(e)=>handleEdit(item.id,e)}>
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
                      <ModeEditIcon
                        style={{ color: "#248888" }}
                        fontSize="large"
                      />
                    </Button>
                  </Col>
                  <Col xs={3}>
                    <Button>
                      <StarIcon
                        fontSize="large"
                        color={
                          newPerson.favorite === true ? "warning" : "disabled"
                        }
                        className="x-2"
                      />
                    </Button>
                  </Col>
                </Row>
              </form>
            </Row>
          </div>
        ))}
    </Container>
  );
};

export default Edit;
