const fs = require("fs");
const marked = require("marked");
const chokidar = require("chokidar");

// md から生成する html の <body> までの前半部分
const header = `<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
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


// 監視開始
watcher.on("ready", () => {

    console.log("md2html is running...");

    watcher.on("add", (path) => { // ファイル追加時
        console.log("[Add]  " + path);
        md2html(path.slice(3).split(".")[0]); // md/hoge.md -> hoge を渡す
    });

    watcher.on("change", (path) => { // ファイル編集時
        console.log("[Edit] " + path);
        md2html(path.slice(3).split(".")[0]); // md/hoge.md -> hoge を渡す
    });
});
