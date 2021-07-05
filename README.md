# PozNote

.md で快適にノートを取りたい  
自分用だし作りかけ

## Feature
- .md をリアルタイムで .html に変換する
- ブラウザで見てる .html をホットリロードする
- リロード時にスクロール位置が狂わない（一番下のときはそのまま追従する）
- MathJax 対応
- 点丸をピリカンに置換


## TODO
- index.html が各ファイルへのリンク集みたいになっててほしい
  - 表紙の index.html も .md から作成したいが果たして？
- いい感じ™の CSS 


## 仕組み
`./md/(sample).md` が変更されたら自動で `./html/(sample).html` を作ってくれる


## つかいかた（仮）

### 初期設定
```
% sudo npm i -g livereloadx
% git clone https://github.com/qzbx/poznote.git
% cd poznote
% npm i
```

### 起動
```
% npm run start
```

### 編集
1. ブラウザで `index.html` を開く（まだ作ってない）
1. `poznote/md` 以下で .md を追加したり編集したりする

