var buttonPopup = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-feedback");
var popupSection = document.querySelector(".form-feedback-pop-up");
var buttonClose = popup.querySelector(".button-close-feedback");
var popupForm = popup.querySelector("form");
var inputName = popup.querySelector(".input-name-feedback");
var inputEmail = popup.querySelector(".input-email-feedback");
var inputComment = popup.querySelector(".input-comment-feedback");
var sendButton = popup.querySelector(".send-button");

var slide = document.querySelector(".slide");
var slider = document.querySelector(".slider");
var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
var slider3 = document.querySelector(".slider-3");
var body = document.querySelector(".page-body");
var icecream1 = document.querySelector(".ice-cream-1");
var icecream2 = document.querySelector(".ice-cream-2");
var icecream3 = document.querySelector(".ice-cream-3");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonPopup.addEventListener("click", function (evt) {
  console.log("Клик по ссылке Форма обратной связи");
  evt.preventDefault();
  popupSection.classList.add("modal-show");
  if (storage) {
    inputName.value = storage;
    inputEmail.value = storage;
  } else {
    inputName.focus();
  }
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSection.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

popupForm.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputEmail.value || !inputComment.value) {
    console.log("Не заполнены данные");
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("email", inputEmail.value);
    popupSection.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupSection.classList.contains("modal-show")) {
      evt.preventDefault();
      popupSection.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

slider1.addEventListener("click", function (evt) {
  console.log("Клик!");
  if (!body.classList.contains("page-body-green")) {
    body.classList.add("page-body-green");
    body.classList.remove("page-body-pink");
    body.classList.remove("page-body-blue");
  }
  if (!icecream1.classList.contains("slide-current")) {
    icecream1.classList.add("slide-current");
    icecream2.classList.remove("slide-current");
    icecream3.classList.remove("slide-current");
  }
  if (!slider1.classList.contains("slider-current")) {
    slider1.classList.add("slider-current");
    slider2.classList.remove("slider-current");
    slider3.classList.remove("slider-current");
  }
});

slider2.addEventListener("click", function (evt) {
  console.log("Клик!");
  if (!body.classList.contains("page-body-blue")) {
    body.classList.add("page-body-blue");
    body.classList.remove("page-body-pink");
    body.classList.remove("page-body-green");
  }
  if (!icecream2.classList.contains("slide-current")) {
    icecream2.classList.add("slide-current");
    icecream1.classList.remove("slide-current");
    icecream3.classList.remove("slide-current");
  }
  if (!slider2.classList.contains("slider-current")) {
    slider2.classList.add("slider-current");
    slider1.classList.remove("slider-current");
    slider3.classList.remove("slider-current");
  }
});

slider3.addEventListener("click", function (evt) {
  console.log("Клик!");
  if (!body.classList.contains("page-body-pink")) {
    body.classList.add("page-body-pink");
    body.classList.remove("page-body-blue");
    body.classList.remove("page-body-green");
  }
  if (!icecream3.classList.contains("slide-current")) {
    icecream3.classList.add("slide-current");
    icecream1.classList.remove("slide-current");
    icecream2.classList.remove("slide-current");
  }
  if (!slider3.classList.contains("slider-current")) {
    slider3.classList.add("slider-current");
    slider1.classList.remove("slider-current");
    slider2.classList.remove("slider-current");
  }
});
