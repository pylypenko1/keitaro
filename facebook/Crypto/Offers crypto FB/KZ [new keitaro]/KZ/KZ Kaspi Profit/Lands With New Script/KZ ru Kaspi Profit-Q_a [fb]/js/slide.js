!(function (e) {
  e(document).ready(function () {
      e('#card .slide .item').on('click', function (t) {
          t.preventDefault(),
              (k = e(this).parents('.slide').index()),
              k++,
              setTimeout(() => e('#card .slide').removeClass('active'), 1e3),
              setTimeout(
                  () => e('#card .slide').eq(k).addClass('active'),
                  1e3
              );
      }),
          e('#card .quest .item').on('click', function (t) {
              t.preventDefault(),
                  (quest = e(this).parents('.quest')),
                  quest.find('.item').removeClass('active'),
                  e(this).addClass('active');
          });
  });
})(jQuery);
