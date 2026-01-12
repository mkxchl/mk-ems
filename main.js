const LoadJT = document.querySelector('.JTLoad')
const BodyJT = document.querySelector('body')
const JTMenu = document.querySelector('.JTMenu')
const JTHeader = document.querySelector('.JTMenuDetail')
const EmsMenu = document.querySelector('.EmsMusic')
const EMSHeader = document.querySelector('.EmsMusicMenuDetail')
const JTVideoMega = document.getElementById('JTVideoMega')
const JTVideoMegax = document.getElementById('JTVideoMegax')
const JTVideoDisstrack = document.getElementById('JTVideoDisstrack')
const playPauseButton = document.getElementById('playPauseButton')
const playPauseButtonDis = document.getElementById('playPauseButtonDis')
const playPauseButtonx = document.getElementById('playPauseButtonx')
const PlayMusics = document.getElementById('PlayMusics')
const audio = document.getElementById('Lth')
const Prmta = document.getElementById('Prmt')
const playLth = document.getElementById('playLth')
const playPrmta = document.getElementById('playPrmta')
const Zpanel = document.getElementById('Zpan')
const playZpan = document.getElementById('playZpan')
const Cmr = document.getElementById('Cmr')
const playCmr = document.getElementById('playCmr')
const progress = document.getElementById('progress')
const vxShow = document.querySelector('.volume-bars')
const VxLathx = document.querySelector('.XLath')
const VxPrmt = document.querySelector('.XPrmt')
const XZpanx = document.querySelector('.XZpanx')
const XCmrzx = document.querySelector('.XCmrzx')

var klik = new Audio('https://editor-miring-squad.netlify.app/am/mix/klik.mp3')
klik.loop = false
klik.autoplay = false

var EMSPermata = new Audio(
  'https://editor-miring-squad.netlify.app/mix/EditorMiringSquad.mp3'
)
EMSPermata.loop = false
EMSPermata.autoplay = false

const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tc => {
      tc.classList.remove('JTTabActive')
      klik.play()
      JTVideoMega.pause()
      playPauseButton.classList.remove('bx-pause')
      playPauseButton.classList.add('bx-play')
    })
    target.classList.add('JTTabActive')

    tabs.forEach(t => {
      t.classList.remove('JTBtnActive')
      JTVideoMega.pause()
      playPauseButton.classList.remove('bx-pause')
      playPauseButton.classList.add('bx-play')
      klik.play()
    })
    tab.classList.add('JTBtnActive')
    klik.play()
  })
})


let isPlaying = false
function VxBody () {
  setTimeout(function () {
    LoadJT.classList.add('LoadHide')
  }, 3000)
  setTimeout(function () {
    BodyJT.classList.add('OverflowHide')
  }, 3000)
}
function OpenPageMusic () {
  EmsMenu.classList.add('EmsMenuShow')
  klik.play()
}
function OpenContact () {
  JTMenu.classList.add('JTMenuShow')
  klik.play()
  JTVideoMega.pause()
  playPauseButton.classList.remove('bx-pause')
  playPauseButton.classList.add('bx-play')
}
function HeadBtn () {
  JTHeader.classList.toggle('UpHeight')
}
function BtnJTClosed () {
  JTMenu.classList.remove('JTMenuShow')
  klik.play()
}
function OpenIg () {
  window.location.replace('https://www.instagram.com/chellgnzxz/')
}
function BtnEmsClosed () {
  EmsMenu.classList.remove('EmsMenuShow')
  Zpanel.pause()
  audio.pause()
  Prmta.pause()
  klik.play()
  playZpan.classList.remove('bx-pause')
  playZpan.classList.add('bx-play') 
  playLth.classList.remove('bx-pause')
  playLth.classList.add('bx-play')
  playPrmta.classList.remove('bx-pause')
  playPrmta.classList.add('bx-play')
  playCmr.classList.remove('bx-pause')
  playCmr.classList.add('bx-play')
  VxLathx.classList.remove('XLathShow')
  VxPrmt.classList.remove('XPrmtShow')
  XZpanx.classList.remove('XZpanxShow')
  XCmrzx.classList.remove('XCmrzxShow')
}
function OpenIg () {
  window.location.replace('https://www.instagram.com/jabodetabek_team/')
}
function OpenGithub () {
  window.location.replace('https://github.com/mkxchl/')
}
function PlayMega () {
  if (isPlaying) {
    klik.play()
    JTVideoMega.pause()
    playPauseButton.classList.remove('bx-pause')
    playPauseButton.classList.add('bx-play')
  } else {
    JTVideoMega.play()
    JTVideoDisstrack.pause()
    JTVideoMegax.pause()
    EMSPermata.pause()
    playPauseButton.classList.remove('bx-play')
    playPauseButton.classList.add('bx-pause')
    playPauseButtonDis.classList.remove('bx-pause')
    playPauseButtonDis.classList.add('bx-play')
    playPauseButtonx.classList.remove('bx-pause')
    playPauseButtonx.classList.add('bx-play')
  }
  isPlaying = !isPlaying
}
JTVideoMega.onended = function () {
  playPauseButton.classList.remove('bx-pause')
  playPauseButton.classList.add('bx-play')
}
function PlayDistracks () {
  if (isPlaying) {
    klik.play()
    JTVideoDisstrack.pause()
    playPauseButtonDis.classList.remove('bx-pause')
    playPauseButtonDis.classList.add('bx-play')
  } else {
    JTVideoDisstrack.play()
    JTVideoMega.pause()
    JTVideoMegax.pause()
    EMSPermata.pause()
    playPauseButtonDis.classList.remove('bx-play')
    playPauseButtonDis.classList.add('bx-pause')
    playPauseButton.classList.remove('bx-pause')
    playPauseButton.classList.add('bx-play')
    playPauseButtonx.classList.remove('bx-pause')
    playPauseButtonx.classList.add('bx-play')
  }
  isPlaying = !isPlaying
}
JTVideoDisstrack.onended = function () {
  playPauseButtonDis.classList.remove('bx-pause')
  playPauseButtonDis.classList.add('bx-play')
}
function PlayMegax () {
  if (isPlaying) {
    klik.play()
    JTVideoMegax.pause()
    playPauseButtonx.classList.remove('bx-pause')
    playPauseButtonx.classList.add('bx-play')
  } else {
    JTVideoMegax.play()
    JTVideoDisstrack.pause()
    JTVideoMega.pause()
    EMSPermata.pause()
    playPauseButtonDis.classList.add('bx-play')
    playPauseButtonDis.classList.remove('bx-pause')
    playPauseButton.classList.remove('bx-pause')
    playPauseButton.classList.add('bx-play')
    playPauseButtonx.classList.add('bx-pause')
    playPauseButtonx.classList.remove('bx-play')
  }
  isPlaying = !isPlaying
}
JTVideoMegax.onended = function () {
  playPauseButtonx.classList.remove('bx-pause')
  playPauseButtonx.classList.add('bx-play')
}

function PlayMusic () {
  if (isPlaying) {
    klik.play()
    EMSPermata.pause()
    PlayMusics.classList.remove('bx-pause')
    PlayMusics.classList.add('bx-play')
  } else {
    EMSPermata.play()
    EMSPermata.volume = 0.5
    PlayMusics.classList.add('bx-pause')
    PlayMusics.classList.remove('bx-play')
  }
  isPlaying = !isPlaying
}
EMSPermata.onended = function () {
  PlayMusics.classList.remove('bx-pause')
  PlayMusics.classList.add('bx-play')
}
EMSPermata.onvolumechange = function () {
  EMSPermata.volume = 0.5
}
playCmr.addEventListener('click', () => {
  if (Cmr.paused) {
    klik.play()
    Cmr.play()
    playCmr.classList.remove('bx-play')
    playCmr.classList.add('bx-pause')
    Zpanel.pause()
    audio.pause()
    Prmta.pause()
    playZpan.classList.remove('bx-pause')
    playZpan.classList.add('bx-play')
    playLth.classList.remove('bx-pause')
    playLth.classList.add('bx-play')
    vxShow.classList.add('vShow')
    XCmrzx.classList.add('XCmrzxShow')
    VxLathx.classList.remove('XLathShow')
    VxPrmt.classList.remove('XPrmtShow')
    XZpanx.classList.remove('XZpanxShow')
  } else {
    Cmr.pause()
    playCmr.classList.remove('bx-pause')
    playCmr.classList.add('bx-play')
    vxShow.classList.remove('vShow')
  }
})

playZpan.addEventListener('click', () => {
  if (Zpanel.paused) {
    klik.play()
    Zpanel.play()
    playZpan.classList.remove('bx-play')
    playZpan.classList.add('bx-pause')
    Cmr.pause()
    audio.pause()
    Prmta.pause()
    playCmr.classList.remove('bx-pause')
    playCmr.classList.add('bx-play')
    playLth.classList.remove('bx-pause')
    playLth.classList.add('bx-play')
    playPrmta.classList.remove('bx-pause')
    playPrmta.classList.add('bx-play')
    vxShow.classList.add('vShow')
    XZpanx.classList.add('XZpanxShow')
    VxLathx.classList.remove('XLathShow')
    VxPrmt.classList.remove('XPrmtShow')
    XCmrzx.classList.remove('XCmrzxShow')
  } else {
    Zpanel.pause()
    XZpanx.classList.remove('XZpanxShow')
    playZpan.classList.remove('bx-pause')
    playZpan.classList.add('bx-play')
    vxShow.classList.remove('vShow')
  }
})

playLth.addEventListener('click', () => {
  if (audio.paused) {
    klik.play()
    audio.play()
    playLth.classList.remove('bx-play')
    playLth.classList.add('bx-pause')
    Zpanel.pause()
    Prmta.pause()
    Cmr.pause()
    playCmr.classList.remove('bx-pause')
    playCmr.classList.add('bx-play')
    playZpan.classList.remove('bx-pause')
    playZpan.classList.add('bx-play')
    playPrmta.classList.remove('bx-pause')
    playPrmta.classList.add('bx-play')
    vxShow.classList.add('vShow')
    VxLathx.classList.add('XLathShow')
    VxPrmt.classList.remove('XPrmtShow')
    XZpanx.classList.remove('XZpanxShow')
    XCmrzx.classList.remove('XCmrzxShow')
  } else {
    audio.pause()
    playLth.classList.remove('bx-pause')
    playLth.classList.add('bx-play')
    vxShow.classList.remove('vShow')
    VxLathx.classList.remove('XLathShow')
  }
})

playPrmta.addEventListener('click', () => {
  if (Prmta.paused) {
    klik.play()
    Prmta.play()
    playPrmta.classList.remove('bx-play')
    playPrmta.classList.add('bx-pause')
    Zpanel.pause()
    audio.pause()
    Cmr.pause()
    playCmr.classList.remove('bx-pause')
    playCmr.classList.add('bx-play')
    playZpan.classList.remove('bx-pause')
    playZpan.classList.add('bx-play')
    playLth.classList.remove('bx-pause')
    playLth.classList.add('bx-play')
    vxShow.classList.add('vShow')
    VxPrmt.classList.add('XPrmtShow')
    VxLathx.classList.remove('XLathShow')
    XZpanx.classList.remove('XZpanxShow')
    XCmrzx.classList.remove('XCmrzxShow')
  } else {
    Prmta.pause()
    playPrmta.classList.remove('bx-pause')
    playPrmta.classList.add('bx-play')
    vxShow.classList.remove('vShow')
    VxPrmt.classList.remove('XPrmtShow')
  }
})

audio.addEventListener('ended', () => {
  playLth.classList.remove('bx-pause')
  playLth.classList.add('bx-play')
  vxShow.classList.remove('vShow')
})
Prmta.addEventListener('ended', () => {
  playPrmta.classList.remove('bx-pause')
  playPrmta.classList.add('bx-play')
  vxShow.classList.remove('vShow')
})
Cmr.addEventListener('ended', () => {
  playCmr.classList.remove('bx-pause')
  playCmr.classList.add('bx-play')
  vxShow.classList.remove('vShow')
})
Zpanel.addEventListener('ended', () => {
  playZpan.classList.remove('bx-pause')
  playZpan.classList.add('bx-play')
  vxShow.classList.remove('vShow')
})

function EmsAppA () {
  window.location.replace('https://sfile.mobi/84sZ8oGUUMk')
}
function EmsAppB () {
  window.location.replace('https://sfile.mobi/auvof2K1lm3')
}
function EmsAppC () {
  window.location.replace('https://sfile.mobi/ak4R0snkoom')
}

function EmsIntAx () {
  window.location.replace(
    'https://www.mediafire.com/file/6xqnrfc1qcppl14/VID-20201204-WA0437.mp4/file'
  )
}
function EmsIntBx () {
  window.location.replace(
    'https://www.mediafire.com/file/w0l4w1vgglcweev/VID-20201006-WA0441.mp4/file'
  )
}
function EmsIntCx () {
  window.location.replace(
    'https://www.mediafire.com/file/x6fxjvduthq2aq7/video+(3).mkv/file'
  )
}
function OpenYt() {
  window.location.replace('https://www.youtube.com/@YhorisGervino')
}
function OpenSCld() {
  window.location.replace('https://soundcloud.com/yhorisgervino')
}
