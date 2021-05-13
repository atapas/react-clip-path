import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

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
                    value={props.formInputs.notes} 
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
                    <option value="path">Path</option>
                    <option value="inset">Inset</option>
                </Form.Control>
            </Form.Group>

            {props.formInputs.clipPathType === "polygon" ? 
                <>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Vertice number:</Form.Label>
                            <Form.Control 
                                type="number"
                                name="vertices"
                                value={props.formInputs.vertices}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Edge number:</Form.Label>
                            <Form.Control 
                                type="number"
                                name="edges"
                                value={props.formInputs.edges}
                                onChange={props.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                </> : 
                null
            }

            {props.formInputs.clipPathType === "circle" ? 
            <>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Width ({props.formInputs.circleWidth}%):</Form.Label>
                        <Form.Control 
                            type="range" 
                            name="circleWidth" 
                            value={props.formInputs.circleWidth} 
                            onChange={props.handleChange} 
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control 
                            type="number" 
                            name="circleLocationX" 
                            placeholder="X Position"
                            value={props.formInputs.circleLocationX} 
                            onChange={props.handleChange} 
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control 
                            type="number" 
                            name="circleLocationY" 
                            placeholder="Y Position"
                            value={props.formInputs.circleLocationY} 
                            onChange={props.handleChange} 
                        />
                    </Form.Group>
                </Form.Row>
            </> : 
            null
        }

            <Form.Group>
                <Form.Check 
                    type="switch" 
                    name="showShadow" 
                    id="showShadowSwitch"
                    label="Show Outside of the Clipped Area" 
                    onChange={props.handleChange} 
                />
            </Form.Group>
        </Form>
    );
}

export default ClipPathPreviewForm;