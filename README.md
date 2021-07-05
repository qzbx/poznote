# PozNote

- hot reload してほしい（viewer 側のスクロール位置も保持してほしい）
- index.html が各ファイルへのリンク集みたいになっててほしい
  - 表紙の index.html も .md から作成したい
- いい感じ™の CSS 

現状：  
`./md/(sample).md` が変更されたら自動で `./html/(sample).html` を作ってくれる

`node poznote.js` で起動する。  
`./md/` 以下を監視してるので、そこのファイルを追加・編集すると html ができる
