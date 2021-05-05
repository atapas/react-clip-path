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
    "name": "", 
    "typeOfShape": "polygon",
    "numberOfVerticesEdges": 3, 
    "showShadow": false,
    "formula": "",
    "notes": "", 
  });

  function handleChange(event) {
    if (event.target.name === "showShadow") {
      console.log(event.target.checked);
      setFormInputs({
        ...formInputs, 
        [event.target.name]: event.target.checked,
      });
    } else {
      setFormInputs({
        ...formInputs, 
        [event.target.name]: event.target.value,
      }); 
    }

    console.log(formInputs);
  }

  return (
    <Modal show={props.show} centered size="xl" onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Type Our Your Clip Path</Modal.Title>
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
