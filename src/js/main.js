import {
  modals,
  tabs,
  forms,
  changeModalState,
  timer,
  images
} from './modules';

window.addEventListener('DOMContentLoaded', () => {
  const modalState = {};
  const deadline = '2023-08-24';

  changeModalState(modalState);
  modals(modalState);
  tabs({
    headerSelector: '.glazing_slider',
    tabsSelector: '.glazing_block',
    contentsSelector: '.glazing_content',
    activeClass: 'active',
    display: 'block'
  });
  tabs({
    headerSelector: '.decoration_slider',
    tabsSelector: '.no_click',
    contentsSelector: '.decoration_content > div > div',
    activeClass: 'after_click',
    display: 'block'
  });
  tabs({
    headerSelector: '.balcon_icons',
    tabsSelector: '.balcon_icons_img',
    contentsSelector: '.big_img > img',
    activeClass: 'do_image_more',
    display: 'inline-block'
  });
  forms(modalState);
  timer('.container1', deadline);
  images();
});
