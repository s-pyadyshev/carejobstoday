import Swiper, { Pagination } from "swiper";

export const welcomeSlider = (function () {
  const init = function () {
    const welcomeSwiper = new Swiper(".js-welcome-slider", {
      modules: [Pagination],
      pagination: {
        el: ".js-welcome-slider-pagination",
        clickable: "true",
        bulletElement: "button",
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
  };

  return {
    init,
  };
})();
