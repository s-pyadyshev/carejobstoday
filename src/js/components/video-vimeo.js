export const videoVimeo = (function () {
  const init = function () {
    if ($('.js-play-video').length) {
      $('.js-play-video').on('click', function () {
        const $this = $(this);
        let iframe = document.querySelector('iframe');
        let player = new Vimeo.Player(iframe);

        player.play();

        player.on('play', () => {
          $this.fadeOut(300);
        });

        player.on('pause', () => {
          $this.fadeIn(300);
        });
      });
    }
  };

  return {
    init,
  };
})();
