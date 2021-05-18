import React, { useState } from "react";
import ClipPathPreviewForm from "./ClipPathPreviewForm.js";
import ClipPathPreview from "./ClipPathPreview.js";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateShape = (props) => {
  
  // Change these keys to the ones in schema.js
  const [formInputs, setFormInputs] = useState({
    //Schema Variables
    "name": "Square", 
    "type": "square",
    "formula": "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
    "vertices": "4",
    "edges": "4", 
    "notes": "", 
    //Other Variables
    "clipPathType": "polygon",
    "showShadow": false, 
    "backgroundColor": "#12a8d6",
  });

  function handleChange(event) {

    const name = event.target.name;

    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

    if (name === "name") {
      setFormInputs({
        ...formInputs, 
        "name": value, 
        "type": value.toLowerCase(),
      });
    } else if (name === "formula") {

      const edgeVerticeNumber = value.split(",").length;

      if (value.includes("(") && value.includes(")")) {
        setFormInputs({
          ...formInputs, 
          "formula": value, 
          "vertices": edgeVerticeNumber, 
          "edges": edgeVerticeNumber,
        });
      }
    } else if (name === "clipPathType") {
      if (value === "polygon") {
        setFormInputs({
          ...formInputs, 
          "clipPathType": value, 
          "edges": 4,
          "vertices": 4,
          "formula": "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
        });
      }

      if (value === "circle") {
        setFormInputs({
          ...formInputs, 
          "clipPathType": value,  
          "edges": 0,
          "vertices": 0,
          "formula": "circle(50% at 50% 50%)",
        });
      }

      if (value === "ellipse") {
        setFormInputs({
          ...formInputs, 
          "clipPathType": value,  
          "edges": 0,
          "vertices": 0,
          "formula": "ellipse(25% 40% at 50% 50%)",
        });
      }
    } else {
      setFormInputs({
        ...formInputs, 
        [name]: value,
      });
    }
  }

  return (
    <Modal show={props.show} centered size="xl" onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Clip Path Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <ClipPathPreviewForm formInputs={formInputs} handleChange={(event) => handleChange(event)} />
          </Col>
          <Col>
            <ClipPathPreview formInputs={formInputs} handleChange={(event) => handleChange(event)} />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateShape;
