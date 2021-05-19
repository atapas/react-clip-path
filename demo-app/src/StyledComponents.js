import styled from "styled-components";

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

export { ShapeCards, ShapeCard, ShapeName, Playground, ShapeDetails, ShapePallete };