import React, { useState } from "react";
import ClipPathPreviewForm from "./ClipPathPreviewForm.js";
import ClipPathPreview from "./ClipPathPreview.js";
import ClipPathTextBox from "./ClipPathTextBox";
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
    "formula": "circle(50% at 50% 50%)",
    "vertices": "4",
    "edges": "4", 
    "notes": "", 
    //Other Variables
    "clipPathType": "circle",
    "showShadow": false,
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
    } else if (name === "vertices" || name === "edges") {
      setFormInputs({
        ...formInputs, 
        "vertices": value < 2 ? 2 : value, 
        "edges": value < 2 ? 2 : value,
      });
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
            <ClipPathPreview formInputs={formInputs} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ClipPathTextBox formInputs={formInputs} handleChange={(event) => handleChange(event)} />
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
