import Shape from "react-clip-path";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Shape
        type="circle"
        width="300px"
        height="300px"
        showLabel={true}
        showShadow={false}
      />

      <Shape
        type="square"
        width="300px"
        height="300px"
        showLabel={true}
        showShadow={true}
        backgroundColor="pink"
      />

      <Shape
        type="rhombus"
        width="300px"
        height="300px"
        showLabel={true}
        showShadow={false}
        backgroundColor="green"
      />

      <Shape
        type="star"
        width="300px"
        height="300px"
        showLabel={true}
        showShadow={true}
        backgroundColor="#c20b0b"
      />

      <Shape
        type="cross"
        width="300px"
        height="300px"
        showLabel={true}
        showShadow={false}
        backgroundColor="#da0983"
      />

      <Shape
        text="Custom"
        width="300px"
        height="300px"
        showLabel={true}
        showShadow={false}
        backgroundColor="#09ccda"
        formula="polygon(10% 10%, 90% 10%, 90% 90%, 10% 80%)"
      />
    </div>
  );
}

export default App;
