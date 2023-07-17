document.body.addEventListener("click", (e) => {
  const element = document.createElement("span");
  element.className = "mk-cursor";
  element.style.left = e.clientX - 10 + "px";
  element.style.top = e.clientY - 10 + "px";

  document.body.append(element);
  setTimeout(() => {
    element.remove();
  }, 5000);
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

/// Function Km | Ems - Links ///

function KmEmsA() {
  window.location.replace("https://sfile.mobi/ak4R0snkoom");
}
function KmEmsB() {
  window.location.replace("https://sfile.mobi/auvof2K1lm3");
}
function KmEmsC() {
  window.location.replace("https://sfile.mobi/84sZ8oGUUMk");
}

/// Function About - Links ///

function YgK() {
  window.location.replace("https://instagram.com/yhoris_grvino");
}
function MnK() {
  window.location.replace("https://ems-links.netlify.app/mk-netlinks/");
}
function TyN() {
  window.location.replace("https://instagram.com/thyan_story");
}
function JnG() {
  window.location.replace("https://instagram.com/arjuna_gns");
}
function AgS() {
  window.location.replace("https://instagram.com/guss.fx01");
}
function AnD() {
  window.location.replace("https://instagram.com/andreasoktrap");
}

/// Function Entertaiment - Links ///

function MkEntx() {
  window.location.replace("https://www4.javhdporn.net/");
}
function MkEntxx() {
  window.location.replace("https://xnxx.com/");
}
function MkEntxxx() {
  window.location.replace("https://pornhub.com/");
}
function MkEntxxxx() {
  window.location.replace("https://ukdevilz.com/");
}

/// Function Contact - Links ///

function DscX() {
  window.location.replace("https://discord.gg/MarchellKevandra");
}
function IntX() {
  window.location.replace("https://instagram.com/chellgnzxz_");
}
function FbX() {
  window.location.replace("https://facebook.com/marchel.ganz");
}
function TtX() {
  window.location.replace("https://tiktok.com/mkxchl");
}
function TlX() {
  window.location.replace("https://t.me/Marchell_Junior");
}
