// リロードの直前にスクロール量を保存する
window.onbeforeunload = () => {

  const posy = window.scrollY;
  const bottom = document.body.scrollHeight - window.innerHeight; // 一番下まで行ってた場合の位置
  const checkbox = document.getElementById("nav-check"); // サイドパネル開閉ボタン

  // セッションストレージに保存
  sessionStorage.setItem("poznote-scroll", posy);
  sessionStorage.setItem("poznote-uri", String(location.href));
  if (checkbox.checked) { // サイドパネル open
    sessionStorage.setItem("poznote-nav", "true");
  }

  if (posy >= bottom) { // 一番下まで行ってた場合は追従する
    sessionStorage.setItem("poznote-bottom", "true"); // SS にフラグを保持
  }
};
