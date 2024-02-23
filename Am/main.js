const MkHeaderBody = document.querySelector(".MkHeaderBody");
const MkSpotify = document.querySelector(".MkSpotify");
const MkPreloader = document.querySelector(".MkPreloader");
const MkLink = document.querySelector(".MkLink");
const MkLinkOverlay = document.querySelector(".MkLinkOverlay");
const MkLinkContentBodyLink = document.querySelector(".MkLinkContentBodyLink");
const MkSupport = document.querySelector(".MkSupport");
const MkSupportOverlay = document.querySelector(".MkSupportOverlay");
const MkChatHeaderJoin = document.querySelector(".MkChatHeaderJoin");
const MkGame = document.querySelector(".MkGame");
const MkGameOverlay = document.querySelector(".MkGameOverlay");
const MkScMediaFlw = document.querySelector(".MkScMediaFlw");
const MkScMediaFlwOverlay = document.querySelector(".MkScMediaOverlay");
const MkPageMediaSocialInsta = document.querySelector(".MkPageMediaSocialInsta");
const MkPageMediaSocialInstaOverlay = document.querySelector(".MkPageMediaSocialInstaOverlay");
const MKProject = document.querySelector(".MKProject");
const MKProjectOverlay = document.querySelector(".MKProjectOverlay");
const MkChat = document.querySelector(".MkChat");
const BtnSocialMediax = document.querySelector(".BtnSocialMediax");
const MkIconMenu = document.querySelector(".MkIconMenu");
const MkIconMenuOverlay = document.querySelector(".MkIconMenuOverlay");
const MkIconMenuContentBody = document.querySelector(".MkIconMenuContentBody");
const MkPageMediaSocialInstaBodyButton = document.querySelector(".MkPageMediaSocialInstaBodyButton");
const MKxxChlxxMusic = document.querySelector(".MKxxChlxxMusic");
const MKxxChlxxMusicContent = document.querySelector(".MKxxChlxxMusicContent");
const MkxxchlProfileMeta = document.querySelector(".MkxxchlProfileMeta");
const MKxxJasaRmxOverlay = document.querySelector(".MKxxJasaRmxOverlay");
const MkxChlNav = document.querySelector(".MkxChlNav");
const MKxxJasa = document.querySelector(".MKxxJasa");
const MKxxJasaOverlay = document.querySelector(".MKxxJasaOverlay");
const MKxxJasaRmx = document.querySelector(".MKxxJasaRmx");
const body = document.querySelector("body");
const MkAudio = document.getElementById("MkAudio");
const MkAudioA = document.getElementById("MkAudioA");
const IconSocialMedia = document.getElementById("IconSocialMedia");
const TitleSocialMedia = document.getElementById("TitleSocialMedia");
const DescSocialMedia = document.getElementById("DescSocialMedia");
const pst = document.getElementById("pst");
const ttg = document.getElementById("ttg");
const ButtonLlnkSocialMedia = document.getElementById("ButtonLlnkSocialMedia");
const iconInsta = "ri-instagram-line";
const iconFace = "ri-facebook-line";
const iconTkTok = "ri-tiktok-line";
const iconGit = "ri-github-line";
var elem = document.documentElement;

MKxxJasaOverlay.addEventListener("click", function () {
  MKxxJasa.classList.remove("MKxxJasaShow");
  MkHeaderBody.classList.remove("Hide");
  MkxChlNav.classList.add("MkxChlNavShow");
});
MKxxJasaRmxOverlay.addEventListener("click", function () {
  MKxxJasaRmx.classList.remove("MKxxJasaRmxShow");
  MkHeaderBody.classList.remove("Hide");
});
function OpenJasaRemix() {
  MKxxJasaRmx.classList.add("MKxxJasaRmxShow");
  MkHeaderBody.classList.add("Hide");
  MKxxJasa.classList.remove("MKxxJasaShow");
}
function MkLoader() {
  MkPreloader.classList.add("MkPreloaderShow");
  MkHeaderBody.classList.add("Hide");
  setTimeout(function () {
    MkPreloader.classList.remove("MkPreloaderShow");
    MkHeaderBody.classList.remove("Hide");
    MkAudio.play();
    elem.requestFullscreen ? elem.requestFullscreen() : elem.mozRequestFullScreen ? elem.mozRequestFullScreen() : elem.webkitRequestFullscreen ? elem.webkitRequestFullscreen() : elem.msRequestFullscreen && elem.msRequestFullscreen();
  }, 5000);
}
function BtnPst() {
  MkxxchlProfileMeta.classList.remove("MkxxchlProfileMetaHide");
  MkxxchlProfileMeta.classList.add("MkxxchlProfileMetaVis");
  pst.classList.add("BtnxActive");
  ttg.classList.remove("BtnxActive");
}

function BtnTtg() {
  MkxxchlProfileMeta.classList.add("MkxxchlProfileMetaHide");
  MkxxchlProfileMeta.classList.remove("MkxxchlProfileMetaVis");
  pst.classList.remove("BtnxActive");
  ttg.classList.add("BtnxActive");
}
function MkxxChlMusicPage() {
  MKxxChlxxMusic.classList.add("MKxxChlxxMusicShow");
  MkIconMenu.classList.remove("MkIconMenuShow");
  MkxChlNav.classList.remove("MkxChlNavShow");
  MkHeaderBody.classList.add("Hide");
}
function MkxxChlMusicClose() {
  MKxxChlxxMusic.classList.remove("MKxxChlxxMusicShow");
  MkxChlNav.classList.add("MkxChlNavShow");
  MkHeaderBody.classList.remove("Hide");
}
function MkPlayMusicProfile() {
  MkAudio.pause();
  MkAudioA.play();
}
function MkCloseNav() {
  MkxChlNav.classList.remove("MkxChlNavShow");
}
function OpenProject() {
  MKProject.classList.add("MKProjectShow");
  MkHeaderBody.classList.add("Hide");
}
function OpenFollowed() {
  MkScMediaFlw.classList.add("MkScMediaFlwShow");
}
function OpenMenuIcon() {
  MkxChlNav.classList.add("MkxChlNavShow");
}
function OpenInts() {
  MkPageMediaSocialInsta.classList.add("MkPageMediaSocialInstaShow");
  MkHeaderBody.classList.add("Hide");
  MkScMediaFlw.classList.remove("MkScMediaFlwShow");
  TitleSocialMedia.innerHTML = "Marchell Kevandra";
  DescSocialMedia.innerHTML = "instagram.com/marchell_kvandra";
  IconSocialMedia.className = "ri-instagram-line";
  BtnSocialMediax.innerHTML = "Open Instagram";
  IconSocialMedia.style.background = "#f09433;";
  IconSocialMedia.style.background = "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";
  IconSocialMedia.style.background = "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";
  IconSocialMedia.style.background = "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%";
  MkPageMediaSocialInstaBodyButton.style.background = "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";
  MkPageMediaSocialInstaBodyButton.style.background = "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)";
  MkPageMediaSocialInstaBodyButton.style.background = "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%";
  MkPageMediaSocialInstaBodyButton.style.background = "#f09433;";
  BtnSocialMediax.addEventListener("click", function () {
    window.location.replace("https://instagram.com/marchell_kvandra");
    MkPageMediaSocialInsta.classList.remove("MkPageMediaSocialInstaShow");
    MkHeaderBody.classList.remove("Hide");
  });
}
function OpenFace() {
  MkPageMediaSocialInsta.classList.add("MkPageMediaSocialInstaShow");
  MkHeaderBody.classList.add("Hide");
  MkScMediaFlw.classList.remove("MkScMediaFlwShow");
  TitleSocialMedia.innerHTML = "Marchell Kevandra";
  DescSocialMedia.innerHTML = "facebook.com/chellgnzxz";
  IconSocialMedia.className = "ri-facebook-line";
  IconSocialMedia.style.background = "#0866ff";
  MkPageMediaSocialInstaBodyButton.style.background = "#0866ff";
  BtnSocialMediax.innerHTML = "Open Facebook";
  BtnSocialMediax.addEventListener("click", function () {
    window.location.replace("https://facebook.com/chellgnzxz");
    MkPageMediaSocialInsta.classList.remove("MkPageMediaSocialInstaShow");
    MkHeaderBody.classList.remove("Hide");
  });
}
function OpenTkTok() {
  MkPageMediaSocialInsta.classList.add("MkPageMediaSocialInstaShow");
  MkHeaderBody.classList.add("Hide");
  MkScMediaFlw.classList.remove("MkScMediaFlwShow");
  TitleSocialMedia.innerHTML = "Marchell Kevandra";
  DescSocialMedia.innerHTML = "tiktok.com/mkxchl";
  IconSocialMedia.className = "bx bxl-tiktok";
  BtnSocialMediax.innerHTML = "Open Tiktok";
  IconSocialMedia.style.background = "#000";
  MkPageMediaSocialInstaBodyButton.style.background = "#000";
  BtnSocialMediax.addEventListener("click", function () {
    window.location.replace("https://tiktok.com/@mkxchl");
    MkPageMediaSocialInsta.classList.remove("MkPageMediaSocialInstaShow");
    MkHeaderBody.classList.remove("Hide");
  });
}
function MkxXxGithub() {
  MkPageMediaSocialInsta.classList.add("MkPageMediaSocialInstaShow");
  MkHeaderBody.classList.add("Hide");
  MkScMediaFlw.classList.remove("MkScMediaFlwShow");
  TitleSocialMedia.innerHTML = "Marchell Kevandra";
  DescSocialMedia.innerHTML = "github.com/mkxchl";
  IconSocialMedia.className = "bx bxl-github";
  BtnSocialMediax.innerHTML = "Open Github";
  IconSocialMedia.style.background = "#000";
  MkPageMediaSocialInstaBodyButton.style.background = "#000";
  BtnSocialMediax.addEventListener("click", function () {
    window.location.replace("https://github.com/mkxchl");
    MkPageMediaSocialInsta.classList.remove("MkPageMediaSocialInstaShow");
    MkHeaderBody.classList.remove("Hide");
  });
}
function OpenChat() {
  MkChat.classList.add("MkChatShow");
  MkChatHeaderJoin.classList.remove("HideJoin");
}
function OpenGame() {
  MkGame.classList.add("MkGameShow");
  MkxChlNav.classList.remove("MkxChlNavShow");
}
function CloseChat() {
  MkChat.classList.remove("MkChatShow");
}
function CloseMkInsta() {
  MkPageMediaSocialInsta.classList.remove("MkPageMediaSocialInstaShow");
  MkHeaderBody.classList.remove("Hide");
  MkScMediaFlw.classList.add("MkScMediaFlwShow");
}
function CloseProject() {
  MKProject.classList.remove("MKProjectShow");
  MkHeaderBody.classList.remove("Hide");
}
function OpenLink() {
  Swal.fire({
    title: "Warning",
    text: "Link ini hanya untuk umur 18+ ",
    icon: "question",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: `Mengerti!`,
    denyButtonText: `Kembali`,
  }).then((result) => {
    if (result.isConfirmed) {
      MkLink.classList.add("MkLinkShow");
      MkHeaderBody.classList.add("Hide");
    } else if (result.isDenied) {
      MkHeaderBody.classList.remove("Hide");
    }
  });
}
function OpenSupport() {
  MkSupport.classList.add("MkSupportShow");
  MkHeaderBody.classList.add("Hide");
}
function OpenNxtLvl() {
  MkLinkContentBodyLink.classList.add("HideLeft");
}
function OpenSpotify() {
  MkSpotify.classList.add("MkSpotifyShow");
  MkHeaderBody.classList.add("Hide");
  body.style.background = "#999";
}
function CloseFollowed() {
  MkScMediaFlw.classList.remove("MkScMediaFlwShow");
}
function CloseSpotify() {
  MkSpotify.classList.remove("MkSpotifyShow");
  MkHeaderBody.classList.remove("Hide");
  body.style.background = "#fff";
}
function OpenTele() {
  MkPreloader.classList.add("MkPreloaderShow");
  setTimeout(function () {
    MkPreloader.classList.remove("MkPreloaderShow");
    window.location.replace("https://t.me/Marchell_Junior");
  }, 5000);
}
function CloseBtn() {
  MkChatHeaderJoin.classList.add("HideJoin");
}
function OpenBlog() {
  window.location.reload();
  MkHeaderBody.classList.add("Hide");
}
function CloseSupport() {
  MkSupport.classList.remove("MkSupportShow");
  MkHeaderBody.classList.remove("Hide");
}
const hideBottomSheet = () => {
  MkLink.classList.remove("MkLinkShow");
  MkHeaderBody.classList.remove("Hide");
  MkGame.classList.remove("MkGameShow");
  MkScMediaFlw.classList.remove("MkScMediaFlwShow");
  MKProject.classList.remove("MKProjectShow");
  MkIconMenu.classList.remove("MkIconMenuShow");
  MkxChlNav.classList.add("MkxChlNavShow");
};
MkLinkOverlay.addEventListener("click", hideBottomSheet);
MkGameOverlay.addEventListener("click", hideBottomSheet);
MkScMediaFlwOverlay.addEventListener("click", hideBottomSheet);
MKProjectOverlay.addEventListener("click", hideBottomSheet);

MkSupportOverlay.addEventListener("click", function () {
  MkSupport.classList.remove("MkSupportShow");
  MkHeaderBody.classList.remove("Hide");
});

function OpenedJasa() {
  MKxxJasa.classList.add("MKxxJasaShow");
  MkxChlNav.classList.remove("MkxChlNavShow");
  MkHeaderBody.classList.add("Hide");
}

function MkCloseOverlay() {
  MkIconMenu.classList.remove("MkIconMenuShow");
}
function MkxXxInsta() {
  window.location.replace("https://instagram.com/chellgnzxz_");
}
function MkxXxTiktok() {
  window.location.replace("https://tiktok.com/@mxchl");
}
function MkxXxFacebook() {
  window.location.replace("https://facebook.com/chellgnzxz");
}
function MkxXxEms() {
  window.location.replace("https://ems-links.netlify.app/");
}
function MkPortfolio() {
  window.location.replace("https://mkxchl.github.io/portfolio-tailwind-css/");
}
