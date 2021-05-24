import React from "react";
import { ShapeDetails, ShapeDetailsItems } from "./StyledComponents.js";

const ShapeDetailsBox = (props) => {
    return(
        <ShapeDetails>
            <ShapeDetailsItems>
                {props.shapeInformation.notes === "" ? 
                    null : 
                    <><strong>Did you know?</strong> <p>{props.shapeInformation.notes}</p></>
                }
            </ShapeDetailsItems>
            <ShapeDetailsItems>
                <span>
                    <b>Edges:</b> {props.shapeInformation.edges}
                </span>
            </ShapeDetailsItems>
            <ShapeDetailsItems>
                <span>
                    <b>Vertices:</b> {props.shapeInformation.vertices}
                </span>
            </ShapeDetailsItems>
            <ShapeDetailsItems>
                <span>
                    <b>clip-path:</b> <code><b>{props.shapeInformation.formula}</b></code>
                </span>
            </ShapeDetailsItems>
        </ShapeDetails>
    );
    
}

export default ShapeDetailsBox;