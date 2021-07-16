// リロード時に直前のスクロール量を復元する
const checkbox = document.getElementById("nav-check"); // サイドパネル開閉ボタン
const y = sessionStorage.getItem("poznote-scroll"); // スクロール量
const b = sessionStorage.getItem("poznote-bottom"); // 底まで行ってたかのフラグ
const uri = sessionStorage.getItem("poznote-uri"); // ロード前の URI
const nav = sessionStorage.getItem("poznote-nav"); // ロード前のサイドパネル開閉状態

if (nav) { // サイドパネル open
  checkbox.checked = true;
}

if (y && location.href === uri) { // スクロールされてた＆ロード前と同じページ
  setTimeout(_ => { // ブラウザの挙動を上書きするための遅延
    if (b) { // 一番下までスクロールされてた場合は追従する
      const bottom = document.body.scrollHeight;
        window.scrollTo(0, bottom);
    } else {
        window.scrollTo(0, y);
    }
  }, "540"); // msec
}

// SS のお掃除
sessionStorage.removeItem("poznote-scroll");
sessionStorage.removeItem("poznote-bottom");
sessionStorage.removeItem("poznote-uri");
sessionStorage.removeItem("poznote-nav");


