import "../Create&Edit.css";
import { useContext} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Alert from "@mui/material/Alert";
import { PersonContext, NewPersonContext } from "../..";
import { ThemeContext } from "../../Context/ThemeContext";
import {AlertContext} from "../../Context/AlertContect";

const Create = ({ InputAtribute }) => {
  const {alert, setAlert} = useContext(AlertContext);
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(PersonContext);
  const { newPerson, setNewPerson } = useContext(NewPersonContext);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newPerson.id) {
      dispatch({
        type: "Add",
        payload: {
          newPerson,
        },
      });
    }
    setNewPerson({
      firstName: "",
      familyName: "",
      number: "",
      email: "",
      category: "",
    });
    alert === "none" ? setAlert("block") : setAlert("none")
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerson({ ...newPerson, [name]: value });
  };
  return (
    <Container style={{ backgroundColor: theme.backGround }}>
      <Row>
        <Link to="/">
          <ArrowBackIosNewIcon
            sx={{ fontSize: 25 }}
            style={{ color: theme.iconColor }}
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
              <label
                htmlFor={item.name}
                className="m-2"
                style={{ color: theme.iconColor }}
              >
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
          <div className="buttonBox">
            <Button type="submit" className="SubmitBtn">
              <AddBoxIcon
                style={{ color: theme.buttonColor }}
                sx={{ fontSize: 40 }}
              />
            </Button>
            <Alert
              severity="success"
              style={{ display: alert ,width:200}}
            >
              Contact Added{" "}
            </Alert>
          </div>
        </form>
      </Row>
    </Container>
  );
};

export default Create;
