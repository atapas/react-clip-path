import React from "react";
import Form from "react-bootstrap/Form";

function ClipPathTextBox(props) {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Clip-Path: </Form.Label>
                <Form.Control 
                    type="text" 
                    name="formula" 
                    value={props.formInputs.formula} 
                    onChange={props.handleChange} 
                />
            </Form.Group>
        </Form>
    );
}

export default ClipPathTextBox;