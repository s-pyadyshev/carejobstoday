import Swiper, {Pagination} from 'swiper';

export const welcomeSlider = (function () {
  const init = function () {
    const welcomeSwiper = new Swiper('.js-welcome-slider', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        bulletElement: 'button',
        renderBullet(index, className) {
          return `<button class="pagination__link ${className}">${
            index + 1
          }</button>`;
        },
      },
    });
  };

  return {
    init,
  };
})();
