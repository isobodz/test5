/// Making sure that navigation bar takes into account the height of navigation bar itself when moving around the page.

document.querySelectorAll(".btn-nav").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    const navbarHeight = document.querySelector(".nav-bar").offsetHeight;

    window.scrollTo({
      top: offsetTop - navbarHeight,
      behavior: "smooth",
    });
  });
});






/// Making carousel buttons work

let lastManualChange = 0;

const buttons = document.querySelectorAll("[carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    lastManualChange = Date.now();
    const direction = button.getAttribute("carousel-button");
    changeSlide(direction);
  });
});

function changeSlide(direction = "next") {
  const slides = document
    .querySelector("[carousel-slide-control]")
    .querySelector("[carousel-slides]");
  const activeSlide = slides.querySelector("[active-slide]");
  const offset = direction === "next" ? 1 : -1;
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;

  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  activeSlide.removeAttribute("active-slide");

  // Introduce a small delay before activating the next slide
  setTimeout(() => {
    slides.children[newIndex].setAttribute("active-slide", "");
  }, 200);
}

// Automatic slide change
setInterval(() => {
  if (Date.now() - lastManualChange > 2000) {
    changeSlide();
  }
}, 3000);






// Pricing section animation

var isAnimating = false;

document.querySelectorAll(".radio-btn__input").forEach(function (radio) {
  radio.addEventListener("change", function () {
    if (isAnimating) return;
    isAnimating = true;

    var selectedValue = this.value;
    var subscriptionCards = document.querySelectorAll(
      ".gym__card-subscription"
    );

    subscriptionCards.forEach(function (card) {
      var numbers = card.querySelectorAll(".gym__card-number");
      numbers.forEach(function (number) {
        number.classList.add("gym__card-number--hidden");
      });

      setTimeout(function () {
        var selectedNumber = card.querySelector(".js--" + selectedValue);
        selectedNumber.classList.remove("gym__card-number--hidden");
      }, 400);
    });

    setTimeout(function () {
      isAnimating = false;
    }, 400);
  });
});

// Making pop-up navigation close once user clicks anchor

const navLinks = document.querySelectorAll(".nav-bar__links a");
const checkbox = document.querySelector(".nav-bar__checkbox");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});
