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
      // 関数名
      mac: "{\\mathsf{MAC}}",
      cdmac: "{\\mathsf{CDMAC}}",
      tscdmac: "{\\mathsf{TSCDMAC}}",
      fn: ["{\\mathsf{#1}}", 1],
      dgtm: "{\\textsf{DirectGTM}}",
      xgtm: "{\\textsf{XOR-GTM}}",
      cmp: "{\\mathsf{cmp}}",
      diff: "{\\mathsf{diff}}",
      tag: "{\\mathsf{Tag}}",
      ver: "{\\mathsf{Ver}}",
      sver: "{\\mathsf{SVer}}",
      det: "{\\mathsf{Det}}",
      kg: "{\\mathsf{KG}}",
      tvuf: "{\\mathsf{tvuf}}",
      tsuf: "{\\mathsf{tsuf}}",
      duf: "{\\mathsf{duf}}",
      adv: ["{\\mathbf{Adv}^{#1}\_{#2}}", 2],

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

      // 他
      rb: ["{(\\hspace{0.08em}#1\\hspace{0.08em})\\hspace{0.1em}}", 1],
      cb: ["{\\{\\hspace{0.06em}#1\\hspace{0.06em}\\}}", 1],
      sb: ["{[\\hspace{0.08em}#1\\hspace{0.08em}]}", 1],
      bin: "{\\{\\hspace{0.06em}0,\\, 1\\hspace{0.06em}\\}}",
      size: ["{|\\hspace{0.12em}#1\\hspace{0.12em}|}", 1],
      mx: ["{\\mathbf{#1}_{{#2},\\,{#3}}}", 3],

      len: ["{|\\hspace{0.12em}#1\\hspace{0.12em}|}", 1],
      blen: ["{|\\hspace{0.12em}#1\\hspace{0.12em}|\_{{\\mathsf{bit}}}}", 1],

      // ccmac
      ccmac: "{\\mathsf{CCMAC}}",
      oract: "{\\mathcal{O}^{\\mathsf{MAC}_K}_{T}}",
      oracv: "{\\mathcal{O}^{\\mathsf{MAC}_K}_{V}}",
      oracdt: "{\\mathcal{O}^{\\mathsf{CDMAC}_K}_{T}}",
      oracdv: "{\\mathcal{O}^{\\mathsf{CDMAC}_K}_{V}}",
      oracd: "{\\mathcal{O}^{\\mathsf{CDMAC}_K}_{D}}",
      oracct: "{\\mathcal{O}^{\\mathsf{CCMAC}_K}_{\\mathit{CT}}}",
      oraccv: "{\\mathcal{O}^{\\mathsf{CCMAC}_K}_{\\mathit{CV}}}",
      oracc: "{\\mathcal{O}^{\\mathsf{CCMAC}_K}_{C}}",
      ccmacn: "{\\mathsf{Naive}}",
      ccmace: "{\\mathsf{EC}}",

    }
  }
};

