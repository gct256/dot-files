import { jsScroll } from './modules/_jsScroll.mjs';
import { setupLazyLoading } from './modules/_setupLazyLoading.mjs';
import { setupReplaceWebp } from './modules/_setupReplaceWebp.mjs';
import { updateClassOnScroll } from './modules/_updateClassOnScroll.mjs';
import { $win, $html } from './modules/_vars.mjs';

setupLazyLoading();
setupReplaceWebp();

$(() => {
  $('.js-scroll').each(function() {
    jsScroll($(this));
  });

  $win.on('scroll,resize', () => {
    updateClassOnScroll($html);
  });
});
