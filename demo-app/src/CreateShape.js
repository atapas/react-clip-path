import React, { useState } from "react";
import ClipPathPreviewForm from "./ClipPathPreviewForm.js";
import ClipPathPreview from "./ClipPathPreview.js";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateShape = (props) => {
  const initialState = {
    "name": "Tilted Square", 
    "type": "tiltedSquare",
    "formula": "polygon(10% 10%, 90% 10%, 90% 90%, 10% 80%)",
    "vertices": "4",
    "edges": "4", 
    "notes": "", 
    "clipPathType": "polygon",
    "showShadow": true, 
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

      if (value.includes("polygon")) {
        handleFormulaChange(value, edgeVerticeNumber, "polygon");
      } else if (value.includes("circle")) {
        handleFormulaChange(value, edgeVerticeNumber, "circle");
      } else if (value.includes("ellipse")) {
        handleFormulaChange(value, edgeVerticeNumber, "ellipse");
      } else {
        handleFormulaChange(value, edgeVerticeNumber);
      }

    } else if (name === "clipPathType") {
      handleClipPathChange(value);
    } else {
      setFormInputs({
        ...formInputs, 
        [name]: value,
      });
    }
  }

  function handleFormulaChange(formula, edgeVerticeNumber, clipPathType) {
    setFormInputs(prevState => {
      return {
        ...prevState, 
        "formula": formula.includes("(") && formula.includes(")") ? formula : prevState.formula, 
        "clipPathType": clipPathType === null ? prevState.clipPathType : clipPathType,
        "vertices": edgeVerticeNumber, 
        "edges": edgeVerticeNumber, 
      }
    });
  }

  function handleClipPathChange(clipPathType) {
    if (clipPathType === "polygon") {
      setFormInputs({
        ...formInputs, 
        "name": "Tilted Square", 
        "type": "tiltedSquare", 
        "formula": "polygon(10% 10%, 90% 10%, 90% 90%, 10% 80%)", 
      });
    }

    if (clipPathType === "circle") {
      setFormInputs({
        ...formInputs, 
        "name": "Circle", 
        "type": "circle", 
        "formula": "circle(50% at 50% 50%)",
      });
    }

    if (clipPathType === "ellipse") {
      setFormInputs({
        ...formInputs, 
        "name": "Ellipse", 
        "type": "ellipse", 
        "formula": "ellipse(25% 40% at 50% 50%)",
      });
    }

    setFormInputs(prevState => {
      return {
        ...prevState, 
        "clipPathType": clipPathType, 
        "edges": clipPathType === "polygon" ? 4 : 0,
        "vertices": clipPathType === "polygon" ? 4 : 0, 
        "notes": "", 
      }
    })
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
    <Modal 
      show={props.show} 
      centered 
      size="xl" 
      onHide={props.handleClose} 
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Clip Path Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <ClipPathPreview 
              formInputs={formInputs} 
              handleChange={handleChange} 
            />
          </Col>
          <Col>
            <ClipPathPreviewForm 
              formInputs={formInputs} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              validated={validated}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { setFormInputs({ ...initialState }); props.handleClose(); }}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateShape;