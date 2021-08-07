// mathjax の設定
MathJax = {
  chtml: {
    matchFontHeight: false, // フォントの高さを自動で合わせる
  },
  tex: {
    inlineMath: [['$', '$']], // $ 囲みで数式モード
    processEscapes: true, // \$ で dollar sign になる
    processEnvironments: false, // 数式モード外でも \begin{xxx} .. \end{xxx} が使える
    macros: { // マクロ定義

      // Algorithm
      if: "{\\mathbf{if}~}",
      then: "{~\\mathbf{then}~}",
      else: "{\\mathbf{else}~}",
      endif: "{\\mathbf{end~if}}",
      for: "{\\mathbf{for}~}",
      to: "{~\\mathbf{to} ~}",
      do: "{~\\mathbf{do} ~}",
      endfor: "{\\mathbf{end~for}}",
      return: "{\\mathbf{return}~}",
      q: "{\\quad}",
      qq: "{\\qquad}",
      qqq: "{\\qquad\\quad}",

      // フォント指定
      mbf: ["{\\mathbf{#1}}", 1],
      mrm: ["{\\mathrm{#1}}", 1],
      mit: ["{\\mathit{#1}}", 1],
      mcal: ["{\\mathcal{#1}}", 1],
      mbb: ["{\\mathbb{#1}}", 1],
      mhp: "{\\mbox{-}}",

      // 装飾
      p: ["{{#1}^\\prime}", 1],
      h: ["\\hat{{#1}}", 1],

      // 記号
      lra: "{\\longrightarrow}",
      ra: "{\\;\\rightarrow\\;}",
      la: "{\\;\\leftarrow\\;}",
      Lra: "{\\Longrightarrow}",
      Ord: "{O}",

      // 他
      set: ["{\\{#1\\}}", 1],
    }
  }
};

