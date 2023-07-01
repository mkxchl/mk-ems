const showModalBtn = document.querySelector(".show-modal");
const bottomSheet = document.querySelector(".bottom-sheet");
const sheetOverlay = bottomSheet.querySelector(".sheet-overlay");
const sheetContent = bottomSheet.querySelector(".content");
const dragIcon = bottomSheet.querySelector(".drag-icon");

let isDragging = false,
  startY,
  startHeight;

const showBottomSheet = () => {
  bottomSheet.classList.add("show");
  document.body.style.overflowY = "hidden";
  updateSheetHeight(40);
};

const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`;
  bottomSheet.classList.toggle("fullscreen", height === 40);
};

const hideBottomSheet = () => {
  bottomSheet.classList.remove("show");
  document.body.style.overflowY = "auto";
};

const dragStart = (e) => {
  isDragging = true;
  startY = e.pageY || e.touches?.[0].pageY;
  startHeight = parseInt(sheetContent.style.height);
  bottomSheet.classList.add("dragging");
};

const dragging = (e) => {
  if (!isDragging) return;
  const delta = startY - (e.pageY || e.touches?.[0].pageY);
  const newHeight = startHeight + (delta / window.innerHeight) * 40;
  updateSheetHeight(newHeight);
};

const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
  const sheetHeight = parseInt(sheetContent.style.height);
  sheetHeight < 30 ? hideBottomSheet() : sheetHeight > 30 ? updateSheetHeight(40) : updateSheetHeight(50);
};

dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

dragIcon.addEventListener("touchstart", dragStart);
document.addEventListener("touchmove", dragging);
document.addEventListener("touchend", dragStop);

sheetOverlay.addEventListener("click", hideBottomSheet);
showModalBtn.addEventListener("click", showBottomSheet);

function Mkxxx() {
  Swal.fire({
    title: "Warning!",
    text: "Sedang Dalam Perbaikan!",
    icon: "warning",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Tutup",
    confirmTextColor: "#d33",
  });
}

/// Function Contact - Links ///

function MkxBlog() {
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
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://mk-links.netlify.app/");
}
function MkxSpfy() {
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
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=F6zRz0mdRJG-EXqyDmE-Bw");
}
function MkxHeal() {
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
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://ems-links.netlify.app/about/mkx/heal/");
}
function DscX() {
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
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://discord.gg/MarchellKevandra");
}
function IntX() {
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
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://instagram.com/chellgnzxz_");
}
function FbX() {
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
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://facebook.com/marchel.ganz");
}
function TtX() {
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
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
  window.location.replace("https://tiktok.com/@mkxchl");
}
function TlX() {
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
    }
  });
  window.location.replace("https://t.me/Marchell_Junior");
}

function Gogel() {
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
    }
  });
  window.location.replace("https://www.google.com/search?q=Marchell+Kevandra");
}

var MkNavBar = document.querySelector(".MkNavBar");
var MkxGanzCls = document.querySelector(".MkxGanzCls");

MkxGanzCls.addEventListener("click", function () {
  if (MkNavBar.style.visibility !== "visible") {
    MkNavBar.style.visibility = "visible";
    MkNavBar.style.opacity = "1";
    MkNavBar.style.bottom = "100px";
  } else {
    MkNavBar.style.visibility = "hidden";
    MkNavBar.style.opacity = "0";
    MkNavBar.style.bottom = "300px";
  }
});

var MkxCloseMusic = document.querySelector(".bx-menu");
var MkNavBar = document.querySelector(".MkNavBar");

MkxCloseMusic.addEventListener("click", function () {
  if (document.querySelector(".music-player").style.visibility !== "hidden") {
    document.querySelector(".music-player").style.visibility = "hidden";
    document.querySelector(".music-player").style.opacity = "0";
    document.querySelector(".MkNavBar").style.visibility = "hidden";
    document.querySelector(".MkNavBar").style.opacity = "0";
  } else {
    document.querySelector(".music-player").style.visibility = "hidden";
    document.querySelector(".music-player").style.opacity = "0";
  }
});

var MkBack = document.querySelector(".MkxxBackxx");

MkBack.addEventListener("click", function () {
  if (document.querySelector(".music-player").style.visibility !== "hidden") {
    document.querySelector(".music-player").style.visibility = "hidden";
    document.querySelector(".music-player").style.opacity = "0";
    document.querySelector(".music-player").style.bottom = "-500px";
  } else {
    document.querySelector(".music-player").style.visibility = "hidden";
    document.querySelector(".music-player").style.opacity = "0";
    document.querySelector(".music-player").style.bottom = "-500px";
  }
});

var MkMusix = document.querySelector(".MKIcHeader");
var MkNavBar = document.querySelector(".MkNavBar");
var MkxGanzCls = document.querySelector(".MkxGanzCls");

MkMusix.addEventListener("click", function () {
  if (document.querySelector(".music-player").style.visibility !== "visible") {
    document.querySelector(".music-player").style.visibility = "visible";
    document.querySelector(".music-player").style.marginTop = "10px";
    document.querySelector(".music-player").style.top = "-800px";
    document.querySelector(".music-player").style.opacity = "1";
    document.querySelector(".MkNavBar").style.top = "-100px";
    document.querySelector(".MkNavBar").style.visibility = "hidden";
    document.querySelector(".MkNavBar").style.opacity = "0";
  } else {
    document.querySelector(".music-player").style.visibility = "visible";
    document.querySelector(".music-player").style.marginTop = "-10px";
    document.querySelector(".music-player").style.opacity = "1";
  }
});

var sarki = document.getElementById("sarki");
var oynat = document.getElementById("oynat");
var ses = document.getElementById("ses");

oynat.onclick = function () {
  if (sarki.paused) {
    sarki.play();
    document.querySelector(".bi-pause-fill").style.display = "inline";
    document.querySelector(".bi-play-fill").style.display = "none";
    document.querySelector(".music-poster").style.transform = "scale(1)";
    document.querySelector(".bi-soundwave").style.display = "block";
  } else {
    sarki.pause();
    document.querySelector(".bi-pause-fill").style.display = "none";
    document.querySelector(".bi-play-fill").style.display = "inline";
    document.querySelector(".bi-soundwave").style.display = "none";
  }
};

sarki.onvolumechange = function () {
  ses.value = sarki.volume * 100;
};
