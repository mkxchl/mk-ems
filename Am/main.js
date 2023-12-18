const _0x768e70 = _0x53a2;
function _0x53a2(_0x147580, _0x2cd848) {
  const _0x33a243 = _0x33a2();
  return (
    (_0x53a2 = function (_0x53a2e6, _0x2d3096) {
      _0x53a2e6 = _0x53a2e6 - 0x110;
      let _0x29c9c6 = _0x33a243[_0x53a2e6];
      return _0x29c9c6;
    }),
    _0x53a2(_0x147580, _0x2cd848)
  );
}
(function (_0x4edecc, _0x5a0ff5) {
  const _0x265f38 = _0x53a2,
    _0x4ad6b7 = _0x4edecc();
  while (!![]) {
    try {
      const _0x20811c =
        (parseInt(_0x265f38(0x12f)) / 0x1) * (parseInt(_0x265f38(0x137)) / 0x2) +
        (parseInt(_0x265f38(0x138)) / 0x3) * (parseInt(_0x265f38(0x116)) / 0x4) +
        (-parseInt(_0x265f38(0x114)) / 0x5) * (parseInt(_0x265f38(0x144)) / 0x6) +
        -parseInt(_0x265f38(0x119)) / 0x7 +
        -parseInt(_0x265f38(0x121)) / 0x8 +
        parseInt(_0x265f38(0x118)) / 0x9 +
        parseInt(_0x265f38(0x13a)) / 0xa;
      if (_0x20811c === _0x5a0ff5) break;
      else _0x4ad6b7["push"](_0x4ad6b7["shift"]());
    } catch (_0x4cecaf) {
      _0x4ad6b7["push"](_0x4ad6b7["shift"]());
    }
  }
})(_0x33a2, 0xabca9);
const MkHeaderBody = document[_0x768e70(0x130)](_0x768e70(0x120)),
  MkSpotify = document[_0x768e70(0x130)](_0x768e70(0x125)),
  MkPreloader = document["querySelector"](_0x768e70(0x145)),
  MkLink = document[_0x768e70(0x130)](_0x768e70(0x11c)),
  MkLinkOverlay = document[_0x768e70(0x130)](".MkLinkOverlay"),
  MkLinkContentBodyLink = document["querySelector"](_0x768e70(0x148)),
  MkSupport = document[_0x768e70(0x130)](_0x768e70(0x142)),
  MkSupportOverlay = document["querySelector"](_0x768e70(0x136)),
  MkChatHeaderJoin = document[_0x768e70(0x130)](".MkChatHeaderJoin"),
  MkGame = document[_0x768e70(0x130)](_0x768e70(0x123)),
  MkGameOverlay = document[_0x768e70(0x130)](_0x768e70(0x12a)),
  MkScMediaFlw = document[_0x768e70(0x130)](_0x768e70(0x115)),
  MkScMediaFlwOverlay = document["querySelector"](_0x768e70(0x131)),
  MKProject = document[_0x768e70(0x130)](_0x768e70(0x11b)),
  MKProjectOverlay = document[_0x768e70(0x130)](".MKProjectOverlay"),
  MkChat = document["querySelector"](".MkChat"),
  body = document[_0x768e70(0x130)](_0x768e70(0x110)),
  MkAudio = document["getElementById"]("MkAudio");
function OpenProject() {
  const _0x46ee16 = _0x768e70;
  MKProject[_0x46ee16(0x11f)][_0x46ee16(0x113)](_0x46ee16(0x11e)), MkHeaderBody["classList"][_0x46ee16(0x113)](_0x46ee16(0x111));
}
function OpenFollowed() {
  const _0x48c6f2 = _0x768e70;
  MkScMediaFlw[_0x48c6f2(0x11f)]["add"](_0x48c6f2(0x139));
}
function OpenChat() {
  const _0x36a53a = _0x768e70;
  MkChat["classList"]["add"](_0x36a53a(0x129)), MkChatHeaderJoin[_0x36a53a(0x11f)][_0x36a53a(0x12d)](_0x36a53a(0x141));
}
function OpenGame() {
  const _0xecdf94 = _0x768e70;
  MkGame[_0xecdf94(0x11f)][_0xecdf94(0x113)](_0xecdf94(0x132));
}
function CloseChat() {
  const _0x119d39 = _0x768e70;
  MkChat[_0x119d39(0x11f)]["remove"]("MkChatShow");
}
function CloseProject() {
  const _0x138d8e = _0x768e70;
  MKProject["classList"][_0x138d8e(0x12d)](_0x138d8e(0x11e)), MkHeaderBody[_0x138d8e(0x11f)]["remove"](_0x138d8e(0x111));
}
function OpenLink() {
  const _0x237e1f = _0x768e70;
  Swal["fire"]({
    title: _0x237e1f(0x146),
    text: _0x237e1f(0x143),
    icon: _0x237e1f(0x134),
    showDenyButton: !![],
    showCancelButton: ![],
    confirmButtonColor: _0x237e1f(0x13f),
    cancelButtonColor: "#d33",
    confirmButtonText: "Mengerti!",
    denyButtonText: "Kembali",
  })[_0x237e1f(0x128)]((_0x19ed5d) => {
    const _0x125ba6 = _0x237e1f;
    if (_0x19ed5d[_0x125ba6(0x135)]) MkLink["classList"][_0x125ba6(0x113)](_0x125ba6(0x117)), MkHeaderBody[_0x125ba6(0x11f)][_0x125ba6(0x113)](_0x125ba6(0x111));
    else _0x19ed5d[_0x125ba6(0x126)] && MkHeaderBody["classList"]["remove"]("Hide");
  });
}
function OpenSupport() {
  const _0x1bc9ae = _0x768e70;
  MkSupport[_0x1bc9ae(0x11f)][_0x1bc9ae(0x113)](_0x1bc9ae(0x13e)), MkHeaderBody[_0x1bc9ae(0x11f)][_0x1bc9ae(0x113)]("Hide");
}
function OpenNxtLvl() {
  const _0x10a384 = _0x768e70;
  MkLinkContentBodyLink[_0x10a384(0x11f)][_0x10a384(0x113)]("HideLeft");
}
function OpenSpotify() {
  const _0x138db6 = _0x768e70;
  MkSpotify[_0x138db6(0x11f)]["add"](_0x138db6(0x140)), MkHeaderBody["classList"][_0x138db6(0x113)](_0x138db6(0x111)), (body[_0x138db6(0x122)][_0x138db6(0x147)] = _0x138db6(0x127));
}
function CloseFollowed() {
  const _0x1543e6 = _0x768e70;
  MkScMediaFlw[_0x1543e6(0x11f)]["remove"]("MkScMediaFlwShow");
}
function CloseSpotify() {
  const _0x59f01e = _0x768e70;
  MkSpotify[_0x59f01e(0x11f)][_0x59f01e(0x12d)]("MkSpotifyShow"), MkHeaderBody[_0x59f01e(0x11f)][_0x59f01e(0x12d)](_0x59f01e(0x111)), (body[_0x59f01e(0x122)][_0x59f01e(0x147)] = _0x59f01e(0x112));
}
function MkLoader() {
  const _0x39ecb8 = _0x768e70;
  MkPreloader["classList"][_0x39ecb8(0x113)](_0x39ecb8(0x133)),
    MkHeaderBody[_0x39ecb8(0x11f)][_0x39ecb8(0x113)](_0x39ecb8(0x111)),
    setTimeout(function () {
      const _0x12fe31 = _0x39ecb8;
      MkPreloader[_0x12fe31(0x11f)]["remove"](_0x12fe31(0x133)), MkHeaderBody["classList"]["remove"]("Hide"), MkAudio["play"]();
    }, 0x1388);
}
function CloseBtn() {
  const _0x3b1424 = _0x768e70;
  MkChatHeaderJoin[_0x3b1424(0x11f)]["add"]("HideJoin");
}
function OpenBlog() {
  const _0xbb336 = _0x768e70;
  window[_0xbb336(0x12e)][_0xbb336(0x12b)]();
}
function CloseSupport() {
  const _0x47061c = _0x768e70;
  MkSupport[_0x47061c(0x11f)][_0x47061c(0x12d)]("MkSupportShow"), MkHeaderBody[_0x47061c(0x11f)]["remove"](_0x47061c(0x111));
}
const hideBottomSheet = () => {
  const _0x2aae04 = _0x768e70;
  MkLink[_0x2aae04(0x11f)][_0x2aae04(0x12d)](_0x2aae04(0x117)),
    MkHeaderBody[_0x2aae04(0x11f)][_0x2aae04(0x12d)](_0x2aae04(0x111)),
    MkGame[_0x2aae04(0x11f)]["remove"](_0x2aae04(0x132)),
    MkScMediaFlw[_0x2aae04(0x11f)][_0x2aae04(0x12d)](_0x2aae04(0x139)),
    MKProject["classList"][_0x2aae04(0x12d)](_0x2aae04(0x11e));
};
MkLinkOverlay["addEventListener"](_0x768e70(0x13b), hideBottomSheet),
  MkGameOverlay[_0x768e70(0x13c)](_0x768e70(0x13b), hideBottomSheet),
  MkScMediaFlwOverlay[_0x768e70(0x13c)](_0x768e70(0x13b), hideBottomSheet),
  MKProjectOverlay[_0x768e70(0x13c)](_0x768e70(0x13b), hideBottomSheet),
  MkSupportOverlay[_0x768e70(0x13c)](_0x768e70(0x13b), function () {
    const _0xa42a10 = _0x768e70;
    MkSupport["classList"][_0xa42a10(0x12d)]("MkSupportShow"), MkHeaderBody["classList"]["remove"](_0xa42a10(0x111));
  });
function MkxXxInsta() {
  const _0x380c3a = _0x768e70;
  window[_0x380c3a(0x12e)][_0x380c3a(0x13d)](_0x380c3a(0x11a));
}
function MkxXxTiktok() {
  const _0x102608 = _0x768e70;
  window[_0x102608(0x12e)][_0x102608(0x13d)](_0x102608(0x124));
}
function _0x33a2() {
  const _0x19d083 = [
    "5ZxqGQk",
    ".MkScMediaFlw",
    "1547144pjCiHu",
    "MkLinkShow",
    "9332856WLfnAw",
    "8066674hkOkIx",
    "https://instagram.com/chellgnzxz_",
    ".MKProject",
    ".MkLink",
    "https://github.com/mkxchl",
    "MKProjectShow",
    "classList",
    ".MkHeaderBody",
    "6870680gEfyTE",
    "style",
    ".MkGame",
    "https://tiktok.com/@mxchl",
    ".MkSpotify",
    "isDenied",
    "#999",
    "then",
    "MkChatShow",
    ".MkGameOverlay",
    "reload",
    "https://facebook.com/chellgnzxz",
    "remove",
    "location",
    "1NeDOmc",
    "querySelector",
    ".MkScMediaOverlay",
    "MkGameShow",
    "MkPreloaderShow",
    "question",
    "isConfirmed",
    ".MkSupportOverlay",
    "756038TNSfFP",
    "9vrltXO",
    "MkScMediaFlwShow",
    "7183520xeixqM",
    "click",
    "addEventListener",
    "replace",
    "MkSupportShow",
    "#3085d6",
    "MkSpotifyShow",
    "HideJoin",
    ".MkSupport",
    "Link\x20ini\x20hanya\x20untuk\x20umur\x2018+\x20",
    "3473034DzlTzE",
    ".MkPreloader",
    "Warning",
    "background",
    ".MkLinkContentBodyLink",
    "body",
    "Hide",
    "#fff",
    "add",
  ];
  _0x33a2 = function () {
    return _0x19d083;
  };
  return _0x33a2();
}
function MkxXxFacebook() {
  const _0x2f244d = _0x768e70;
  window[_0x2f244d(0x12e)][_0x2f244d(0x13d)](_0x2f244d(0x12c));
}
function MkxXxGithub() {
  const _0x5c1dfc = _0x768e70;
  window["location"][_0x5c1dfc(0x13d)](_0x5c1dfc(0x11d));
}
function MkxXxEms() {
  const _0x4b2d9a = _0x768e70;
  window[_0x4b2d9a(0x12e)][_0x4b2d9a(0x13d)]("https://ems-links.netlify.app/");
}
