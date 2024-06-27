document.addEventListener("DOMContentLoaded", function () {
    const floatingWindow = document.querySelector(".floating-windows-u5M");
    const allowAllCookieButton = document.getElementById("allow-all-cookie-u5M");
    const rejectAllButton = document.getElementById("reject-all-u5M");
    const cookieSettingsButton = document.getElementById("cookie-settings-text-u5M");
    const modal = document.getElementById("modal-u5M");
    const modalClose = document.getElementById("modal-close-u5M");
    const acceptAllCookiesButton = document.getElementById("accept-all-cookies-u5M");
    const switchCheckboxes = document.querySelectorAll(".switch-u5M");


    const allCookiesAccepted = localStorage.getItem("allCookiesAccepted");
    if (allCookiesAccepted === "true") {
        switchCheckboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
    }

    acceptAllCookiesButton.addEventListener("click", function () {
        switchCheckboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });

        localStorage.setItem("allCookiesAccepted", "true");
    });


    const isWindowClosed = localStorage.getItem("windowClosed");
    if (isWindowClosed === "true") {
        floatingWindow.style.display = "none";
    }
    if (localStorage.getItem("windowClosed") === null) {
        floatingWindow.style.display = "block";
    }

    acceptAllCookiesButton.addEventListener("click", function () {
        switchCheckboxes.forEach(function (checkbox) {
            checkbox.checked = true;
        });
        modal.style.display = "none";
        floatingWindow.style.display = "none";
        localStorage.setItem("windowClosed", "true");
    });

    modalClose.addEventListener("click", function () {
        modal.style.display = "none";
    });

    allowAllCookieButton.addEventListener("click", function () {
        floatingWindow.style.display = "none";
        localStorage.setItem("windowClosed", "true");
        modal.style.display = "none";
    });

    rejectAllButton.addEventListener("click", function () {
        floatingWindow.style.display = "none";
        localStorage.setItem("windowClosed", "true");
    });

    cookieSettingsButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    const accordions = document.querySelectorAll(".accordion-header-u5M");
    accordions.forEach(function (accordion) {
        const body = accordion.nextElementSibling;
        const icon = accordion.querySelector(".accordion-icon-u5M");


        accordion.addEventListener("click", function () {

            accordions.forEach(function (otherAccordion) {
                if (otherAccordion !== accordion) {
                    otherAccordion.nextElementSibling.style.display = "none";
                    otherAccordion.querySelector(".accordion-icon-u5M").innerHTML = "&#8744;";
                }
            });

            if (body.style.display === "none" || body.style.display === "") {
                body.style.display = "block";
                icon.innerHTML = "&#8743;";
            } else {
                body.style.display = "none";
                icon.innerHTML = "&#8744;";
            }
        });

        if (body.style.display === "block") {
            icon.innerHTML = "&#8743;";
        } else {
            icon.innerHTML = "&#8744;";
        }
    });


    const saveCurrentSettingsButton = document.getElementById("save-current-settings-u5M");

    saveCurrentSettingsButton.addEventListener("click", function () {
        modal.style.display = "none";
        localStorage.setItem("windowClosed", "true");
        floatingWindow.style.display = "none";
    });

    acceptAllCookiesButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
});

const floatingBox = document.querySelector(`.floating-windows-box-u5M`);
const cookieText = document.querySelector(`.cookie-text-u5M`);

if (floatingBox) {
    const computedStyle = window.getComputedStyle(floatingBox);
    if (computedStyle.flexDirection === "row") {
        cookieText.style.width = "80%";
    } else if (computedStyle.flexDirection === "column") {
        cookieText.style.width = "100%";
    }
}