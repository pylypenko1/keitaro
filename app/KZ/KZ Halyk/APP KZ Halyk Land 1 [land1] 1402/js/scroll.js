(function () {
    /**
     *  This loader connected in app.html for loading first of all.
     *  When APP trigger 'app:loaded' event on documentElement - loader hide
     */
    window.document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    $(".to-form").on('click', function (event) {
        let anchor = $(this);
        $('html, body').animate({
            scrollTop: $(anchor.data('url')).offset().top - 100
        }, 1000);
        event.preventDefault();
    });

})()