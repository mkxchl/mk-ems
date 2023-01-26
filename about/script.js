/// Button Card Body Active Function ///

const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#home" ? card.classList.add("is-active") : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

/// Button Active Tooltips Function ///

function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

domReady(() => {
  document
    .getElementsByClassName("read")
    .item(0)
    .addEventListener("click", function () {
      document.getElementsByClassName("modal").item(0).classList.add("is-visible");
    });
  document
    .getElementsByClassName("modal")
    .item(0)
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("is-visible")) {
        e.target.classList.remove("is-visible");
      }
    });
});
function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

domReady(() => {
  document
    .getElementsByClassName("mk-game")
    .item(0)
    .addEventListener("click", function () {
      document.getElementsByClassName("game").item(0).classList.add("is-visible");
    });
  document
    .getElementsByClassName("game")
    .item(0)
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("is-visible")) {
        e.target.classList.remove("is-visible");
      }
    });
});

function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

function domReady(fn) {
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

domReady(() => {
  document
    .getElementsByClassName("links")
    .item(0)
    .addEventListener("click", function () {
      document.getElementsByClassName("link").item(0).classList.add("is-visible");
    });
  document
    .getElementsByClassName("link")
    .item(0)
    .addEventListener("click", function (e) {
      if (e.target.classList.contains("is-visible")) {
        e.target.classList.remove("is-visible");
      }
    });
});

/// Dark Mode Function ///

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("open");
});

function mkAlert() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Sedang dalam perbaikan",
    showConfirmButton: false,
    position: "center",
    timer: 5000,
  });
}
