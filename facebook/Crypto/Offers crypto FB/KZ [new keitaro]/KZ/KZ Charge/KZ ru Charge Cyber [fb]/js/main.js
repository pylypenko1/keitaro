const slid1 = document.getElementById("slide"),
    slide2 = document.getElementById("slide2"),
    slide_form = document.getElementById("slide_form"),
    answer = document.getElementById("answer"),
    next_clide = document.getElementById("next_clide"),
    select = document.querySelectorAll(".select");


next_clide.addEventListener("click", (e) => {
    e.preventDefault();
    slid1.classList.add("dn");
    slide2.classList.remove("dn");
});

// select.forEach((item) => {
//     item.addEventListener("change", (e) => {
//         item.classList.remove("error");
//         console.log('asdasd');
//         answer.value += item.value + '; ';
//     });
// });

// const settingObjForm = {
//         first_name: "",
//         last_name: "",
//         email: "",
//         phone: "",
//         country_code: "",
//         comment: "",
//         respons: "",
//         phonecc: "",
//         site: "",
//         offerId: "",
//         _setParams: function(e) {
//             (this.first_name = document.querySelector('input[name="name"]').value),
//             (this.last_name = document.querySelector(
//                 'input[name="last_name"]'
//             ).value),
//             (this.email = document
//                 .querySelector('input[name="email"]')
//                 .value.toLowerCase()),
//             (this.country_code = document
//                 .querySelector('input[name="code"]')
//                 .value.toUpperCase()),
//             (this.comment = commentVal(e));
//         }
//     },
//     codeCountry = document.querySelectorAll('input[name="code"]'),
//     phonecc = document.querySelectorAll('input[name="phonecc"]'),
//     errorItiMap = [
//         "Неверный номер",
//         "Неверный код страны",
//         "Слишком короткий",
//         "Слишком длинный",
//         "Недопустимый номер"
//     ];

// function itiFlagsAdd(e) {
//     var t = intlTelInput(e, {
//         autoHideDialCode: !1,
//         preferredCountries: ["ru"],
//         separateDialCode: !0,
//         formatOnDisplay: !1,
//         geoIpLookup: function(e) {
//             $.get("https://get.geojs.io/v1/ip/country.json", function() {}).always(
//                 function(t) {
//                     let o = t && t.country ? t.country : "";
//                     document
//                         .querySelectorAll('input[name="code"]')
//                         .forEach((e) => (e.value = o)),
//                         e(o);
//                 }
//             );
//         },
//         initialCountry: "auto",
//         hiddenInput: "full_number",
//         nationalMode: !1,
//         placeholderNumberType: "MOBILE"
//     });
//     e.addEventListener("countrychange", function() {
//         codeCountry.forEach((e) => {
//                 e.value = t.getSelectedCountryData().iso2;
//             }),
//             phonecc.forEach((e) => {
//                 e.value = t.getSelectedCountryData().dialCode;
//             });
//     });
//     let o = e.closest("form");
//     o.addEventListener("submit", function(n) {
//         n.preventDefault();
//         let r = n.target.closest("form"),
//             a = document.querySelector('#full_number'),
//             i = r.querySelector(".phone-eror-mess");
//         if ((r.querySelector('input[name="answer"]'), e.value.trim())) {


//             //    select.forEach((select) => {
//             //      if (select.value == "") {
//             //        select.classList.add("error");
//             //        select.classList.remove("valid");
//             //        settingObjForm.phone = full_number.value;
//             //        settingObjForm._setParams();
//             //
//             //        sendToLog(settingObjForm);
//             //      } else {
//             //        r.value += select.value;
//             //        select.classList.remove("error");
//             //        select.classList.add("valid");
//             //      }
//             //    });
//             //
//             //   allSelected = [...select].every((item) => {
//             //      return item.classList.contains("valid");
//             //    });
//             //
//             //    if (!allSelected) {
//             //      return;
//             //    }



//             if (t.isValidNumber())
//                 console.log(t.isValidNumber()),
//                 e.classList.add("valid"),
//                 e.classList.remove("isValid"),
//                 o.submit();
//             else {
//                 let l = 0 > t.getValidationError() ? 0 : t.getValidationError();
//                 e.classList.remove("valid"),
//                     e.classList.add("isValid"),
//                     (settingObjForm.phone = a.value),
//                     (i.innerHTML = errorItiMap[l]),
//                     settingObjForm._setParams(errorItiMap[l]),
//                     sendToLog(settingObjForm);
//             }
//         } else e.classList.add("isValid"), e.classList.remove("valid"), (settingObjForm.phone = a.value), settingObjForm._setParams(), sendToLog(settingObjForm);
//     });
// }
// async function sendToLog(e) {
//     let resp = await (
//         await fetch(`./`, {
//             method: "POST",
//             body: JSON.stringify(e),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//     ).json();

//     console.log(resp);
// }

// function commentVal(e) {
//     return (window.location.href.split("?")[0], e) ? `${e}` : "";
// }
// const inputsPhone = document.querySelectorAll("#phone");
// inputsPhone.forEach((e) => {
//     itiFlagsAdd(e);
// });




// heaer__link_logo



// async function getCodeIso() {
//     const result = await fetch('https://get.geojs.io/v1/ip/country.json')

//     const respons = await result.json();

//     return respons
// }

// getCodeIso().then((codeIso) => {

//     const iso2code = codeIso.country;
//     // const iso2code = 'LV2';

//     const countryISOs = {
//         DE: {
//             city: "Германии",
//             logo: '<img src="./img/DE/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         BG: {
//             city: "Болгарии",
//             logo: '<img src="./img/BG/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""

//         },
//         FR: {
//             city: "Франции",
//             logo: '<img src="./img/FR/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         IT: {
//             city: "Италии",
//             logo: '<img src="./img/IT/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         ES: {
//             city: "Испании",
//             logo: '<img src="./img/ES/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         EE: {
//             city: "Эстонии",
//             logo: '<img src="./img/EE/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         MD: {
//             city: "Молдовы",
//             logo: '<img src="./img/MD/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         GR: {
//             city: "Греции",
//             logo: '<img src="./img/GR/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         LV: {
//             city: "Латвии",
//             logo: '<img src="./img/LV/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         LT: {
//             city: "Литвы",
//             logo: '<img src="./img/LT/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         HU: {
//             city: "Венгрии",
//             logo: '<img src="./img/HU/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         RO: {
//             city: "Румынии",
//             logo: '<img src="./img/RO/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         BE: {
//             city: "Бельгии",
//             logo: '<img src="./img/BE/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         AT: {
//             city: "Австрии",
//             logo: '<img src="./img/AT/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         CH: {
//             city: "Швейцарии",
//             logo: '<img src="./img/CH/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         GB: {
//             city: "Великобритании",
//             logo: '<img src="./img/GB/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         },
//         IE: {
//             city: "Ирландии",
//             logo: '<img src="./img/IE/logo-img.png" alt="Logo">',
//             flag: "",
//             footer: ""
//         }
//     };

//     const box_logo = document.getElementById("box_logo");

//     const line_box = document.getElementById("line_box");
//     const line_box_footer = document.getElementById("line_box_footer");
//     const wrappeer_line = document.getElementById("wrappeer-line");


//     if (countryISOs[iso2code] !== undefined) {
//         box_logo.innerHTML = ` ${countryISOs[iso2code].logo}`;


//         line_box.innerHTML = ` <img src="./img/${iso2code}/line.png" alt="">`;
//         line_box_footer.innerHTML = ` <img src="./img/${iso2code}/line.png" alt="">`;

//         wrappeer_line.innerHTML = `<p style="font-weight: 400;text-transform: uppercase;">КИБЕРПОЛИЦИЯ ${countryISOs[iso2code].city}  </p>`

//     } else {
//         box_logo.innerHTML = `<img src="./img/logo-img.png" alt="Logo">`;
//         line_box.innerHTML = ``;
//         line_box_footer.innerHTML = ``;

//         wrappeer_line.innerHTML = `<p style="font-weight: 400;text-transform: uppercase;">международная киберполиция   </p>`

//     }
// });