const fs = require("fs");
const marked = require("marked");
const chokidar = require("chokidar");

// md から生成する html の <body> までの前半部分
const body_bef = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <script src="../js/mathjax_setting.js"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
    <link rel="stylesheet" type="text/css" href="https://tikzjax.com/v1/fonts.css">
    <script src="https://tikzjax.com/v1/tikzjax.js"></script>
    <script src="../js/livereload_setting.js"></script>
  </head>
  <body>
`;
const nav_bef = `<input id="nav-check" class="nav-btn" type="checkbox">
      <label for="nav-check" class="nav-label nav-open"><i class="fas fa-angle-double-right fa-3x"></i></label>
      <label for="nav-check" class="nav-label nav-close"><i class="fas fa-angle-double-left fa-3x"></i></label>
      <nav class="nav">
`;
const nav_aft = `</nav>`;
const article_bef = `<div class="wrapper"><article id="md" class="md">`;
const article_aft = `</article></div>`;

// md から生成する html の </body> 以降の後半部分
const body_aft = `
  </body>
  <script src="../js/scroll_save.js"></script>
  <script defer src="../js/scroll_restore.js"></script>
</html>`;


// watcher 初期設定
const watcher = chokidar.watch('./md/', { // ./md 以下を監視
    ignored:/[\/\\]\./,
    persistent: true,
});

// (name).md を (name).html に変換して ./html 以下に出力
const md2html = (name) => { 
  fs.readFile("./md/" + name + ".md", "utf-8", (e, raw) => { // ファイル読込
    if (e) throw e;
    const md = raw.replace(/、/g, "，").replace(/。/g, "．"); // 点丸をピリカンに置換
    const article = marked(md, { // md から html の <article> 部分を生成
      breaks: true, // 行末で改行する
    });
    fs.readFile("./md/toc.md", "utf-8", (e, toc_raw) => { // TOC 読込
      if (e) throw e;
      const toc = toc_raw.replace(/、/g, "，").replace(/。/g, "．");
      const nav = marked(toc, { // <nav> 部分を生成
        breaks: true, // 行末で改行する
      });
      const html = body_bef + nav_bef + nav + nav_aft + 
        article_bef + article + article_aft + body_aft;

      // 書き込み
      try { fs.statSync("./html/"); } catch(e) { // ./html/ が存在するか確認
        if (e.code === "ENOENT") { // no such file or dir ./html/ が存在しない
          fs.mkdir("html", _ => {}) // ./html/ を作成
        } else if (e) {throw e};
      }
      fs.writeFile("./html/" + name + ".html", html, e => {if (e) throw e;}); // 出力

    });
  });
};

// 起動時に ./md/ 以下を全部見て変換・出力する
const md2html_all = () => {
  fs.readdir("./md/", (e, files) => {
    if (e) throw e;
    for (const path of files) {
      console.log("[Check] " + "md/" + path);
      // ここの path は ./md/ 以下の部分のパス（先頭に md/ は付いてない）ので注意
      md2html(path.split(".")[0]); // hoge.md -> hoge を渡す
    }
  });
};

// ==================== 実行 ====================
// 初期化
md2html_all(); // 最初 /md 内を総なめする

// 監視開始
watcher.on("ready", () => {
    console.log("PozNote is running...");
    watcher.on("add", (path) => { // ファイル追加時
        console.log("[Add] " + path);
        if (path === "md/toc.md") { // toc.md が編集された場合
          md2html_all(); // 全部再レンダリングする
        } else { // それ以外（通常）
          md2html(path.slice(3).split(".")[0]); // md/hoge.md -> hoge を渡す
        };
    });

    watcher.on("change", (path) => { // ファイル編集時
        console.log("[Edit] " + path);
        if (path === "md/toc.md") { // toc.md が編集された場合
          md2html_all(); // 全部再レンダリングする
        } else { // それ以外（通常）
          md2html(path.slice(3).split(".")[0]); // md/hoge.md -> hoge を渡す
        };
    });

    watcher.on("unlink", (path) => { // ファイル削除時
        console.log("[Delete] " + path);
        // 対応する .html を削除する
        fs.unlink("html/" + path.slice(3).split(".")[0] + ".html", _ => {});
    });
});
