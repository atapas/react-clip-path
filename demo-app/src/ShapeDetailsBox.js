import React from "react";
import { ShapeDetails } from "./StyledComponents.js";

function ShapeDetailsBox(props) {
    return(
        <ShapeDetails>
            <li>
                <strong>Did you know?</strong> <p>{props.notes}</p>
            </li>
            <li>
                <span>
                    <b>Edges:</b> {props.edges}
                </span>
            </li>
            <li>
                <span>
                    <b>Vertices:</b> {props.vertices}
                </span>
            </li>
            <li>
                <span>
                    <b>clip-path:</b> <code><b>{props.formula}</b></code>
                </span>
            </li>
        </ShapeDetails>
    );
    
}

export default ShapeDetailsBox;