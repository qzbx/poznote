## その他

### 引用

地の文
> 引用は
> こんな感じになる

下側の地の文は前に空行を入れないと引用の続きと判定されてしまう

### コードブロック
`npm run start` みたいにインラインでコマンドとか書くのに使ったり、
以下のようにスニペット表示っぽく使ったりする
ほんとは行数とか表示できるやつでもっとマシな外観にしたい（TODO）

```
use actix_web::{web, App, HttpResponse, HttpServer, Responder};

async fn ping() -> impl Responder { // 通信確認用 API Func
    HttpResponse::Ok().body("Pong!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/ping", web::get().to(ping))
    })
    .bind("127.0.0.1:8021")?
    .run()
    .await
}
```

### 水平線
---

### 数式
MathJax
Dollar sign で囲めば tex の記法で書ける
$\frac{\pi}{2} =
  \left( \int_{0}^{\infty} \frac{\sin x}{\sqrt{x}} dx \right)^2 =
  \sum_{k=0}^{\infty} \frac{(2k)!}{2^{2k}(k!)^2} \frac{1}{2k+1} =
  \prod_{k=1}^{\infty} \frac{4k^2}{4k^2 - 1}
$

マクロとかの定義は `js/mathjax_setting.js` 内に設定を書けばよい

数式内のバックスラッシュは2つ書いて1つ分と解釈される？っぽいので注意する
改行するには4つも書く必要がある

$
H =
\begin{pmatrix}
a & b \\\\
c & d
\end{pmatrix}
$

