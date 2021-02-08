const buttonOpen = document.querySelector(".page-header__menu");
const menu = document.querySelector(".page-header__nav-wrapper");
const headerElement = document.querySelector(".page-header");
const mainElement = document.querySelector(".page-main");
const headerWrapperElement = document.querySelector(".page-header__nav-wrapper");
const pageElement = document.querySelector(".page");
const pageHeaderNavElement = document.querySelector(".page-header__nav");

menu.classList.add("page-header__nav-wrapper--inactive");
buttonOpen.classList.remove("page-header__menu--opened");
buttonOpen.classList.remove("page-header__menu--disabled");
headerElement.classList.remove("page-header--active");
headerElement.classList.add("page-header--activate-bckg");
mainElement.classList.add("page-main--inactive");
headerWrapperElement.classList.remove("page-header__nav-wrapper--active");
pageElement.classList.remove("page--inactive");
pageHeaderNavElement.classList.remove("page-header__nav--active");


buttonOpen.addEventListener("click", function (evt) {
  if (!menu.classList.contains("page-header__nav-wrapper--inactive")) {
    menu.classList.add("page-header__nav-wrapper--inactive");
    buttonOpen.classList.remove("page-header__menu--opened");
    headerElement.classList.remove("page-header--active");
    headerWrapperElement.classList.remove("page-header__nav-wrapper--active");
    pageElement.classList.remove("page--inactive");
    pageHeaderNavElement.classList.remove("page-header__nav--active");
  } else {
    menu.classList.remove("page-header__nav-wrapper--inactive");
    buttonOpen.classList.add("page-header__menu--opened");
    headerElement.classList.add("page-header--active");
    headerWrapperElement.classList.add("page-header__nav-wrapper--active");
    pageElement.classList.add("page--inactive");
    pageHeaderNavElement.classList.add("page-header__nav--active");
  }
});
