const MkFollowSection = document.querySelector(".MkFollowSection");
const MkFollowSectionOverlay = document.querySelector(".MkFollowSectionOverlay");
const MkFollowSectionContent = document.querySelector(".MkFollowSectionContent");
const MkListLinkSheet = document.querySelector(".MkListLinkSheet");
const MkListLinkSheetOverlay = document.querySelector(".MkListLinkSheetOverlay");
const MkSettingSheet = document.querySelector(".MkSettingSheet");
const MkMusicSheet = document.querySelector(".MkMusicSheet");
const MkStalk = document.querySelector(".MkStalk");
const GotoProfile = document.querySelector(".GotoProfile");
const MkInstax = document.querySelector(".MkInstax");
const MkFacex = document.querySelector(".MkFacex");
const MkGitx = document.querySelector(".MkGitx");
const MkTiktokx = document.querySelector(".MkTiktokx");
const MkTca = document.querySelector(".MkTca");
const MkTng = document.querySelector(".MkTng");
const MkEms = document.querySelector(".MkEms");
const MkProf = document.querySelector(".MkProf");
const MkListLinkSheetContentHeader = document.querySelector(".MkListLinkSheetContentHeader");
const MkLinkSheetTimeline = document.querySelector(".MkLinkSheetTimeline");
const MkLinkSheetItem = document.querySelector(".MkLinkSheetItem");
const MkLinkSheetSpotify = document.querySelector(".MkLinkSheetSpotify");
const MkLinkSheetFilm = document.querySelector(".MkLinkSheetFilm");
const MkLinkSheetClose = document.querySelector(".MkLinkSheetClose");
const MkHeaderSheet = document.getElementById("MkHeaderSheet");
const btnHideDown = document.getElementById("btnHideDown");
const MkInsta = document.getElementById("MkInsta");
const MkFace = document.getElementById("MkFace");
const MkGit = document.getElementById("MkGit");
const MkTiktok = document.getElementById("MkTiktok");
const MkListSheetHeaderText = document.getElementById("MkListSheetHeaderText");

function MkProfileFooter() {
  MkFollowSection.classList.add("show");
  MkHeaderSheet.innerHTML = "Profile";
  MkProf.style.opacity = "1";
  MkProf.style.opacity = "inline";
  MkInstax.style.opacity = "0";
  MkInstax.style.display = "none";
  MkFacex.style.opacity = "0";
  MkFacex.style.display = "none";
  MkGitx.style.opacity = "0";
  MkGitx.style.display = "none";
  MkTiktokx.style.opacity = "0";
  MkTiktokx.style.display = "none";
  MkTca.style.opacity = "0";
  MkTca.style.display = "none";
  MkTng.style.opacity = "0";
  MkTng.style.display = "none";
  MkEms.style.opacity = "0";
  MkEms.style.display = "none";
  updateSheetHeight(50);
}
function showTip() {
  MkStalk.classList.add("MkStalkShow");
}
function closeTip() {
  MkStalk.classList.remove("MkStalkShow");
}
function OpenMusicPageMk() {
  MkMusicSheet.classList.add("MkMusicShow");
}

function MkMusicSheetClose() {
  MkMusicSheet.classList.remove("MkMusicShow");
}

function MkSettingClose() {
  MkSettingSheet.classList.remove("MkSettingshow");
}

function MkSheetSetting() {
  MkSettingSheet.classList.add("MkSettingshow");
}

function MkLinkSpotify() {
  MkListLinkSheet.classList.add("Mkshow");
  MkListSheetHeaderText.innerHTML = "Spotify Playlist";
  MkListLinkSheetContentHeader.style.background = "#1db954";
  MkListLinkSheetContentHeader.style.color = "#fff";
  MkLinkSheetClose.style.background = "#1db954";
  MkLinkSheetSpotify.style.opacity = "1";
  MkLinkSheetSpotify.style.display = "inline";
  MkLinkSheetFilm.style.opacity = "0";
  MkLinkSheetFilm.style.display = "none";
}
function MkLinkFilm() {
  MkListLinkSheet.classList.add("Mkshow");
  MkListSheetHeaderText.innerHTML = "Film Playlist";
  MkListLinkSheetContentHeader.style.background = "#2d5cfe";
  MkListLinkSheetContentHeader.style.color = "#fff";
  MkLinkSheetClose.style.background = "#2d5cfe";
  MkLinkSheetFilm.style.opacity = "1";
  MkLinkSheetFilm.style.display = "inline";
  MkLinkSheetSpotify.style.opacity = "0";
  MkLinkSheetSpotify.style.display = "none";
}
function closeLink() {
  MkListLinkSheet.classList.remove("Mkshow");
}

function btnCloseSheet() {
  MkFollowSection.classList.remove("show");
}
function OpenLinkInsta() {
  MkFollowSection.classList.add("show");
  MkHeaderSheet.innerHTML = "My Instagram";
  MkInstax.style.opacity = "1";
  MkInstax.style.display = "flex";
  MkFacex.style.opacity = "0";
  MkFacex.style.display = "none";
  MkGitx.style.opacity = "0";
  MkGitx.style.display = "none";
  MkTiktokx.style.opacity = "0";
  MkTiktokx.style.display = "none";
  MkTca.style.opacity = "0";
  MkTca.style.display = "none";
  MkTng.style.opacity = "0";
  MkTng.style.display = "none";
  MkEms.style.opacity = "0";
  MkEms.style.display = "none";
  MkProf.style.opacity = "0";
  MkProf.style.opacity = "none";
  updateSheetHeight(25);
}
function OpenLinkFace() {
  MkFollowSection.classList.add("show");
  MkHeaderSheet.innerHTML = "My Facebook";
  MkFacex.style.opacity = "1";
  MkFacex.style.display = "flex";
  MkInstax.style.opacity = "0";
  MkInstax.style.display = "none";
  MkGitx.style.opacity = "0";
  MkGitx.style.display = "none";
  MkTiktokx.style.opacity = "0";
  MkTiktokx.style.display = "none";
  MkTca.style.opacity = "0";
  MkTca.style.display = "none";
  MkTng.style.opacity = "0";
  MkTng.style.display = "none";
  MkEms.style.opacity = "0";
  MkEms.style.display = "none";
  MkProf.style.opacity = "0";
  MkProf.style.opacity = "none";
  updateSheetHeight(25);
}
function OpenLinkGit() {
  MkFollowSection.classList.add("show");
  MkHeaderSheet.innerHTML = "My Github";
  MkGitx.style.opacity = "1";
  MkGitx.style.display = "flex";
  MkFacex.style.opacity = "0";
  MkFacex.style.display = "none";
  MkInstax.style.opacity = "0";
  MkInstax.style.display = "none";
  MkTiktokx.style.opacity = "0";
  MkTiktokx.style.display = "none";
  MkTca.style.opacity = "0";
  MkTca.style.display = "none";
  MkTng.style.opacity = "0";
  MkTng.style.display = "none";
  MkEms.style.opacity = "0";
  MkEms.style.display = "none";
  MkProf.style.opacity = "0";
  MkProf.style.opacity = "none";
  updateSheetHeight(25);
}
function OpenLinkTiktok() {
  MkFollowSection.classList.add("show");
  MkHeaderSheet.innerHTML = "My Tiktok";
  MkTiktokx.style.opacity = "1";
  MkTiktokx.style.display = "flex";
  MkGitx.style.opacity = "0";
  MkGitx.style.display = "none";
  MkFacex.style.opacity = "0";
  MkFacex.style.display = "none";
  MkInstax.style.opacity = "0";
  MkInstax.style.display = "none";
  MkTca.style.opacity = "0";
  MkTca.style.display = "none";
  MkTng.style.opacity = "0";
  MkTng.style.display = "none";
  MkEms.style.opacity = "0";
  MkEms.style.display = "none";
  MkProf.style.opacity = "0";
  MkProf.style.opacity = "none";
  updateSheetHeight(25);
}
function showTeam() {
  MkFollowSection.classList.add("show");
  MkHeaderSheet.innerHTML = "Team Support";
  MkTca.style.opacity = "1";
  MkTca.style.display = "flex";
  MkTng.style.opacity = "1";
  MkTng.style.display = "flex";
  MkEms.style.opacity = "1";
  MkEms.style.display = "flex";
  MkTiktokx.style.opacity = "0";
  MkTiktokx.style.display = "none";
  MkGitx.style.opacity = "0";
  MkGitx.style.display = "none";
  MkFacex.style.opacity = "0";
  MkFacex.style.display = "none";
  MkInstax.style.opacity = "0";
  MkInstax.style.display = "none";
  MkProf.style.opacity = "0";
  MkProf.style.opacity = "none";
  updateSheetHeight(50);
}
function RefreshLoad() {
  window.location.reload();
}

const hideBottomSheet = () => {
  MkFollowSection.classList.remove("show");
  MkListLinkSheet.classList.remove("Mkshow");
  document.body.style.overflowY = "auto";
};

const updateSheetHeight = (height) => {
  MkFollowSectionContent.style.height = `${height}vh`;
  MkFollowSection.classList.toggle("fullscreen", height === 100);
};

MkFollowSectionOverlay.addEventListener("click", hideBottomSheet);
