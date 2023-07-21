function MkxxGacorA() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
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
      window.location.replace("http://185.63.253.200/");
    }
  });
}
function MkxxGacorB() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
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
      window.location.replace("https://www4.javhdporn.net/");
    }
  });
}
function MkxxGacorC() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
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
      window.location.replace("https://ukdevilz.com/");
    }
  });
}
function MkxxGacorD() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
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
      window.location.replace("https://pornhub.com/");
    }
  });
}

function MkxSpotifyProfile() {
  bottomSheet.classList.add("show");
  updateSheetHeight(100);
  document.querySelector(".MkMusicSpotifyContenx").style.visibility = "hidden";
  document.querySelector(".MkMusicSpotifyContenx").style.opacity = "0";
  document.querySelector(".MkMusicSpotifyContenx").style.display = "none";
}

function MkxSpotifyMusic() {
  bottomSheet.classList.add("show");
  updateSheetHeight(40);
  document.querySelector(".MkxchlMusic").style.visibility = "hidden";
  document.querySelector(".MkxchlMusic").style.opacity = "0";
  document.querySelector(".MkxchlMusic").style.display = "none";
  document.querySelector(".MkxchlIconsSettings").style.visibility = "hidden";
  document.querySelector(".MkxchlIconsSettings").style.opacity = "0";
  document.querySelector(".MkxchlIconsSettings").style.display = "none";
  document.querySelector(".MkxchlBodyMusic").style.visibility = "hidden";
  document.querySelector(".MkxchlBodyMusic").style.opacity = "0";
  document.querySelector(".MkxchlBodyMusic").style.display = "none";
  document.querySelector(".MkxBodyProfile").style.visibility = "hidden";
  document.querySelector(".MkxBodyProfile").style.opacity = "0";
  document.querySelector(".MkxBodyProfile").style.display = "none";
  document.querySelector(".MKxMusicBtnBack").style.visibility = "hidden";
  document.querySelector(".MKxMusicBtnBack").style.opacity = "0";
  document.querySelector(".MKxMusicBtnBack").style.display = "none";
  document.querySelector(".MkMusicSpotifyContenx").style.visibility = "visible";
  document.querySelector(".MkMusicSpotifyContenx").style.opacity = "1";
  document.querySelector(".MkMusicSpotifyContenx").style.display = "inline";
  document.querySelector("body").style.background = "#1DB954";
  document.querySelector(".box").style.border = "none";
  document.querySelector("body").style.transition = "1s infinite";
}
var MkxSongsA = document.getElementById("MkxSongsA");
function MkSpotifyMusicPlay() {
  if (MkxSongsA.paused) {
    MkxSongsA.play();
  }
}
