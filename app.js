const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "MUG1",
    price: 15,
    colors: [
      {
        code: "black",
        img: "./img/mug.png",
      },
      {
        code: "darkblue",
        img: "./img/bluemug.png",
      },
    ],
  },
  {
    id: 2,
    title: "MUG2",
    price: 14,
    colors: [
      {
        code: "black",
        img: "./img/mug.png",
      },
      {
        code: "green",
        img: "./img/greenmug.png",
      },
    ],
  },
  {
    id: 3,
    title: "MUG3",
    price: 10,
    colors: [
      {
        code: "black",
        img: "./img/mug.png",
      },
      {
        code: "pink",
        img: "./img/pink.png",
      },
    ],
  },
  {
    id: 4,
    title: "MUG4",
    price: 12,
    colors: [
      {
        code: "black",
        img: "./img/mug.png",
      },
      {
        code: "orange",
        img: "./img/orrange.png",
      },
    ],
  },
  {
    id: 5,
    title: "MUG5",
    price: 9,
    colors: [
      {
        code: "red",
        img: "./img/red.png",
      },
      {
        code: "black",
        img: "./img/mug.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});