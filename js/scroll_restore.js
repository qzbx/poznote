// リロード時に直前のスクロール量を復元する
const elm = document.getElementById("md");
const y = sessionStorage.getItem("poznote-scroll"); // スクロール量
const b = sessionStorage.getItem("poznote-bottom"); // 底まで行ってたかのフラグ
const uri = sessionStorage.getItem("poznote-uri"); // ロード前の URI

if (y && location.href === uri) { // スクロールされてた＆ロード前と同じページ
  if (b) { // 一番下までスクロールされてた場合は追従する
    const bottom = elm.scrollHeight;
    elm.scroll(0, bottom)
  } else {
    elm.scroll(0, y);
  }
}

// SS のお掃除
sessionStorage.removeItem("poznote-scroll");
sessionStorage.removeItem("poznote-bottom");
sessionStorage.removeItem("poznote-uri");


