# PozNote

.md で快適にノートを取りたい  
複数の .md ファイルをひとつのプロジェクトとして管理・プレビューしたい

## Feature
- .md をリアルタイムで .html に変換する
- ブラウザで表示している .html をホットリロードする
- リロード時にスクロール位置が狂わない（一番下のときはそのまま追従する）
- MathJax 対応
- 点丸をピリカンに置換（選択可能にしたい TODO）
- サイドバーにファイル横断の目次を表示する

## 仕組み
`./md` 以下を監視して，`./md/(sample).md` が変更されたら自動で `./html/(sample).html` を作成する


## つかいかた

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
1. `poznote/md` 以下に `(filename).md` を作成する
1. ブラウザで `poznote/html` 以下に作成された対応する `(filename).html` を表示する
1. 見ながら `(filename).md` を編集する

目次は `md/toc.md` を編集する  
（実際使うときは `toc.md` 以外のサンプルは消しちゃってOK）
`md/toc.md` ナシでも動くようにしたい（TODO）

## Reference

- livereloadx <https://nitoyon.github.io/livereloadx/>
- HTML5 Reset Stylesheet <http://html5doctor.com/html-5-reset-stylesheet/>


