const MkUserPage = document.querySelector(".MkUserPage");
const MkUserPageContentxx = document.querySelector(".MkUserPageContentxx");
const MkBtnInfo = document.querySelector(".MkBtnInfo");
const MkBtnImg = document.querySelector(".MkBtnImg");
const Info = document.getElementById("#Info");
const MkImg = document.getElementById("#MkImg");

function OpenProfile() {
  MkUserPage.classList.add("show");
  MkBtnInfo;
}
function Close() {
  MkUserPage.classList.remove("show");
}
function MkCloseUserPage() {
  MkUserPageContentxx.classList.add("MkUserHide");
  MkBtnInfo.classList.remove("BtnActive");
  MkBtnImg.classList.add("BtnActive");
}
function MkCloseImagesPage() {
  MkUserPageContentxx.classList.remove("MkUserHide");
  MkBtnInfo.classList.add("BtnActive");
  MkBtnImg.classList.remove("BtnActive");
}
