const VanzMedia = document.querySelector(".VanzMedia");
const VanzMenu = document.querySelector(".VanzMenu");
const VanzThemes = document.querySelector(".VanzThemes");
const VanzAbout = document.querySelector(".VanzAbout");
const VanzReport = document.querySelector(".VanzReport");

/// Var Audio's ///

var klik = new Audio("https://ems-links.netlify.app/am/mix/klik.mp3");
klik.loop = false;
klik.autoplay = false;

/// Function All ///

function VanzMediaxx() {
  VanzMedia.classList.add("VanzMediaShow");
  klik.play();
}
function OpenMenux() {
  VanzMenu.classList.add("VanzMenuShow");
  VanzMedia.classList.remove("VanzMediaShow");
  klik.play();
}
function ChooseMusic() {
  VanzMenu.classList.remove("VanzMenuShow");
  klik.play();
}
function changeThemes() {
  VanzThemes.classList.add("VanzThemesShow");
  VanzMenu.classList.remove("VanzMenuShow");
  klik.play();
}
function OpenAbout() {
  VanzAbout.classList.add("VanzAboutShow");
  VanzMenu.classList.remove("VanzMenuShow");
  klik.play();
}

/// Function Closed ///

function CloseFollowed() {
  VanzMedia.classList.remove("VanzMediaShow");
  klik.play();
}
function VanzCloseMenu() {
  VanzMenu.classList.remove("VanzMenuShow");
  klik.play();
}
function closeChangedThemes() {
  VanzMenu.classList.add("VanzMenuShow");
  VanzThemes.classList.remove("VanzThemesShow");
  klik.play();
}
function closeVanzAbout() {
  VanzAbout.classList.remove("VanzAboutShow");
  VanzMenu.classList.add("VanzMenuShow");
  klik.play();
}
function BtnCloseReport() {
  VanzReport.classList.remove("VanzReportShow");
  VanzMenu.classList.add("VanzMenuShow");
  klik.play();
}
/// Function Links ///

function MkxXxInsta() {
  window.location.replace("https://instagram.com/marchell_kvandra");
  klik.play();
}
function MkxXxTiktok() {
  window.location.replace("https://tiktok.com/@mxchl");
  klik.play();
}
function MkxXxFacebook() {
  window.location.replace("https://facebook.com/chellgnzxz");
  klik.play();
}
function MkxXxEms() {
  window.location.replace("https://ems-links.netlify.app/");
  klik.play();
}
function MkPortfolio() {
  window.location.replace("https://mkxchl.github.io/portfolio-tailwind-css/");
  klik.play();
}
function MkSpotifyPlaylistX() {
  window.location.replace("https://spoti.fi/3Uz8b7i");
  klik.play();
}
function MkxxGithub() {
  window.location.replace("https://github.com/mkxchl");
  klik.play();
}

/// Function Web Settings ///

function clearCache() {
  VanzMenu.classList.remove("VanzMenuShow");
  window.location.reload(true);
  klik.play();
}
function refreshWebsite() {
  VanzMenu.classList.remove("VanzMenuShow");
  window.location.reload();
  klik.play();
}
function reportBug() {
  VanzReport.classList.add("VanzReportShow");
  VanzMenu.classList.remove("VanzMenuShow");
  klik.play();
}

/// Function Support ///

function OpenNetlify() {
  window.location.replace("https://netlify.com/");
}
function OpenGit() {
  window.location.replace("https://github.com/mkxchl");
}
