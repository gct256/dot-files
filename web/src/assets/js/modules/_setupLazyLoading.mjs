import { $win } from './_vars.mjs';

let layzr = null;

/**
 * 画像遅延読み込みのセットアップ
 *
 * @param debug trueの場合はクリックでロード
 */
export const setupLazyLoading = (debug) => {
  if (!window.Layzr) return;

  if (layzr === null) {
    layzr = window.Layzr({ normal: 'data-src' });
  }

  $win.on(debug ? 'click' : 'load', function() {
    layzr
      .update()
      .check()
      .handlers(true);
  });
};
