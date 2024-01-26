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
const EmsVideo = document.querySelector(".EmsVideo");
const EmsVideoContent = document.querySelector(".EmsVideoContent");
const EmsVideoBody = document.querySelector(".EmsVideoBody");
const EmsVideoBodyContent = document.querySelector(".EmsVideoBodyContent");
const EmsIntro = document.querySelector(".EmsIntro");
const EmsIntroOverlay = document.querySelector(".EmsIntroOverlay");
const EmsIntroContent = document.querySelector(".EmsIntroContent");
const EmsAx = document.querySelector(".EmsAx");
const EmsBx = document.querySelector(".EmsBx");
const EmsCx = document.querySelector(".EmsCx");
const AppContent = document.querySelector(".AppContent");
const IntroContent = document.querySelector(".IntroContent");
const EmsRules = document.querySelector(".EmsRules");
const EmsVideoIntx = document.querySelector(".EmsVideoIntx");
const EmsJoinxx = document.querySelector(".EmsJoinxx");
const EmsJoinxxOverlay = document.querySelector(".EmsJoinxxOverlay");
const HeaderTitleApp = document.getElementById("HeaderTitleApp");
const NameOne = document.getElementById("NameOne");
const NameTwo = document.getElementById("NameTwo");
const NameThree = document.getElementById("NameThree");
const EmsxxxAudio = document.getElementById("EmsxxxAudio");

EmsMenuToggle.onclick = function () {
  EmsMenuContentTeamFams.classList.toggle("TeamUpdateHeight");
};

function OpenVideo() {
  $("#MkEmsVideoStaff").show(), $(".EmsVideoContentSrc").fadeIn(), vid.play();
  EmsVideo.classList.add("EmsVideoShow");
  EmsMenu.classList.remove("EmsMenuShow");
}

/// Video Function ///

var elem = document.documentElement,
  vid = document.getElementById("MkEmsVideoStaff"),
  vidA = document.getElementById("EmsVideoMegaCollabA"),
  vidB = document.getElementById("EmsVideoMegaCollabB"),
  vidC = document.getElementById("EmsVideoMegaCollabC");

vid.onended = function () {
  $(".EmsVideoContentSrc").fadeOut(), OpenVideoBodyContent();
  EmsVideo.classList.remove("EmsVideoShow");
};

var vidInt = document.getElementById("EmsIntroVidz");

vidInt.onended = function () {
  AuthorOpenedz();
  EmsIntro.classList.remove("EmsIntroShow");
};
function AuthorOpenedz() {
  EmsAuthor.classList.add("AuthorShow");
}
vidA.addEventListener("click", function () {
  $("#EmsVideoMegaCollabA").prop("muted", false);
  $("#EmsVideoMegaCollabB").prop("muted", true);
  $("#EmsVideoMegaCollabC").prop("muted", true);
  vidA.play();
  vidB.pause();
  vidC.pause();
});
vidB.addEventListener("click", function () {
  $("#EmsVideoMegaCollabA").prop("muted", true);
  $("#EmsVideoMegaCollabB").prop("muted", false);
  $("#EmsVideoMegaCollabC").prop("muted", true);
  vidA.pause();
  vidB.play();
  vidC.pause();
});
vidC.addEventListener("click", function () {
  $("#EmsVideoMegaCollabA").prop("muted", true);
  $("#EmsVideoMegaCollabB").prop("muted", true);
  $("#EmsVideoMegaCollabC").prop("muted", false);
  $("#EmsVideoMegaCollabC").prop("autoplay", true);
  vidA.pause();
  vidB.pause();
  vidC.play();
});

function CloseVidContent() {
  EmsMenu.classList.add("EmsMenuShow");
  EmsVideoBody.classList.remove("EmsVideoBodyShow");
  $("#EmsVideoMegaCollabA").prop("muted", true);
  $("#EmsVideoMegaCollabB").prop("muted", true);
  $("#EmsVideoMegaCollabC").prop("muted", true);
  vidA.pause();
  vidB.pause();
  vidC.pause();
}
function OpenVideoBodyContent() {
  EmsVideoBody.classList.add("EmsVideoBodyShow");
  EmsMenu.classList.remove("EmsMenuShow");
  $("#EmsVideoMegaCollabA").prop("muted", true);
  $("#EmsVideoMegaCollabA").prop("autoplay", false);
  $("#EmsVideoMegaCollabB").prop("muted", true);
  $("#EmsVideoMegaCollabB").prop("autoplay", false);
  $("#EmsVideoMegaCollabC").prop("muted", true);
  $("#EmsVideoMegaCollabC").prop("autoplay", false);
}
function MkLoader() {
  EmsxxxAudio.play();
}
function OpenDownloadIntro() {
  EmsVideoIntx.classList.add("EmsVideoIntxShow");
  EmsApp.classList.remove("EmsAppShow");
}
function OpenIntro() {
  vidInt.play();
  EmsIntro.classList.add("EmsIntroShow");
  EmsBodyAll.classList.add("Hide");
}
function OpenRules() {
  EmsRules.classList.add("EmsRulesShow");
  EmsMenu.classList.remove("EmsMenuShow");
}
function AuthorOpenedz() {
  EmsAuthor.classList.add("AuthorShow");
  EmsBodyAll.classList.add("Hide");
}
function OpenApp() {
  EmsApp.classList.add("EmsAppShow");
  EmsMenu.classList.add("Mkflip");
}
function OpenSong() {
  EmsSong.classList.add("EmsSongShow");
  EmsMenu.classList.remove("EmsMenuShow");
}
function OpenLink() {
  EmsMenu.classList.remove("EmsMenuShow");
  EmsLink.classList.add("EmsLinkShow");
}
function AuthorClose() {
  EmsAuthor.classList.remove("AuthorShow");
  EmsBodyAll.classList.remove("Hide");
}
function CloseIntDown() {
  EmsVideoIntx.classList.remove("EmsVideoIntxShow");
  EmsApp.classList.add("EmsAppShow");
}
function CloseApp() {
  EmsApp.classList.remove("EmsAppShow");
  EmsMenu.classList.remove("Mkflip");
}
function CloseMusic() {
  EmsMenu.classList.add("EmsMenuShow");
  EmsSong.classList.remove("EmsSongShow");
}
function CloseRules() {
  EmsRules.classList.remove("EmsRulesShow");
  EmsMenu.classList.add("EmsMenuShow");
}
function OpenMenu() {
  EmsMenu.classList.add("EmsMenuShow");
  EmsBodyAll.classList.add("Hide");
}
function EmsMenuClose() {
  EmsMenu.classList.remove("EmsMenuShow");
  EmsMenuContentTeamFams.classList.remove("TeamUpdateHeight");
  EmsBodyAll.classList.remove("Hide");
}
function UpdateHeightTeam() {
  EmsMenuContentTeamFams.classList.add("TeamUpdateHeight");
}

/// Hide ///

const hideBottomSheet = () => {
  EmsMenu.classList.add("EmsMenuShow");
  EmsLink.classList.remove("EmsLinkShow");
  EmsJoinxx.classList.remove("EmsJoinxxShow");
  EmsMenu.classList.remove("Mkflip");
};

EmsLinkOverlay.addEventListener("click", hideBottomSheet);
EmsJoinxxOverlay.addEventListener("click", hideBottomSheet);
/// Link Authorized ///

/// Instagram Link ///

function YgkInsta() {
  window.location.replace("https://instagram.com/yhoris_grvino");
}
function MkInsta() {
  window.location.replace("https://instagram.com/marchell_kvandra");
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
function EmsAppA() {
  window.location.replace("https://sfile.mobi/84sZ8oGUUMk");
}
function EmsAppB() {
  window.location.replace("https://sfile.mobi/auvof2K1lm3");
}
function EmsAppC() {
  window.location.replace("https://sfile.mobi/ak4R0snkoom");
}
function EmsIntAx() {
  window.location.replace("https://www.mediafire.com/file/6xqnrfc1qcppl14/VID-20201204-WA0437.mp4/file");
}
function EmsIntBx() {
  window.location.replace("https://www.mediafire.com/file/w0l4w1vgglcweev/VID-20201006-WA0441.mp4/file");
}
function EmsIntCx() {
  window.location.replace("https://www.mediafire.com/file/x6fxjvduthq2aq7/video+(3).mkv/file");
}
/// Block Inspect ///

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
};
