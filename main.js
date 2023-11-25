const EmsBodyAll = document.querySelector(".EmsBodyAll");
const EmsAuthor = document.querySelector(".EmsAuthor");
const EmsAuthorContent = document.querySelector(".EmsAuthorContent");
const EmsMenu = document.querySelector(".EmsMenu");
const EmsMenuContent = document.querySelector(".EmsMenuContent");
const EmsMenuContentTeamFams = document.querySelector(".EmsMenuContentTeamFams");
const EmsMenuToggle = document.querySelector(".toggle");
const EmsLink = document.querySelector(".EmsLink");
const EmsLinkOverlay = document.querySelector(".EmsLinkOverlay");
const EmsLinkContent = document.querySelector(".EmsLinkContent");
const EmsSong = document.querySelector(".EmsSong");
const EmsSongContent = document.querySelector(".EmsSongContent");
const EmsApp = document.querySelector(".EmsApp");
const EmsAppContent = document.querySelector(".EmsAppContent");

window.addEventListener("load", () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
});

EmsMenuToggle.onclick = function () {
  EmsMenuContentTeamFams.classList.toggle("TeamUpdateHeight");
};
function OpenApp() {
  EmsApp.classList.add("EmsAppShow");
  EmsMenu.classList.remove("EmsMenuShow");
}
function OpenSong() {
  EmsSong.classList.add("EmsSongShow");
  EmsMenu.classList.remove("EmsMenuShow");
}
function OpenLink() {
  EmsMenu.classList.remove("EmsMenuShow");
  EmsLink.classList.add("EmsLinkShow");
}
function OpenAuthor() {
  EmsAuthor.classList.add("AuthorShow");
  EmsBodyAll.classList.add("Hide");
}
function AuthorClose() {
  EmsAuthor.classList.remove("AuthorShow");
  EmsBodyAll.classList.remove("Hide");
}
function CloseApp() {
  EmsApp.classList.remove("EmsAppShow");
  EmsMenu.classList.add("EmsMenuShow");
}
function CloseMusic() {
  EmsMenu.classList.add("EmsMenuShow");
  EmsSong.classList.remove("EmsSongShow");
}
function OpenMenu() {
  EmsMenu.classList.add("EmsMenuShow");
  EmsBodyAll.classList.add("Hide");
}
function EmsMenuClose() {
  EmsMenu.classList.remove("EmsMenuShow");
  EmsBodyAll.classList.remove("Hide");
}
function UpdateHeightTeam() {
  EmsMenuContentTeamFams.classList.add("TeamUpdateHeight");
}

/// Hide ///

const hideBottomSheet = () => {
  EmsMenu.classList.add("EmsMenuShow");
  EmsLink.classList.remove("EmsLinkShow");
};

EmsLinkOverlay.addEventListener("click", hideBottomSheet);

/// Link Authorized ///

/// Instagram Link ///

function YgkInsta() {
  window.location.replace("https://instagram.com/yhoris_gervino");
}
function MkInsta() {
  window.location.replace("https://instagram.com/marchell_kevandra");
}
function ThInsta() {
  window.location.replace("https://instagram.com/thyan_story");
}
function JnInsta() {
  window.location.replace("https://instagram.com/arjuna_gns");
}
function AgsInsta() {
  window.location.replace("https://instagram.com/guss.fx01");
}
