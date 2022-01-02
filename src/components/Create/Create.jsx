import "./Create.css";

import { Container, Row, Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import {PersonContext,NewPersonContext} from ".."

import StarIcon from "@mui/icons-material/Star";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import { useContext } from "react";

const Create = () => {
  const{person,setPerson}=useContext(PersonContext)
  const{newPerson,setNewPerson}=useContext(NewPersonContext)
  
  const InputAtribute = [
    {
      key: 1,
      name: "firstName",
      icon: <PermContactCalendarOutlinedIcon fontSize="large" />,
      value: newPerson.firstName,
    },
    {
      key: 2,
      name: "familyName",
      icon: <PermContactCalendarOutlinedIcon fontSize="large" />,
      value: newPerson.familyName,
    },
    {
      key: 3,
      name: "number",
      icon: <CallOutlinedIcon fontSize="large" />,
      value: newPerson.number,
    },
    {
      key: 4,
      name: "email",
      icon: <MarkunreadOutlinedIcon fontSize="large" />,
      value: newPerson.email,
    },
    {
      key: 5,
      name: "category",
      icon: <CategoryOutlinedIcon fontSize="large" />,
      value: newPerson.category,
    },
  ];

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
                {newPerson.id ? (
                  <>
                    <ModeEditIcon
                      color="action"
                      className="m-2"
                      fontSize="large"
                    />
                  </>
                ) : (
                  <>
                    <AddBoxIcon color="success" fontSize="large" />
                  </>
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
  );
};

export default Create;
