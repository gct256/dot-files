import { $win } from './_vars.mjs';

/**
 * スクロール位置に応じてHTMLにクラス名を追加・削除する
 *
 *  @param $element 対象要素
 * @param scrolledClass HTML要素に追加するクラス名
 * @param threshold しきい値
 */
export const updateClassOnScroll = (
  $element,
  scrolledClass = 'scrolled',
  threshold = 0,
) => {
  $element.toggleClass(scrolledClass, $win.scrollTop() > threshold);
};
