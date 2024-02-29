document.addEventListener("DOMContentLoaded", () => {
    var scrolling = true;

    $(function () {
        $(".js-range-slider").ionRangeSlider({
            skin: "round",
            min: 200,
            max: 100000,
            from: 200,
            max_postfix: "+",
            postfix: " €",
            grid: true,
            onStart: function (data) {
                $("#calcResult").text(
                    Math.round(data.from * 0.32 + data.from) + " €"
                );
            },
            onChange: function (data) {
                $("#calcResult").text(
                    Math.round(data.from * 0.32 + data.from) + " €"
                );
            },
        });

        const a = document.querySelector(".irs-bar--single");
        const b = document.querySelector(".irs-handle");
        const d = document.querySelector(".irs-single");
        const n = document.querySelector("#calcResult");
        const s = document.querySelector(".irs");
        let c = 0.5;
        let m = -6;
        let f = -10;
        let scrolling = true;
        let forward = true;
        let h = 1.32;
        let screenW = window.screen.width;

        s.addEventListener("click", function () {
            scrolling = false;
        });

        const interval = setInterval(() => {
            if (scrolling) {
                if (forward) {
                    if (screenW < 450 && c < 90) {
                        c += 0.09;
                        f += 0.09;
                        a.style.width = `${c}%`;
                        b.style.left = `${c}%`;
                        d.textContent = `${c.toFixed(3).replace(".", " ")} €`;
                        let p = c * h;
                        n.textContent = `${p.toFixed(3).replace(".", " ")} €`;

                        d.style.left = `${f}%`;
                    } else if (screenW > 450 && c < 98) {
                        c += 0.09;
                        m += 0.09;
                        a.style.width = `${c}%`;
                        b.style.left = `${c}%`;
                        d.textContent = `${c.toFixed(3).replace(".", " ")} €`;
                        let p = c * h;
                        n.textContent = `${p.toFixed(3).replace(".", " ")} €`;

                        d.style.left = `${m}%`;
                    } else {
                        forward = false;
                    }
                } else if (screenW > 450 && c > 0) {
                    c -= 0.09;
                    m -= 0.09;
                    a.style.width = `${c}%`;
                    b.style.left = `${c}%`;
                    d.textContent = `${c.toFixed(3).replace(".", " ")} €`;
                    let p = c * h;
                    n.textContent = `${p.toFixed(3).replace(".", " ")} €`;
                    d.style.left = `${m}%`;
                } else if (screenW < 450 && c > 3) {
                    c -= 0.09;
                    f -= 0.09;
                    a.style.width = `${c}%`;
                    b.style.left = `${c}%`;
                    d.textContent = `${c.toFixed(3).replace(".", " ")} €`;
                    let p = c * h;
                    n.textContent = `${p.toFixed(3).replace(".", " ")} €`;
                    d.style.left = `${f}%`;
                } else {
                    forward = true;
                }
            }
        }, 20);
    });
});