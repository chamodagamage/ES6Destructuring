// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
// const [hondaTopColour] = honda.coloursByPopularity;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;

// const [teslaTopColour] = tesla.coloursByPopularity;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

// const hondaTopSpeed = honda.speedStats.topSpeed;
const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

// const teslaTopSpeed = tesla.speedStats.topSpeed;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
