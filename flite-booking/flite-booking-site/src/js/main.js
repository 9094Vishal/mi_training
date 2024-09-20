import { cities } from "../mock/cityes.js";

// grab everything we need

const from = document.getElementById("from");
const to = document.getElementById("to");
const startDate = document.getElementById("depart");
const returnDate = document.getElementById("return");
const fromError = document.getElementById("from-error");
const torror = document.getElementById("to-error");
const departError = document.getElementById("depart-error");

const adults = document.getElementById("adults");
const adultsError = document.getElementById("adult-error");
const child = document.getElementById("child");
const childError = document.getElementById("child-error");

document.getElementById("flight-search-btn").onclick = () => {
  if (from.value.trim() == "") {
    fromError.textContent = "Hey,From where you want to go!!!";
  } else if (to.value.trim() == "") {
    torror.textContent = "Hey, Where you want to go!!!";
  } else if (startDate.value == "") {
    departError.innerText = "When you want to go!!!";
  } else {
    location = `trip.html?from=${from.value}&to=${to.value}&depart=${startDate.value}&return=${returnDate.value}&adults=${adults.value}&childs=${child.value}`;
  }
};
from.addEventListener("input", (e) => {
  if (e.target.value.trim() == "") {
    fromError.textContent = "Hey, Where you want to go!!!";
  } else {
    fromError.textContent = "";
  }
});

to.addEventListener("input", (e) => {
  if (e.target.value.trim() == "") {
    torror.textContent = "Hey, Where you want to go!!!";
  } else {
    torror.textContent = "";
  }
});
