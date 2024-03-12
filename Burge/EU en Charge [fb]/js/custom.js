document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    const dnNextBtns = document.querySelectorAll(".dn .next-btn");
    const dnLabels = document.querySelectorAll(".dn label.ao");
    const nextBtns = document.querySelectorAll(".next-btn");
    const dnPrevBtns = document.querySelectorAll(".dn .prev-btn");

    dnNextBtns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            const parentDn = this.closest(".dn");
            parentDn.style.transition = "opacity 0.8s";
            parentDn.style.opacity = 0;
            setTimeout(function () {
                parentDn.style.display = "none";
                const nextDn = parentDn.nextElementSibling;
                nextDn.style.transition = "opacity 0.8s";
                nextDn.classList.add("active");
                nextDn.style.opacity = 1;
            }.bind(this), 900);
        });
    });

    dnLabels.forEach(function (label) {
        label.addEventListener("click", function () {
            const parentDn = this.closest(".dn");
            parentDn.style.transition = "opacity 0.8s";
            parentDn.style.opacity = 0;
            setTimeout(function () {
                parentDn.style.display = "none";
                const nextDn = parentDn.nextElementSibling;
                nextDn.style.transition = "opacity 0.8s";
                nextDn.classList.add("active");
                nextDn.style.opacity = 1;
            }.bind(this), 900);
        });
    });

    dnPrevBtns.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            const parentDn = this.closest(".dn");
            parentDn.style.transition = "opacity 0.8s";
            parentDn.style.opacity = 0;
            setTimeout(function () {
                parentDn.previousElementSibling.classList.add("active");
                parentDn.classList.remove("active");
                const header1 = parentDn.querySelector(".header1");
                header1.style.transition = "opacity 0.8s";
                header1.classList.remove("active");
            }.bind(this), 900);
        });
    });
});
