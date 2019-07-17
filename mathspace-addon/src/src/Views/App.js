import React from 'react';
import Button from "../Components/Button";
import ReactDOM from "react-dom";
import Home from "./Home"


function App() {
  return (
    <div className="App">
      <Button name = "Test" class="primary" function={Navigate} >Primary</Button>
    </div>
  );
}

function Navigate(){
  ReactDOM.render(<Home />, document.getElementById('root'))
}
export default App;
