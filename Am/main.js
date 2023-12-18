const _0x1dcf3a = _0x30d5;
(function (_0x5b1d2d, _0x5bdd60) {
  const _0x93c8a3 = _0x30d5,
    _0x157d84 = _0x5b1d2d();
  while (!![]) {
    try {
      const _0x2c0730 =
        (-parseInt(_0x93c8a3(0x105)) / 0x1) * (-parseInt(_0x93c8a3(0xcf)) / 0x2) +
        (parseInt(_0x93c8a3(0xf4)) / 0x3) * (-parseInt(_0x93c8a3(0x109)) / 0x4) +
        (-parseInt(_0x93c8a3(0xe2)) / 0x5) * (-parseInt(_0x93c8a3(0xea)) / 0x6) +
        parseInt(_0x93c8a3(0xd0)) / 0x7 +
        (-parseInt(_0x93c8a3(0x10c)) / 0x8) * (-parseInt(_0x93c8a3(0xde)) / 0x9) +
        -parseInt(_0x93c8a3(0xd9)) / 0xa +
        (-parseInt(_0x93c8a3(0xe4)) / 0xb) * (-parseInt(_0x93c8a3(0xd4)) / 0xc);
      if (_0x2c0730 === _0x5bdd60) break;
      else _0x157d84["push"](_0x157d84["shift"]());
    } catch (_0x4c91b8) {
      _0x157d84["push"](_0x157d84["shift"]());
    }
  }
})(_0x49ab, 0xb7a73);
const MkHeaderBody = document["querySelector"](_0x1dcf3a(0xdd)),
  MkSpotify = document["querySelector"](_0x1dcf3a(0xda)),
  MkPreloader = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xd3)),
  MkLink = document[_0x1dcf3a(0xfa)](".MkLink"),
  MkLinkOverlay = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xdb)),
  MkLinkContentBodyLink = document[_0x1dcf3a(0xfa)](".MkLinkContentBodyLink"),
  MkSupport = document["querySelector"](_0x1dcf3a(0xfc)),
  MkSupportOverlay = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xf9)),
  MkChatHeaderJoin = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0x106)),
  MkGame = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xd5)),
  MkGameOverlay = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0x101)),
  MkScMediaFlw = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xdf)),
  MkScMediaFlwOverlay = document[_0x1dcf3a(0xfa)](".MkScMediaOverlay"),
  MKProject = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xd8)),
  MKProjectOverlay = document["querySelector"](_0x1dcf3a(0x107)),
  MkChat = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xef)),
  body = document[_0x1dcf3a(0xfa)](_0x1dcf3a(0xe0)),
  MkAudio = document[_0x1dcf3a(0xee)]("MkAudio");
function OpenProject() {
  const _0x36a5ed = _0x1dcf3a;
  MKProject[_0x36a5ed(0x10e)]["add"](_0x36a5ed(0xfe)), MkHeaderBody[_0x36a5ed(0x10e)]["add"]("Hide");
}
function OpenFollowed() {
  const _0x32649d = _0x1dcf3a;
  MkScMediaFlw[_0x32649d(0x10e)]["add"]("MkScMediaFlwShow");
}
function OpenChat() {
  const _0x29da98 = _0x1dcf3a;
  MkChat[_0x29da98(0x10e)][_0x29da98(0x104)](_0x29da98(0xf0)), MkChatHeaderJoin[_0x29da98(0x10e)][_0x29da98(0xf5)](_0x29da98(0xf8));
}
function OpenGame() {
  const _0x18eb79 = _0x1dcf3a;
  MkGame[_0x18eb79(0x10e)][_0x18eb79(0x104)](_0x18eb79(0x10f));
}
function CloseChat() {
  const _0x64c683 = _0x1dcf3a;
  MkChat[_0x64c683(0x10e)][_0x64c683(0xf5)](_0x64c683(0xf0));
}
function CloseProject() {
  const _0x460874 = _0x1dcf3a;
  MKProject[_0x460874(0x10e)][_0x460874(0xf5)](_0x460874(0xfe)), MkHeaderBody["classList"]["remove"](_0x460874(0xd6));
}
function OpenLink() {
  const _0x5e7120 = _0x1dcf3a;
  Swal[_0x5e7120(0x10b)]({
    title: _0x5e7120(0x103),
    text: _0x5e7120(0xec),
    icon: _0x5e7120(0x10d),
    showDenyButton: !![],
    showCancelButton: ![],
    confirmButtonColor: _0x5e7120(0xf7),
    cancelButtonColor: _0x5e7120(0x10a),
    confirmButtonText: _0x5e7120(0xf1),
    denyButtonText: _0x5e7120(0xd7),
  })[_0x5e7120(0xdc)]((_0x5adabd) => {
    const _0x3b7a64 = _0x5e7120;
    if (_0x5adabd[_0x3b7a64(0x100)]) MkLink[_0x3b7a64(0x10e)][_0x3b7a64(0x104)]("MkLinkShow"), MkHeaderBody[_0x3b7a64(0x10e)]["add"](_0x3b7a64(0xd6));
    else _0x5adabd[_0x3b7a64(0xe5)] && MkHeaderBody[_0x3b7a64(0x10e)][_0x3b7a64(0xf5)]("Hide");
  });
}
function OpenSupport() {
  const _0x17efa9 = _0x1dcf3a;
  MkSupport[_0x17efa9(0x10e)][_0x17efa9(0x104)](_0x17efa9(0xe7)), MkHeaderBody[_0x17efa9(0x10e)][_0x17efa9(0x104)](_0x17efa9(0xd6));
}
function OpenNxtLvl() {
  const _0x15882a = _0x1dcf3a;
  MkLinkContentBodyLink[_0x15882a(0x10e)][_0x15882a(0x104)](_0x15882a(0xeb));
}
function OpenSpotify() {
  const _0x4616ba = _0x1dcf3a;
  MkSpotify[_0x4616ba(0x10e)][_0x4616ba(0x104)](_0x4616ba(0xe6)), MkHeaderBody[_0x4616ba(0x10e)][_0x4616ba(0x104)](_0x4616ba(0xd6)), (body[_0x4616ba(0xfd)]["background"] = _0x4616ba(0xed));
}
function CloseFollowed() {
  const _0x44fbb4 = _0x1dcf3a;
  MkScMediaFlw[_0x44fbb4(0x10e)][_0x44fbb4(0xf5)](_0x44fbb4(0x108));
}
function CloseSpotify() {
  const _0x35e2b5 = _0x1dcf3a;
  MkSpotify[_0x35e2b5(0x10e)][_0x35e2b5(0xf5)](_0x35e2b5(0xe6)), MkHeaderBody[_0x35e2b5(0x10e)]["remove"]("Hide"), (body[_0x35e2b5(0xfd)][_0x35e2b5(0xe8)] = _0x35e2b5(0xf3));
}
function _0x49ab() {
  const _0x823418 = [
    "#3085d6",
    "HideJoin",
    ".MkSupportOverlay",
    "querySelector",
    "MkLinkShow",
    ".MkSupport",
    "style",
    "MKProjectShow",
    "replace",
    "isConfirmed",
    ".MkGameOverlay",
    "click",
    "Warning",
    "add",
    "1bQdFOw",
    ".MkChatHeaderJoin",
    ".MKProjectOverlay",
    "MkScMediaFlwShow",
    "4GRKXeq",
    "#d33",
    "fire",
    "8XmKDQt",
    "question",
    "classList",
    "MkGameShow",
    "1161188nvbnLJ",
    "2128441csukpX",
    "location",
    "https://tiktok.com/@mxchl",
    ".MkPreloader",
    "12hawtqW",
    ".MkGame",
    "Hide",
    "Kembali",
    ".MKProject",
    "13098900muZoMP",
    ".MkSpotify",
    ".MkLinkOverlay",
    "then",
    ".MkHeaderBody",
    "1194822soeCaj",
    ".MkScMediaFlw",
    "body",
    "MkPreloaderShow",
    "11655eYXoEZ",
    "https://github.com/mkxchl",
    "22187627fMopxh",
    "isDenied",
    "MkSpotifyShow",
    "MkSupportShow",
    "background",
    "https://instagram.com/chellgnzxz_",
    "12LuGFiJ",
    "HideLeft",
    "Link\x20ini\x20hanya\x20untuk\x20umur\x2018+\x20",
    "#999",
    "getElementById",
    ".MkChat",
    "MkChatShow",
    "Mengerti!",
    "addEventListener",
    "#fff",
    "2931003jGkJlz",
    "remove",
    "reload",
  ];
  _0x49ab = function () {
    return _0x823418;
  };
  return _0x49ab();
}
function MkLoader() {
  const _0x363994 = _0x1dcf3a;
  MkPreloader["classList"]["add"](_0x363994(0xe1)),
    MkHeaderBody[_0x363994(0x10e)][_0x363994(0x104)]("Hide"),
    setTimeout(function () {
      const _0x401a4b = _0x363994;
      MkPreloader[_0x401a4b(0x10e)][_0x401a4b(0xf5)](_0x401a4b(0xe1)), MkHeaderBody[_0x401a4b(0x10e)][_0x401a4b(0xf5)](_0x401a4b(0xd6)), MkAudio["play"]();
    }, 0x1388);
}
function CloseBtn() {
  const _0x121159 = _0x1dcf3a;
  MkChatHeaderJoin[_0x121159(0x10e)][_0x121159(0x104)](_0x121159(0xf8));
}
function OpenBlog() {
  const _0x25624c = _0x1dcf3a;
  window["location"][_0x25624c(0xf6)]();
}
const hideBottomSheet = () => {
  const _0x54eb21 = _0x1dcf3a;
  MkLink[_0x54eb21(0x10e)][_0x54eb21(0xf5)](_0x54eb21(0xfb)),
    MkHeaderBody["classList"][_0x54eb21(0xf5)](_0x54eb21(0xd6)),
    MkSupport[_0x54eb21(0x10e)][_0x54eb21(0xf5)](_0x54eb21(0xe7)),
    MkGame[_0x54eb21(0x10e)]["remove"](_0x54eb21(0x10f)),
    MkScMediaFlw[_0x54eb21(0x10e)][_0x54eb21(0xf5)](_0x54eb21(0x108)),
    MKProject[_0x54eb21(0x10e)][_0x54eb21(0xf5)](_0x54eb21(0xfe));
};
function _0x30d5(_0x484b63, _0x384ba7) {
  const _0x49abab = _0x49ab();
  return (
    (_0x30d5 = function (_0x30d501, _0x490e5c) {
      _0x30d501 = _0x30d501 - 0xcf;
      let _0x3d2fb6 = _0x49abab[_0x30d501];
      return _0x3d2fb6;
    }),
    _0x30d5(_0x484b63, _0x384ba7)
  );
}
MkLinkOverlay["addEventListener"]("click", hideBottomSheet),
  MkGameOverlay[_0x1dcf3a(0xf2)](_0x1dcf3a(0x102), hideBottomSheet),
  MkScMediaFlwOverlay[_0x1dcf3a(0xf2)](_0x1dcf3a(0x102), hideBottomSheet),
  MKProjectOverlay["addEventListener"](_0x1dcf3a(0x102), hideBottomSheet),
  MkSupportOverlay[_0x1dcf3a(0xf2)](_0x1dcf3a(0x102), function () {
    const _0x377c26 = _0x1dcf3a;
    MkSupport[_0x377c26(0x10e)][_0x377c26(0xf5)](_0x377c26(0xe7)), MkHeaderBody[_0x377c26(0x10e)]["remove"](_0x377c26(0xd6));
  });
function MkxXxInsta() {
  const _0x20454f = _0x1dcf3a;
  window[_0x20454f(0xd1)][_0x20454f(0xff)](_0x20454f(0xe9));
}
function MkxXxTiktok() {
  const _0x172364 = _0x1dcf3a;
  window[_0x172364(0xd1)][_0x172364(0xff)](_0x172364(0xd2));
}
function MkxXxFacebook() {
  const _0x350023 = _0x1dcf3a;
  window[_0x350023(0xd1)][_0x350023(0xff)]("https://facebook.com/marchel_ganz");
}
function MkxXxGithub() {
  const _0x572b17 = _0x1dcf3a;
  window[_0x572b17(0xd1)][_0x572b17(0xff)](_0x572b17(0xe3));
}
function MkxXxEms() {
  const _0x52b9d6 = _0x1dcf3a;
  window[_0x52b9d6(0xd1)]["replace"]("https://ems-links.netlify.app/");
}
