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
  updateSheetHeight(65);
};

const updateSheetHeight = (height) => {
  sheetContent.style.height = `${height}vh`;
  bottomSheet.classList.toggle("fullscreen", height === 65);
};

const hideBottomSheet = () => {
  bottomSheet.classList.remove("show");
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
  const newHeight = startHeight + (delta / window.innerHeight) * 65;
  updateSheetHeight(newHeight);
};

const dragStop = () => {
  isDragging = false;
  bottomSheet.classList.remove("dragging");
  const sheetHeight = parseInt(sheetContent.style.height);
  sheetHeight < 30 ? hideBottomSheet() : sheetHeight > 30 ? updateSheetHeight(65) : updateSheetHeight(65);
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
    }
  });
  window.location.replace("https://t.me/Marchell_Junior");
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
    }
  });
  window.location.replace("https://www.google.com/search?q=Marchell+Kevandra");
}
