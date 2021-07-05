# PozNote

- hot reload してほしい（viewer 側のスクロール位置も保持してほしい）
- index.html が各ファイルへのリンク集みたいになっててほしい
  - 表紙の index.html も .md から作成したい
- いい感じ™の CSS 

現状：  
`./md/(sample).md` が変更されたら自動で `./html/(sample).html` を作ってくれる

`node poznote.js` で起動する。  
`./md/` 以下を監視してるので、そこのファイルを追加・編集すると html ができる

### つかいかた（仮）

初期設定
```
% sudo npm i -g livereloadx
% git clone https://github.com/qzbx/poznote.git
% cd poznote
% npm i
```

起動
```
% npm run start
```

`poznote/md` 以下で .md を追加したり編集したりする

