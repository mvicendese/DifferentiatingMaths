import React from 'react';
import Button from "../Components/Button";
import ReactDOM from "react-dom";
import Test from "./test";


function App() {
  return (
    <div className="App">
      <Button name = "Test" class="primary" function={Navigate} >Primary</Button>
    </div>
  );
}

function Navigate(){
  ReactDOM.render(<Test />, document.getElementById('root'))
}
export default App;
