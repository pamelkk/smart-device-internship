const buttonListsOpen = document.querySelector(".page-footer__nav-lists-menu");
const menuLists = document.querySelector(".page-footer__nav-lists--mob");
const buttonAddressOpen = document.querySelector(".page-footer__address-menu");
const menuAddress = document.querySelector(".page-footer__address--mob");
const buttonPopupOpen = document.querySelector(".page-header__contacts-button");
const popup = document.querySelector(".popup");
const buttonPopupClose = document.querySelector(".popup-wrapper__close-button");
const ESC_KEYCODE = 27;
const isStorageSupport = true;
const storage = "";

menuLists.classList.remove("page-footer__nav-lists--opened");
buttonListsOpen.classList.remove("page-footer__nav-lists-menu--opened");
menuAddress.classList.remove("page-footer__address--opened");
buttonAddressOpen.classList.remove("page-footer__address-menu--opened");

buttonListsOpen.addEventListener("click", function () {
  if (!menuLists.classList.contains("page-footer__nav-lists--opened")) {
    menuLists.classList.add("page-footer__nav-lists--opened");
    buttonListsOpen.classList.add("page-footer__nav-lists-menu--opened");
  } else {
    menuLists.classList.remove("page-footer__nav-lists--opened");
    buttonListsOpen.classList.remove("page-footer__nav-lists-menu--opened");
  }
});

buttonAddressOpen.addEventListener("click", function () {
  if (!menuAddress.classList.contains("page-footer__address--opened")) {
    menuAddress.classList.add("page-footer__address--opened");
    buttonAddressOpen.classList.add("page-footer__address-menu--opened");
  } else {
    menuAddress.classList.remove("page-footer__address--opened");
    buttonAddressOpen.classList.remove("page-footer__address-menu--opened");
  }
});

buttonPopupOpen.addEventListener("click", function () {
  if (!popup.classList.contains("popup--opened")) {
    popup.classList.add("popup--opened");
  }
});

buttonPopupClose.addEventListener("click", function () {
  if (popup.classList.contains("popup--opened")) {
    popup.classList.remove("popup--opened");
  }
});

document.addEventListener("keydown", function (e) {
  if (e.keyCode === ESC_KEYCODE & popup.classList.contains("popup--opened")) {
    popup.classList.remove("popup--opened");
  }
});
