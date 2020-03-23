import { $html } from './_vars.mjs';

/**
 * アンカースクロールを実行する.
 *
 * @param $element リンク要素
 * @param $offsetElement 固定ヘッダなど
 * @param callback 実行時コールバック
 */
export const jsScroll = ($element, $offsetElement, callback) => {
  if ($element.length === 0) return true;

  const hash = `${$element[0].hash}`;
  const isTop = hash === '#top';
  const target = isTop
    ? $html
    : document.getElementById(hash.replace(/^#/, ''));

  if ($.isFunction(callback)) callback();

  if (target) {
    $.smoothScroll({
      offset: $offsetElement.length > 0 ? -$offsetElement.height() : 0,
      scrollTarget: target,
    });

    return false;
  }

  return true;
};
