// mathjax の設定
MathJax = {
  chtml: {
    matchFontHeight: false, // フォントの高さを自動で合わせる
  },
  tex: {
    inlineMath: [['$', '$']], // $ 囲みで数式モード
    processEscapes: true, // \$ で dollar sign になる
    processEnvironments: false, // 数式モード外でも \begin{xxx} .. \end{xxx} が使える
  }
};

