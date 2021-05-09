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
    "formula": "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    "vertices": "4",
    "edges": "4", 
    "notes": "", 
    //Other Variables
    "clipPathType": "polygon",
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
    } else if (name === "clipPathType") {
      setFormInputs({
        ...formInputs, 
        "clipPathType": value, 
        "formula": changeFormula(value, formInputs.vertices),
      });
    } else if (name === "vertices" || "edges") {
      setFormInputs({
        ...formInputs, 
        "vertices": value, 
        "edges": value,
        "formula": changeFormula("polygon", value),
      });
    } else if (name === "formula") {
      setFormInputs({
        ...formInputs, 
        "formula": value,
        "vertices": handleFormulaChangeFor("vertices", value), 
        "edges": handleFormulaChangeFor("edges", value), 
        "clipPathType": handleFormulaChangeFor("type", value), 
      })
    } else {
      setFormInputs({
        ...formInputs, 
        [name]: value,
      });
    }
  }

  function changeFormula(type, verticeNumber) {
    if (type === "polygon") {
      let returnString = "polygon(";

      for (let i = 0; i < verticeNumber; i++) {
        if (i === verticeNumber - 1) {
          returnString = returnString.concat("0% 0%)");
        } else {
          returnString = returnString.concat("0% 0%, ");
        }
      }

      if (verticeNumber === null || verticeNumber < 1) {
        return returnString.concat(")");
      }

      return returnString;
    } if (type === "circle") {
      return "circle(0%)";
    } 
    if (type === "ellipse") {
      return "ellipse(0px 0px at 0% 0%)";
    }  
    if (type === "path") {
      return "path()";
    }  
    if (type === "inset") {
      return "inset(0px)";
    } 
  }

  function handleFormulaChangeFor(type, formula) {
    if (type === "vertices") {
      return formula.split(",").length;
    } else if (type === "edges") {
      return formula.split(",").length;
    } else if (type === "type") {
      if (formula.includes("polygon")) {
        return "polygon";
      } else if (formula.includes("circle")) {
        return "circle";
      } else if (formula.includes("ellipse")) {
        return "ellipse";
      } else if (formula.includes("path")) {
        return "path";
      } else if (formula.includes("inset")) {
        return "inset";
      } 
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
