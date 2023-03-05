const sum = require("./sum").sum;
import { sum2 } from "./sum2";
// import { style } from './css/index.scss';
// import Icon from "./assets/img/proba.png";

console.log("Hello pati");
const flightsFrom = document.getElementById("flightsFrom");
const flightsTo = document.getElementById("flightsTo");
const OptionValue = document.getElementById("flightsFrom").replaceChild;
console.log(OptionValue);

// function Check(option1, option2) {}
//   flightsTo.innerHTML += `<option value=${el.id}> ${el.name} </option>`;

fetch(
  "https://raw.githubusercontent.com/PatrycjaMik/BuyFlightsApp/main/db.json"
)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
    data.data.forEach(function (el) {
      flightsFrom.innerHTML += `<option id=${el.id}> ${el.name} </option>`;
      flightsTo.innerHTML += `<option id=${el.id}> ${el.name} </option>`;
    });
  });

document.getElementById("flightsFrom").addEventListener("change", function () {
  console.log("You selected: ", this.value);
});

document.getElementById("flightsTo").addEventListener("change", function () {
  console.log("You selected: ", this.value);
});

///trash

let heading = document.querySelector("#demo"),
  sumValue = sum(10, 5);

heading.innerText = `10+10= ${sumValue}`;

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector("div").append(myIcon);
document.querySelector("div").classList.add("change");
