const _0x597843 = _0x6edb;
(function (_0x5d72f3, _0x58b074) {
  const _0x4ee4a5 = _0x6edb,
    _0x30d38a = _0x5d72f3();
  while (!![]) {
    try {
      const _0x35cd38 =
        -parseInt(_0x4ee4a5(0x16a)) / 0x1 +
        parseInt(_0x4ee4a5(0x196)) / 0x2 +
        (parseInt(_0x4ee4a5(0x15e)) / 0x3) * (-parseInt(_0x4ee4a5(0x175)) / 0x4) +
        (parseInt(_0x4ee4a5(0x18b)) / 0x5) * (parseInt(_0x4ee4a5(0x16c)) / 0x6) +
        (parseInt(_0x4ee4a5(0x16e)) / 0x7) * (parseInt(_0x4ee4a5(0x168)) / 0x8) +
        parseInt(_0x4ee4a5(0x156)) / 0x9 +
        parseInt(_0x4ee4a5(0x191)) / 0xa;
      if (_0x35cd38 === _0x58b074) break;
      else _0x30d38a["push"](_0x30d38a["shift"]());
    } catch (_0x3fc1b2) {
      _0x30d38a["push"](_0x30d38a["shift"]());
    }
  }
})(_0x1166, 0x88ba6);
const MkHeaderBody = document[_0x597843(0x179)](_0x597843(0x16d)),
  MkSpotify = document[_0x597843(0x179)](_0x597843(0x18e)),
  MkPreloader = document["querySelector"](".MkPreloader"),
  MkLink = document[_0x597843(0x179)](".MkLink"),
  MkLinkOverlay = document[_0x597843(0x179)](_0x597843(0x162)),
  MkLinkContentBodyLink = document["querySelector"](_0x597843(0x155)),
  MkSupport = document[_0x597843(0x179)](_0x597843(0x16f)),
  MkSupportOverlay = document[_0x597843(0x179)](_0x597843(0x176)),
  MkChatHeaderJoin = document[_0x597843(0x179)](_0x597843(0x183)),
  MkGame = document[_0x597843(0x179)](_0x597843(0x18f)),
  MkGameOverlay = document["querySelector"](_0x597843(0x14e)),
  MkScMediaFlw = document[_0x597843(0x179)](".MkScMediaFlw"),
  MkScMediaFlwOverlay = document[_0x597843(0x179)](_0x597843(0x169)),
  MkPageMediaSocialInsta = document[_0x597843(0x179)](_0x597843(0x159)),
  MkPageMediaSocialInstaOverlay = document[_0x597843(0x179)](_0x597843(0x184)),
  MKProject = document[_0x597843(0x179)](_0x597843(0x152)),
  MKProjectOverlay = document[_0x597843(0x179)](_0x597843(0x15d)),
  MkChat = document[_0x597843(0x179)](".MkChat"),
  BtnSocialMediax = document[_0x597843(0x179)](".BtnSocialMediax"),
  body = document["querySelector"](_0x597843(0x182)),
  MkAudio = document[_0x597843(0x180)](_0x597843(0x17a)),
  IconSocialMedia = document[_0x597843(0x180)](_0x597843(0x174)),
  TitleSocialMedia = document[_0x597843(0x180)]("TitleSocialMedia"),
  DescSocialMedia = document[_0x597843(0x180)]("DescSocialMedia"),
  ButtonLlnkSocialMedia = document[_0x597843(0x180)]("ButtonLlnkSocialMedia"),
  selectedIcon = localStorage["getItem"](_0x597843(0x185)),
  iconInsta = _0x597843(0x17b),
  iconFace = _0x597843(0x189),
  iconTkTok = "ri-tiktok-line";
function OpenProject() {
  const _0x2e3683 = _0x597843;
  MKProject["classList"][_0x2e3683(0x165)](_0x2e3683(0x15f)), MkHeaderBody["classList"][_0x2e3683(0x165)](_0x2e3683(0x18c));
}
function OpenFollowed() {
  const _0x279f6c = _0x597843;
  MkScMediaFlw[_0x279f6c(0x18a)][_0x279f6c(0x165)](_0x279f6c(0x190));
}
function OpenInts() {
  const _0x59946b = _0x597843;
  MkPageMediaSocialInsta[_0x59946b(0x18a)]["add"](_0x59946b(0x17e)),
    MkHeaderBody["classList"][_0x59946b(0x165)](_0x59946b(0x18c)),
    MkScMediaFlw["classList"]["remove"](_0x59946b(0x190)),
    (TitleSocialMedia[_0x59946b(0x15a)] = _0x59946b(0x172)),
    (DescSocialMedia["innerHTML"] = _0x59946b(0x166)),
    (IconSocialMedia[_0x59946b(0x154)] = _0x59946b(0x17b)),
    (BtnSocialMediax[_0x59946b(0x15a)] = _0x59946b(0x158)),
    BtnSocialMediax[_0x59946b(0x151)](_0x59946b(0x170), function () {
      const _0x1a8359 = _0x59946b;
      window[_0x1a8359(0x178)][_0x1a8359(0x195)](_0x1a8359(0x16b)), MkPageMediaSocialInsta["classList"][_0x1a8359(0x14d)](_0x1a8359(0x17e)), MkHeaderBody[_0x1a8359(0x18a)][_0x1a8359(0x14d)](_0x1a8359(0x18c));
    });
}
function OpenFace() {
  const _0x20490c = _0x597843;
  MkPageMediaSocialInsta[_0x20490c(0x18a)][_0x20490c(0x165)](_0x20490c(0x17e)),
    MkHeaderBody[_0x20490c(0x18a)][_0x20490c(0x165)](_0x20490c(0x18c)),
    MkScMediaFlw[_0x20490c(0x18a)][_0x20490c(0x14d)](_0x20490c(0x190)),
    (TitleSocialMedia[_0x20490c(0x15a)] = "Marchell\x20Kevandra"),
    (DescSocialMedia[_0x20490c(0x15a)] = "facebook.com/chellgnzxz"),
    (IconSocialMedia[_0x20490c(0x154)] = _0x20490c(0x189)),
    (BtnSocialMediax[_0x20490c(0x15a)] = _0x20490c(0x192)),
    BtnSocialMediax[_0x20490c(0x151)](_0x20490c(0x170), function () {
      const _0x3c8f3f = _0x20490c;
      window[_0x3c8f3f(0x178)][_0x3c8f3f(0x195)](_0x3c8f3f(0x187)), MkPageMediaSocialInsta[_0x3c8f3f(0x18a)]["remove"]("MkPageMediaSocialInstaShow"), MkHeaderBody[_0x3c8f3f(0x18a)]["remove"](_0x3c8f3f(0x18c));
    });
}
function OpenTkTok() {
  const _0x321153 = _0x597843;
  MkPageMediaSocialInsta["classList"][_0x321153(0x165)](_0x321153(0x17e)),
    MkHeaderBody[_0x321153(0x18a)]["add"](_0x321153(0x18c)),
    MkScMediaFlw[_0x321153(0x18a)]["remove"]("MkScMediaFlwShow"),
    (TitleSocialMedia[_0x321153(0x15a)] = _0x321153(0x172)),
    (DescSocialMedia[_0x321153(0x15a)] = _0x321153(0x164)),
    (IconSocialMedia[_0x321153(0x154)] = _0x321153(0x15b)),
    (BtnSocialMediax[_0x321153(0x15a)] = _0x321153(0x157)),
    BtnSocialMediax[_0x321153(0x151)](_0x321153(0x170), function () {
      const _0x358e8b = _0x321153;
      window[_0x358e8b(0x178)][_0x358e8b(0x195)](_0x358e8b(0x181)), MkPageMediaSocialInsta[_0x358e8b(0x18a)]["remove"]("MkPageMediaSocialInstaShow"), MkHeaderBody[_0x358e8b(0x18a)][_0x358e8b(0x14d)]("Hide");
    });
}
function _0x1166() {
  const _0xd1ce40 = [
    "684360RrMTNj",
    "Open\x20Tiktok",
    "Open\x20Instagram",
    ".MkPageMediaSocialInsta",
    "innerHTML",
    "bx\x20bxl-tiktok",
    "#999",
    ".MKProjectOverlay",
    "147hPGmPl",
    "MKProjectShow",
    "MkChatShow",
    "HideLeft",
    ".MkLinkOverlay",
    "isDenied",
    "tiktok.com/mkxchl",
    "add",
    "instagram.com/marchell_kvandra",
    "Warning",
    "271048HHQXMg",
    ".MkScMediaOverlay",
    "615602DnUCqf",
    "https://instagram.com/marchell_kvandra",
    "82722cwHNBf",
    ".MkHeaderBody",
    "7iHwWcU",
    ".MkSupport",
    "click",
    "MkGameShow",
    "Marchell\x20Kevandra",
    "style",
    "IconSocialMedia",
    "57676cdQXKG",
    ".MkSupportOverlay",
    "background",
    "location",
    "querySelector",
    "MkAudio",
    "ri-instagram-line",
    "MkSpotifyShow",
    "MkLinkShow",
    "MkPageMediaSocialInstaShow",
    "isConfirmed",
    "getElementById",
    "https://tiktok.com/@mxchl",
    "body",
    ".MkChatHeaderJoin",
    ".MkPageMediaSocialInstaOverlay",
    "selected-icon",
    "then",
    "https://facebook.com/chellgnzxz",
    "https://github.com/mkxchl",
    "ri-facebook-line",
    "classList",
    "275fWIQtx",
    "Hide",
    "MkSupportShow",
    ".MkSpotify",
    ".MkGame",
    "MkScMediaFlwShow",
    "9204020OzJbWm",
    "Open\x20Facebook",
    "question",
    "#d33",
    "replace",
    "187126SRdxHy",
    "remove",
    ".MkGameOverlay",
    "#3085d6",
    "MkPreloaderShow",
    "addEventListener",
    ".MKProject",
    "https://instagram.com/chellgnzxz_",
    "className",
    ".MkLinkContentBodyLink",
  ];
  _0x1166 = function () {
    return _0xd1ce40;
  };
  return _0x1166();
}
function OpenChat() {
  const _0x58421e = _0x597843;
  MkChat["classList"]["add"](_0x58421e(0x160)), MkChatHeaderJoin[_0x58421e(0x18a)]["remove"]("HideJoin");
}
function OpenGame() {
  const _0xb73d5a = _0x597843;
  MkGame["classList"][_0xb73d5a(0x165)](_0xb73d5a(0x171));
}
function CloseChat() {
  const _0x768fd2 = _0x597843;
  MkChat[_0x768fd2(0x18a)][_0x768fd2(0x14d)](_0x768fd2(0x160));
}
function _0x6edb(_0x59e952, _0x21b235) {
  const _0x1166ab = _0x1166();
  return (
    (_0x6edb = function (_0x6edb1a, _0x5a42e3) {
      _0x6edb1a = _0x6edb1a - 0x14d;
      let _0x3aba53 = _0x1166ab[_0x6edb1a];
      return _0x3aba53;
    }),
    _0x6edb(_0x59e952, _0x21b235)
  );
}
function CloseMkInsta() {
  const _0x47fbce = _0x597843;
  MkPageMediaSocialInsta[_0x47fbce(0x18a)]["remove"](_0x47fbce(0x17e)), MkHeaderBody[_0x47fbce(0x18a)]["remove"](_0x47fbce(0x18c)), MkScMediaFlw["classList"]["add"](_0x47fbce(0x190));
}
function CloseProject() {
  const _0x2b6977 = _0x597843;
  MKProject[_0x2b6977(0x18a)]["remove"](_0x2b6977(0x15f)), MkHeaderBody[_0x2b6977(0x18a)][_0x2b6977(0x14d)](_0x2b6977(0x18c));
}
function OpenLink() {
  const _0x17762d = _0x597843;
  Swal["fire"]({
    title: _0x17762d(0x167),
    text: "Link\x20ini\x20hanya\x20untuk\x20umur\x2018+\x20",
    icon: _0x17762d(0x193),
    showDenyButton: !![],
    showCancelButton: ![],
    confirmButtonColor: _0x17762d(0x14f),
    cancelButtonColor: _0x17762d(0x194),
    confirmButtonText: "Mengerti!",
    denyButtonText: "Kembali",
  })[_0x17762d(0x186)]((_0x1e3dc5) => {
    const _0x16606f = _0x17762d;
    if (_0x1e3dc5[_0x16606f(0x17f)]) MkLink["classList"][_0x16606f(0x165)](_0x16606f(0x17d)), MkHeaderBody[_0x16606f(0x18a)][_0x16606f(0x165)]("Hide");
    else _0x1e3dc5[_0x16606f(0x163)] && MkHeaderBody["classList"][_0x16606f(0x14d)](_0x16606f(0x18c));
  });
}
function OpenSupport() {
  const _0x25ddb7 = _0x597843;
  MkSupport["classList"][_0x25ddb7(0x165)](_0x25ddb7(0x18d)), MkHeaderBody[_0x25ddb7(0x18a)][_0x25ddb7(0x165)](_0x25ddb7(0x18c));
}
function OpenNxtLvl() {
  const _0x5c2036 = _0x597843;
  MkLinkContentBodyLink[_0x5c2036(0x18a)][_0x5c2036(0x165)](_0x5c2036(0x161));
}
function OpenSpotify() {
  const _0xb578cf = _0x597843;
  MkSpotify[_0xb578cf(0x18a)][_0xb578cf(0x165)](_0xb578cf(0x17c)), MkHeaderBody["classList"][_0xb578cf(0x165)](_0xb578cf(0x18c)), (body[_0xb578cf(0x173)][_0xb578cf(0x177)] = _0xb578cf(0x15c));
}
function CloseFollowed() {
  const _0x28a4bc = _0x597843;
  MkScMediaFlw[_0x28a4bc(0x18a)][_0x28a4bc(0x14d)](_0x28a4bc(0x190));
}
function CloseSpotify() {
  const _0x265a04 = _0x597843;
  MkSpotify[_0x265a04(0x18a)]["remove"](_0x265a04(0x17c)), MkHeaderBody[_0x265a04(0x18a)][_0x265a04(0x14d)](_0x265a04(0x18c)), (body["style"][_0x265a04(0x177)] = "#fff");
}
function MkLoader() {
  const _0x157ee3 = _0x597843;
  MkPreloader[_0x157ee3(0x18a)][_0x157ee3(0x165)](_0x157ee3(0x150)),
    MkHeaderBody[_0x157ee3(0x18a)][_0x157ee3(0x165)](_0x157ee3(0x18c)),
    setTimeout(function () {
      const _0x2846d7 = _0x157ee3;
      MkPreloader[_0x2846d7(0x18a)]["remove"](_0x2846d7(0x150)), MkHeaderBody[_0x2846d7(0x18a)][_0x2846d7(0x14d)](_0x2846d7(0x18c)), MkAudio["play"]();
    }, 0x1388);
}
function CloseBtn() {
  const _0x5063fd = _0x597843;
  MkChatHeaderJoin[_0x5063fd(0x18a)]["add"]("HideJoin");
}
function OpenBlog() {
  const _0x5358f5 = _0x597843;
  window[_0x5358f5(0x178)]["reload"]();
}
function CloseSupport() {
  const _0x5319c6 = _0x597843;
  MkSupport["classList"][_0x5319c6(0x14d)](_0x5319c6(0x18d)), MkHeaderBody[_0x5319c6(0x18a)][_0x5319c6(0x14d)](_0x5319c6(0x18c));
}
const hideBottomSheet = () => {
  const _0x2ec645 = _0x597843;
  MkLink[_0x2ec645(0x18a)][_0x2ec645(0x14d)]("MkLinkShow"),
    MkHeaderBody["classList"][_0x2ec645(0x14d)]("Hide"),
    MkGame[_0x2ec645(0x18a)][_0x2ec645(0x14d)](_0x2ec645(0x171)),
    MkScMediaFlw[_0x2ec645(0x18a)]["remove"](_0x2ec645(0x190)),
    MKProject[_0x2ec645(0x18a)][_0x2ec645(0x14d)](_0x2ec645(0x15f));
};
MkLinkOverlay[_0x597843(0x151)](_0x597843(0x170), hideBottomSheet),
  MkGameOverlay[_0x597843(0x151)](_0x597843(0x170), hideBottomSheet),
  MkScMediaFlwOverlay[_0x597843(0x151)](_0x597843(0x170), hideBottomSheet),
  MKProjectOverlay["addEventListener"](_0x597843(0x170), hideBottomSheet),
  MkSupportOverlay["addEventListener"]("click", function () {
    const _0x507bfd = _0x597843;
    MkSupport[_0x507bfd(0x18a)][_0x507bfd(0x14d)]("MkSupportShow"), MkHeaderBody["classList"][_0x507bfd(0x14d)]("Hide");
  });
function MkxXxInsta() {
  const _0x55f1b8 = _0x597843;
  window[_0x55f1b8(0x178)][_0x55f1b8(0x195)](_0x55f1b8(0x153));
}
function MkxXxTiktok() {
  const _0x13e789 = _0x597843;
  window[_0x13e789(0x178)]["replace"]("https://tiktok.com/@mxchl");
}
function MkxXxFacebook() {
  const _0x57c19a = _0x597843;
  window[_0x57c19a(0x178)][_0x57c19a(0x195)](_0x57c19a(0x187));
}
function MkxXxGithub() {
  const _0x53c8a6 = _0x597843;
  window["location"][_0x53c8a6(0x195)](_0x53c8a6(0x188));
}
function MkxXxEms() {
  const _0x2b9197 = _0x597843;
  window[_0x2b9197(0x178)][_0x2b9197(0x195)]("https://ems-links.netlify.app/");
}
