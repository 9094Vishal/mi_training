import { cities } from "../mock/cityes.js";

export const getTime = (d) => {
  const date = new Date(d);

  return `${date.getUTCHours()}:${date.getUTCMinutes()}`;
};
export const getDurartion = (d) => {
  const hours = d.split(" ")[0];
  const minutes = d.split(" ")[2];
  let formattedHours = hours.toString().padStart(2, "0");
  let formattedMinutes = minutes ? minutes.toString().padStart(2, "0") : "00";

  return `${formattedHours}h:${formattedMinutes}m`;
};

export const isLogedIn = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  }
  return false;
};

export const loadHeaderWithBookFunctions = () => {
  const header = document.querySelector("header");
  header.setAttribute("class", "px-14 py-10 bg-[#09203C] text-white");
  const mainHeader = getNavigationBar() + getBookFunctions();
  header.innerHTML = mainHeader;
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  document.querySelectorAll(".clear-btn").forEach((item) => {
    item.onclick = () => {
      if (item.id == "source") {
        from.value = "";
      } else {
        to.value = " ";
      }
    };
  });
  document.querySelectorAll("[data-suggest]").forEach((input) => {
    input.addEventListener("input", function () {
      const scope = input.closest(".suggestions-container");
      const suggestionsBox = scope.querySelector(".suggestions");
      suggestionsBox.innerHTML = '<div role="listbox"></div>';
      const suggestionsHelp = scope.querySelector(".suggestions-help");
      suggestionsHelp.innerHTML = "";

      const value = input.value;
      const suggestions = cities
        .filter((item) => {
          if (item.city.toLowerCase().includes(value.toLowerCase()))
            return item;
        })
        .sort();

      if (value) {
        const listbox = suggestionsBox.querySelector('[role="listbox"]');
        suggestions.forEach((item, index) => {
          const option = document.createElement("div");
          option.setAttribute("role", "option");

          option.textContent = `
            ${item.city}
          `.trim();
          option.id = `${input.id}-${index}`;
          listbox.appendChild(option);
        });

        if (suggestions.length) {
          suggestionsHelp.textContent = `There are ${suggestions.length} suggestions. Use the up and down arrows to browse.`;
        }
      }

      const id = input.id;
      input.addEventListener("keydown", function (e) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const listbox = scope.querySelector('[role="listbox"]');
          listbox.setAttribute("tabindex", "0");
          listbox.focus();
          const firstOption = listbox.querySelector(
            '[role="option"]:first-child'
          );
          if (firstOption) {
            listbox.setAttribute("aria-activedescendant", firstOption.id);
            firstOption.classList.add("selected");
            document.getElementById(id).value = firstOption.textContent.trim();
          }
        }
        if (e.key === "Tab") {
          scope.querySelector('[role="listbox"]').remove();
        }
      });

      const listbox = scope.querySelector('[role="listbox"]');
      listbox.addEventListener("keydown", function (e) {
        let newOption;
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          input.focus();
        }
        if (e.key === "ArrowDown") {
          e.preventDefault();
          newOption = document.querySelector(".selected").nextElementSibling;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          newOption =
            document.querySelector(".selected").previousElementSibling;
        }
        if (newOption) {
          const currentSelected = document.querySelector(".selected");
          if (currentSelected) {
            currentSelected.classList.remove("selected");
          }
          newOption.classList.add("selected");
          listbox.setAttribute("aria-activedescendant", newOption.id);
          document.getElementById(id).value = newOption.textContent;
        }
      });

      listbox.addEventListener("blur", function () {
        this.innerHTML = "";
      });

      listbox.querySelectorAll('[role="option"]').forEach((option) => {
        option.addEventListener("click", function () {
          input.value = this.textContent;
          listbox.remove();
          input.focus();
        });
      });
    });
  });
};
export const getNavigationBar = () => {
  return `
    <nav class="">
        <div class="w-full">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <!-- logo -->
              <div>
                <a
                  href="#"
                  class="flex items-center py-5 px-2 hover:text-gray-200"
                >
                  <svg
                    class="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <span class="font-bold">Mi Book</span>
                </a>
              </div>

              <!-- primary nav -->
              <div class="hidden md:flex items-center space-x-1">
                <a href="#" class="py-5 px-3hover:text-gray-200">History</a>
              </div>
            </div>

            <!-- secondary nav -->
            <div class="hidden md:flex items-center space-x-1">
              <a href="" class="py-5 px-3">Login</a>
              <a
                href=""
                class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                >Signup</a
              >
            </div>

            <!-- mobile button goes here -->
            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- mobile menu -->
        <div class="mobile-menu hidden md:hidden">
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"
            >Features</a
          >
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200"
            >Pricing</a
          >
        </div>
      </nav>
    `;
};
export const getBookFunctions = () => {
  let params = new URLSearchParams(location.search);
  const from = params.get("from");
  const to = params.get("to");
  const startDate = params.get("depart");
  const returnDate = params.get("return");
  const adults = params.get("adults");
  const childs = params.get("childs");
  return `
   <div class="mt-5">
        <p>Millions of cheap flights. One simple search.</p>

        <div class="mt-5">
          <div class="flex w-full gap-2 flex-wrap">
            <div class="flex w-full gap-4">
              <!-- from -->
              <div class="flex gap-2 w-full">
                <div class="bg-white px-5 py-1 w-full">
                  <div>
                    <label
                      for="from"
                      class="block text-sm font-medium leading-6 text-slate-500"
                      >From</label
                    >
                    <div
                      class="mt-2 rounded-md shadow-sm flex w-full items-center bg-white pr-2"
                    >
                      <div class="suggestions-container w-full">
                        <div
                          class="suggestions-help absolute left-[9999px] bg-white"
                          role="status"
                        ></div>
                        <input
                          id="from"
                          data-suggest
                          type="text"
                          name="from"
                          value="${from ?? ""}"
                          placeholder="Source"
                          autocomplete="off"
                          class="block border-none outline-none w-full flex-1 rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm"
                        />
                        <div class="suggestions relative"></div>
                      </div>

                      <div class="clear-btn" id="source">
                        <i class="fa-solid fa-xmark text-black"></i>
                      </div>
                    </div>
                  </div>
                  <p class="text-red-500" id="from-error"></p>
                </div>
              </div>
              <!-- to -->
              <div class="flex gap-2 w-full">
                <div class="bg-white px-5 py-1 w-full">
                  <div>
                    <label
                      for="to"
                      class="block text-sm font-medium leading-6 text-slate-500"
                      >To</label
                    >
                    <div
                      class="mt-2 rounded-md shadow-sm flex items-center bg-white pr-2"
                    >
                      <div class="suggestions-container w-full">
                        <div
                          class="suggestions-help absolute left-[9999px] bg-white"
                          role="status"
                        ></div>
                        <input
                          type="text"
                          id="to"
                          name="to"
                          value="${to ?? ""}"
                          data-suggest
                          placeholder="Destination"
                          autocomplete="off"
                          class="block border-none outline-none w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm"
                        />
                        <div class="suggestions relative"></div>
                      </div>

                      <div class="clear-btn">
                        <i class="fa-solid fa-xmark text-black"></i>
                      </div>
                    </div>
                  </div>
                  <p class="text-red-500" id="to-error"></p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 relative">
              <div class="bg-white px-5 py-1">
                <div>
                  <label
                    for="depart"
                    class="block text-sm font-medium leading-6 text-slate-500"
                    >Depart</label
                  >
                  <div
                    class="mt-2 rounded-md shadow-sm flex items-center bg-white pr-2"
                  >
                    <input
                      type="date"
                      name="depart"
                      value="${startDate ?? ""}"
                      id="depart"
                      class="block border-none outline-none w-full rounded-md py-1.5 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Destination"
                    />
                  </div>
                  <p class="text-red-500" id="depart-error"></p>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="bg-white px-5 py-1">
                <div>
                  <label
                    for="return"
                    class="block text-sm font-medium leading-6 text-slate-500"
                    >Return</label
                  >
                  <div
                    class="mt-2 rounded-md shadow-sm flex items-center bg-white pr-2"
                  >
                    <input
                      type="date"
                      name="return"
                      value="${returnDate ?? ""}"
                      id="return"
                      class="block border-none outline-none w-full rounded-md py-1.5 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Destination"
                    />
                  </div>
                  <p class="text-red-500"></p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 relative">
              <div class="bg-white px-5 py-1">
                <div>
                  <label
                    for="adults"
                    class="block text-sm font-medium leading-6 text-slate-500"
                    >Adutls</label
                  >
                  <div
                    class="mt-2 rounded-md shadow-sm flex items-center bg-white pr-2"
                  >
                    <input
                      type="number"
                      name="adults"
                      value="${adults ?? 0}"
                      id="adults"
                      class="block border-none outline-none w-full rounded-md py-1.5 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Number of Adutls"
                      value="0"
                      min="0"
                      max="9"
                    />
                  </div>
                  <p class="text-red-500" id="adult-error"></p>
                </div>
              </div>
            </div>
            <div class="flex gap-2 relative">
              <div class="bg-white px-5 py-1">
                <div>
                  <label
                    for="child"
                    class="block text-sm font-medium leading-6 text-slate-500"
                    >Childs</label
                  >
                  <div
                    class="mt-2 rounded-md shadow-sm flex items-center bg-white pr-2"
                  >
                    <input
                      type="number"
                      value="${childs ?? 0}"
                      name="child"
                      id="child"
                      class="block border-none outline-none w-full rounded-md py-1.5 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      placeholder="Number of child"
                      value="0"
                      min="0"
                      max="9"
                    />
                  </div>
                  <p class="text-red-500" id="child-error"></p>
                </div>
              </div>
            </div>
          </div>

          <button
            id="flight-search-btn"
            class="bg-blue-500 text-center py-4 px-5 rounded-lg h-full mt-2"
          >
            Search
          </button>
        </div>
      </div>
  `;
};
