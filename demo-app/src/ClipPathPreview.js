import React from "react";
import Form from "react-bootstrap/Form";
import ShapeDetailsBox from "./ShapeDetailsBox.js";

import Shape from "react-clip-path"; 
import { Playground } from "./StyledComponents.js";

const ClipPathPreview = (props) => {
  return(
    <>
      <Playground>
        <Shape
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
        <ShapeDetailsBox shapeInformation={ props.formInputs } />
      </Playground>
    </>
    
); 
}

export default ClipPathPreview;