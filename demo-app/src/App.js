import React, { useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Shape  from 'react-clip-path';
import { getAvailableShapeTypes, getShape } from 'react-clip-path/schema';

const ShapeCards = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 280px) {
      grid-template-columns: repeat(1, 1fr);
    }
}
`;

const ShapeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ececec;
  border-radius: 4px;
  padding: 5px;
  margin: 5px;
  background-color: ${props => props.selected ? '#dce585' : '#ebebeb'};
  cursor: pointer;

  &:hover {
    background-color: #e0e4b5;
  }
`;

const ShapeName = styled.span`
    font-weight: bold;
`;

const Playground = styled.div`
  width: 100%;
`;

const ShapeDetails = styled.ul`
  background-color: #ebebeb;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
`;

const ShapePallete = styled.div`
  margin-top: 5px;
`;

function App() {

  const makeShapeObj = shapes => {
    const availableShapes = getAvailableShapeTypes();
    let obj = {};
    availableShapes.forEach((elem) => {
      let selected = elem === 'circle' ? true : false;
      obj[elem] = selected;
    });
    console.log(obj);
    return obj;
  }

  
  const [selectedShape, setSelectedShape] = useState(getShape('circle'));
  const [showShadow, setShowShadow] = useState(false);
  const [shapeObj, setShapeObj] = useState(makeShapeObj());

  const handleClick = (event, type) => {
    const shapeInfo = getShape(type);
    setShapeObj({...shapeObj, [type]: true, [selectedShape.type]: false});
    setSelectedShape({...shapeInfo});
    console.log(selectedShape);
  }

  const handleSwicth = event => {
    setShowShadow(event.target.checked);
  }

  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <Playground>
            <Shape
              type={selectedShape.type}
              width="300px"
              height="300px"
              showLabel={true}
              showShadow={showShadow}
            />
            <Form style={{padding: '7px', textAlign: 'center'}}>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Show Outside of the Clipped Area"
                onChange={handleSwicth}
              />
            </Form>
            <ShapeDetails>
              <li>
                <strong>Did you know?</strong> <p>{selectedShape.notes}</p>
              </li>
              <li>
                <span>
                  <b>Edges:</b> {selectedShape.edges}
                </span>
              </li>
              <li>
                <span>
                  <b>Vertices:</b> {selectedShape.vertices}
                </span>
              </li>
              <li>
                <span>
                  <b>clip-path:</b> <code><b>{selectedShape.formula}</b></code>
                </span>
              </li>
            </ShapeDetails>
          </Playground>
        </Col>
        <Col sm={8}>
          <ShapePallete>
            <h2>Available Shapes({Reflect.ownKeys(shapeObj).length})</h2>
            <ShapeCards>
              {Reflect.ownKeys(shapeObj).map((shapeType, index) => (
                <ShapeCard 
                  key={index} 
                  onClick={(e) => handleClick(e, shapeType)}
                  selected = {shapeObj[shapeType]}
                  >
                  <Shape type={shapeType}/>
                  <ShapeName>{getShape(shapeType).name}</ShapeName>
                </ShapeCard>
              ))}
            </ShapeCards>
          </ShapePallete>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
