import "../Create&Edit.css";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Alert from "@mui/material/Alert";
import { PersonContext, NewPersonContext } from "../..";
import { ThemeContext } from "../../Context/ThemeContext";
import { AlertContext } from "../../Context/AlertContect";

const Edit = ({ InputAtribute }) => {
  const { alert, setAlert } = useContext(AlertContext);
  const { theme } = useContext(ThemeContext);
  const { person, dispatch } = useContext(PersonContext);
  const { newPerson, setNewPerson } = useContext(NewPersonContext);
  const { ID } = useParams();
  const handleEdit = (ID, e) => {
    e.preventDefault();
    dispatch({
      type: "Edit",
      payload: {
        ID,
        newPerson,
      },
    });
    alert === "none" ? setAlert("block") : setAlert("none");
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
              <form onSubmit={(e) => handleEdit(item.id, e)}>
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
                    <ModeEditIcon
                      style={{ color: theme.iconColor }}
                      sx={{ fontSize: 40 }}
                    />
                  </Button>
                  <Alert
                    severity="success"
                    style={{ display: alert, width: 200 }}
                  >
                    Contact Edited
                  </Alert>
                </div>
              </form>
            </Row>
          </div>
        ))}
    </Container>
  );
};

export default Edit;
