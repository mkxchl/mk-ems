const _0x3d031d = _0x1807;
(function (_0x5ed72c, _0x36f970) {
  const _0x41d4a4 = _0x1807,
    _0x2a90fb = _0x5ed72c();
  while (!![]) {
    try {
      const _0x3389d1 =
        (parseInt(_0x41d4a4(0x83)) / 0x1) * (-parseInt(_0x41d4a4(0xbf)) / 0x2) +
        (parseInt(_0x41d4a4(0xaa)) / 0x3) * (parseInt(_0x41d4a4(0xbe)) / 0x4) +
        -parseInt(_0x41d4a4(0xad)) / 0x5 +
        -parseInt(_0x41d4a4(0xb6)) / 0x6 +
        (-parseInt(_0x41d4a4(0xb9)) / 0x7) * (parseInt(_0x41d4a4(0x99)) / 0x8) +
        -parseInt(_0x41d4a4(0x92)) / 0x9 +
        parseInt(_0x41d4a4(0xb7)) / 0xa;
      if (_0x3389d1 === _0x36f970) break;
      else _0x2a90fb["push"](_0x2a90fb["shift"]());
    } catch (_0xf8bf35) {
      _0x2a90fb["push"](_0x2a90fb["shift"]());
    }
  }
})(_0x3575, 0x40856);
function _0x1807(_0x36e4c4, _0x475a27) {
  const _0x357557 = _0x3575();
  return (
    (_0x1807 = function (_0x180768, _0x53e052) {
      _0x180768 = _0x180768 - 0x7b;
      let _0x3ddd25 = _0x357557[_0x180768];
      return _0x3ddd25;
    }),
    _0x1807(_0x36e4c4, _0x475a27)
  );
}
const showModalBtn = document[_0x3d031d(0xb8)](_0x3d031d(0x8e)),
  bottomSheet = document["querySelector"](_0x3d031d(0x90)),
  sheetOverlay = document[_0x3d031d(0xb8)](_0x3d031d(0xb2)),
  sheetContent = document[_0x3d031d(0xb8)](_0x3d031d(0x9f)),
  dragIcon = document["querySelector"](_0x3d031d(0xa0)),
  MkLeftSheet = document[_0x3d031d(0xb8)](_0x3d031d(0xa5)),
  MkListHeaderBottom = document[_0x3d031d(0xb8)](_0x3d031d(0x84)),
  MkClose = document[_0x3d031d(0xb8)](_0x3d031d(0xb5)),
  MkBoxAccount = document[_0x3d031d(0xb8)](_0x3d031d(0xc0)),
  MkAccountListContent = document[_0x3d031d(0xb8)](_0x3d031d(0x85)),
  MkAccountList = document[_0x3d031d(0xb8)](_0x3d031d(0x8d)),
  MkSpotifyContentxx = document[_0x3d031d(0xb8)](".MkSpotifyContentxx"),
  MkSpotifyListxx = document[_0x3d031d(0xb8)](_0x3d031d(0x8c)),
  MkLnkGcrContentxx = document[_0x3d031d(0xb8)](".MkLnkGcrContentxx"),
  MKTeamSupportContentxx = document[_0x3d031d(0xb8)](_0x3d031d(0xa6)),
  MkPaused = document["querySelector"](_0x3d031d(0xb0)),
  MkContactContentxx = document["querySelector"](".MkContactContentxx"),
  MkAlertDialogBoxLnkGcr = document[_0x3d031d(0xb8)](_0x3d031d(0x7c)),
  NamePlayList = document[_0x3d031d(0x80)](_0x3d031d(0x7d)),
  MKAudio = document[_0x3d031d(0x80)](_0x3d031d(0x91)),
  showBottomSheet = () => {
    const _0x511a1e = _0x3d031d;
    bottomSheet[_0x511a1e(0x82)]["add"](_0x511a1e(0x7f)), (document["body"][_0x511a1e(0xa7)][_0x511a1e(0xa1)] = "hidden"), updateSheetHeight(0x0);
  },
  updateSheetHeight = (_0x4e0978) => {
    const _0x5831df = _0x3d031d;
    (sheetContent[_0x5831df(0xa7)][_0x5831df(0x87)] = _0x4e0978 + "vh"), bottomSheet[_0x5831df(0x82)][_0x5831df(0x98)](_0x5831df(0xa8), _0x4e0978 === 0x32);
  },
  hideBottomSheet = () => {
    const _0x4119a5 = _0x3d031d;
    bottomSheet[_0x4119a5(0x82)][_0x4119a5(0x9c)](_0x4119a5(0x7f)), (NamePlayList[_0x4119a5(0x93)] = "");
  };
showModalBtn[_0x3d031d(0xbd)](_0x3d031d(0x86), showBottomSheet);
function MkProfileMenu() {
  const _0x26298a = _0x3d031d;
  bottomSheet["classList"][_0x26298a(0x97)](_0x26298a(0x7f)),
    (MkListHeaderBottom[_0x26298a(0xa7)][_0x26298a(0x8f)] = _0x26298a(0xac)),
    (MkClose[_0x26298a(0xa7)][_0x26298a(0x8f)] = _0x26298a(0xac)),
    (MkClose["style"][_0x26298a(0x9a)] = "#fff"),
    (NamePlayList[_0x26298a(0xa7)]["color"] = _0x26298a(0xa2)),
    (NamePlayList[_0x26298a(0x93)] = _0x26298a(0xa3)),
    (MkAccountListContent[_0x26298a(0xa7)]["opacity"] = "1"),
    (MkAccountListContent["style"][_0x26298a(0xab)] = _0x26298a(0x9b)),
    (MkSpotifyContentxx["style"][_0x26298a(0xaf)] = "0"),
    (MkSpotifyContentxx[_0x26298a(0xa7)][_0x26298a(0xab)] = _0x26298a(0x89)),
    (MkLnkGcrContentxx[_0x26298a(0xa7)][_0x26298a(0xaf)] = "0"),
    (MkLnkGcrContentxx["style"][_0x26298a(0xab)] = _0x26298a(0x89)),
    (MKTeamSupportContentxx[_0x26298a(0xa7)][_0x26298a(0xab)] = _0x26298a(0x89)),
    (MKTeamSupportContentxx[_0x26298a(0xa7)]["opacity"] = "0"),
    (MkBoxAccount[_0x26298a(0xa7)]["opacity"] = "0"),
    (MkContactContentxx[_0x26298a(0xa7)][_0x26298a(0xaf)] = "0"),
    (MkContactContentxx[_0x26298a(0xa7)][_0x26298a(0xab)] = "none");
}
function _0x3575() {
  const _0x3475cd = [
    "NamePlayList",
    "location",
    "show",
    "getElementById",
    "Film",
    "classList",
    "2hJitVR",
    ".MkListHeaderBottom",
    ".MkAccountListContent",
    "click",
    "height",
    "showLoading",
    "none",
    "I\x20was\x20closed\x20by\x20the\x20timer",
    "#2d5cfe",
    ".MkSpotifyListxx",
    ".MkAccountList",
    ".show-modal",
    "background",
    ".bottom-sheet",
    "MKAudio",
    "965187FuwHWK",
    "innerHTML",
    "timer",
    "replace",
    "rgb(255,\x200,\x20170)",
    "add",
    "toggle",
    "27736dNbQxl",
    "color",
    "inline",
    "remove",
    "Team\x20Support",
    "Opened\x20Spotify",
    ".content",
    ".drag-icon",
    "overflowY",
    "#fff",
    "Account\x20&\x20Proflle",
    "Contact\x20Me",
    ".MkLeftSheet",
    ".MKTeamSupportContentxx",
    "style",
    "fullscreen",
    "dismiss",
    "201SAQxXW",
    "display",
    "#05bfdb",
    "1615280XBIgxZ",
    "getTimerLeft",
    "opacity",
    ".MkPaused",
    "then",
    ".sheet-overlay",
    "log",
    "https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=F6zRz0mdRJG-EXqyDmE-Bw",
    ".MkClose",
    "1514508qmhzlk",
    "12147730iamZHx",
    "querySelector",
    "511deSZrm",
    "textContent",
    "#000",
    "DismissReason",
    "addEventListener",
    "22036JKghJA",
    "383790zdkpIZ",
    ".MkBoxAccount",
    "#1db954",
    ".MkAlertDialogBoxLnkGcr",
  ];
  _0x3575 = function () {
    return _0x3475cd;
  };
  return _0x3575();
}
function MkClosePage() {
  const _0x26fe20 = _0x3d031d;
  bottomSheet[_0x26fe20(0x82)][_0x26fe20(0x9c)]("show"), (MkBoxAccount[_0x26fe20(0xa7)][_0x26fe20(0xaf)] = "1");
}
function MKCloseAlertDialog() {
  const _0x527352 = _0x3d031d;
  (MkAlertDialogBoxLnkGcr[_0x527352(0xa7)][_0x527352(0xaf)] = "0"), (MkAlertDialogBoxLnkGcr["style"]["display"] = "none");
}
function MkOpenSpotifyPlaylist() {
  const _0x1ccb9f = _0x3d031d;
  bottomSheet[_0x1ccb9f(0x82)]["add"](_0x1ccb9f(0x7f)),
    (MkListHeaderBottom[_0x1ccb9f(0xa7)][_0x1ccb9f(0x8f)] = _0x1ccb9f(0x7b)),
    (MkClose[_0x1ccb9f(0xa7)][_0x1ccb9f(0x8f)] = _0x1ccb9f(0x7b)),
    (MkClose[_0x1ccb9f(0xa7)][_0x1ccb9f(0x9a)] = _0x1ccb9f(0xa2)),
    (NamePlayList["style"][_0x1ccb9f(0x9a)] = _0x1ccb9f(0xa2)),
    (NamePlayList[_0x1ccb9f(0x93)] = "Spotify\x20Playlist"),
    (MkAccountListContent[_0x1ccb9f(0xa7)]["opacity"] = "0"),
    (MkAccountListContent["style"]["display"] = _0x1ccb9f(0x89)),
    (MkLnkGcrContentxx["style"][_0x1ccb9f(0xaf)] = "0"),
    (MkLnkGcrContentxx["style"][_0x1ccb9f(0xab)] = _0x1ccb9f(0x89)),
    (MkSpotifyContentxx[_0x1ccb9f(0xa7)][_0x1ccb9f(0xaf)] = "1"),
    (MkSpotifyContentxx["style"][_0x1ccb9f(0xab)] = _0x1ccb9f(0x9b)),
    (MKTeamSupportContentxx[_0x1ccb9f(0xa7)][_0x1ccb9f(0xab)] = "none"),
    (MKTeamSupportContentxx[_0x1ccb9f(0xa7)][_0x1ccb9f(0xaf)] = "0"),
    (MkBoxAccount["style"]["opacity"] = "0"),
    (MkContactContentxx[_0x1ccb9f(0xa7)][_0x1ccb9f(0xaf)] = "0"),
    (MkContactContentxx[_0x1ccb9f(0xa7)]["display"] = "none");
}
function MkOpenLnkGcr() {
  const _0x34458d = _0x3d031d;
  bottomSheet[_0x34458d(0x82)][_0x34458d(0x97)](_0x34458d(0x7f)),
    (MkListHeaderBottom[_0x34458d(0xa7)]["background"] = _0x34458d(0x8b)),
    (MkClose[_0x34458d(0xa7)][_0x34458d(0x8f)] = _0x34458d(0x8b)),
    (MkClose[_0x34458d(0xa7)][_0x34458d(0x9a)] = _0x34458d(0xa2)),
    (NamePlayList[_0x34458d(0xa7)][_0x34458d(0x9a)] = _0x34458d(0xa2)),
    (NamePlayList["innerHTML"] = _0x34458d(0x81)),
    (MkAccountListContent[_0x34458d(0xa7)]["opacity"] = "0"),
    (MkAccountListContent[_0x34458d(0xa7)][_0x34458d(0xab)] = _0x34458d(0x89)),
    (MkLnkGcrContentxx[_0x34458d(0xa7)][_0x34458d(0xaf)] = "1"),
    (MkLnkGcrContentxx[_0x34458d(0xa7)][_0x34458d(0xab)] = "inline"),
    (MkSpotifyContentxx["style"]["opacity"] = "0"),
    (MkSpotifyContentxx[_0x34458d(0xa7)][_0x34458d(0xab)] = "none"),
    (MKTeamSupportContentxx[_0x34458d(0xa7)][_0x34458d(0xab)] = _0x34458d(0x89)),
    (MKTeamSupportContentxx["style"]["opacity"] = "0"),
    (MkBoxAccount[_0x34458d(0xa7)]["opacity"] = "0"),
    (MkContactContentxx[_0x34458d(0xa7)][_0x34458d(0xaf)] = "0"),
    (MkContactContentxx[_0x34458d(0xa7)]["display"] = _0x34458d(0x89));
}
function MkOpenTeamSpt() {
  const _0x5f6f07 = _0x3d031d;
  bottomSheet[_0x5f6f07(0x82)][_0x5f6f07(0x97)]("show"),
    (MkListHeaderBottom[_0x5f6f07(0xa7)][_0x5f6f07(0x8f)] = _0x5f6f07(0x96)),
    (MkClose["style"][_0x5f6f07(0x8f)] = "rgb(255,\x200,\x20170)"),
    (MkClose[_0x5f6f07(0xa7)]["color"] = "#fff"),
    (NamePlayList["style"][_0x5f6f07(0x9a)] = "#fff"),
    (NamePlayList["innerHTML"] = _0x5f6f07(0x9d)),
    (MkAccountListContent["style"]["opacity"] = "0"),
    (MkAccountListContent[_0x5f6f07(0xa7)]["display"] = _0x5f6f07(0x89)),
    (MkLnkGcrContentxx[_0x5f6f07(0xa7)][_0x5f6f07(0xaf)] = "0"),
    (MkLnkGcrContentxx[_0x5f6f07(0xa7)][_0x5f6f07(0xab)] = _0x5f6f07(0x89)),
    (MkSpotifyContentxx[_0x5f6f07(0xa7)][_0x5f6f07(0xaf)] = "0"),
    (MkSpotifyContentxx["style"][_0x5f6f07(0xab)] = _0x5f6f07(0x89)),
    (MKTeamSupportContentxx[_0x5f6f07(0xa7)][_0x5f6f07(0xab)] = _0x5f6f07(0x9b)),
    (MKTeamSupportContentxx[_0x5f6f07(0xa7)][_0x5f6f07(0xaf)] = "1"),
    (MkBoxAccount["style"][_0x5f6f07(0xaf)] = "0"),
    (MkContactContentxx[_0x5f6f07(0xa7)]["opacity"] = "0"),
    (MkContactContentxx[_0x5f6f07(0xa7)][_0x5f6f07(0xab)] = _0x5f6f07(0x89));
}
function MkOpenContact() {
  const _0x4c7bc3 = _0x3d031d;
  bottomSheet["classList"]["add"](_0x4c7bc3(0x7f)),
    (MkListHeaderBottom["style"][_0x4c7bc3(0x8f)] = _0x4c7bc3(0xa2)),
    (MkClose[_0x4c7bc3(0xa7)][_0x4c7bc3(0x8f)] = _0x4c7bc3(0xa2)),
    (MkClose["style"][_0x4c7bc3(0x9a)] = _0x4c7bc3(0xbb)),
    (NamePlayList[_0x4c7bc3(0xa7)][_0x4c7bc3(0x9a)] = _0x4c7bc3(0xbb)),
    (NamePlayList[_0x4c7bc3(0x93)] = _0x4c7bc3(0xa4)),
    (MkAccountListContent[_0x4c7bc3(0xa7)]["opacity"] = "0"),
    (MkAccountListContent[_0x4c7bc3(0xa7)]["display"] = _0x4c7bc3(0x89)),
    (MkLnkGcrContentxx[_0x4c7bc3(0xa7)]["opacity"] = "0"),
    (MkLnkGcrContentxx[_0x4c7bc3(0xa7)][_0x4c7bc3(0xab)] = _0x4c7bc3(0x89)),
    (MkSpotifyContentxx[_0x4c7bc3(0xa7)][_0x4c7bc3(0xaf)] = "0"),
    (MkSpotifyContentxx["style"][_0x4c7bc3(0xab)] = _0x4c7bc3(0x89)),
    (MKTeamSupportContentxx[_0x4c7bc3(0xa7)]["display"] = _0x4c7bc3(0x89)),
    (MKTeamSupportContentxx[_0x4c7bc3(0xa7)]["opacity"] = "0"),
    (MkBoxAccount[_0x4c7bc3(0xa7)][_0x4c7bc3(0xaf)] = "0"),
    (MkContactContentxx[_0x4c7bc3(0xa7)][_0x4c7bc3(0xaf)] = "1"),
    (MkContactContentxx[_0x4c7bc3(0xa7)][_0x4c7bc3(0xab)] = _0x4c7bc3(0x9b));
}
function MkViewPageSpotify() {
  const _0x54ac54 = _0x3d031d;
  bottomSheet[_0x54ac54(0x82)][_0x54ac54(0x9c)](_0x54ac54(0x7f));
  let _0x3e94fa;
  Swal["fire"]({
    title: _0x54ac54(0x9e),
    timer: 0x1388,
    timerProgressBar: !![],
    position: "top-center",
    didOpen: () => {
      const _0x1db051 = _0x54ac54;
      Swal[_0x1db051(0x88)](),
        (_0x3e94fa = setInterval(() => {
          const _0x2efe00 = _0x1db051;
          b[_0x2efe00(0xba)] = Swal[_0x2efe00(0xae)]();
        }, 0x1f4));
    },
    willClose: () => {
      clearInterval(_0x3e94fa);
    },
  })[_0x54ac54(0xb1)]((_0x26b59f) => {
    const _0x582182 = _0x54ac54;
    _0x26b59f[_0x582182(0xa9)] === Swal[_0x582182(0xbc)][_0x582182(0x94)] && (console[_0x582182(0xb3)](_0x582182(0x8a)), window[_0x582182(0x7e)][_0x582182(0x95)](_0x582182(0xb4)));
  });
}
