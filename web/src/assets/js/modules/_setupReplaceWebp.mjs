// webp対応の有無
let webp = null;
// アルファ付きwebp対応の有無
let webpAlpha = null;

// webpの置き換え処理
const replaceWebp = () => {
  // まだサポートの有無が取れていなければ戻る
  if (webp === null || webpAlpha === null) return;

  // すべてのimg要素について処理する
  $('img').each(function() {
    const img = $(this);

    // 画像のURL
    let src = img.attr('src');

    // フォールバックの際の拡張子（通常はjpg）
    const fallback = img.attr('data-webp-fallback');

    // 画像読み込み済みかどうか
    let loaded = true;

    if (/\/empty\.png$/.test(src)) {
      // 空画像の場合は遅延読み込みになっているのでそっちを見る
      src = img.attr('data-src');
      loaded = false;
    }

    // 拡張子がwebpでなければ対応不要
    if (!/\.webp$/.test(src)) return;

    // webp対応ブラウザであれば何もしない
    if (webp) return;

    // webp未対応なので画像の拡張子を置き換える
    img.attr(
      loaded ? 'src' : 'data-src',
      src.replace(/webp$/, fallback || 'jpg'),
    );
  });
};

/**
 * WebPの置き換え処理のセットアップ
 */
export const setupReplaceWebp = () => {
  if (!window.Modernizr) return;

  window.Modernizr.on('webp', (x) => {
    webp = !!x;

    if (webpAlpha !== null) {
      // アルファ付きが判明していれば置き換える
      replaceWebp();
    } else if (!webp) {
      // webp未対応であればアルファ付きwebpも未対応でいい
      webpAlpha = false;
      // 置き換える
      replaceWebp();
    }
  });

  // アルファ付きwebp対応判明時のイベント処理
  window.Modernizr.on('webpalpha', (x) => {
    webpAlpha = !!x;

    // webp対応が判明していれば置き換える
    if (webp !== null) {
      replaceWebp();
    }
  });
};
