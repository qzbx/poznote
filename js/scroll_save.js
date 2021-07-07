// リロードの直前にスクロール量を保存する
window.onbeforeunload = () => {

  const elm = document.getElementById("md");
  const bottom = elm.scrollHeight - elm.clientHeight; // 一番下まで行ってた場合の位置

  // セッションストレージに保存
  sessionStorage.setItem("poznote-scroll", String(elm.scrollTop));
  sessionStorage.setItem("poznote-uri", String(location.href));

  if (elm.scrollTop >= bottom) { // 一番下まで行ってた場合は追従する
    sessionStorage.setItem("poznote-bottom", "true"); // SS にフラグを保持
  }
};
