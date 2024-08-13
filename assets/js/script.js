const EmsAuthor = document.querySelector(".EmsAuthor");
const VanzMedia = document.querySelector(".VanzMedia");
const EmsChoose = document.querySelector(".EmsChoose");
const EmsKine = document.querySelector(".EmsKine");
const EmsInt = document.querySelector(".EmsInt");

function VzxLoad() {
  setTimeout(function () {
    EmsAuthor.classList.add("AuthorShow");
  }, 1122);
}
function OpenMenu() {
  VanzMedia.classList.add("VanzMediaShow");
}
function CloseMenu() {
  VanzMedia.classList.remove("VanzMediaShow");
}
function OpenDownload() {
  EmsChoose.classList.add("EmsChooseShow");
  VanzMedia.classList.remove("VanzMediaShow");
}
function CloseDownload() {
  EmsChoose.classList.remove("EmsChooseShow");
  VanzMedia.classList.add("VanzMediaShow");
}
function OpenKine() {
  EmsChoose.classList.remove("EmsChooseShow");
  EmsKine.classList.add("EmsKineShow");
}
function CloseKm() {
  EmsChoose.classList.add("EmsChooseShow");
  EmsKine.classList.remove("EmsKineShow");
}
function OpenInt() {
  EmsChoose.classList.remove("EmsChooseShow");
  EmsInt.classList.add("EmsIntShow");
}
function CloseInt() {
  EmsChoose.classList.add("EmsChooseShow");
  EmsInt.classList.remove("EmsIntShow");
}

function YgkInsta() {
  window.location.replace("https://instagram.com/yhoris_grvino");
}
function MkInsta() {
  window.location.replace("https://instagram.com/marchell_kevandra");
}
function ThInsta() {
  window.location.replace("https://instagram.com/thyan_story");
}
function JnInsta() {
  window.location.replace("https://instagram.com/arjuna_gns");
}
function AgsInsta() {
  window.location.replace("https://instagram.com/guss.fx01");
}

function EmsAppA() {
  window.location.replace("https://sfile.mobi/84sZ8oGUUMk");
}
function EmsAppB() {
  window.location.replace("https://sfile.mobi/auvof2K1lm3");
}
function EmsAppC() {
  window.location.replace("https://sfile.mobi/ak4R0snkoom");
}

function EmsIntAx() {
  window.location.replace("https://www.mediafire.com/file/6xqnrfc1qcppl14/VID-20201204-WA0437.mp4/file");
}
function EmsIntBx() {
  window.location.replace("https://www.mediafire.com/file/w0l4w1vgglcweev/VID-20201006-WA0441.mp4/file");
}
function EmsIntCx() {
  window.location.replace("https://www.mediafire.com/file/x6fxjvduthq2aq7/video+(3).mkv/file");
}
