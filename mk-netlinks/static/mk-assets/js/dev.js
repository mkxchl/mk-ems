var currentDateElement = document.getElementById("current-date");

function updateDateTime() {
  var currentDateTime = new Date();

  var day = currentDateTime.getDate();
  var month = currentDateTime.getMonth() + 1; // Bulan dimulai dari 0, jadi tambahkan 1
  var year = currentDateTime.getFullYear();

  var hours = currentDateTime.getHours();
  var minutes = currentDateTime.getMinutes();
  var seconds = currentDateTime.getSeconds();

  var daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var dayOfWeek = currentDateTime.getDay();

  var formattedDateTime = daysOfWeek[dayOfWeek] + ", " + day + ":" + month + ":" + year + " " + hours + ":" + minutes + ":" + seconds;

  currentDateElement.textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);

var deviceElement = document.getElementById("device");
deviceElement.textContent = navigator.language;

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
