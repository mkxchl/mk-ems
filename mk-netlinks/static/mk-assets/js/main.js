const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = document.querySelector(".sheet-overlay");
const sheetContent = document.querySelector(".content");
const dragIcon = document.querySelector(".drag-icon");

let isDragging = false,
  startY,
  startHeight;

const showBottomSheet = () => {
  bottomSheet.classList.add("show");
  document.body.style.overflowY = "hidden";
  updateSheetHeight(75);
};

const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`;
  bottomSheet.classList.toggle("fullscreen", height === 75);
};

const hideBottomSheet = () => {
  bottomSheet.classList.remove("show");
  document.body.style.background = "#c7d0e1";
  document.body.style.overflowY = "auto";
};

const dragStart = (e) => {
  isDragging = false;
  startY = e.pageY || e.touches?.[0].pageY;
  startHeight = parseInt(sheetContent.style.height);
  bottomSheet.classList.add("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;
  const delta = startY - (e.pageY || e.touches?.[0].pageY);
  const newHeight = startHeight + (delta / window.innerHeight) * 75;
  updateSheetHeight(newHeight);
};

const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
  const sheetHeight = parseInt(sheetContent.style.height);
  sheetHeight < 30 ? hideBottomSheet() : sheetHeight > 30 ? updateSheetHeight(75) : updateSheetHeight(75);
};

sheetOverlay.addEventListener("click", hideBottomSheet);
showModalBtn.addEventListener("click", showBottomSheet);

function Mkxxx() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "info",
    title: "Sedang Dalam Perbaikan!",
  });
}

/// Function Contact - Links ///

function MkxBlog() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://mk-links.netlify.app/");
    }
  });
}
function MkxSpfy() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=F6zRz0mdRJG-EXqyDmE-Bw");
    }
  });
}
function MkxHeal() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://ems-links.netlify.app/about/mkx/heal/");
    }
  });
}
function DscX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://discord.gg/MarchellKevandra");
    }
  });
}
function IntX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://instagram.com/chellgnzxz_");
    }
  });
}
function FbX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://facebook.com/marchel.ganz");
    }
  });
}
function TtX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://tiktok.com/@mkxchl");
    }
  });
}
function TlX() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://t.me/Marchell_Junior");
    }
  });
}

function Gogel() {
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-start",
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
      window.location.replace("https://www.google.com/search?q=Marchell+Kevandra");
    }
  });
}

var MkxxUserProfile = document.querySelector(".MkxxUserProfile");

MkxxUserProfile.addEventListener("click", function () {
  if (document.querySelector(".MkxBodyProfile").style.visibility !== "visible") {
    sheetOverlay.style.opacity = "0.2";
    sheetOverlay.style.visibility = "visible";
    document.querySelector("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.minHeight = "100vh";
    document.querySelector("body").style.justifyContent = "center";
    document.querySelector("body").style.alignItems = "center";
    document.querySelector("body").style.transition = "1s infinite";
    document.querySelector(".box").style.border = "none";
    document.querySelector(".MkxBodyProfile").style.visibility = "visible";
    document.querySelector(".MkxBodyProfile").style.opacity = "1";
    document.querySelector(".MkxBodyProfile").style.display = "inline";
    document.querySelector(".MkxchlBodyMusic").style.visibility = "hidden";
    document.querySelector(".MkxchlBodyMusic").style.opacity = "0";
    document.querySelector(".MkxchlBodyMusic").style.display = "none";
    document.querySelector(".MKxMusicBtnBack").style.visibility = "hidden";
    document.querySelector(".MKxMusicBtnBack").style.opacity = "0";
    document.querySelector(".MKxMusicBtnBack").style.display = "none";
    document.querySelector(".MkxchlMusic").style.visibility = "visible";
    document.querySelector(".MkxchlMusic").style.opacity = "1";
    document.querySelector(".MkxchlMusic").style.display = "inline";
    document.querySelector(".MkxchlIconsSettings").style.visibility = "visible";
    document.querySelector(".MkxchlIconsSettings").style.opacity = "1";
    document.querySelector(".MkxchlIconsSettings").style.display = "inline";
    document.querySelector(".MkMusicSpotifyContenx").style.visibility = "hidden";
    document.querySelector(".MkMusicSpotifyContenx").style.opacity = "0";
    document.querySelector(".MkMusicSpotifyContenx").style.display = "none";
  } else {
    document.querySelector("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.minHeight = "100vh";
    document.querySelector("body").style.justifyContent = "center";
    document.querySelector("body").style.alignItems = "center";
    document.querySelector("body").style.transition = "1s infinite";
    document.querySelector(".box").style.border = "none";
    document.querySelector(".MkxBodyProfile").style.visibility = "visible";
    document.querySelector(".MkxBodyProfile").style.opacity = "1";
    document.querySelector(".MkxBodyProfile").style.display = "inline";
    document.querySelector(".MkxchlBodyMusic").style.visibility = "hidden";
    document.querySelector(".MkxchlBodyMusic").style.opacity = "0";
    document.querySelector(".MkxchlBodyMusic").style.display = "none";
    document.querySelector(".MkxchlMusic").style.visibility = "visible";
    document.querySelector(".MkxchlMusic").style.opacity = "1";
    document.querySelector(".MkxchlMusic").style.display = "inline";
    document.querySelector(".MKxMusicBtnBack").style.visibility = "hidden";
    document.querySelector(".MKxMusicBtnBack").style.opacity = "0";
    document.querySelector(".MKxMusicBtnBack").style.display = "none";
    document.querySelector(".MkxchlIconsSettings").style.visibility = "visible";
    document.querySelector(".MkxchlIconsSettings").style.opacity = "1";
    document.querySelector(".MkxchlIconsSettings").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicA").style.visibility = "hidden";
    document.querySelector(".MkxchlPlayMusicA").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicA").style.display = "none";
    sheetOverlay.style.opacity = "0.2";
    sheetOverlay.style.visibility = "visible";
  }
});

var MkxchlIconsSettings = document.querySelector(".MkxchlIconsSettings");
var MkxBodyProfile = document.querySelector(".MkxBodyProfile");

MkxchlIconsSettings.addEventListener("click", hideBottomSheet);

var MkxchlMusic = document.querySelector(".MkxchlMusic");
MkxchlMusic.addEventListener("click", function () {
  if (document.querySelector(".MkxchlBodyMusic").style.visibility !== "visible") {
    document.querySelector(".MkxchlBodyMusic").style.visibility = "visible";
    sheetOverlay.style.opacity = "0.2";
    sheetOverlay.style.visibility = "hidden";
    MkxBodyProfile.classList.add("move");
    document.querySelector("body").style.backgroundImage = "url('https://ems-links.netlify.app/assets/images/xchl.jpg')";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.minHeight = "100vh";
    document.querySelector("body").style.justifyContent = "center";
    document.querySelector("body").style.alignItems = "center";
    document.querySelector("body").style.transition = "1s infinite";
    document.querySelector(".box").style.border = "none";
    document.querySelector(".MkxchlBodyMusic").style.opacity = "1";
    document.querySelector(".MkxchlBodyMusic").style.display = "inline";
    document.querySelector(".MKxMusicBtnBack").style.visibility = "visible";
    document.querySelector(".MKxMusicBtnBack").style.opacity = "1";
    document.querySelector(".MKxMusicBtnBack").style.display = "inline";
    document.querySelector(".MkxBodyProfile").style.visibility = "hidden";
    document.querySelector(".MkxBodyProfile").style.opacity = "0";
    document.querySelector(".MkxBodyProfile").style.display = "none";
    document.querySelector(".MkxchlMusic").style.visibility = "hidden";
    document.querySelector(".MkxchlMusic").style.opacity = "0";
    document.querySelector(".MkxchlMusic").style.display = "none";
    document.querySelector(".MkxchlIconsSettings").style.visibility = "hidden";
    document.querySelector(".MkxchlIconsSettings").style.opacity = "0";
    document.querySelector(".MkxchlIconsSettings").style.display = "none";
    document.querySelector(".MkxchlPlayMusicA").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicA").style.opacity = "1";
    document.querySelector(".MkxchlPlayMusicA").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicB").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicB").style.opacity = "1";
    document.querySelector(".MkxchlPlayMusicB").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicC").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicC").style.opacity = "1";
    document.querySelector(".MkxchlPlayMusicC").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicD").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicD").style.opacity = "1";
    document.querySelector(".MkxchlPlayMusicD").style.display = "inline";
  } else {
    document.querySelector(".MkxBodyProfile").style.visibility = "visible";
    document.querySelector(".MkxBodyProfile").style.opacity = "1";
    document.querySelector(".MkxBodyProfile").style.display = "inline";
    document.querySelector(".MkxchlBodyMusic").style.visibility = "hiden";
    document.querySelector(".MkxchlBodyMusic").style.opacity = "0";
    document.querySelector(".MkxchlBodyMusic").style.display = "none";
    document.querySelector(".MkxchlIconsSettings").style.visibility = "visible";
    document.querySelector(".MkxchlIconsSettings").style.opacity = "1";
    document.querySelector(".MkxchlIconsSettings").style.display = "inline";
    document.querySelector(".MkxchlMusic").style.visibility = "visible";
    document.querySelector(".MkxchlMusic").style.opacity = "1";
    document.querySelector(".MkxchlMusic").style.display = "inline";
    document.querySelector(".MkxchlPlayMusic").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusic").style.opacity = "1";
    document.querySelector(".MkxchlPlayMusic").style.display = "inline";
  }
});

var MKxMusicBtnBack = document.querySelector(".MKxMusicBtnBack");
MKxMusicBtnBack.addEventListener("click", function () {
  if (document.querySelector(".MkxchlBodyMusic").style.visibility !== "hidden") {
    sheetOverlay.style.opacity = "0.2";
    sheetOverlay.style.visibility = "visible";
    document.querySelector("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')";
    document.querySelector("body").style.backgroundSize = "cover";
    document.querySelector("body").style.backgroundPosition = "center";
    document.querySelector("body").style.minHeight = "100vh";
    document.querySelector("body").style.justifyContent = "center";
    document.querySelector("body").style.alignItems = "center";
    document.querySelector("body").style.transition = "1s infinite";
    document.querySelector(".box").style.border = "none";
    document.querySelector(".MkxchlBodyMusic").style.visibility = "hidden";
    document.querySelector(".MkxchlBodyMusic").style.opacity = "0";
    document.querySelector(".MkxchlBodyMusic").style.display = "none";
    document.querySelector(".MKxMusicBtnBack").style.visibility = "hidden";
    document.querySelector(".MKxMusicBtnBack").style.opacity = "0";
    document.querySelector(".MKxMusicBtnBack").style.display = "none";
    document.querySelector(".MkxBodyProfile").style.visibility = "visible";
    document.querySelector(".MkxBodyProfile").style.opacity = "1";
    document.querySelector(".MkxBodyProfile").style.display = "inline";
    document.querySelector(".MkxchlMusic").style.visibility = "visible";
    document.querySelector(".MkxchlMusic").style.opacity = "1";
    document.querySelector(".MkxchlMusic").style.display = "inline";
    document.querySelector(".MkxchlIconsSettings").style.visibility = "visible";
    document.querySelector(".MkxchlIconsSettings").style.opacity = "1";
    document.querySelector(".MkxchlIconsSettings").style.display = "inline";
    MkxSongsA.pause();
    MkxSongsB.pause();
    MkxSongsC.pause();
    MkxSongsD.pause();
    document.querySelector(".MkxchlPauseMusicA").style.display = "none";
    document.querySelector(".MkxchlPauseMusicA").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicA").style.opacity = "0";
    document.querySelector(".MkxchlPauseMusicB").style.display = "none";
    document.querySelector(".MkxchlPauseMusicB").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicB").style.opacity = "0";
    document.querySelector(".MkxchlPauseMusicC").style.display = "none";
    document.querySelector(".MkxchlPauseMusicC").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicC").style.opacity = "0";
    document.querySelector(".MkxchlPauseMusicD").style.display = "none";
    document.querySelector(".MkxchlPauseMusicD").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicD").style.opacity = "0";
  } else {
    MkxSongsA.pause();
    MkxSongsB.pause();
    MkxSongsC.pause();
    MkxSongsD.pause();
    document.querySelector(".MkxBodyProfile").style.visibility = "visible";
    document.querySelector(".MkxBodyProfile").style.opacity = "1";
    document.querySelector(".MkxBodyProfile").style.display = "inline";
    document.querySelector(".MkxchlBodyMusic").style.visibility = "hiden";
    document.querySelector(".MkxchlBodyMusic").style.opacity = "0";
    document.querySelector(".MkxchlBodyMusic").style.display = "none";
    document.querySelector(".MkxchlIconsSettings").style.visibility = "visible";
    document.querySelector(".MkxchlIconsSettings").style.opacity = "1";
    document.querySelector(".MkxchlIconsSettings").style.display = "inline";
    document.querySelector(".MkxchlMusic").style.visibility = "visible";
    document.querySelector(".MkxchlMusic").style.opacity = "1";
    document.querySelector(".MkxchlMusic").style.display = "inline";
  }
});

var MkxSongsA = document.getElementById("MkxSongsA");
var MkxchlPlayMusicA = document.querySelector(".MkxchlPlayMusicA");
var oynat = document.getElementById("oynat");

oynat.onclick = function () {
  if (MkxSongsA.paused) {
    MkxSongsA.play();
    document.querySelector(".MkxchlPlayMusicA").style.display = "none";
    document.querySelector(".MkxchlPlayMusicA").style.visibility = "hidden";
    document.querySelector(".MkxchlPlayMusicA").style.opacity = "0";
    document.querySelector(".MkxchlPauseMusicA").style.display = "inline";
    document.querySelector(".MkxchlPauseMusicA").style.visibility = "visible";
    document.querySelector(".MkxchlPauseMusicA").style.opacity = "1";
    MkxSongsB.pause();
    MkxSongsC.pause();
    MkxSongsD.pause();
    document.querySelector(".MkxchlPlayMusicB").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicB").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicB").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicB").style.display = "none";
    document.querySelector(".MkxchlPauseMusicB").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicB").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicC").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicC").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicC").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicC").style.display = "none";
    document.querySelector(".MkxchlPauseMusicC").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicC").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicD").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicD").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicD").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicD").style.display = "none";
    document.querySelector(".MkxchlPauseMusicD").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicD").style.opacity = "0";
  } else {
    MkxSongsA.pause();
    document.querySelector(".MkxchlPlayMusicA").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicA").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicA").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicA").style.display = "none";
    document.querySelector(".MkxchlPauseMusicA").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicA").style.opacity = "0";
  }
};

var MkxSongsB = document.getElementById("MkxSongsB");
var MkxchlPlayMusicB = document.querySelector(".MkxchlPlayMusicB");
var oynatB = document.getElementById("oynatB");

oynatB.onclick = function () {
  if (MkxSongsB.paused) {
    MkxSongsB.play();
    document.querySelector(".MkxchlPlayMusicB").style.display = "none";
    document.querySelector(".MkxchlPlayMusicB").style.visibility = "hidden";
    document.querySelector(".MkxchlPlayMusicB").style.opacity = "0";
    document.querySelector(".MkxchlPauseMusicB").style.display = "inline";
    document.querySelector(".MkxchlPauseMusicB").style.visibility = "visible";
    document.querySelector(".MkxchlPauseMusicB").style.opacity = "1";
    MkxSongsA.pause();
    MkxSongsC.pause();
    MkxSongsD.pause();
    document.querySelector(".MkxchlPlayMusicA").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicA").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicA").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicA").style.display = "none";
    document.querySelector(".MkxchlPauseMusicA").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicA").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicC").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicC").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicC").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicC").style.display = "none";
    document.querySelector(".MkxchlPauseMusicC").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicC").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicD").Dtyle.display = "inline";
    document.querySelector(".MkxchlPlayMusicD").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicD").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicD").style.display = "none";
    document.querySelector(".MkxchlPauseMusicD").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicD").style.opacity = "0";
  } else {
    MkxSongsB.pause();
    document.querySelector(".MkxchlPlayMusicB").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicB").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicB").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicB").style.display = "none";
    document.querySelector(".MkxchlPauseMusicB").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicB").style.opacity = "0";
  }
};

var MkxSongsC = document.getElementById("MkxSongsC");
var MkxchlPlayMusicC = document.querySelector(".MkxchlPlayMusicC");
var oynatC = document.getElementById("oynatC");

oynatC.onclick = function () {
  if (MkxSongsC.paused) {
    MkxSongsC.play();
    document.querySelector(".MkxchlPlayMusicC").style.display = "none";
    document.querySelector(".MkxchlPlayMusicC").style.visibility = "hidden";
    document.querySelector(".MkxchlPlayMusicC").style.opacity = "0";
    document.querySelector(".MkxchlPauseMusicC").style.display = "inline";
    document.querySelector(".MkxchlPauseMusicC").style.visibility = "visible";
    document.querySelector(".MkxchlPauseMusicC").style.opacity = "1";
    MkxSongsA.pause();
    MkxSongsB.pause();
    MkxSongsD.pause();
    document.querySelector(".MkxchlPlayMusicA").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicA").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicA").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicA").style.display = "none";
    document.querySelector(".MkxchlPauseMusicA").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicA").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicB").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicB").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicB").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicB").style.display = "none";
    document.querySelector(".MkxchlPauseMusicB").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicB").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicD").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicD").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicD").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicD").style.display = "none";
    document.querySelector(".MkxchlPauseMusicD").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicD").style.opacity = "0";
  } else {
    MkxSongsC.pause();
    document.querySelector(".MkxchlPlayMusicC").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicC").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicC").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicC").style.display = "none";
    document.querySelector(".MkxchlPauseMusicC").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicC").style.opacity = "0";
  }
};

var MkxSongsD = document.getElementById("MkxSongsD");
var MkxchlPlayMusicD = document.querySelector(".MkxchlPlayMusicD");
var oynatD = document.getElementById("oynatD");

oynatD.onclick = function () {
  if (MkxSongsD.paused) {
    MkxSongsD.play();
    document.querySelector(".MkxchlPlayMusicD").style.display = "none";
    document.querySelector(".MkxchlPlayMusicD").style.visibility = "hidden";
    document.querySelector(".MkxchlPlayMusicD").style.opacity = "0";
    document.querySelector(".MkxchlPauseMusicD").style.display = "inline";
    document.querySelector(".MkxchlPauseMusicD").style.visibility = "visible";
    document.querySelector(".MkxchlPauseMusicD").style.opacity = "1";
    MkxSongsA.pause();
    MkxSongsB.pause();
    MkxSongsC.pause();
    document.querySelector(".MkxchlPlayMusicA").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicA").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicA").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicA").style.display = "none";
    document.querySelector(".MkxchlPauseMusicA").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicA").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicB").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicB").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicB").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicB").style.display = "none";
    document.querySelector(".MkxchlPauseMusicB").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicB").style.opacity = "0";
    document.querySelector(".MkxchlPlayMusicC").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicC").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicC").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicC").style.display = "none";
    document.querySelector(".MkxchlPauseMusicC").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicC").style.opacity = "0";
  } else {
    MkxSongsD.pause();
    document.querySelector(".MkxchlPlayMusicD").style.display = "inline";
    document.querySelector(".MkxchlPlayMusicD").style.visibility = "visible";
    document.querySelector(".MkxchlPlayMusicD").style.opacity = "1";
    document.querySelector(".MkxchlPauseMusicD").style.display = "none";
    document.querySelector(".MkxchlPauseMusicD").style.visibility = "hidden";
    document.querySelector(".MkxchlPauseMusicD").style.opacity = "0";
  }
};
function MkxxSettings() {
  Swal.fire({
    icon: "error",
    title: "Warning!",
    text: "Area Only 18+",
    showCancelButton: false,
    confirmButtonColor: "#DD6B55",
    confirmButtonBorder: "none",
    confirmButtonText: "Understand",
  });
  document.querySelector(".MkxListLinksContent").style.opacity = "0";
  document.querySelector(".MkxListLinksContent").style.display = "none";
  document.querySelector(".MkxListLinksContentGacor").style.opacity = "1";
  document.querySelector(".MkxListLinksContentGacor").style.display = "block";
  document.querySelector(".box").style.border = "none";
  document.querySelector("body").style.backgroundImage = "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80')";
  document.querySelector("body").style.backgroundSize = "cover";
  document.querySelector("body").style.backgroundPosition = "center";
  document.querySelector("body").style.minHeight = "100vh";
  document.querySelector("body").style.justifyContent = "center";
  document.querySelector("body").style.alignItems = "center";
  document.querySelector("body").style.transition = "1s infinite";
}
function MKxxGacorBack() {
  document.querySelector(".MkxListLinksContent").style.opacity = "1";
  document.querySelector(".MkxListLinksContent").style.display = "inline";
  document.querySelector(".MkxListLinksContentGacor").style.opacity = "0";
  document.querySelector(".MkxListLinksContentGacor").style.display = "none";
  document.querySelector("body").style.background = "#c7d0e1";
  document.querySelector("body").style.transition = "1s infinite";
}

var MkViewPlaylist = document.querySelector(".MkViewPlaylist");

MkViewPlaylist.addEventListener("click", hideBottomSheet);

const MkxCodexLink = document.querySelector(".MkxCodexLink"),
  toast = document.querySelector(".toast"),
  closeIcon = document.querySelector(".close"),
  progress = document.querySelector(".progress");

MkxCodexLink.addEventListener("click", () => {
  toast.classList.add("active");

  closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");

    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);
  });
});
