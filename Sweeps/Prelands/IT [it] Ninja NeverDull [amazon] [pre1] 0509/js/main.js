const firstClick = document.querySelector(".first_question"),
    twoClick = document.querySelector(".two_question"),
    threeClick = document.querySelector(".three_question"),
    firstCheck = document.querySelector(".time_one"),
    secondCheck = document.querySelector(".time_two"),
    threeCheck = document.querySelector(".time_three"),
    pageOne = document.querySelector(".page_one"),
    pageTwo = document.getElementById("page_two"),
    pageThree = document.getElementById("Check"),
    pageBox = document.getElementById("page_box"),
    commentsOne = document.getElementById("comments_display"),
    commentsTwo = document.getElementById("comments_display_one"),
    footer = document.getElementById("fppter_display"),
    oneBox = document.querySelector(".one_box"),
    twoBox = document.querySelector(".two_box"),
    threeBox = document.querySelector(".three_box"),
    fourBox = document.querySelector(".four_box"),
    fiveBox = document.querySelector(".five_box"),
    sixBox = document.querySelector(".six_box"),
    sevenBox = document.querySelector(".seven_box"),
    eightBox = document.querySelector(".eight_box"),
    nineBox = document.querySelector(".nine_box"),
    tenBox = document.querySelector(".ten_box"),
    elevenBox = document.querySelector(".eleven_box"),
    twelvBox = document.querySelector(".tvelw_box"),
    oneModal = document.querySelector(".click_me_pidor"),
    modalWrapp = document.querySelector(".wrapp_modal_box"),
    endGiftAnimation = document.querySelector(".img_gift_wind"),
    blyyyy = document.querySelector(".pop"),
    visiblQuestionOne = () => {
        firstClick.classList.add("b-und"), setTimeout((() => firstClick.style.display = "none"), 100), setTimeout((() => twoClick.classList.add("b-show")), 100)
    },
    visiblQuestionTwo = () => {
        twoClick.classList.add("b-und-two"), setTimeout((() => twoClick.style.display = "none"), 100), setTimeout((() => threeClick.classList.add("b-show-two")), 100)
    },
    visiblPageTwo = () => {
        threeClick.classList.add("b-und-three"), setTimeout((() => {
            pageTwo.style.display = "none", commentsTwo.style.display = "none", pageThree.style.display = "block"
        }), 100), setTimeout((() => {
            firstCheck.classList.add("b-show-two"), firstCheck.style.display = "block"
        }), 2e3), setTimeout((() => {
            secondCheck.classList.add("b-show-two"), secondCheck.style.display = "block"
        }), 3200), setTimeout((() => {
            threeCheck.classList.add("b-show-two"), threeCheck.style.display = "block"
        }), 5200), setTimeout((() => {
            pageThree.style.display = "none", pageBox.style.display = "block", modalWrapp.style.display = "block"
        }), 6e3)
    };
let fddfd = !1;
oneModal.addEventListener("click", (function () {
    modalWrapp.remove();
    const e = document.querySelector(".remove"),
        t = document.querySelector(".two_modal_icon"),
        o = document.querySelector(".two_modal_icon_Two");
    document.querySelector(".gift_box_one"), document.querySelector(".gift_box_gift");
    let c = document.querySelector(".clickKlos"),
        l = !1,
        n = !1;
    document.querySelector(".wrapp_box").addEventListener("click", (function (s) {
        if (!l) {
            let i = s.target;
            i.style.top = "-16px", i.classList.add("no-click"), setTimeout((() => {
                t.style.display = "block"
            }), 2e3), c.addEventListener("click", (function () {
                e.remove();
                let t = document.querySelector(".wrap_box_two");
                t.addEventListener("click", (function (e) {
                    if (!n) {
                        let c = e.target;
                        if (c.classList.contains("no-click")) console.log("test");
                        else {
                            let e = "\n            top: 62px;\n            margin: -31px 0";
                            c.style = e, setTimeout((() => {
                                endGiftAnimation.style.display = "block", t.classList.add("blur"), blyyyy.classList.add("decoration_rotato"), setTimeout((() => {
                                    endGiftAnimation.style.display = "none"
                                }), 2e3)
                            }), 2500), setTimeout((() => {
                                o.style.display = "block"
                            }), 4500), n = !0
                        }
                    }
                }))
            })), l = !0
        }
    }))
}));
const openFAQ = document.querySelector(".open_faq"),
    pageFAQ = document.getElementById("page_faq"),
    imgCloseFAQ = document.querySelector(".decor_img_close"),
    items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const e = this.getAttribute("aria-expanded");
    for (i = 0; i < items.length; i++) items[i].setAttribute("aria-expanded", "false");
    "false" == e && this.setAttribute("aria-expanded", "true")
}
items.forEach((e => e.addEventListener("click", toggleAccordion)));
const opFAQ = () => {
        openFAQ.style.display = "none", pageFAQ.style.display = "block"
    },
    closeFAQ = () => {
        pageFAQ.style.display = "none", openFAQ.style.display = "block"
    };