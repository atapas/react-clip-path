import React from "react";

import Shape from "react-clip-path"

function ClipPathPreview(props) {
    return(
        <>
            <Shape
                type="square"
                width="100%"
                height="100%"
                showLabel={false}
                showShadow={props.formInputs.showShadow}
            />
        </>
        
    ); 
}

export default ClipPathPreview;