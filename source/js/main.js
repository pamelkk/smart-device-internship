const buttonOpenAddress = document.querySelector(".page-footer__address-menu");
const buttonOpenLists = document.querySelector(".page-footer__nav-lists-menu");
const addressMenu = document.querySelector(".page-footer__address");
const listsMenu = document.querySelector(".page-footer__nav-lists");

addressMenu.classList.remove("page-footer__address--opened");
listsMenu.classList.remove("page-footer__nav-lists--opened");
buttonOpenAddress.classList.remove("page-footer__address-menu--opened");
buttonOpenLists.classList.remove("page-footer__nav-lists-menu--opened");


buttonOpenAddress.addEventListener("click", function (evt) {
  if (!addressMenu.classList.contains("page-footer__address--opened")) {
    addressMenu.classList.remove("page-footer__address--opened");
    buttonOpenAddress.classList.remove("page-footer__address-menu--opened");
  } else {
    addressMenu.classList.add("page-footer__address--opened");
    buttonOpenAddress.classList.add("page-footer__address-menu--opened");
  }
});

buttonOpenLists.addEventListener("click", function (evt) {
  if (!addressMenu.classList.contains("page-footer__address--opened")) {
    listsMenu.classList.add("page-footer__nav-lists--opened");
    buttonOpenLists.classList.add("page-footer__nav-lists-menu--opened");
  } else {
    listsMenu.classList.remove("page-footer__nav-lists--opened");
    buttonOpenLists.classList.remove("page-footer__nav-lists-menu--opened");
  }
});
