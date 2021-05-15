import React from "react";
import Form from "react-bootstrap/Form";

import Shape from "react-clip-path"

function ClipPathPreview(props) {
    return(
        <>
            <Shape
                // type="square"
                formula={props.formInputs.formula}
                text={props.formInputs.name}
                width="400px"
                height="400px"
                showLabel={false}
                showShadow={props.formInputs.showShadow}
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
            {/* <p>Name: {props.formInputs.name}</p>
            <p>Type: {props.formInputs.type}</p>
            <p>Vertices: {props.formInputs.vertices}</p>
            <p>Edges: {props.formInputs.edges}</p>
            <p>Formula: {props.formInputs.formula}</p>
            <p>Notes: {props.formInputs.notes}</p>
            <p>Type of clip path: {props.formInputs.clipPathType}</p>
            <p>ShowShadow: {props.formInputs.showShadow ? "True" : "False"}</p> */}
        </>
        
    ); 
}

export default ClipPathPreview;