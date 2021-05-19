import React from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const ColorPicker = styled.input`
    border-color: lightgray;
    border-radius: 3px;
    margin-left: 5px;
    padding: 2px 3px, 2px, 3px;
`;

function ClipPathPreviewForm(props) {
    return(
        <Form>
            <Form.Group>
                <Form.Label>Shape Name:</Form.Label>
                <Form.Control 
                    type="text" 
                    name="name" 
                    value={props.formInputs.name} 
                    onChange={props.handleChange} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Description:</Form.Label>
                <Form.Control 
                    as="textarea" 
                    name="notes" 
                    rows={3}
                    value={props.formInputs.notes} 
                    onChange={props.handleChange} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Shape Color: </Form.Label>
                <ColorPicker 
                    type="color" 
                    name="backgroundColor"
                    value={props.formInputs.backgroundColor}
                    onChange={props.handleChange}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Type of Clip Path:</Form.Label>
                <Form.Control 
                    as="select" 
                    name="clipPathType" 
                    value={props.formInputs.clipPathType} 
                    onChange={props.handleChange}
                >
                    <option value="polygon">Polygon</option>
                    <option value="circle">Circle</option>
                    <option value="ellipse">Ellipse</option>
                </Form.Control>
            </Form.Group>

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

export default ClipPathPreviewForm;