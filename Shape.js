import React from 'react';
import { getShape } from './schema';

const Shape = props => {

    const backgroundColor = props.backgroundColor;
    const size = props.size;
    const showShadow = props.showShadow;
    const shapeInfo = getShape(props.type);
    const formula = shapeInfo.formula;
    const text = props.text || shapeInfo.name;
    const showLabel = props.showLabel;

    return (
        <Base 
            backgroundColor = { backgroundColor } 
            size = { size } 
            showShadow = { showShadow }
            formula = { formula }
            text = { text } 
            showLabel = { showLabel } />
    )

}

export default Shape;