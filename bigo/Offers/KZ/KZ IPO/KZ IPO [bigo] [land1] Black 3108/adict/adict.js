
$(document).ready(function () {

   if ($(".alterlink")) {
        $("body").append(
            '<div class="pop-outer">\n' +
            '    <div class="pop-bg"></div>\n' +
            '    <div class="pop-inner">\n' +
            '        <div class="pop-close">X</div>\n' +
            '        <div class="pop-inner__in">\n' +
            "\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>"
        );
    }
    $(".alterlink").click(function (e) {
        e.preventDefault();
        var pol = $(this).attr("href");
        var nam = $(this).html();
        posY = $(window).scrollTop();
        $("body").css({
            overflow: "hidden",
        });
        $.ajax({
            type: "post",
            url: pol,
            success: function (res) {
                $(".pop-outer").addClass("active");
                $(".pop-inner__in ").html(res);
            },
        });
    });
    $(".pop-close").click(closePop);
    $(".pop-bg").click(closePop);

    function closePop() {
        $("body").css({
            overflow: "auto",
        });
        $("html, body").animate(
            {
                scrollTop: posY + "px",
            },
            0
        );
        $(".pop-inner__in ").animate(
            {
                scrollTop: 0 + "px",
            },
            0
        );
        $(".pop-outer").removeClass("active");
        $(".pop-inner__in ").html(" ");
    }

    var posY = 0;
    $(".cookie").click(function () {
        posY = $(window).scrollTop();
        $("body").css({
            overflow: "hidden",
        });
        $(".cookie-policy-pop").addClass("modal-open");
    });
    $(".terms__close").click(function () {
        $("body").css({
            overflow: "auto",
        });
        $("html, body").animate(
            {
                scrollTop: posY + "px",
            },
            0
        );
        $(".terms").removeClass("modal-open").css("display", "none");
        $(".modal-bg").addClass("modal-open").css("display", "none");
    });
    $(".scroll-top-btn").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $(".hero").offset().top + "px",
            },
            500
        );
    });
    $(".pops").click(function () {
        posY = $(window).scrollTop();
        $("body").css({
            overflow: "hidden",
        });
        var r = $(this).attr("data-pop");
        $(".terms[data-pop=" + r + "]")
            .addClass("modal-open")
            .css("display", "block");
        $(".modal-bg").addClass("modal-open").css("display", "block");
    });
    window.onscroll = function () {
        $(window).scrollTop() > 200
            ? $(".navBarSlider").addClass("slided")
            : $(".navBarSlider").removeClass("slided");
    };
    if ($.exitIntent) {
        $.exitIntent("enable");
        var fr = false;
        var timeout = 120000;
        if ($("html").hasClass("test")) {
            timeout = 1000;
        }
        console.log(timeout);
        $(".exit_popup .close").click(function () {
            posY = $(window).scrollTop();
            $(".exit_popup").modal("hide").hide().css("display", "none");
            $(".modal-bg").addClass("modal-open").css("display", "none");
        });

        function timeoutWait() {
            setTimeout(function () {
                fr = true;
            }, timeout);
        }

        timeoutWait();
        $(document).bind("exitintent", function () {
            if (!fr) {
                return;
            }
            fr = false;
            timeoutWait();
            posY = $(window).scrollTop();
            $(".exit_popup").modal("show").show().css("display", "block");
            $(".modal-bg").addClass("modal-open").css("display", "block");
        });
    }
    $(".video-insert").each(function () {
        let vid = $(this).attr("data-video");
        let video = $("<video/>");
        let poster = $(this).attr("data-poster");
        video.attr("src", vid);
        video.attr("playsinline", true);
        video.attr("controls", true);
        video.attr("preload", "none");
        video.attr("allowfullscreen", "true");
        poster ? video.attr("poster", poster) : "";
        video.css({
            width: "100%",
            height: "100%",
        });
        $(this).append(video);
        let playBtn = $("<div/>");
        playBtn.addClass("play-btn");
        $(this).append(playBtn);
    });
    let playBtns = document.querySelectorAll(".play-btn");
    for (var i = 0; i < playBtns.length; i++) {
        playBtns[i].addEventListener("click", function () {
            let videoEl = this.parentNode.querySelector("video");
            if (videoEl.paused) {
                videoEl.play();
                this.parentNode.classList.add("play");
            } else {
                videoEl.pause();
                this.parentNode.classList.remove("play");
            }
        });
    }
});


if ($("#youtube-insert").length) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player("youtube-insert", {
            height: "360",
            width: "640",
            videoId: $("#youtube-insert").attr("data-video"),
            events: {
                onReady: onPlayerReady,
            },
            playerVars: {
                controls: 0,
                loop: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
            },
        });
    }

    function onPlayerReady(event) {
        $(".over").click(function () {
            console.log(player, player.getPlayerState());
            if (player.getPlayerState() != 1) {
                player.playVideo();
            } else {
                player.pauseVideo();
            }
        });
    }
}