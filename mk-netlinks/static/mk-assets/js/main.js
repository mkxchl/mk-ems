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
  updateSheetHeight(0);
};

const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`;
  bottomSheet.classList.toggle("fullscreen", height === 50);
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
  const newHeight = startHeight + (delta / window.innerHeight) * 50;
  updateSheetHeight(newHeight);
};

const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
  const sheetHeight = parseInt(sheetContent.style.height);
  sheetHeight < 30 ? hideBottomSheet() : sheetHeight > 30 ? updateSheetHeight(50) : updateSheetHeight(50);
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
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");
  let timerInterval;
  Swal.fire({
    timer: 5000,
    timerProgressBar: true,
    position: "top-center",
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
  bottomSheet.classList.remove("show");

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
var MkxProfileContentx = document.querySelector(".MkxProfileContentx");
var MkxProfileContentSupportx = document.querySelector(".MkxProfileContentSupportx");
var MkMusicSpotifyContenx = document.querySelector(".MkMusicSpotifyContenx");

MkxxUserProfile.addEventListener("click", function () {
  document.querySelector(".MkxProfileContentx").style.display = "inline";
  document.querySelector(".MkxProfileContentx").style.opacity = "1";
  document.querySelector(".MKxProfileUserPagesx").style.display = "none";
  document.querySelector(".MKxProfileUserPagesx").style.opacity = "0";
  document.querySelector(".MkxProfileContentSupportx").style.display = "none";
  document.querySelector(".MkxProfileContentSupportx").style.opacity = "0";
  document.querySelector(".MkMusicSpotifyContenx").style.display = "none";
  document.querySelector(".MkMusicSpotifyContenx").style.opacity = "0";
  document.querySelector(".MkUserSettingContentList").style.display = "none";
  document.querySelector(".MkUserSettingContentList").style.opacity = "0";
  document.querySelector(".MkContactPagesContent").style.display = "none";
  document.querySelector(".MkContactPagesContent").style.opacity = "0";
  document.querySelector(".MkOpenLink").style.opacity = "0";
  document.querySelector(".MkOpenLink").style.display = "none";
});
