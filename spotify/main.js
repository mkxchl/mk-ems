const _0x331bfe = _0x854d;
(function (_0x5210b0, _0x4bbd77) {
  const _0x2861d7 = _0x854d,
    _0x3ff05e = _0x5210b0();
  while (!![]) {
    try {
      const _0x496e1f =
        (parseInt(_0x2861d7(0x1e6)) / 0x1) * (parseInt(_0x2861d7(0x1d0)) / 0x2) +
        -parseInt(_0x2861d7(0x1d9)) / 0x3 +
        (parseInt(_0x2861d7(0x1dc)) / 0x4) * (-parseInt(_0x2861d7(0x1b3)) / 0x5) +
        (-parseInt(_0x2861d7(0x1c8)) / 0x6) * (-parseInt(_0x2861d7(0x1b2)) / 0x7) +
        (parseInt(_0x2861d7(0x1ce)) / 0x8) * (parseInt(_0x2861d7(0x1d7)) / 0x9) +
        parseInt(_0x2861d7(0x1bf)) / 0xa +
        (parseInt(_0x2861d7(0x1da)) / 0xb) * (-parseInt(_0x2861d7(0x1e5)) / 0xc);
      if (_0x496e1f === _0x4bbd77) break;
      else _0x3ff05e["push"](_0x3ff05e["shift"]());
    } catch (_0x499825) {
      _0x3ff05e["push"](_0x3ff05e["shift"]());
    }
  }
})(_0x4363, 0xb06ca);
const showModalBtn = document[_0x331bfe(0x1b7)](".show-modal"),
  bottomSheet = document[_0x331bfe(0x1b7)](".bottom-sheet"),
  sheetOverlay = document[_0x331bfe(0x1b7)](".sheet-overlay"),
  sheetContent = document[_0x331bfe(0x1b7)](_0x331bfe(0x1b9)),
  dragIcon = document[_0x331bfe(0x1b7)](_0x331bfe(0x1c7)),
  MkLeftSheet = document[_0x331bfe(0x1b7)](_0x331bfe(0x1b1)),
  MkListHeaderBottom = document[_0x331bfe(0x1b7)](".MkListHeaderBottom"),
  MkClose = document[_0x331bfe(0x1b7)](_0x331bfe(0x1c1)),
  MkBoxAccount = document[_0x331bfe(0x1b7)](_0x331bfe(0x1d6)),
  MkAccountListContent = document["querySelector"](".MkAccountListContent"),
  MkAccountList = document["querySelector"](".MkAccountList"),
  MkSpotifyContentxx = document["querySelector"](".MkSpotifyContentxx"),
  MkSpotifyListxx = document[_0x331bfe(0x1b7)](_0x331bfe(0x1dd)),
  MkLnkGcrContentxx = document[_0x331bfe(0x1b7)](_0x331bfe(0x1b5)),
  MKTeamSupportContentxx = document[_0x331bfe(0x1b7)](_0x331bfe(0x1bc)),
  MkPaused = document[_0x331bfe(0x1b7)](_0x331bfe(0x1e2)),
  MkContactContentxx = document[_0x331bfe(0x1b7)](_0x331bfe(0x1db)),
  NamePlayList = document[_0x331bfe(0x1bd)]("NamePlayList"),
  MKAudio = document["getElementById"](_0x331bfe(0x1cb)),
  showBottomSheet = () => {
    const _0x51eb13 = _0x331bfe;
    bottomSheet["classList"]["add"](_0x51eb13(0x1c6)), (document[_0x51eb13(0x1be)][_0x51eb13(0x1e3)]["overflowY"] = _0x51eb13(0x1c4)), updateSheetHeight(0x0);
  },
  updateSheetHeight = (_0xcbfd8c) => {
    const _0xcd4c75 = _0x331bfe;
    (sheetContent[_0xcd4c75(0x1e3)][_0xcd4c75(0x1d5)] = _0xcbfd8c + "vh"), bottomSheet[_0xcd4c75(0x1c9)][_0xcd4c75(0x1cd)](_0xcd4c75(0x1c5), _0xcbfd8c === 0x32);
  },
  hideBottomSheet = () => {
    const _0x58ed48 = _0x331bfe;
    bottomSheet["classList"]["remove"](_0x58ed48(0x1c6)), (NamePlayList["innerHTML"] = "");
  };
showModalBtn["addEventListener"]("click", showBottomSheet);
function MkProfileMenu() {
  const _0x50254e = _0x331bfe;
  bottomSheet[_0x50254e(0x1c9)]["add"]("show"),
    (NamePlayList["innerHTML"] = "Account\x20&\x20Proflle"),
    (MkAccountListContent[_0x50254e(0x1e3)][_0x50254e(0x1de)] = "1"),
    (MkAccountListContent[_0x50254e(0x1e3)]["display"] = _0x50254e(0x1cc)),
    (MkSpotifyContentxx[_0x50254e(0x1e3)][_0x50254e(0x1de)] = "0"),
    (MkSpotifyContentxx[_0x50254e(0x1e3)]["display"] = _0x50254e(0x1b8)),
    (MkLnkGcrContentxx[_0x50254e(0x1e3)][_0x50254e(0x1de)] = "0"),
    (MkLnkGcrContentxx[_0x50254e(0x1e3)][_0x50254e(0x1d8)] = _0x50254e(0x1b8)),
    (MKTeamSupportContentxx[_0x50254e(0x1e3)][_0x50254e(0x1d8)] = "none"),
    (MKTeamSupportContentxx[_0x50254e(0x1e3)][_0x50254e(0x1de)] = "0"),
    (MkBoxAccount[_0x50254e(0x1e3)][_0x50254e(0x1de)] = "0"),
    (MkContactContentxx[_0x50254e(0x1e3)][_0x50254e(0x1de)] = "0"),
    (MkContactContentxx[_0x50254e(0x1e3)][_0x50254e(0x1d8)] = "none");
}
function MkClosePage() {
  const _0x370b08 = _0x331bfe;
  bottomSheet["classList"]["remove"](_0x370b08(0x1c6)), (MkBoxAccount[_0x370b08(0x1e3)][_0x370b08(0x1de)] = "1");
}
function MkOpenSpotifyPlaylist() {
  const _0x304b9b = _0x331bfe;
  bottomSheet["classList"]["add"]("show"),
    (NamePlayList[_0x304b9b(0x1c3)] = _0x304b9b(0x1d3)),
    (MkAccountListContent[_0x304b9b(0x1e3)][_0x304b9b(0x1de)] = "0"),
    (MkAccountListContent["style"][_0x304b9b(0x1d8)] = "none"),
    (MkLnkGcrContentxx[_0x304b9b(0x1e3)]["opacity"] = "0"),
    (MkLnkGcrContentxx[_0x304b9b(0x1e3)][_0x304b9b(0x1d8)] = _0x304b9b(0x1b8)),
    (MkSpotifyContentxx[_0x304b9b(0x1e3)][_0x304b9b(0x1de)] = "1"),
    (MkSpotifyContentxx["style"][_0x304b9b(0x1d8)] = _0x304b9b(0x1cc)),
    (MKTeamSupportContentxx[_0x304b9b(0x1e3)]["display"] = _0x304b9b(0x1b8)),
    (MKTeamSupportContentxx[_0x304b9b(0x1e3)][_0x304b9b(0x1de)] = "0"),
    (MkBoxAccount["style"][_0x304b9b(0x1de)] = "0"),
    (MkContactContentxx["style"][_0x304b9b(0x1de)] = "0"),
    (MkContactContentxx[_0x304b9b(0x1e3)][_0x304b9b(0x1d8)] = "none");
}
function _0x4363() {
  const _0x3f2e4e = [
    "display",
    "2707329pLNmjR",
    "11ibYwQw",
    ".MkContactContentxx",
    "4mMlBwj",
    ".MkSpotifyListxx",
    "opacity",
    "Opened\x20Spotify",
    "timer",
    "https://open.spotify.com/playlist/1ZaVZkzQxjsSPUSnLDrL27?si=F6zRz0mdRJG-EXqyDmE-Bw",
    ".MkPaused",
    "style",
    "getTimerLeft",
    "21930756PoKWLf",
    "5ALQETU",
    "I\x20was\x20closed\x20by\x20the\x20timer",
    ".MkLeftSheet",
    "2765MnENsN",
    "719785zYFRys",
    "replace",
    ".MkLnkGcrContentxx",
    "Contact\x20Me",
    "querySelector",
    "none",
    ".content",
    "Link\x20Gacor",
    "showLoading",
    ".MKTeamSupportContentxx",
    "getElementById",
    "body",
    "14044330LFKNjM",
    "then",
    ".MkClose",
    "dismiss",
    "innerHTML",
    "hidden",
    "fullscreen",
    "show",
    ".drag-icon",
    "12438BZzwWE",
    "classList",
    "textContent",
    "MKAudio",
    "inline",
    "toggle",
    "151928vezWxU",
    "log",
    "291054NcZfRS",
    "add",
    "remove",
    "Spotify\x20Playlist",
    "top-center",
    "height",
    ".MkBoxAccount",
    "306MKLHAy",
  ];
  _0x4363 = function () {
    return _0x3f2e4e;
  };
  return _0x4363();
}
function MkOpenLnkGcr() {
  const _0x1468e7 = _0x331bfe;
  bottomSheet[_0x1468e7(0x1c9)]["add"](_0x1468e7(0x1c6)),
    (NamePlayList[_0x1468e7(0x1c3)] = _0x1468e7(0x1ba)),
    (MkAccountListContent[_0x1468e7(0x1e3)]["opacity"] = "0"),
    (MkAccountListContent[_0x1468e7(0x1e3)]["display"] = "none"),
    (MkLnkGcrContentxx[_0x1468e7(0x1e3)][_0x1468e7(0x1de)] = "1"),
    (MkLnkGcrContentxx[_0x1468e7(0x1e3)]["display"] = _0x1468e7(0x1cc)),
    (MkSpotifyContentxx[_0x1468e7(0x1e3)][_0x1468e7(0x1de)] = "0"),
    (MkSpotifyContentxx[_0x1468e7(0x1e3)][_0x1468e7(0x1d8)] = "none"),
    (MKTeamSupportContentxx["style"][_0x1468e7(0x1d8)] = _0x1468e7(0x1b8)),
    (MKTeamSupportContentxx[_0x1468e7(0x1e3)][_0x1468e7(0x1de)] = "0"),
    (MkBoxAccount[_0x1468e7(0x1e3)]["opacity"] = "0"),
    (MkContactContentxx[_0x1468e7(0x1e3)][_0x1468e7(0x1de)] = "0"),
    (MkContactContentxx[_0x1468e7(0x1e3)][_0x1468e7(0x1d8)] = _0x1468e7(0x1b8));
}
function MkOpenTeamSpt() {
  const _0x3e7893 = _0x331bfe;
  bottomSheet[_0x3e7893(0x1c9)][_0x3e7893(0x1d1)](_0x3e7893(0x1c6)),
    (NamePlayList[_0x3e7893(0x1c3)] = "Team\x20Support"),
    (MkAccountListContent[_0x3e7893(0x1e3)][_0x3e7893(0x1de)] = "0"),
    (MkAccountListContent[_0x3e7893(0x1e3)][_0x3e7893(0x1d8)] = _0x3e7893(0x1b8)),
    (MkLnkGcrContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1de)] = "0"),
    (MkLnkGcrContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1d8)] = _0x3e7893(0x1b8)),
    (MkSpotifyContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1de)] = "0"),
    (MkSpotifyContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1d8)] = "none"),
    (MKTeamSupportContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1d8)] = "inline"),
    (MKTeamSupportContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1de)] = "1"),
    (MkBoxAccount[_0x3e7893(0x1e3)][_0x3e7893(0x1de)] = "0"),
    (MkContactContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1de)] = "0"),
    (MkContactContentxx[_0x3e7893(0x1e3)][_0x3e7893(0x1d8)] = _0x3e7893(0x1b8));
}
function _0x854d(_0x1d3d48, _0x4d3816) {
  const _0x4363f6 = _0x4363();
  return (
    (_0x854d = function (_0x854d24, _0x3e7eb2) {
      _0x854d24 = _0x854d24 - 0x1b0;
      let _0xcae4af = _0x4363f6[_0x854d24];
      return _0xcae4af;
    }),
    _0x854d(_0x1d3d48, _0x4d3816)
  );
}
function MkOpenContact() {
  const _0x526b20 = _0x331bfe;
  bottomSheet[_0x526b20(0x1c9)][_0x526b20(0x1d1)]("show"),
    (NamePlayList[_0x526b20(0x1c3)] = _0x526b20(0x1b6)),
    (MkAccountListContent[_0x526b20(0x1e3)][_0x526b20(0x1de)] = "0"),
    (MkAccountListContent[_0x526b20(0x1e3)]["display"] = "none"),
    (MkLnkGcrContentxx["style"][_0x526b20(0x1de)] = "0"),
    (MkLnkGcrContentxx[_0x526b20(0x1e3)][_0x526b20(0x1d8)] = "none"),
    (MkSpotifyContentxx[_0x526b20(0x1e3)][_0x526b20(0x1de)] = "0"),
    (MkSpotifyContentxx["style"]["display"] = _0x526b20(0x1b8)),
    (MKTeamSupportContentxx["style"]["display"] = "none"),
    (MKTeamSupportContentxx[_0x526b20(0x1e3)][_0x526b20(0x1de)] = "0"),
    (MkBoxAccount[_0x526b20(0x1e3)]["opacity"] = "0"),
    (MkContactContentxx["style"][_0x526b20(0x1de)] = "1"),
    (MkContactContentxx[_0x526b20(0x1e3)][_0x526b20(0x1d8)] = _0x526b20(0x1cc));
}
function MkViewPageSpotify() {
  const _0x40b6b8 = _0x331bfe;
  bottomSheet[_0x40b6b8(0x1c9)][_0x40b6b8(0x1d2)]("show");
  let _0x7224c1;
  Swal["fire"]({
    title: _0x40b6b8(0x1df),
    timer: 0x1388,
    timerProgressBar: !![],
    position: _0x40b6b8(0x1d4),
    didOpen: () => {
      const _0x13506a = _0x40b6b8;
      Swal[_0x13506a(0x1bb)](),
        (_0x7224c1 = setInterval(() => {
          const _0x78fc43 = _0x13506a;
          b[_0x78fc43(0x1ca)] = Swal[_0x78fc43(0x1e4)]();
        }, 0x1f4));
    },
    willClose: () => {
      clearInterval(_0x7224c1);
    },
  })[_0x40b6b8(0x1c0)]((_0x3f47ce) => {
    const _0x1652a3 = _0x40b6b8;
    _0x3f47ce[_0x1652a3(0x1c2)] === Swal["DismissReason"][_0x1652a3(0x1e0)] && (console[_0x1652a3(0x1cf)](_0x1652a3(0x1b0)), window["location"][_0x1652a3(0x1b4)](_0x1652a3(0x1e1)));
  });
}
