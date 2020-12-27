// import animals from "./data";

// console.log(animals);

// const [cat, dog] = animals;

// const { name: catName, sound: catSound } = cat;
// console.log(catName);

// if name field is not present in data.js then it will provide default name
// const{name = "Fluffy", sound="Purr"} = cat;
//console.log(name)

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

console.log(honda);

const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour]
} = honda;

console.log(hondaTopSpeed);

const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour]
} = tesla;

// const teslaTopSpeed = tesla.speedStats.topSpeed;
// //const teslaTopColour = tesla.coloursByPopularity[0];
// const hondaTopSpeed = honda.speedStats.topSpeed;
// //const hondaTopColour = honda.coloursByPopularity[0];

// const [topTesla, bottomTesla] = tesla.coloursByPopularity;
// const teslaTopColour = topTesla;

// const [topHonda, bottomHona] = honda.coloursByPopularity;
// const hondaTopColour = topHonda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
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
