const buttonOpen = document.querySelector(".page-header__menu");
const menu = document.querySelector(".page-header__nav-wrapper");

menu.classList.add("page-header__nav-wrapper-inactive");
buttonOpen.classList.remove("page-header__opened-menu");

buttonOpen.addEventListener("click", function (evt) {
  if (!menu.classList.contains("page-header__nav-wrapper-inactive")) {
    menu.classList.add("page-header__nav-wrapper-inactive");
    buttonOpen.classList.remove("page-header__opened-menu");
  } else {
    menu.classList.remove("page-header__nav-wrapper-inactive");
    buttonOpen.classList.add("page-header__opened-menu");
  }
});
