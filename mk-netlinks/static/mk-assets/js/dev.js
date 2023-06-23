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

// Panggil fungsi updateDateTime setiap detik
setInterval(updateDateTime, 1000);

// Mendapatkan informasi perangkat
var deviceElement = document.getElementById("device");
deviceElement.textContent = navigator.language;
