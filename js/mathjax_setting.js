// mathjax の設定
MathJax = {
  chtml: {
    matchFontHeight: true, // フォントの高さを自動で合わせる
  },
  tex: {
    inlineMath: [['$', '$']], // $ 囲みで数式モード
    processEscapes: true, // \$ で dollar sign になる
    processEnvironments: false, // 数式モード外でも \begin{xxx} .. \end{xxx} が使える
    macros: { // マクロ定義

      // Algorithm
      if: "{\\mathbf{if}~\\,}",
      then: "{~\\,\\mathbf{then}~\\,}",
      else: "{\\mathbf{else}~\\,}",
      endif: "{\\mathbf{end~\\,if}}",
      for: "{\\mathbf{for}~\\,}",
      to: "{~\\,\\mathbf{to}~\\,}",
      while: "{\\mathbf{while}~\\,}",
      do: "{~~\\mathbf{do}~\\,}",
      algin: "{~\\,\\mathbf{in}~\\,}",
      endfor: "{\\mathbf{end~\\,for}}",
      endwhile: "{\\mathbf{end~\\,while}}",
      return: "{\\mathbf{return}~\\,}",
      break: "{\\mathbf{break}~\\,}",
      function: "{\\mathbf{function}~\\,}",
      endfunction: "{\\mathbf{end~\\,function}}",
      q: "{\\quad}",
      qq: "{\\qquad}",
      qqq: "{\\qquad\\quad}",
      qqqq: "{\\qquad\\qquad}",
      qqqqq: "{\\qquad\\qquad\\quad}",
      qqqqqq: "{\\qquad\\qquad\\qquad}",
      otherwise: "{\\mathbf{otherwise}}",

      // フォント指定
      mbf: ["{\\mathbf{#1}}", 1],
      msf: ["{\\mathsf{#1}}", 1],
      mrm: ["{\\mathrm{#1}}", 1],
      mit: ["{\\mathit{#1}}", 1],
      mtt: ["{\\mathtt{#1}}", 1],
      mcal: ["{\\mathcal{#1}}", 1],
      mbb: ["{\\mathbb{#1}}", 1],
      mhp: "{\\mbox{-}}",

      // 装飾
      p: ["#1^{\\prime}", 1],
      h: ["\\hat{#1}", 1],
      t: ["\\tilde{#1}", 1],

      // 記号
      lra: "{\\;\\longrightarrow\\;}",
      ra: "{\\;\\rightarrow\\;}",
      Ra: "{\\;\\Rightarrow\\;}",
      la: "{\\;\\leftarrow\\;}",
      Lra: "{\\ \\Longrightarrow\\ }",
      xla: ["{\\;\\xleftarrow{#1}\\;}", 1],
      Ord: "{O}",
      orac: "{\\mathcal{O}}",
      none: "{\\mathsf{None}}",
    }
  }
};

