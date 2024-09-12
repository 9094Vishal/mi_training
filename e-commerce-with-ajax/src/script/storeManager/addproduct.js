import { setNavBar } from "../helper.js";

document.addEventListener("DOMContentLoaded", () => {
  setNavBar(false);
  const name = document.getElementById("name");
  const category = document.getElementById("category");
  const decription = document.getElementById("decription");
  const price = document.getElementById("price");
  const discount = document.getElementById("discount");
  const brand = document.getElementById("brand");
  const warranty = document.getElementById("warranty");
  const returnPolicy = document.getElementById("return-policy");
  const imageWrapper = document.getElementById("images-wrapper");
  const images = [];
  const quntity = document.getElementById("quntity");

  let selectedWarranty = null;
  let selectedReturnPolicy = null;
  let selectedCategory = null;

  // adding inputs
  <div class="flex gap-2">
    <input
      type="text"
      id="image"
      placeholder="Product image.."
      class="images border py-2 px-3 border-[#1A374D] rounded-lg outline-none w-full"
    />
    <button class="add-btn w-fit py-2 px-5" type="button">
      Add
    </button>
  </div>;

  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  let categoryHtml = `<option value="select" key="">
       Select
      </option>`;

  categoryHtml += categories
    .map((option) => {
      return `<option value="${option}" key="">
        ${option}
      </option>`;
    })
    .join("");
  category.innerHTML = categoryHtml;

  name.addEventListener("input", (e) => {
    if (name.value.toString().trim() === "") {
      name.nextElementSibling.innerHTML = "This field is required...";
    } else {
      name.nextElementSibling.innerHTML = "";
    }
  });
  category.addEventListener("input", (e) => {
    if (category.value.toString().trim() === "") {
      category.nextElementSibling.innerHTML = "This field is required...";
    } else {
      category.nextElementSibling.innerHTML = "";
    }
  });
  decription.addEventListener("input", (e) => {
    if (decription.value.toString().trim() === "") {
      decription.nextElementSibling.innerHTML = "This field is required...";
    } else {
      decription.nextElementSibling.innerHTML = "";
    }
  });
  price.addEventListener("input", (e) => {
    if (price.value.toString().trim() === "") {
      price.nextElementSibling.innerHTML = "This field is required...";
    } else {
      price.nextElementSibling.innerHTML = "";
    }
  });
  discount.addEventListener("input", (e) => {
    if (discount.value.toString().trim() === "") {
      discount.nextElementSibling.innerHTML = "This field is required...";
    } else {
      discount.nextElementSibling.innerHTML = "";
    }
  });
  brand.addEventListener("input", (e) => {
    if (brand.value.toString().trim() === "") {
      brand.nextElementSibling.innerHTML = "This field is required...";
    } else {
      brand.nextElementSibling.innerHTML = "";
    }
  });
  warranty.addEventListener("change", (e) => {
    if (warranty.value === "select") {
      warranty.nextElementSibling.innerHTML = "This field is required...";
    } else {
      warranty.nextElementSibling.innerHTML = "";
    }
  });
  returnPolicy.addEventListener("change", (e) => {
    if (returnPolicy.value === "select") {
      returnPolicy.nextElementSibling.innerHTML = "This field is required...";
    } else {
      returnPolicy.nextElementSibling.innerHTML = "";
    }
  });

  quntity.addEventListener("input", (e) => {
    if (quntity.value.toString().trim() === "") {
      quntity.nextElementSibling.innerHTML = "This field is required...";
    } else {
      quntity.nextElementSibling.innerHTML = "";
    }
  });

  document
    .getElementById("add-product-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      if (
        validate([
          name,
          category,
          decription,
          price,
          discount,
          brand,
          warranty,
          returnPolicy,
          quntity,
        ])
      ) {
        const productData = {
          title: name.value,
          category: category.value,
          description: decription.value,
          price: price.value,
          discountPercentage: discount.value,
          brand: brand.value,
          warrantyInformation: warranty.value,
          returnPolicy: returnPolicy.value,
          stock: quntity.value,
          availabilityStatus: quntity.value != 0 ? "In stock" : "Out of stock",
        };
        console.log(productData);
      }
    });
  const validate = (elements = []) => {
    let allDone = true;
    elements.forEach((element) => {
      if (allDone) {
        if (element.value.toString().trim() === "") {
          element.nextElementSibling.innerHTML = "This field is required...";
          allDone = false;
          element.focus();
        }
      } else {
        return;
      }
    });
    if (allDone) {
      if (category.value === "select") {
        category.nextElementSibling.innerHTML = "This field is required...";
        category.focus();
        allDone = false;
        return;
      } else {
        selectedCategory = category.value;
      }
      if (returnPolicy.value === "select") {
        returnPolicy.nextElementSibling.innerHTML = "This field is required...";
        returnPolicy.focus();
        allDone = false;
        return;
      } else {
        selectedReturnPolicy = returnPolicy.value;
      }
      if (warranty.value === "select") {
        warranty.nextElementSibling.innerHTML = "This field is required...";
        warranty.focus();
        allDone = false;
        return;
      } else {
        selectedWarranty = warranty.value;
      }
    }

    return allDone;
  };
});
