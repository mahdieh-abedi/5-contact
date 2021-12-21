import React from "react";
import {Row, Col } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import stringAvatar from "@mui/styled-engine-sc";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const FavoriteList= ({ person, setPerson })=> {
    return ( 
        <>
        {person.filter((item) =>
            item.favorite ===true ).length===0? (
              <h6>Please select favorite contacts to reach easy to them</h6>
            ) : (
              person
                .filter((item) => item.favorite ===true)
                .map((item) => (
                  <Row className="mt-3" key={item.id}>
                    <Col>
                      <StarIcon color="warning" />
                    </Col>
                    <Col xs={2}>
                      <Avatar {...stringAvatar("Kent Dodds")} />
                    </Col>
                    <Col xs={5}>
                      <h6>{item.firstName}</h6>
                    </Col>
                    <Col>
                      <ClearIcon sx={{ color: red }} />
                    </Col>
                    <Col>
                      <ModeEditIcon color="action" />
                    </Col>
                  </Row>
               ) 
               )
            )
          }
          </>
    );
}

export default FavoriteList ;