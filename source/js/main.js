const buttonOpen = document.querySelector(".page-header__menu");
const menu = document.querySelector(".page-header__nav-wrapper");
const bodyElement = document.querySelector(".page-body");
const headerElement = document.querySelector(".page-header");
const headerWrapperElement = document.querySelector(".page-header__nav-wrapper");
const pageElement = document.querySelector(".page");

menu.classList.add("page-header__nav-wrapper--inactive");
buttonOpen.classList.remove("page-header__menu--opened");
buttonOpen.classList.remove("page-header__menu--disabled");
headerElement.classList.remove("page-header--active");
bodyElement.classList.remove("page-body--inactive");
headerWrapperElement.classList.remove("page-header__nav-wrapper--active");
pageElement.classList.remove("page-inactive");


buttonOpen.addEventListener("click", function (evt) {
  if (!menu.classList.contains("page-header__nav-wrapper--inactive")) {
    menu.classList.add("page-header__nav-wrapper--inactive");
    buttonOpen.classList.remove("page-header__menu--opened");
    bodyElement.classList.remove("page-body--inactive");
    headerElement.classList.remove("page-header--active");
    headerWrapperElement.classList.remove("page-header__nav-wrapper--active");
    pageElement.classList.remove("page-inactive");
  } else {
    menu.classList.remove("page-header__nav-wrapper--inactive");
    buttonOpen.classList.add("page-header__menu--opened");
    bodyElement.classList.add("page-body--inactive");
    headerElement.classList.add("page-header--active");
    headerWrapperElement.classList.add("page-header__nav-wrapper--active");
    pageElement.classList.add("page-inactive");
  }
});
