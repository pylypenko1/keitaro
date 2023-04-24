$(".header__channel").mouseenter(function(){
    $(this).addClass("header__channel--is-expanded");
})

$('.header__channel').mouseleave(function () {
    $(this).removeClass("header__channel--is-expanded");
})

$(".header__icon--icon-hamburger").click(function(){
    $("channels-list").toggleClass("expanded");
})

jQuery(".mv-date").fitText(3.2);


$.fn.resizeiframe=function(){
    $(this).load(function() {
        $(this).height( $(this).contents().find("body").height() );
    });
    $(this).click(function() {
        $(this).height( $(this).contents().find("body").height() );
    });

}
jQuery( window ).resize(function() {
    $('.iframe-full').resizeiframe();
				});


                $(document).ready(function(){

                    $('.iframe-full').ready(function() {
                        $('.iframe-full').resizeiframe();
                    });
                });


                

