import React from "react";
import ReactDOM from "react-dom";
import { lodashArray } from "./AyrrayExample";
import { map } from "lodash";
const tab2 = [1, 2, 3, 55, 1, 44, 88, 55, 1, 1, 22, 55, 11, 44, 88];
const show = () => {
  map(tab2, (num, key) => {
    <li>num</li>;
  });
};
function App() {
  return (
    <div className="App">
      <h1>{lodashArray()}</h1>
      <center>
        <h1>lodash test</h1>
      </center>
      {show()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
