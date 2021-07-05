const fs = require("fs");
const marked = require("marked");
const chokidar = require("chokidar");

// md から生成する html の <body> までの前半部分
const header = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <script>
    // mathjax の設定
    MathJax = {
      chtml: {
        matchFontHeight: false
      },
      tex: {
        inlineMath: [['$', '$']]
      }
    };
  </script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
  </script>
  <script>
    // livereload の設定
    document.write(
      '<script src="http://' + 
      (location.host || 'localhost').split(':')[0] + 
      ':35729/livereload.js?snipver=1"></' + 
      'script>'
    )
  </script>
  <script>
    // リロードの直前にスクロール量を保存する
    window.onbeforeunload = () => {
      sessionStorage.setItem("poznote-scroll", String(window.pageYOffset));
    };
  </script>
  <script defer>
    // リロード時に直前のスクロール量を復元する
    const y = sessionStorage.getItem("poznote-scroll");
    if (y) {
      const msec = "200"; // 待機時間（msec）
      setTimeout(() => {window.scrollTo(0, y)}, msec);
    }
  </script>
</head>
<body>
`;

// md から生成する html の </body> 以降の後半部分
const footer = `</body>
</html>`;


// chokidar 初期化
const watcher = chokidar.watch('./md/',{ // ./md 以下を監視
    ignored:/[\/\\]\./,
    persistent: true,
});

// (name).md を (name).html に変換して ./html 以下に出力
const md2html = (name) => { 
  fs.readFile("./md/" + name + ".md", "utf-8", (e, raw) => { // ファイル読込
    if (e) throw e;
    const md = raw.replace(/、/g, "，").replace(/。/g, "．"); // 点丸をピリカンに置換
    const body = marked(md, { // md から html の <body> 部分を生成
      breaks: true, // 行末で改行する
    });
    const html = header + body + footer;
    // console.log(html);
    fs.writeFile("./html/" + name + ".html", html, (e) => {if (e) throw e;}); // 出力
  });
};

// 起動時に ./md/ 以下を全部見て変換・出力する
fs.readdir("./md/", (e, files) => {
  if (e) throw e;
  for (const path of files) {
    console.log("[Check] " + "md/" + path);
    // ここの path は ./md/ 以下の部分のパス（先頭に md/ は付いてない）ので注意
    md2html(path.split(".")[0]); // hoge.md -> hoge を渡す
  }
  console.log("Successfully initialized");
})

// 監視開始
watcher.on("ready", () => {
    console.log("PozNote is running...");
    watcher.on("add", (path) => { // ファイル追加時
        console.log("[Add]   " + path);
        md2html(path.slice(3).split(".")[0]); // md/hoge.md -> hoge を渡す
    });

    watcher.on("change", (path) => { // ファイル編集時
        console.log("[Edit]  " + path);
        md2html(path.slice(3).split(".")[0]); // md/hoge.md -> hoge を渡す
    });
});
