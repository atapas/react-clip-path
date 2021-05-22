import React from "react";
import { ShapeDetails } from "./StyledComponents.js";

const ShapeDetailsBox = (props) => {
    return(
        <ShapeDetails>
            <li>
                {props.shapeInformation.notes === "" ? null : <><strong>Did you know?</strong> <p>{props.shapeInformation.notes}</p></>}
            </li>
            <li>
                <span>
                    <b>Edges:</b> {props.shapeInformation.edges}
                </span>
            </li>
            <li>
                <span>
                    <b>Vertices:</b> {props.shapeInformation.vertices}
                </span>
            </li>
            <li>
                <span>
                    <b>clip-path:</b> <code><b>{props.shapeInformation.formula}</b></code>
                </span>
            </li>
        </ShapeDetails>
    );
    
}

export default ShapeDetailsBox;