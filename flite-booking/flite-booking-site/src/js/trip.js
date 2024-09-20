import { flights } from "../mock/flightsData.js";
import {
  getDurartion,
  getTime,
  isLogedIn,
  loadHeaderWithBookFunctions,
} from "./helper.js";

document.addEventListener("DOMContentLoaded", () => {
  loadHeaderWithBookFunctions();
  const fliterWrapper = document.getElementById("flight-wraper");

  const makeCards = () => {
    let params = new URLSearchParams(location.search);
    let from = params.get("from");
    let to = params.get("to");
    let startDate = params.get("depart");
    let returnDate = params.get("return");
    let adults = params.get("adults");
    let childs = params.get("childs");

    const availableFlights = flights.filter(
      (item) => item.arrivalCity == to && item.departureCity == from
    );
    if (availableFlights) {
      fliterWrapper.innerHTML = availableFlights
        .map(
          ({
            id,
            imageUrl,
            airline,
            arrivalCity,
            departureCity,
            arrivalTime,
            departureTime,
            flightNumber,
            estimatedTravelTime,
            price,
          }) => {
            return `
            <div class="mx-3 mt-2 bg-gray-200 p-3 rounded-md">
                    <div class="flex items-center gap-2 flex-shrink-0">
                      <img
                        src="https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0="
                        class="h-[50px] w-[50px] object-contain rounded-lg"
                        alt=""
                      />
                      <div class="flex items-center justify-between flex-1">
                        <h1 class="font-semibold text-xl">
                         ${airline} <span class="text-gray-500 text-lg"> (${flightNumber})</span>
                        </h1>
                        <p>${price}</p>
                      </div>
                    </div>
                    <div class="flex justify-between items-center">
                      <span>Departure:</span>
                      <span>Destination</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span>${getTime(departureTime)}</span>
                      <span>${getTime(arrivalTime)}</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span>${departureCity}</span>
                      <div class="relative flex-1 mx-2 text-center">
                        <hr
                          class="border-t absolute w-full top-1/2 border-dotted z-0 border-black"
                        />
                        <span class="relative z-10 mx-auto bg-white">${getDurartion(
                          estimatedTravelTime
                        )} </span>
                      </div>
                      <span>${arrivalCity}</span>
                    </div>
                    <div class="w-full text-center mt-2">
                      <button
                      value="${id}"
                        class="book-now-btn mx-auto bg-blue-300 border border-blue-600 rounded-xl py-2 px-5 font-medium hover:bg-blue-500"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
            `;
          }
        )
        .join("");
    }
  };
  makeCards();
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
  document.querySelectorAll(".book-now-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (isLogedIn()) {
      } else {
      }
    });
  });
  document.getElementById("flight-search-btn").onclick = () => {
    if (from.value.trim() == "") {
      fromError.textContent = "Hey,From where you want to go!!!";
    } else if (to.value.trim() == "") {
      torror.textContent = "Hey, Where you want to go!!!";
    } else if (startDate.value == "") {
      departError.innerText = "When you want to go!!!";
    } else {
      history.replaceState(
        {},
        "",
        `?from=${from.value}&to=${to.value}&depart=${startDate.value}&return=${returnDate.value}&adults=${adults.value}&childs=${child.value}`
      );
      makeCards();
    }
  };
});
