const _0x4b7456 = _0x195e;
(function (_0xd882c4, _0x214bf7) {
  const _0x6b03e9 = _0x195e,
    _0x37a20f = _0xd882c4();
  while (!![]) {
    try {
      const _0x17584a =
        parseInt(_0x6b03e9(0x1b3)) / 0x1 +
        (parseInt(_0x6b03e9(0x1ba)) / 0x2) * (parseInt(_0x6b03e9(0x1bc)) / 0x3) +
        (-parseInt(_0x6b03e9(0x1a4)) / 0x4) * (-parseInt(_0x6b03e9(0x1c5)) / 0x5) +
        (-parseInt(_0x6b03e9(0x1dd)) / 0x6) * (-parseInt(_0x6b03e9(0x1d0)) / 0x7) +
        (parseInt(_0x6b03e9(0x1a1)) / 0x8) * (parseInt(_0x6b03e9(0x1aa)) / 0x9) +
        parseInt(_0x6b03e9(0x1d4)) / 0xa +
        (-parseInt(_0x6b03e9(0x1c1)) / 0xb) * (parseInt(_0x6b03e9(0x1d2)) / 0xc);
      if (_0x17584a === _0x214bf7) break;
      else _0x37a20f["push"](_0x37a20f["shift"]());
    } catch (_0x4fe5e1) {
      _0x37a20f["push"](_0x37a20f["shift"]());
    }
  }
})(_0x4146, 0x3f032);
const MkHeaderBody = document["querySelector"](".MkHeaderBody"),
  MkSpotify = document[_0x4b7456(0x1c7)](_0x4b7456(0x1b4)),
  MkPreloader = document["querySelector"](".MkPreloader"),
  MkLink = document[_0x4b7456(0x1c7)](".MkLink"),
  MkLinkOverlay = document[_0x4b7456(0x1c7)](_0x4b7456(0x1cd)),
  MkLinkContentBodyLink = document[_0x4b7456(0x1c7)](_0x4b7456(0x1b6)),
  MkSupport = document["querySelector"](_0x4b7456(0x1ab)),
  MkSupportOverlay = document[_0x4b7456(0x1c7)](_0x4b7456(0x1a8)),
  MkChatHeaderJoin = document["querySelector"](_0x4b7456(0x1a3)),
  MkGame = document[_0x4b7456(0x1c7)](_0x4b7456(0x1cc)),
  MkGameOverlay = document[_0x4b7456(0x1c7)](_0x4b7456(0x1d5)),
  MkScMediaFlw = document[_0x4b7456(0x1c7)](_0x4b7456(0x1a2)),
  MkScMediaFlwOverlay = document["querySelector"](".MkScMediaOverlay"),
  MKProject = document["querySelector"](_0x4b7456(0x1ad)),
  MKProjectOverlay = document[_0x4b7456(0x1c7)](".MKProjectOverlay"),
  MkChat = document[_0x4b7456(0x1c7)](_0x4b7456(0x1c3)),
  body = document[_0x4b7456(0x1c7)](_0x4b7456(0x1c0)),
  MkAudio = document[_0x4b7456(0x1a6)](_0x4b7456(0x1bf));
function OpenProject() {
  const _0xe10b01 = _0x4b7456;
  MKProject[_0xe10b01(0x1ce)][_0xe10b01(0x1d3)](_0xe10b01(0x1a9)), MkHeaderBody[_0xe10b01(0x1ce)][_0xe10b01(0x1d3)]("Hide");
}
function OpenFollowed() {
  const _0x3f4d1f = _0x4b7456;
  MkScMediaFlw["classList"][_0x3f4d1f(0x1d3)](_0x3f4d1f(0x1b0));
}
function OpenChat() {
  const _0x10483c = _0x4b7456;
  MkChat[_0x10483c(0x1ce)][_0x10483c(0x1d3)]("MkChatShow"), MkChatHeaderJoin[_0x10483c(0x1ce)][_0x10483c(0x1c4)](_0x10483c(0x1b8));
}
function OpenGame() {
  const _0x4dcfe7 = _0x4b7456;
  MkGame[_0x4dcfe7(0x1ce)][_0x4dcfe7(0x1d3)]("MkGameShow");
}
function CloseChat() {
  const _0x465ab1 = _0x4b7456;
  MkChat["classList"][_0x465ab1(0x1c4)](_0x465ab1(0x1a7));
}
function CloseProject() {
  const _0x2c54de = _0x4b7456;
  MKProject[_0x2c54de(0x1ce)][_0x2c54de(0x1c4)]("MKProjectShow"), MkHeaderBody[_0x2c54de(0x1ce)][_0x2c54de(0x1c4)]("Hide");
}
function OpenLink() {
  const _0x378526 = _0x4b7456;
  Swal[_0x378526(0x1b7)]({
    title: _0x378526(0x1c2),
    text: _0x378526(0x1ae),
    icon: _0x378526(0x1dc),
    showDenyButton: !![],
    showCancelButton: ![],
    confirmButtonColor: "#3085d6",
    cancelButtonColor: _0x378526(0x1c9),
    confirmButtonText: _0x378526(0x1b2),
    denyButtonText: "Kembali",
  })[_0x378526(0x1c8)]((_0x4767ac) => {
    const _0x5e4089 = _0x378526;
    if (_0x4767ac[_0x5e4089(0x1d7)]) MkLink["classList"][_0x5e4089(0x1d3)](_0x5e4089(0x1c6)), MkHeaderBody[_0x5e4089(0x1ce)][_0x5e4089(0x1d3)]("Hide");
    else _0x4767ac[_0x5e4089(0x1cf)] && MkHeaderBody[_0x5e4089(0x1ce)][_0x5e4089(0x1c4)](_0x5e4089(0x1da));
  });
}
function _0x195e(_0x341102, _0x5cad9e) {
  const _0x4146ce = _0x4146();
  return (
    (_0x195e = function (_0x195e91, _0x42d808) {
      _0x195e91 = _0x195e91 - 0x1a1;
      let _0x4c8b9d = _0x4146ce[_0x195e91];
      return _0x4c8b9d;
    }),
    _0x195e(_0x341102, _0x5cad9e)
  );
}
function OpenSupport() {
  const _0x1953f2 = _0x4b7456;
  MkSupport[_0x1953f2(0x1ce)][_0x1953f2(0x1d3)](_0x1953f2(0x1a5)), MkHeaderBody[_0x1953f2(0x1ce)][_0x1953f2(0x1d3)]("Hide");
}
function OpenNxtLvl() {
  const _0x47e9cd = _0x4b7456;
  MkLinkContentBodyLink[_0x47e9cd(0x1ce)][_0x47e9cd(0x1d3)](_0x47e9cd(0x1d8));
}
function OpenSpotify() {
  const _0x220c5 = _0x4b7456;
  MkSpotify[_0x220c5(0x1ce)][_0x220c5(0x1d3)](_0x220c5(0x1d6)), MkHeaderBody["classList"]["add"]("Hide"), (body[_0x220c5(0x1cb)][_0x220c5(0x1ca)] = "#999");
}
function _0x4146() {
  const _0x51a098 = [
    "fire",
    "HideJoin",
    "play",
    "2NMlLWJ",
    "https://github.com/mkxchl",
    "935319BJenVT",
    "https://ems-links.netlify.app/",
    "MkGameShow",
    "MkAudio",
    "body",
    "11911196RSWJPW",
    "Warning",
    ".MkChat",
    "remove",
    "5NGvPYX",
    "MkLinkShow",
    "querySelector",
    "then",
    "#d33",
    "background",
    "style",
    ".MkGame",
    ".MkLinkOverlay",
    "classList",
    "isDenied",
    "7wYAfMa",
    "replace",
    "12PrkPrF",
    "add",
    "882960YicQaZ",
    ".MkGameOverlay",
    "MkSpotifyShow",
    "isConfirmed",
    "HideLeft",
    "MkPreloaderShow",
    "Hide",
    "https://tiktok.com/@mxchl",
    "question",
    "1478172aMpOMo",
    "124408hUoBdc",
    ".MkScMediaFlw",
    ".MkChatHeaderJoin",
    "1214776CzXWlF",
    "MkSupportShow",
    "getElementById",
    "MkChatShow",
    ".MkSupportOverlay",
    "MKProjectShow",
    "171FcYfgd",
    ".MkSupport",
    "reload",
    ".MKProject",
    "Link\x20ini\x20hanya\x20untuk\x20umur\x2018+\x20",
    "addEventListener",
    "MkScMediaFlwShow",
    "location",
    "Mengerti!",
    "95340JxkoUm",
    ".MkSpotify",
    "https://facebook.com/chellgnzxz",
    ".MkLinkContentBodyLink",
  ];
  _0x4146 = function () {
    return _0x51a098;
  };
  return _0x4146();
}
function CloseFollowed() {
  const _0x217652 = _0x4b7456;
  MkScMediaFlw[_0x217652(0x1ce)][_0x217652(0x1c4)](_0x217652(0x1b0));
}
function CloseSpotify() {
  const _0x13d3d6 = _0x4b7456;
  MkSpotify[_0x13d3d6(0x1ce)]["remove"](_0x13d3d6(0x1d6)), MkHeaderBody[_0x13d3d6(0x1ce)]["remove"]("Hide"), (body[_0x13d3d6(0x1cb)][_0x13d3d6(0x1ca)] = "#fff");
}
function MkLoader() {
  const _0x358c31 = _0x4b7456;
  MkPreloader[_0x358c31(0x1ce)][_0x358c31(0x1d3)]("MkPreloaderShow"),
    MkHeaderBody[_0x358c31(0x1ce)][_0x358c31(0x1d3)](_0x358c31(0x1da)),
    setTimeout(function () {
      const _0x425440 = _0x358c31;
      MkPreloader[_0x425440(0x1ce)][_0x425440(0x1c4)](_0x425440(0x1d9)), MkHeaderBody[_0x425440(0x1ce)][_0x425440(0x1c4)]("Hide"), MkAudio[_0x425440(0x1b9)]();
    }, 0x1388);
}
function CloseBtn() {
  const _0x273258 = _0x4b7456;
  MkChatHeaderJoin["classList"][_0x273258(0x1d3)](_0x273258(0x1b8));
}
function OpenBlog() {
  const _0x399acf = _0x4b7456;
  window[_0x399acf(0x1b1)][_0x399acf(0x1ac)]();
}
const hideBottomSheet = () => {
  const _0x39c2b6 = _0x4b7456;
  MkLink[_0x39c2b6(0x1ce)][_0x39c2b6(0x1c4)](_0x39c2b6(0x1c6)),
    MkHeaderBody["classList"][_0x39c2b6(0x1c4)](_0x39c2b6(0x1da)),
    MkSupport[_0x39c2b6(0x1ce)][_0x39c2b6(0x1c4)]("MkSupportShow"),
    MkGame[_0x39c2b6(0x1ce)]["remove"](_0x39c2b6(0x1be)),
    MkScMediaFlw[_0x39c2b6(0x1ce)][_0x39c2b6(0x1c4)](_0x39c2b6(0x1b0)),
    MKProject[_0x39c2b6(0x1ce)][_0x39c2b6(0x1c4)](_0x39c2b6(0x1a9));
};
MkLinkOverlay[_0x4b7456(0x1af)]("click", hideBottomSheet),
  MkGameOverlay[_0x4b7456(0x1af)]("click", hideBottomSheet),
  MkScMediaFlwOverlay[_0x4b7456(0x1af)]("click", hideBottomSheet),
  MKProjectOverlay[_0x4b7456(0x1af)]("click", hideBottomSheet),
  MkSupportOverlay[_0x4b7456(0x1af)]("click", function () {
    const _0x6abb2a = _0x4b7456;
    MkSupport["classList"]["remove"](_0x6abb2a(0x1a5)), MkHeaderBody[_0x6abb2a(0x1ce)]["remove"](_0x6abb2a(0x1da));
  });
function MkxXxInsta() {
  const _0x580713 = _0x4b7456;
  window["location"][_0x580713(0x1d1)]("https://instagram.com/chellgnzxz_");
}
function MkxXxTiktok() {
  const _0x1e269c = _0x4b7456;
  window[_0x1e269c(0x1b1)][_0x1e269c(0x1d1)](_0x1e269c(0x1db));
}
function MkxXxFacebook() {
  const _0x5a509c = _0x4b7456;
  window["location"][_0x5a509c(0x1d1)](_0x5a509c(0x1b5));
}
function MkxXxGithub() {
  const _0x25cbac = _0x4b7456;
  window["location"][_0x25cbac(0x1d1)](_0x25cbac(0x1bb));
}
function MkxXxEms() {
  const _0x22315d = _0x4b7456;
  window[_0x22315d(0x1b1)][_0x22315d(0x1d1)](_0x22315d(0x1bd));
}
