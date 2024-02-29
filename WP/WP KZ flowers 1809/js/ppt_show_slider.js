
$(document).ready(function () {


    $('a[href$=".ppt"]').each(function () {
        var href = $(this).attr('href');
        var shortName = href.substring(href.lastIndexOf("/"), href.lastIndexOf("_"));
        if ((href.lastIndexOf("_") >= 0) && href.substring(href.lastIndexOf("/") - shortName.length, href.lastIndexOf("/")) == shortName) {
            if ($("#content img").parent().is("#content a"))
                $('#content img').unwrap();

            var name = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf("."));
            console.log(name);
            $(document).ready(function () {
                $('#' + name).sliderPro({
                    width: 900,
                    height: 553,
                    fade: true,
                    arrows: true,
                    buttons: false,
                    fullScreen: false,
                    shuffle: false,
                    smallSize: 500,
                    mediumSize: 1000,
                    largeSize: 3000,
                    thumbnailArrows: true,
                    autoplay: true
                });
            });
            var path = href.substring(0, href.lastIndexOf("/"));

            var slideCount = name.substring(name.lastIndexOf("_") + 1, href.lastIndexOf("."));

            $(this).replaceWith("<div id='" + name + "' class='slider-pro'><div id='" + name + "1" + "' class='sp-slides'></div><div id='" + name + "2" + "' class='sp-thumbnails'></div></div>");
            for (var i = 0; i < slideCount; i++) {
                $('#' + name + '1').append("<div class='sp-slide'><img class='sp-image' src='/Content/images/blank.gif' data-src='" + path + shortName + "_large_" + i + ".jpg' data-small='" + path + shortName + "_small_" + i + ".jpg' data-medium='" + path + shortName + "_large_" + i + ".jpg' data-large='" + path + shortName + "_large_" + i + ".jpg' data-retina='" + path + shortName + "_large_" + i + ".jpg'/></div>");
                $('#' + name + '2').append("<img class='sp-thumbnail' src='" + path + shortName + "_thumbnail_" + i + ".jpg'/>");
            }
        }
    });
    $('a[href$=".pptx"]').each(function () {
        var href = $(this).attr('href');
        var shortName = href.substring(href.lastIndexOf("/"), href.lastIndexOf("_"));
        if ((href.lastIndexOf("_") >= 0) && href.substring(href.lastIndexOf("/") - shortName.length, href.lastIndexOf("/")) == shortName) {
            if ($("#content img").parent().is("#content a"))
                $('#content img').unwrap();

            var name = href.substring(href.lastIndexOf("/") + 1, href.lastIndexOf("."));
            console.log(name);
            $(document).ready(function () {
                $('#' + name).sliderPro({
                    width: 900,
                    height: 553,
                    fade: true,
                    arrows: true,
                    buttons: false,
                    fullScreen: false,
                    shuffle: false,
                    smallSize: 500,
                    mediumSize: 1000,
                    largeSize: 3000,
                    thumbnailArrows: true,
                    autoplay: true
                });
            });
            var path = href.substring(0, href.lastIndexOf("/"));

            var slideCount = name.substring(name.lastIndexOf("_") + 1, href.lastIndexOf("."));

            $(this).replaceWith("<div id='" + name + "' class='slider-pro'><div id='" + name + "1" + "' class='sp-slides'></div><div id='" + name + "2" + "' class='sp-thumbnails'></div></div>");
            for (var i = 0; i < slideCount; i++) {
                $('#' + name + '1').append("<div class='sp-slide'><img class='sp-image' src='/Content/images/blank.gif' data-src='" + path + shortName + "_large_" + i + ".jpg' data-small='" + path + shortName + "_small_" + i + ".jpg' data-medium='" + path + shortName + "_large_" + i + ".jpg' data-large='" + path + shortName + "_large_" + i + ".jpg' data-retina='" + path + shortName + "_large_" + i + ".jpg'/></div>");
                $('#' + name + '2').append("<img class='sp-thumbnail' src='" + path + shortName + "_thumbnail_" + i + ".jpg'/>");
            }
        }
    });

    $("ul.tabs li a").css("line-height", "normal").css("white-space", "pre-wrap").css("text-align", "center").css("margin-top", "4px");
    if ($("#nav3").parent().is("#tab2") || $("#nav3").parent().is("#tab3") || $("#nav3").parent().is("#tab4")) {
        $("#nav3").css("padding", "0");
        $("#nav3 li").css("margin-left", "0px");
        $("#nav3 li a").css("font-weight", "normal");
    }
});
function screenSize() {
    var w, h; // ќбъ€вл€ем переменные, w - длина, h - высота
    w = (window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth));
    h = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));
    return { w: w, h: h };
}
function hideLoopDialog() {
    $("#loopDiv1,#loopDiv2").hide();
    return false;
}


