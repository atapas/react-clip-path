import styled from 'styled-components';

const Box = styled.div`
    width: ${props => props.size || '100px'};
    height: ${props => props.size || '100px'};
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

const Base = props => {

    const backgroundColor = props.backgroundColor;
    const size = props.size;
    const showShadow = props.showShadow;
    const formula = props.formula;
    const text = props.text;
    const showLabel = props.showLabel || false;

    return (
        <Box size={ size }>
            { showShadow && <Shadow backgroundColor = { backgroundColor } /> }
            <Component 
                backgroundColor = { backgroundColor } 
                formula = { formula }> 
                { showLabel && (<Label> { text }</Label>) }
            </Component>
        </Box>
    )

}
