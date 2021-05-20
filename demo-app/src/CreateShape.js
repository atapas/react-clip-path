import React, { useState } from "react";
import ClipPathPreviewForm from "./ClipPathPreviewForm.js";
import ClipPathPreview from "./ClipPathPreview.js";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateShape = (props) => {
  const initialState = {
    //Schema Variables
    "name": "Tilted Square", 
    "type": "tiltedSquare",
    "formula": "polygon(10% 10%, 90% 10%, 90% 90%, 10% 80%)",
    "vertices": "4",
    "edges": "4", 
    "notes": "", 
    //Other Variables
    "clipPathType": "polygon",
    "showShadow": false, 
    "backgroundColor": "#12a8d6",
  }

  const [formInputs, setFormInputs] = useState({
    ...initialState
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

      const edgeVerticeNumber = formInputs.clipPathType === "polygon" ? value.split(",").length: 0;

      if (value.includes("(") && value.includes(")")) {
        if (value.includes("polygon")) {
          setFormInputs({
            ...formInputs, 
            "formula": value, 
            "clipPathType": "polygon",
            "vertices": edgeVerticeNumber, 
            "edges": edgeVerticeNumber, 
          });
        } else if (value.includes("circle")) {
          setFormInputs({
            ...formInputs, 
            "formula": value, 
            "clipPathType": "circle",
            "vertices": edgeVerticeNumber, 
            "edges": edgeVerticeNumber, 
          });
        } else if (value.includes("ellipse")) {
          setFormInputs({
            ...formInputs, 
            "formula": value, 
            "clipPathType": "ellipse",
            "vertices": edgeVerticeNumber, 
            "edges": edgeVerticeNumber, 
          });
        } else setFormInputs({
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
          "name": "Tilted Square", 
          "type": "tiltedSquare", 
          "edges": 4,
          "vertices": 4,
          "formula": "polygon(10% 10%, 90% 10%, 90% 90%, 10% 80%)", 
          "notes": "", 
        });
      }

      if (value === "circle") {
        setFormInputs({
          ...formInputs, 
          "name": "Circle", 
          "type": "circle", 
          "clipPathType": value,  
          "edges": 0,
          "vertices": 0,
          "formula": "circle(50% at 50% 50%)",
          "notes": "", 
        });
      }

      if (value === "ellipse") {
        setFormInputs({
          ...formInputs, 
          "name": "Ellipse", 
          "type": "ellipse", 
          "clipPathType": value,  
          "edges": 0,
          "vertices": 0,
          "formula": "ellipse(25% 40% at 50% 50%)",
          "notes": "", 
        });
      }
    } else {
      setFormInputs({
        ...formInputs, 
        [name]: value,
      });
    }
  }

  const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }

  return (
    <Modal show={props.show} centered size="xl" onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Clip Path Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <ClipPathPreviewForm 
              formInputs={formInputs} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              validated={validated}
            />
          </Col>
          <Col>
            <ClipPathPreview 
              formInputs={formInputs} 
              handleChange={handleChange} 
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setFormInputs({ ...initialState }); props.handleClose(); }}>
          Close
        </Button>
        <Button variant="primary" form="previewForm" type="submit">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateShape;
