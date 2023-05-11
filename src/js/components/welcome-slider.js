import Swiper, { Pagination, EffectFade } from "swiper";

export const welcomeSlider = (function () {
  const init = function () {
    const welcomeSwiper = new Swiper(".js-welcome-slider", {
      modules: [Pagination, EffectFade],
      pagination: {
        el: ".swiper-pagination",
        clickable: "true",
        bulletElement: "button",
        renderBullet(index, className) {
          return `<button class="pagination__link ${className}">${
            index + 1
          }</button>`;
        },
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  };

  return {
    init,
  };
})();
