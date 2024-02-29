$(document).ready(function () {
  $('.bq1').click(function () {
    // bq - button question, q1 - question

    $('#q1').fadeOut('slow', function () {
      $('#q2').fadeIn('slow');
    });
  }),
    $('.bq2').click(function () {
      $('#q2').fadeOut('slow', function () {
        $('#q3').fadeIn('slow');
      });
    }),
    $(".bq3").click(function () {
      // Ваш текущий код для bq3
      $("#q3").fadeOut("slow", function () {
        $(".questions").remove();
        $([document.documentElement, document.body]).animate(
          { scrollTop: $(".header").offset().top },
          500
        );
    
        $("#content1").fadeOut("slow", function () {
          $("#content1").remove();
          $("#comments_display_one").remove();
          $("#content2").fadeIn();
          setTimeout(function () {
            $("#result1").fadeIn(1000);
          }, 3000);
          setTimeout(function () {
            $("#result2").fadeIn(1000);
          }, 4100);
          setTimeout(function () {
            $("#result3").fadeIn(1000);
          }, 6000);
    
          setTimeout(function () {
            $("#content2").fadeOut("slow", function () {
              $("#content2").remove();
              if (typeof roulette_ini !== "undefined") {
                rouletteRoot._init();
              } else if (typeof box_ini !== "undefined") {
                boxRoot._init();
              }
    
              $("#content3").fadeIn();
            });
          }, 7100);

          $(".bq4").click(function (event) {
            // Предотвращаем стандартное действие по умолчанию (в данном случае, переход по ссылке)
            event.preventDefault();
          
            // Ваш код для bq4
            $("#content3").css("display", "none");
            $("#content4").css("display", "block");
          });
        });
      });
    });
    
   
    
});
