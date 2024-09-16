import { getcurrentUser, setNavBar } from "../../script/helper.js";
document.addEventListener("DOMContentLoaded", () => {
  // twoSum([2, 7, 11, 15], 9);
  console.log("twoSum([2, 7, 11, 15], 9): ", twoSum([2, 7, 11, 15], 9));
  setNavBar(false);
  document.querySelector(`h2`).innerHTML = `Welcome ${getcurrentUser()}...`;
});
