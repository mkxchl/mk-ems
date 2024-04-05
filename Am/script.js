const VanzMedia = document.querySelector(".VanzMedia");

/// Var String ///

var klik = new Audio("https://ems-links.netlify.app/am/mix/klik.mp3");
klik.loop = false;
klik.autoplay = false;

/// Function All ///

function VanzMediaxx() {
  VanzMedia.classList.add("VanzMediaShow");
  klik.play();
}

/// Function Closed ///

function CloseFollowed() {
  VanzMedia.classList.remove("VanzMediaShow");
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
