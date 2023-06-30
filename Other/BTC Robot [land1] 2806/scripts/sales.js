var FontLoad = $(document).font_load(['Roboto Slab Regular', 'Roboto Slab Bold', 'SS CTT']);

// Начальные значения
var Save = {};
Save.screen = {};

// Объекты для работы с ними
var Objects = [];

// Функия для работы
var Scroll = function () {
  var e = arguments.length ? arguments[0] : [],
    EventName = e.type;

  var Resize = EventName === 'resize' || Scroll.started == null;

  // if(Resize){ // Перевычислить всё
  //   if(Scroll.started == null){ // Первичный запуск
  //     Scroll.started = true;
  //   }

  //   // Высота браузера
  //   Save.screen.H = Tools.getClientHeight();
  // }

  // Проскроленность
  // Save.screen.scrollTop = Tools.getBodyScrollTop();

  // Само действие
  var O, Percent, min, max;
  for (var i = 0, L = Objects.length; i < L; i++) {
    O = Objects[i];

    if (Resize && O.resize) O.resize();

    // Видимость
    if (
      (Save.screen.scrollTop + Save.screen.H >= O.start && Save.screen.scrollTop <= O.end) ||
      O.ignore_visibility_check
    ) {
      min = O.start - Save.screen.H;
      max = O.end;

      Percent = (Save.screen.scrollTop - min) / (max - min);

      O.action(Percent);
    }
  }
};

$(function () {
  $('a[name="trustlink"]').on({
    click: function (e) {
      e.preventDefault();
      var nonwin = navigator.appName != 'Microsoft Internet Explorer' ? 'yes' : 'no';
      window.open(
        this.href.replace(/https?/, 'https'),
        'welcome',
        'location=' +
          nonwin +
          ',scrollbars=yes,width=517,height=' +
          screen.availHeight +
          ',menubar=no,toolbar=no',
      );
    },
    contextmenu: function () {
      var d = new Date();
      alert(
        'Copying Prohibited by Law - This image and all included logos are copyrighted by trust-guard \251 ' +
          d.getFullYear() +
          '.',
      );
      return false;
    },
  });
});
