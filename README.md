# PozNote

- md -> html リアルタイム変換
- 複数ファイル（md）をディレクトリ分けして管理したい
- 数式レンダーしてほしい
- hot reload してほしい（viewer 側のスクロール位置も保持してほしい）
- index.html が各ファイルへのリンク集みたいになっててほしい
- いい感じ™の CSS 

現状：  
`./md/(sample).md` が変更されたら自動で `./html/(sample).html` を作ってくれる

`node poznote.js` で起動する。  
`./md/` 以下を監視してるので、そこのファイルを追加・編集すると html ができる
