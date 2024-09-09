const testomonialData = [
  {
    imgage: "./assets/person-1.png",
    comment:
      "Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support",
    name: "Rayhan Curran",
  },
  {
    imgage: "./assets/person-2.png",
    comment:
      "As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website",
    name: "Kayley Frame",
  },
  {
    imgage: "./assets/person-3.png",
    comment: "The most important part of the Startup Framework is the samples",
    name: "Gene Whitfield",
  },
  {
    imgage: "./assets/person-4.png",
    comment:
      "I’ve built my website with Startup just in one day, and it was ready-to-go. ",
    name: "Allan Kim",
  },
];
const showCaseData = [
  {
    image: "./assets/show-1.png",
    subtit: "UI kit",
    title: "Mozart Project",
  },
  {
    image: "./assets/show-2.png",
    subtit: "Framework",
    title: "Startup Framework 2.0",
  },
  {
    image: "./assets/show-3.png",
    subtit: "Photos",
    title: "From the Sky",
  },
  {
    image: "./assets/show-4.png",
    subtit: "Pictures",
    title: "Air Forces",
  },
];
const teamsData = [
  {
    name: "Leah Salomon",
    image: "./assets/team1.png",
    profile: "UI Designer",
    socialMedia: [
      "./assets/twitter.svg",
      "./assets/fb.svg",
      "./assets/pintrest.svg",
      "./assets/insta.svg",
    ],
  },
  {
    name: "Colin Timmons",
    image: "./assets/team2.png",
    profile: "UX Designer",
    socialMedia: ["./assets/twitter.svg", "./assets/pintrest.svg"],
  },
  {
    name: "Miguel Osborne",
    image: "./assets/team3.png",
    profile: "Front-end Developer",
    socialMedia: ["./assets/twitter.svg", "./assets/insta.svg"],
  },
  {
    name: "Taylor Simon",
    image: "./assets/team4.png",
    profile: "Product Manager",
    socialMedia: [
      "./assets/twitter.svg",
      "./assets/pintrest.svg",
      "./assets/git.svg",
    ],
  },
  {
    name: "Steven MacAlister",
    image: "./assets/team5.png",
    profile: "Copyrighter",
    socialMedia: ["./assets/twitter.svg"],
  },
];
const pricingData = [
  {
    pricing: [
      { item: "2 GB of space", provided: true },
      { item: "14 days of backups", provided: true },
      { item: "Social integrations", provided: true },
      { item: "Client billing", provided: true },
      { item: "Remote access", provided: false },
      { item: "Custom domain", provided: false },
      { item: "24 hours support", provided: false },
      { item: "Admin tools", provided: false },
      { item: "Collaboration tools", provided: false },
      { item: "User management", provided: false },
    ],
    type: "Starter",
    price: 9.99,
  },
  {
    pricing: [
      { item: "2 GB of space", provided: true },
      { item: "14 days of backups", provided: true },
      { item: "Social integrations", provided: true },
      { item: "Client billing", provided: true },
      { item: "Remote access", provided: true },
      { item: "Custom domain", provided: true },
      { item: "24 hours support", provided: true },
      { item: "Admin tools", provided: false },
      { item: "Collaboration tools", provided: false },
      { item: "User management", provided: false },
    ],
    type: "Professional",
    price: 19.99,
  },
  {
    pricing: [
      { item: "2 GB of space", provided: true },
      { item: "14 days of backups", provided: true },
      { item: "Social integrations", provided: true },
      { item: "Client billing", provided: true },
      { item: "Remote access", provided: true },
      { item: "Custom domain", provided: true },
      { item: "24 hours support", provided: true },
      { item: "Admin tools", provided: true },
      { item: "Collaboration tools", provided: true },
      { item: "User management", provided: true },
    ],
    type: "Team",
    price: "49.99",
  },
];
document.addEventListener("DOMContentLoaded", () => {
  const testimonial = document.getElementById("testimonial");
  const testimonialHtml = testomonialData
    .map(({ imgage, comment, name }) => {
      return `
            <div
            class="flex flex-shrink-0 w-full md:w-[300px] lg:w-[470px] md:gap-[20px] lg:gap-[30px] md:!h-[400px] lg:!h-[237px] gap-[30px] border border-gray-200 rounded-lg px-[25px] py-[35px]"
          >
            <div class="flex flex-shrink-0">
              <img
                class="w-[70px] h-[70px]"
                src="${imgage}"
                alt=""
              />
            </div>
            <div class="flex justify-between">
              <div class="flex flex-col justify-between">
                <p class="text-lg font-medium">
                 ${comment}
                </p>
                <p class="text-sm font-bold text-gray-500">${name}</p>
              </div>
            </div>
          </div>
    `;
    })
    .join("");
  testimonial.innerHTML = testimonialHtml;

  // show case
  const showCase = document.getElementById("showcase");
  const showCaseHtml = showCaseData
    .map(({ image, title, subtit }) => {
      return `
             <div class="flex flex-col items-center lg:items-start flex-shrink-0">
              <div class="rounded-lg w-[90%] ms:w-[470px] md:h-[280px] mb-[15px] ms:mb-[30px]">
                <img src="${image}" alt="" />
              </div>
              <div class="text-center">
                <p class="text-sm">${subtit}</p>
                <p class="text-[22px]">${title}</p>
              </div>
            </div>
  `;
    })
    .join("");
  showCase.innerHTML = showCaseHtml;
  // teams data
  const teamCase = document.getElementById("teams");
  const teamCaseHtml = teamsData
    .map(({ image, name, profile, socialMedia }) => {
      return `
               <div class="flex flex-col flex-shrink-0">
              <div class="rounded-full h-[100px] w-[100px] mb-[17px]">
                <img
                  class="rounded-full h-full w-full object-cover"
                  src="${image}"
                  alt=""
                />
              </div>
              <div class="">
                <p class="text-[22px]">${name}</p>
                <p class="text-[16px]">${profile}</p>
                <div class="flex gap-[30px] mt-[20px]">
                ${socialMedia
                  .map(
                    (item) => `
                   <img
                    class="w-[17px] h-[17px] invert"
                    src="${item}"
                    alt=""
                  />
                  `
                  )
                  .join("")}
                  </div>
              </div>
            </div>
`;
    })
    .join("");

  // pricing
  const pricing = document.getElementById("pricing");
  const pricingHtml = pricingData
    .map(({ type, price, pricing }, index) => {
      return `
        <div class="w-full sm:w-[370px] border-[2px] border-gray-300 rounded-lg">
           <div class="mt-[65.2px] pl-[59px] mb-[44.6px]">
              <p class="text-[22px]">${type}</p>
              <span class="text-[58px]">${price}</span><sup class="text-sm"> $</sup>
            </div>
            <div class="pl-[15px] sm:pl-[44px] mb-[30px]">
            ${pricing
              .map(
                ({ provided, item }) => `
              <div class="flex gap-[15px] items-center mb-2">
                <i class="fa-solid fa-check ${
                  provided ? "block" : "invisible"
                } text-green-400"></i>
                <p class="text-[16px]">${item}</p>
              </div> 
            `
              )
              .join("")}
           
            </div>
            <div class="w-full text-center mb-[56px]">
           <button
              class="py-[10px] sm:py-[17px] px-[45px] sm:px-[60px] mx-auto border ${
                index == 1 ? "bg-[#E93A7D]" : ""
              } border-gray-300 rounded-[100px] text-[20px] font-medium"
            >
              Get Started
            </button> </div>
            </div>
`;
    })
    .join("");
  pricing.innerHTML = pricingHtml;

  teamCase.innerHTML = teamCaseHtml;
  document.getElementById("login").classList.add("hidden");
  document.querySelectorAll(".tablinks").forEach((button) => {
    button.addEventListener("click", (e) => {
      const tab = e.target.value;
      if (tab === "signup") {
        document.getElementById("signup-div").classList.add("border-[#1E0E62]");
        document.getElementById("signup-btn").classList.add("text-[#1E0E62]");
        document
          .getElementById("signin-div")
          .classList.replace("border-[#1E0E62]", "border-[#EBEAED]");
        document
          .getElementById("signin-btn")
          .classList.remove("text-[#1E0E62]");
        document.getElementById("login").classList.add("hidden");
        document.getElementById(tab).classList.remove("hidden");
      } else {
        document.getElementById("signin-div").classList.add("border-[#1E0E62]");
        document.getElementById("signin-btn").classList.add("text-[#1E0E62]");
        document
          .getElementById("signup-div")
          .classList.replace("border-[#1E0E62]", "border-[#EBEAED]");
        document
          .getElementById("signup-btn")
          .classList.remove("text-[#1E0E62]");
        document.getElementById("signup").classList.add("hidden");
        document.getElementById(tab).classList.remove("hidden");
      }
    });
  });
});
