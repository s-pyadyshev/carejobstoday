export const videoVimeo = (function () {
  const init = function () {
    if ($('.js-play-video').length) {
      $('.js-play-video').on('click', function () {
        const $this = $(this);
        let iframe = document.querySelector('iframe');
        let player = new Vimeo.Player(iframe);
        $(this).prev('.video__overlay').css('pointer-events', 'all');

        player.play();

        player.on('play', () => {
          $(this).prev().css('opacity', 1);
          $this.fadeOut(300);
          $(this).prev().prev().fadeOut(300);
        });

        player.on('pause', () => {
          $this.fadeIn(300);
          $(this).prev().prev().fadeIn(300);
          $(this).trigger('focus');
        });
      });
    }
  };

  return {
    init,
  };
})();
