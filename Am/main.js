const MkHeaderBody = document.querySelector(".MkHeaderBody");
const MkSpotify = document.querySelector(".MkSpotify");
const MkPreloader = document.querySelector(".MkPreloader");
const MkLink = document.querySelector(".MkLink");
const MkLinkOverlay = document.querySelector(".MkLinkOverlay");
const MkLinkContentBodyLink = document.querySelector(".MkLinkContentBodyLink");
const MkSupport = document.querySelector(".MkSupport");
const MkSupportOverlay = document.querySelector(".MkSupportOverlay");
const body = document.querySelector("body");
const MkAudio = document.getElementById("MkAudio");

function OpenLink() {
  MkLink.classList.add("MkLinkShow");
  MkHeaderBody.classList.add("Hide");
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
function CloseSpotify() {
  MkSpotify.classList.remove("MkSpotifyShow");
  MkHeaderBody.classList.remove("Hide");
  body.style.background = "#fff";
}
function MkLoader() {
  MkPreloader.classList.add("MkPreloaderShow");
  MkHeaderBody.classList.add("Hide");
  setTimeout(function () {
    MkPreloader.classList.remove("MkPreloaderShow");
    MkHeaderBody.classList.remove("Hide");
    MkAudio.play();
  }, 5000);
}
function OpenBlog() {
  window.location.reload();
}
/// Hide ///

const hideBottomSheet = () => {
  MkLink.classList.remove("MkLinkShow");
  MkHeaderBody.classList.remove("Hide");
  MkSupport.classList.remove("MkSupportShow");
};

MkLinkOverlay.addEventListener("click", hideBottomSheet);
MkSupportOverlay.addEventListener("click", function () {
  MkSupport.classList.remove("MkSupportShow");
  MkHeaderBody.classList.remove("Hide");
});
