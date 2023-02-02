/*----menu burger------*/

const menuBurgerActive = document.querySelector(".burgermenu");
const naveActive = document.querySelector(".nav");
const headerLogo = document.querySelector(".header__logo");
const headerWrapper = document.querySelector(".headerwrapper");
const designedby = document.querySelector(".designedby");
const burgerMenuBack = document.querySelector(".burgermenu-back");

menuBurgerActive.addEventListener("click", function () {
  menuBurgerActive.classList.toggle("active");
  designedby.classList.toggle("active");
  naveActive.classList.toggle("active");
  headerLogo.classList.toggle("active");
  headerWrapper.classList.toggle("active");
  burgerMenuBack.classList.toggle("active");
});

burgerMenuBack.addEventListener("click", function () {
  if (burgerMenuBack.classList.contains("active")) {
    burgerMenuBack.classList.remove("active");
    menuBurgerActive.classList.remove("active");
    designedby.classList.remove("active");
    naveActive.classList.remove("active");
    headerLogo.classList.remove("active");
    headerWrapper.classList.remove("active");
  }
});

/*-----slider pets-----*/

let items = document.querySelectorAll(".pets__items");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("activeslide", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("nextslide", direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("nextslide", direction);
    this.classList.add("activeslide");
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

const btnleft = document
  .querySelector(".prew")
  .addEventListener("click", function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
    changeCurrentItem(currentItem);
  });

const firstBlock = document.querySelector(".firstblock");
const secondBlock = document.querySelector(".secondblock");
const thirdBlock = document.querySelector(".thirdblock");

const btnright = document
  .querySelector(".next")
  .addEventListener("click", function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
    changeCurrentItem(currentItem);
  });

/*------testimonials slider-----*/

const cardsContainer = document.querySelector(".testimonials__items"); //
const testimonialsInput = document.querySelector(".scrollfortes");
const card = document.querySelector(".testimonials__item");
const cardWidth = parseInt(getComputedStyle(card).width);

function moveSlider() {
  cardsContainer.style.transform = `translateX(-${
    testimonialsInput.value * (cardWidth + 30)
  }px)`;
}

testimonialsInput.addEventListener("input", moveSlider);

/*------testimonials popups-----*/
const popup = document.querySelector(".popup");
const popupBody = document.querySelector(".popup__body");
const popupClose = document.querySelector(".popup__close");

function showPopup(event) {
  const testimonial = event.target.closest(".testimonials__item");
  if (testimonial) {
    testimonial.classList.add("open");
    popup.classList.add("open");
  }

  popupClose.onclick = () => {
    testimonial.classList.remove("open");
    popup.classList.remove("open");
  };

  popupBody.onclick = () => {
    testimonial.classList.remove("open");
    popup.classList.remove("open");
  };

  popup.onclick = () => {
    testimonial.classList.remove("open");
    popup.classList.remove("open");
  };
}

cardsContainer.addEventListener("click", showPopup);
