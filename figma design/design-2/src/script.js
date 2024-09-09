document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./assets/google.png",
    "./assets/amezon.png",
    "./assets/bolt.png",
    "./assets/netflix.png",
    "./assets/paypal.png",
  ];
  const slider = `
        <div
                class="scroll-arrow w-[10%] inline-block align-middle cursor-pointer p-0 m-0 opacity-50 text-[34px] transition duration-[0.2s] hover:transition hover:duration-[0.2s] hover:opacity-100"
                id="scroll-left"
              >
                &#8592;
              </div>
              <ul
                id="imgList"
                class="w-[70%] scroll-smooth inline-block relative align-middle text-center overflow-x-scroll overflow-y-hidden whitespace-nowrap"
              >
              ${images
                .map(
                  (image) => `
                    <li
                  class="inline-block relative align-middle w-[20%] mr-[1.5%] ml-[1.5%] grayscale transition duration-[0.2s] hover:transition hover:duration-[0.2s] hover:grayscale-0"
                >
                  <img
                    src="${image}"
                  />
                </li>    
                    `
                )
                .join("")}
                
              </ul>
              <div
                class="scroll-arrow w-[10%] inline-block align-middle cursor-pointer p-0 m-0 opacity-50 text-[34px] transition duration-[0.2s] hover:transition hover:duration-[0.2s] hover:opacity-100"
                id="scroll-right"
                
              >
                &#8594;
              </div>
    `;
  document.getElementById("companys").innerHTML = slider;
  const imgList = document.getElementById("imgList");
  const scrollRight = document.getElementById("scroll-right");
  const scrollLeft = document.getElementById("scroll-left");

  // When a user clicks on the right arrow, the ul will scroll 750px to the right
  scrollRight.addEventListener("click", (event) => {
    imgList.scrollBy(750, 0);
  });

  // When a user clicks on the left arrow, the ul will scroll 750px to the left
  scrollLeft.addEventListener("click", (event) => {
    imgList.scrollBy(-750, 0);
  });

  const workData = [
    {
      title: "Ecommerce Landing page",
      image: "./assets/work1.png",
    },
    {
      title: "Basketball Studio",
      image: "./assets/work2.png",
    },
    {
      title: "Perfume Company site",
      image: "./assets/work3.png",
    },
    {
      title: "Health care site",
      image: "./assets/work4.png",
    },
    {
      title: "Real Estate",
      image: "./assets/work5.png",
    },
    {
      title: "Bank Wallet",
      image: "./assets/work6.png",
    },
  ];
  const workHtml = workData
    .map(
      ({ image, title }) => `
    <div class="w-[313px]">
            <p>${title}</p>
            <div class="pt-[14px]">
              <img src="${image}" alt="" />
            </div>
          </div>
  `
    )
    .join("");
  document.getElementById("mywork").innerHTML = workHtml;

  // testo
  const testoImages = [
    {
      name: "Charles Dim",
      image: "./assets/client1.png",
      position: "Lead Designer, Netflix",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.",
    },
    {
      name: "Margeret Wills",
      image: "./assets/client2.png",
      position: "CEO, Ebay",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.",
    },
    {
      name: "Harshit",
      image: "./assets/client3.png",
      position: "Web developer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.",
    },
    {
      name: "Vishl Prajapati",
      image: "./assets/client4.png",
      position: "Web developer",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.",
    },
  ];
  const testoSlider = testoImages
    .map(
      ({ image, name, message, position }) => `
     <div
              class="w-[475px] dark:bg-[#00000073] bg-white py-[15px] px-[18px]"
            >
              <div class="flex flex-shrink-0 justify-between items-center">
                <div class="flex items-center gap-1">
                  <img src="${image}" alt="" />
                  <div class="text-start">
                    <h2 class="text-sm md:text-base lg:text-lg">${name}</h2>
                    <p class="text-[#C5C5C5] text-xs md:text-sm">
                      ${position}
                    </p>
                  </div>
                </div>
                <div class=""><img src="./assets/quote.svg" alt="" /></div>
              </div>
              <div class="py-[15px]">
            ${message}
              </div>
            </div>
  `
    )
    .join("");
  document.getElementById("client").innerHTML = testoSlider;
  const imgtestoList = document.getElementById("imgTestoList");
  const scrolltestoRight = document.getElementById("scroll-testo-right");
  const scrolltestoLeft = document.getElementById("scroll-testo-left");

  // When a user clicks on the right arrow, the ul will scroll 750px to the right
  const bullets = document.getElementById("bullets");
  let bullet = "";

  for (let i = 1; i <= testoImages.length / 2; i++) {
    bullet += `<div class="bullet w-[11px] h-[11px] bg-[#C4C4C4] rounded-full" data-index="${i}"></div>`;
  }
  bullets.innerHTML = bullet;
  document.querySelectorAll(".bullet").forEach((element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
  scrolltestoRight.addEventListener("click", (event) => {
    document.getElementById("client").style.translate = "500px 0";
  });

  // When a user clicks on the left arrow, the ul will scroll 750px to the left
  scrolltestoLeft.addEventListener("click", (event) => {
    document.getElementById("client").style.translate = "-500px 0";
  });
});
