const _0x1c5833 = _0x3651;
function _0x3651(_0x5f9ce, _0x2dfc16) {
  const _0x5a21b9 = _0x5a21();
  return (
    (_0x3651 = function (_0x36518c, _0x213b9b) {
      _0x36518c = _0x36518c - 0x183;
      let _0x4d5c6c = _0x5a21b9[_0x36518c];
      return _0x4d5c6c;
    }),
    _0x3651(_0x5f9ce, _0x2dfc16)
  );
}
(function (_0x517c7a, _0xaf06af) {
  const _0x31a402 = _0x3651,
    _0x3915f8 = _0x517c7a();
  while (!![]) {
    try {
      const _0x4b70c6 =
        (-parseInt(_0x31a402(0x1bf)) / 0x1) * (parseInt(_0x31a402(0x196)) / 0x2) +
        -parseInt(_0x31a402(0x1dd)) / 0x3 +
        (parseInt(_0x31a402(0x1b1)) / 0x4) * (-parseInt(_0x31a402(0x189)) / 0x5) +
        parseInt(_0x31a402(0x1cb)) / 0x6 +
        -parseInt(_0x31a402(0x197)) / 0x7 +
        -parseInt(_0x31a402(0x1c9)) / 0x8 +
        parseInt(_0x31a402(0x183)) / 0x9;
      if (_0x4b70c6 === _0xaf06af) break;
      else _0x3915f8["push"](_0x3915f8["shift"]());
    } catch (_0x211cc6) {
      _0x3915f8["push"](_0x3915f8["shift"]());
    }
  }
})(_0x5a21, 0x1b64f);
const MkHeaderBody = document[_0x1c5833(0x1b7)](_0x1c5833(0x190)),
  MkSpotify = document[_0x1c5833(0x1b7)](_0x1c5833(0x1b5)),
  MkPreloader = document[_0x1c5833(0x1b7)](_0x1c5833(0x1de)),
  MkLink = document["querySelector"](_0x1c5833(0x19b)),
  MkLinkOverlay = document[_0x1c5833(0x1b7)](_0x1c5833(0x198)),
  MkLinkContentBodyLink = document["querySelector"](".MkLinkContentBodyLink"),
  MkSupport = document["querySelector"](_0x1c5833(0x1d0)),
  MkSupportOverlay = document[_0x1c5833(0x1b7)](_0x1c5833(0x1ce)),
  MkChatHeaderJoin = document[_0x1c5833(0x1b7)](_0x1c5833(0x18f)),
  MkGame = document["querySelector"](_0x1c5833(0x1ae)),
  MkGameOverlay = document[_0x1c5833(0x1b7)](_0x1c5833(0x1a4)),
  MkScMediaFlw = document[_0x1c5833(0x1b7)](_0x1c5833(0x1a6)),
  MkScMediaFlwOverlay = document[_0x1c5833(0x1b7)](_0x1c5833(0x1a8)),
  MkPageMediaSocialInsta = document["querySelector"](_0x1c5833(0x1ba)),
  MkPageMediaSocialInstaOverlay = document[_0x1c5833(0x1b7)](_0x1c5833(0x199)),
  MKProject = document[_0x1c5833(0x1b7)](_0x1c5833(0x1b4)),
  MKProjectOverlay = document[_0x1c5833(0x1b7)](".MKProjectOverlay"),
  MkChat = document[_0x1c5833(0x1b7)](_0x1c5833(0x1c1)),
  BtnSocialMediax = document[_0x1c5833(0x1b7)](_0x1c5833(0x187)),
  MkPageMediaSocialInstaBodyButton = document[_0x1c5833(0x1b7)](_0x1c5833(0x19c)),
  body = document["querySelector"](_0x1c5833(0x1d6)),
  MkAudio = document[_0x1c5833(0x19e)](_0x1c5833(0x18b)),
  IconSocialMedia = document[_0x1c5833(0x19e)](_0x1c5833(0x18d)),
  TitleSocialMedia = document[_0x1c5833(0x19e)](_0x1c5833(0x191)),
  DescSocialMedia = document[_0x1c5833(0x19e)](_0x1c5833(0x1a0)),
  ButtonLlnkSocialMedia = document[_0x1c5833(0x19e)]("ButtonLlnkSocialMedia"),
  selectedIcon = localStorage[_0x1c5833(0x18a)](_0x1c5833(0x1b8)),
  iconInsta = "ri-instagram-line",
  iconFace = _0x1c5833(0x1da),
  iconTkTok = _0x1c5833(0x1b2);
function OpenProject() {
  const _0x3a08c6 = _0x1c5833;
  MKProject[_0x3a08c6(0x1b3)]["add"]("MKProjectShow"), MkHeaderBody["classList"][_0x3a08c6(0x1ca)]("Hide");
}
function OpenFollowed() {
  const _0x5861c3 = _0x1c5833;
  MkScMediaFlw[_0x5861c3(0x1b3)][_0x5861c3(0x1ca)]("MkScMediaFlwShow");
}
function OpenInts() {
  const _0x5cf70c = _0x1c5833;
  MkPageMediaSocialInsta[_0x5cf70c(0x1b3)][_0x5cf70c(0x1ca)](_0x5cf70c(0x1db)),
    MkHeaderBody["classList"][_0x5cf70c(0x1ca)](_0x5cf70c(0x1c4)),
    MkScMediaFlw[_0x5cf70c(0x1b3)][_0x5cf70c(0x19f)](_0x5cf70c(0x1d8)),
    (TitleSocialMedia[_0x5cf70c(0x1ad)] = _0x5cf70c(0x1a9)),
    (DescSocialMedia[_0x5cf70c(0x1ad)] = _0x5cf70c(0x1c0)),
    (IconSocialMedia[_0x5cf70c(0x1bb)] = "ri-instagram-line"),
    (BtnSocialMediax["innerHTML"] = _0x5cf70c(0x1ac)),
    (IconSocialMedia[_0x5cf70c(0x1df)]["background"] = _0x5cf70c(0x1d4)),
    (IconSocialMedia[_0x5cf70c(0x1df)][_0x5cf70c(0x1a2)] = _0x5cf70c(0x1b9)),
    (IconSocialMedia[_0x5cf70c(0x1df)][_0x5cf70c(0x1a2)] = "-webkit-linear-gradient(45deg,\x20#f09433\x200%,#e6683c\x2025%,#dc2743\x2050%,#cc2366\x2075%,#bc1888\x20100%)"),
    (IconSocialMedia["style"]["background"] = "linear-gradient(45deg,\x20#f09433\x200%,#e6683c\x2025%,#dc2743\x2050%,#cc2366\x2075%,#bc1888\x20100%"),
    (MkPageMediaSocialInstaBodyButton["style"][_0x5cf70c(0x1a2)] = "-moz-linear-gradient(45deg,\x20#f09433\x200%,\x20#e6683c\x2025%,\x20#dc2743\x2050%,\x20#cc2366\x2075%,\x20#bc1888\x20100%)"),
    (MkPageMediaSocialInstaBodyButton["style"][_0x5cf70c(0x1a2)] = _0x5cf70c(0x1a1)),
    (MkPageMediaSocialInstaBodyButton[_0x5cf70c(0x1df)][_0x5cf70c(0x1a2)] = _0x5cf70c(0x1a5)),
    (MkPageMediaSocialInstaBodyButton["style"][_0x5cf70c(0x1a2)] = _0x5cf70c(0x1d4)),
    BtnSocialMediax[_0x5cf70c(0x19a)](_0x5cf70c(0x1c8), function () {
      const _0x201645 = _0x5cf70c;
      window["location"]["replace"](_0x201645(0x1d9)), MkPageMediaSocialInsta[_0x201645(0x1b3)][_0x201645(0x19f)](_0x201645(0x1db)), MkHeaderBody[_0x201645(0x1b3)][_0x201645(0x19f)](_0x201645(0x1c4));
    });
}
function OpenFace() {
  const _0x566e61 = _0x1c5833;
  MkPageMediaSocialInsta[_0x566e61(0x1b3)][_0x566e61(0x1ca)](_0x566e61(0x1db)),
    MkHeaderBody[_0x566e61(0x1b3)]["add"](_0x566e61(0x1c4)),
    MkScMediaFlw["classList"][_0x566e61(0x19f)]("MkScMediaFlwShow"),
    (TitleSocialMedia[_0x566e61(0x1ad)] = _0x566e61(0x1a9)),
    (DescSocialMedia[_0x566e61(0x1ad)] = _0x566e61(0x184)),
    (IconSocialMedia["className"] = _0x566e61(0x1da)),
    (IconSocialMedia[_0x566e61(0x1df)][_0x566e61(0x1a2)] = "#0866ff"),
    (MkPageMediaSocialInstaBodyButton[_0x566e61(0x1df)]["background"] = _0x566e61(0x1c7)),
    (BtnSocialMediax[_0x566e61(0x1ad)] = _0x566e61(0x192)),
    BtnSocialMediax[_0x566e61(0x19a)](_0x566e61(0x1c8), function () {
      const _0x9373d0 = _0x566e61;
      window[_0x9373d0(0x1d2)][_0x9373d0(0x18e)](_0x9373d0(0x1cf)), MkPageMediaSocialInsta["classList"][_0x9373d0(0x19f)](_0x9373d0(0x1db)), MkHeaderBody[_0x9373d0(0x1b3)][_0x9373d0(0x19f)](_0x9373d0(0x1c4));
    });
}
function OpenTkTok() {
  const _0x4149b9 = _0x1c5833;
  MkPageMediaSocialInsta[_0x4149b9(0x1b3)][_0x4149b9(0x1ca)](_0x4149b9(0x1db)),
    MkHeaderBody[_0x4149b9(0x1b3)][_0x4149b9(0x1ca)](_0x4149b9(0x1c4)),
    MkScMediaFlw[_0x4149b9(0x1b3)][_0x4149b9(0x19f)](_0x4149b9(0x1d8)),
    (TitleSocialMedia[_0x4149b9(0x1ad)] = _0x4149b9(0x1a9)),
    (DescSocialMedia[_0x4149b9(0x1ad)] = _0x4149b9(0x1d7)),
    (IconSocialMedia[_0x4149b9(0x1bb)] = _0x4149b9(0x1d5)),
    (BtnSocialMediax[_0x4149b9(0x1ad)] = _0x4149b9(0x1b0)),
    (IconSocialMedia[_0x4149b9(0x1df)]["background"] = "#000"),
    (MkPageMediaSocialInstaBodyButton[_0x4149b9(0x1df)]["background"] = _0x4149b9(0x1bc)),
    BtnSocialMediax[_0x4149b9(0x19a)]("click", function () {
      const _0x267d40 = _0x4149b9;
      window[_0x267d40(0x1d2)][_0x267d40(0x18e)]("https://tiktok.com/@mxchl"), MkPageMediaSocialInsta[_0x267d40(0x1b3)][_0x267d40(0x19f)](_0x267d40(0x1db)), MkHeaderBody[_0x267d40(0x1b3)][_0x267d40(0x19f)]("Hide");
    });
}
function OpenChat() {
  const _0x247466 = _0x1c5833;
  MkChat["classList"][_0x247466(0x1ca)]("MkChatShow"), MkChatHeaderJoin["classList"][_0x247466(0x19f)](_0x247466(0x1be));
}
function OpenGame() {
  const _0x4bda0d = _0x1c5833;
  MkGame[_0x4bda0d(0x1b3)]["add"](_0x4bda0d(0x1bd));
}
function CloseChat() {
  const _0x382515 = _0x1c5833;
  MkChat[_0x382515(0x1b3)][_0x382515(0x19f)](_0x382515(0x185));
}
function CloseMkInsta() {
  const _0x179933 = _0x1c5833;
  MkPageMediaSocialInsta["classList"][_0x179933(0x19f)](_0x179933(0x1db)), MkHeaderBody[_0x179933(0x1b3)][_0x179933(0x19f)](_0x179933(0x1c4)), MkScMediaFlw[_0x179933(0x1b3)]["add"](_0x179933(0x1d8));
}
function CloseProject() {
  const _0x3fefa5 = _0x1c5833;
  MKProject[_0x3fefa5(0x1b3)][_0x3fefa5(0x19f)](_0x3fefa5(0x1aa)), MkHeaderBody[_0x3fefa5(0x1b3)]["remove"](_0x3fefa5(0x1c4));
}
function OpenLink() {
  const _0x1eb4ca = _0x1c5833;
  Swal[_0x1eb4ca(0x1e0)]({
    title: _0x1eb4ca(0x1cc),
    text: "Link\x20ini\x20hanya\x20untuk\x20umur\x2018+\x20",
    icon: "question",
    showDenyButton: !![],
    showCancelButton: ![],
    confirmButtonColor: _0x1eb4ca(0x18c),
    cancelButtonColor: _0x1eb4ca(0x194),
    confirmButtonText: _0x1eb4ca(0x1af),
    denyButtonText: _0x1eb4ca(0x1c6),
  })[_0x1eb4ca(0x186)]((_0x33c57a) => {
    const _0x161da9 = _0x1eb4ca;
    if (_0x33c57a[_0x161da9(0x1c3)]) MkLink[_0x161da9(0x1b3)][_0x161da9(0x1ca)]("MkLinkShow"), MkHeaderBody[_0x161da9(0x1b3)][_0x161da9(0x1ca)]("Hide");
    else _0x33c57a[_0x161da9(0x1d1)] && MkHeaderBody[_0x161da9(0x1b3)][_0x161da9(0x19f)](_0x161da9(0x1c4));
  });
}
function OpenSupport() {
  const _0x1398be = _0x1c5833;
  MkSupport[_0x1398be(0x1b3)]["add"](_0x1398be(0x1b6)), MkHeaderBody["classList"]["add"](_0x1398be(0x1c4));
}
function OpenNxtLvl() {
  const _0x13d358 = _0x1c5833;
  MkLinkContentBodyLink[_0x13d358(0x1b3)][_0x13d358(0x1ca)](_0x13d358(0x1cd));
}
function OpenSpotify() {
  const _0x57dc78 = _0x1c5833;
  MkSpotify["classList"][_0x57dc78(0x1ca)](_0x57dc78(0x1a3)), MkHeaderBody[_0x57dc78(0x1b3)]["add"](_0x57dc78(0x1c4)), (body[_0x57dc78(0x1df)][_0x57dc78(0x1a2)] = _0x57dc78(0x193));
}
function CloseFollowed() {
  const _0x419a21 = _0x1c5833;
  MkScMediaFlw["classList"]["remove"](_0x419a21(0x1d8));
}
function CloseSpotify() {
  const _0x1f613f = _0x1c5833;
  MkSpotify[_0x1f613f(0x1b3)][_0x1f613f(0x19f)](_0x1f613f(0x1a3)), MkHeaderBody[_0x1f613f(0x1b3)][_0x1f613f(0x19f)](_0x1f613f(0x1c4)), (body[_0x1f613f(0x1df)][_0x1f613f(0x1a2)] = _0x1f613f(0x1c5));
}
function MkLoader() {
  const _0x54e432 = _0x1c5833;
  MkPreloader[_0x54e432(0x1b3)]["add"]("MkPreloaderShow"),
    MkHeaderBody[_0x54e432(0x1b3)][_0x54e432(0x1ca)](_0x54e432(0x1c4)),
    setTimeout(function () {
      const _0x1faab0 = _0x54e432;
      MkPreloader[_0x1faab0(0x1b3)]["remove"](_0x1faab0(0x1d3)), MkHeaderBody[_0x1faab0(0x1b3)][_0x1faab0(0x19f)](_0x1faab0(0x1c4)), MkAudio[_0x1faab0(0x188)]();
    }, 0x1388);
}
function CloseBtn() {
  const _0x4c2cf4 = _0x1c5833;
  MkChatHeaderJoin["classList"][_0x4c2cf4(0x1ca)](_0x4c2cf4(0x1be));
}
function OpenBlog() {
  const _0x5603bc = _0x1c5833;
  window[_0x5603bc(0x1d2)][_0x5603bc(0x1a7)]();
}
function CloseSupport() {
  const _0x1ed8e9 = _0x1c5833;
  MkSupport[_0x1ed8e9(0x1b3)][_0x1ed8e9(0x19f)](_0x1ed8e9(0x1b6)), MkHeaderBody["classList"]["remove"](_0x1ed8e9(0x1c4));
}
const hideBottomSheet = () => {
  const _0x262c4b = _0x1c5833;
  MkLink[_0x262c4b(0x1b3)][_0x262c4b(0x19f)](_0x262c4b(0x19d)),
    MkHeaderBody[_0x262c4b(0x1b3)][_0x262c4b(0x19f)](_0x262c4b(0x1c4)),
    MkGame[_0x262c4b(0x1b3)][_0x262c4b(0x19f)]("MkGameShow"),
    MkScMediaFlw["classList"][_0x262c4b(0x19f)]("MkScMediaFlwShow"),
    MKProject["classList"]["remove"](_0x262c4b(0x1aa));
};
MkLinkOverlay["addEventListener"](_0x1c5833(0x1c8), hideBottomSheet),
  MkGameOverlay[_0x1c5833(0x19a)]("click", hideBottomSheet),
  MkScMediaFlwOverlay[_0x1c5833(0x19a)](_0x1c5833(0x1c8), hideBottomSheet),
  MKProjectOverlay[_0x1c5833(0x19a)]("click", hideBottomSheet),
  MkSupportOverlay[_0x1c5833(0x19a)](_0x1c5833(0x1c8), function () {
    const _0x16192f = _0x1c5833;
    MkSupport[_0x16192f(0x1b3)][_0x16192f(0x19f)]("MkSupportShow"), MkHeaderBody[_0x16192f(0x1b3)]["remove"]("Hide");
  });
function MkxXxInsta() {
  const _0x41bbc9 = _0x1c5833;
  window["location"]["replace"](_0x41bbc9(0x1dc));
}
function MkxXxTiktok() {
  const _0x3b9438 = _0x1c5833;
  window["location"]["replace"](_0x3b9438(0x1ab));
}
function MkxXxFacebook() {
  const _0x8c5a28 = _0x1c5833;
  window[_0x8c5a28(0x1d2)][_0x8c5a28(0x18e)](_0x8c5a28(0x1cf));
}
function _0x5a21() {
  const _0x26ac63 = [
    "remove",
    "DescSocialMedia",
    "-webkit-linear-gradient(45deg,\x20#f09433\x200%,#e6683c\x2025%,#dc2743\x2050%,#cc2366\x2075%,#bc1888\x20100%)",
    "background",
    "MkSpotifyShow",
    ".MkGameOverlay",
    "linear-gradient(45deg,\x20#f09433\x200%,#e6683c\x2025%,#dc2743\x2050%,#cc2366\x2075%,#bc1888\x20100%",
    ".MkScMediaFlw",
    "reload",
    ".MkScMediaOverlay",
    "Marchell\x20Kevandra",
    "MKProjectShow",
    "https://tiktok.com/@mxchl",
    "Open\x20Instagram",
    "innerHTML",
    ".MkGame",
    "Mengerti!",
    "Open\x20Tiktok",
    "598696leqKhu",
    "ri-tiktok-line",
    "classList",
    ".MKProject",
    ".MkSpotify",
    "MkSupportShow",
    "querySelector",
    "selected-icon",
    "-moz-linear-gradient(45deg,\x20#f09433\x200%,\x20#e6683c\x2025%,\x20#dc2743\x2050%,\x20#cc2366\x2075%,\x20#bc1888\x20100%)",
    ".MkPageMediaSocialInsta",
    "className",
    "#000",
    "MkGameShow",
    "HideJoin",
    "1fkAJPa",
    "instagram.com/marchell_kvandra",
    ".MkChat",
    "https://ems-links.netlify.app/",
    "isConfirmed",
    "Hide",
    "#fff",
    "Kembali",
    "#0866ff",
    "click",
    "1540152DemecU",
    "add",
    "1214286SWwXlK",
    "Warning",
    "HideLeft",
    ".MkSupportOverlay",
    "https://facebook.com/chellgnzxz",
    ".MkSupport",
    "isDenied",
    "location",
    "MkPreloaderShow",
    "#f09433;",
    "bx\x20bxl-tiktok",
    "body",
    "tiktok.com/mkxchl",
    "MkScMediaFlwShow",
    "https://instagram.com/marchell_kvandra",
    "ri-facebook-line",
    "MkPageMediaSocialInstaShow",
    "https://instagram.com/chellgnzxz_",
    "300615BUMHDZ",
    ".MkPreloader",
    "style",
    "fire",
    "3946977OkLUSx",
    "facebook.com/chellgnzxz",
    "MkChatShow",
    "then",
    ".BtnSocialMediax",
    "play",
    "5EYSoJF",
    "getItem",
    "MkAudio",
    "#3085d6",
    "IconSocialMedia",
    "replace",
    ".MkChatHeaderJoin",
    ".MkHeaderBody",
    "TitleSocialMedia",
    "Open\x20Facebook",
    "#999",
    "#d33",
    "https://github.com/mkxchl",
    "8274QjCnpz",
    "575344pukAlL",
    ".MkLinkOverlay",
    ".MkPageMediaSocialInstaOverlay",
    "addEventListener",
    ".MkLink",
    ".MkPageMediaSocialInstaBodyButton",
    "MkLinkShow",
    "getElementById",
  ];
  _0x5a21 = function () {
    return _0x26ac63;
  };
  return _0x5a21();
}
function MkxXxGithub() {
  const _0x30bae9 = _0x1c5833;
  window[_0x30bae9(0x1d2)][_0x30bae9(0x18e)](_0x30bae9(0x195));
}
function MkxXxEms() {
  const _0x2dc398 = _0x1c5833;
  window[_0x2dc398(0x1d2)]["replace"](_0x2dc398(0x1c2));
}
