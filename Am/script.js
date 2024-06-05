const VanzMedia = document.querySelector(".VanzMedia");
const VanzMenu = document.querySelector(".VanzMenu");
const VanzThemes = document.querySelector(".VanzThemes");
const VanzAbout = document.querySelector(".VanzAbout");
const VanzReport = document.querySelector(".VanzReport");
const VanzMusic = document.querySelector(".VanzMusic");
const VanzOther = document.querySelector(".VanzOther");
const VanzOtherOverlay = document.querySelector(".VanzOtherOverlay");
const VanzOtherMenuXx = document.querySelector(".VanzOtherMenuXx");
const VanzNavMusic = document.querySelector(".VanzNavMusic");
const VanzNavMusicContent = document.querySelector(".VanzNavMusicContent");
const VanzNavMusicOverlay = document.querySelector(".VanzNavMusicOverlay");

/// Var Audio's ///

var klik = new Audio("https://ems-links.netlify.app/am/mix/klik.mp3");
klik.loop = false;
klik.autoplay = false;

var VanzAudioxx = new Audio("https://ems-links.netlify.app/am/mix/MkxchlSong-5.mp3");
VanzAudioxx.loop = false;
VanzAudioxx.autoplay = false;
VanzAudioxx.onended = function () {
  OpenMenux();
  VanzNavMusic.classList.remove("VanzNavMusicShow");
  VanzAbout.classList.add("VanzAboutShow");
};

/// Function All ///

// function VanzLoad() {
//   VanzNavMusic.classList.add("VanzNavMusicShow");
//   updateSheetHeight(50);
//   VanzAudioxx.play();
// }

function NavMusicXx() {
  VanzNavMusic.classList.add("VanzNavMusicShow");
  VanzMedia.classList.remove("VanzMediaShow");
  klik.play();
}
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
  VanzMusic.classList.add("VanzMusicShow");
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
function OpenOtherMenu() {
  VanzOther.classList.add("VanzOtherShow");
  klik.play();
}
function OpenVanzOtherMenu() {
  VanzOtherMenuXx.classList.add("VanzOtherMenuXxShow");
  klik.play();
}

/// Function Closed ///

function CloseOtherAll() {
  VanzOther.classList.remove("VanzOtherShow");
  klik.play();
}

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
function CloseMusic() {
  VanzMusic.classList.remove("VanzMusicShow");
  VanzMenu.classList.add("VanzMenuShow");
  klik.play();
}
function CloseVanzOtherMenu() {
  VanzOtherMenuXx.classList.remove("VanzOtherMenuXxShow");
  klik.play();
}
function CloseNavMusicx() {
  VanzNavMusic.classList.remove("VanzNavMusicShow");
  klik.play();
  VanzAudioxx.play();
  setTimeout(function () {
    VanzNavMusic.classList.add("VanzNavMusicShow");
  }, 10000);
}
/// Function Links ///

function MkxXxInsta() {
  window.location.replace("https://instagram.com/marchell_kevandra");
  klik.play();
}
function MkxXxTiktok() {
  window.location.replace("https://tiktok.com/@mkxchl");
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
  window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=3326f41cde64402d");
  klik.play();
}
function MkxxGithub() {
  window.location.replace("https://github.com/mkxchl");
  klik.play();
}
function MkxxTele() {
  window.location.replace("https://t.me/Marchell_Junior");
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

/// Function Height ///

const updateSheetHeight = (height) => {
  VanzNavMusicContent.style.height = `${height}%`;
};
