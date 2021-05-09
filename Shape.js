import React from 'react';
import styled from 'styled-components';
import { getShape } from './schema';

const Box = styled.div`
    width: ${props => props.width || '100px'};
    height: ${props => props.height || '100px'};
    margin: 0 auto;
    position: relative;
`;

const Shadow = styled.div`
    background-color: ${props => props.backgroundColor || '#00c4ff'};
    opacity: 0.25;
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
`;

const Component = styled.div`
    clip-path: ${props => props.formula};
    background-color: ${props => props.backgroundColor || '#00c4ff'};
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
`;

const Label = styled.span`
    text-align: center;
    position: absolute;
    top: 46%;
    left: 40%;
    color: #FFF;
    font-size: larger;
`;

const Shape = props => {

    const backgroundColor = props.backgroundColor || '#12a8d6';
    const height = props.height;
    const width = props.width;
    const showShadow = props.showShadow;
    const shapeInfo = getShape(props.type);
    const formula = shapeInfo ? shapeInfo.formula : props.formula;
    const text = shapeInfo ? shapeInfo.name : props.text;
    const showLabel = props.showLabel;

    return (
        <Box height={ height } width={ width }>
            { showShadow && <Shadow backgroundColor = { backgroundColor } /> }
            <Component 
                backgroundColor = { backgroundColor } 
                formula = { formula }> 
                { showLabel && (<Label> { text }</Label>) }
            </Component>
        </Box>
    )

}

export default Shape;