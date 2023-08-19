const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = document.querySelector(".sheet-overlay");
const sheetContent = document.querySelector(".content");
const dragIcon = document.querySelector(".drag-icon");
const MkLeftSheet = document.querySelector(".MkLeftSheet");
const MkListHeaderBottom = document.querySelector(".MkListHeaderBottom");
const MkClose = document.querySelector(".MkClose");
const MkBoxAccount = document.querySelector(".MkBoxAccount");
const MkAccountListContent = document.querySelector(".MkAccountListContent");
const MkAccountList = document.querySelector(".MkAccountList");
const MkSpotifyContentxx = document.querySelector(".MkSpotifyContentxx");
const MkSpotifyListxx = document.querySelector(".MkSpotifyListxx");
const MkLnkGcrContentxx = document.querySelector(".MkLnkGcrContentxx");
const MKTeamSupportContentxx = document.querySelector(".MKTeamSupportContentxx");
const MkPaused = document.querySelector(".MkPaused");
const MkContactContentxx = document.querySelector(".MkContactContentxx");
const NamePlayList = document.getElementById("NamePlayList");
const MKAudio = document.getElementById("MKAudio");

const showBottomSheet = () => {
  bottomSheet.classList.add("show");
  document.body.style.overflowY = "hidden";
  updateSheetHeight(0);
};

const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`;
  bottomSheet.classList.toggle("fullscreen", height === 50);
};

const hideBottomSheet = () => {
  bottomSheet.classList.remove("show");
  NamePlayList.innerHTML = "";
};

showModalBtn.addEventListener("click", showBottomSheet);

function MkProfileMenu() {
  bottomSheet.classList.add("show");
  NamePlayList.innerHTML = "Account & Proflle";
  MkAccountListContent.style.opacity = "1";
  MkAccountListContent.style.display = "inline";
  MkSpotifyContentxx.style.opacity = "0";
  MkSpotifyContentxx.style.display = "none";
  MkLnkGcrContentxx.style.opacity = "0";
  MkLnkGcrContentxx.style.display = "none";
  MKTeamSupportContentxx.style.display = "none";
  MKTeamSupportContentxx.style.opacity = "0";
  MkBoxAccount.style.opacity = "0";
  MkContactContentxx.style.opacity = "0";
  MkContactContentxx.style.display = "none";
}
function MkClosePage() {
  bottomSheet.classList.remove("show");
  MkBoxAccount.style.opacity = "1";
}
function MkOpenSpotifyPlaylist() {
  bottomSheet.classList.add("show");
  NamePlayList.innerHTML = "Spotify Playlist";
  MkAccountListContent.style.opacity = "0";
  MkAccountListContent.style.display = "none";
  MkLnkGcrContentxx.style.opacity = "0";
  MkLnkGcrContentxx.style.display = "none";
  MkSpotifyContentxx.style.opacity = "1";
  MkSpotifyContentxx.style.display = "inline";
  MKTeamSupportContentxx.style.display = "none";
  MKTeamSupportContentxx.style.opacity = "0";
  MkBoxAccount.style.opacity = "0";
  MkContactContentxx.style.opacity = "0";
  MkContactContentxx.style.display = "none";
}
function MkOpenLnkGcr() {
  bottomSheet.classList.add("show");
  NamePlayList.innerHTML = "Link Gacor";
  MkAccountListContent.style.opacity = "0";
  MkAccountListContent.style.display = "none";
  MkLnkGcrContentxx.style.opacity = "1";
  MkLnkGcrContentxx.style.display = "inline";
  MkSpotifyContentxx.style.opacity = "0";
  MkSpotifyContentxx.style.display = "none";
  MKTeamSupportContentxx.style.display = "none";
  MKTeamSupportContentxx.style.opacity = "0";
  MkBoxAccount.style.opacity = "0";
  MkContactContentxx.style.opacity = "0";
  MkContactContentxx.style.display = "none";
}
function MkOpenTeamSpt() {
  bottomSheet.classList.add("show");
  NamePlayList.innerHTML = "Team Support";
  MkAccountListContent.style.opacity = "0";
  MkAccountListContent.style.display = "none";
  MkLnkGcrContentxx.style.opacity = "0";
  MkLnkGcrContentxx.style.display = "none";
  MkSpotifyContentxx.style.opacity = "0";
  MkSpotifyContentxx.style.display = "none";
  MKTeamSupportContentxx.style.display = "inline";
  MKTeamSupportContentxx.style.opacity = "1";
  MkBoxAccount.style.opacity = "0";
  MkContactContentxx.style.opacity = "0";
  MkContactContentxx.style.display = "none";
}
function MkOpenContact() {
  bottomSheet.classList.add("show");
  NamePlayList.innerHTML = "Contact Me";
  MkAccountListContent.style.opacity = "0";
  MkAccountListContent.style.display = "none";
  MkLnkGcrContentxx.style.opacity = "0";
  MkLnkGcrContentxx.style.display = "none";
  MkSpotifyContentxx.style.opacity = "0";
  MkSpotifyContentxx.style.display = "none";
  MKTeamSupportContentxx.style.display = "none";
  MKTeamSupportContentxx.style.opacity = "0";
  MkBoxAccount.style.opacity = "0";
  MkContactContentxx.style.opacity = "1";
  MkContactContentxx.style.display = "inline";
}
function MkViewPageSpotify() {
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    title: "Opened Spotify",
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
    didOpen: () => {
      Swal.showLoading();
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 500);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
      window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=F6zRz0mdRJG-EXqyDmE-Bw");
    }
  });
}
