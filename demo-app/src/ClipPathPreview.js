import React from "react";
import Form from "react-bootstrap/Form";

import Shape from "react-clip-path"; 
import { Playground, ShapeDetails } from "./StyledComponents.js";

function ClipPathPreview(props) {
  return(
    <>
      <Playground>
        <Shape
          // type="square"
          formula={props.formInputs.formula}
          text={props.formInputs.name}
          width="300px"
          height="300px"
          showLabel={true}
          showShadow={props.formInputs.showShadow}
          backgroundColor = {props.formInputs.backgroundColor}
        />
        <Form style={{padding: '7px', textAlign: 'center'}}>
          <Form.Check
            type="switch"
            name="showShadow"
            id="modal-custom-switch"
            label="Show Outside of the Clipped Area"
            checked={props.formInputs.showShadow}
            onChange={props.handleChange}
          />
        </Form>
        <ShapeDetails>
          <li>
            <strong>Did you know?</strong> <p>{props.formInputs.notes}</p>
          </li>
          <li>
            <span>
              <b>Edges:</b> {props.formInputs.edges}
            </span>
          </li>
          <li>
            <span>
              <b>Vertices:</b> {props.formInputs.vertices}
            </span>
          </li>
          <li>
            <span>
              <b>clip-path:</b> <code><b>{props.formInputs.formula}</b></code>
            </span>
          </li>
        </ShapeDetails>
      </Playground>
    </>
    
); 
}

export default ClipPathPreview;