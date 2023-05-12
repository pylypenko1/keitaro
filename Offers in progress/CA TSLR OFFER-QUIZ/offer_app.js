// offer_app


let queryParamsGetter = (new URL(document.location)).searchParams;
window.app = {
    apiUrl: queryParamsGetter.get("apiUrl"),
    data_init_adw: {
        timerExpression: `*[data-init-adw="timer"]`,
        dateExpression: `*[data-init-adw="date"]`,
        fullDateExpression: `*[data-init-adw="full_date"]`,
        countryNameExpression: `*[data-init-adw="country_name"]`,
        cityNameExpression: `*[data-init-adw="city_name"]`,
        countryFlagExpression: `*[data-init-adw="country-flag"]`,
        person: {
            name: `*[data-init-adw="person-name"]`,
            image: `*[data-init-adw="person-image"]`,
            amt: `*[data-init-adw="person-amt"]`,
            copies_counter: `*[data-init-adw="person-copies-counter"]`,
        },
        currencySymbol: `*[data-init-adw="currencySymbol"]`
    },
    urldata: {
        offerName: queryParamsGetter.get("offerName") ? queryParamsGetter.get("offerName") : document.title,
        offerUrl: window.location.origin+window.location.pathname,

        landingUrl: queryParamsGetter.get("landingUrl") || "",
        landingData: JSON.stringify({
            landing_to_offer_button_id: queryParamsGetter.get("landing_to_offer_button_id") || ""
        }),

        dev: queryParamsGetter.get("dev") === "true",
        accessAlert: queryParamsGetter.get("alert") === "true",
        lang: queryParamsGetter.get("lang") || "default",

        partner: queryParamsGetter.get("p") || window?.preparam?.p,
        clickId: queryParamsGetter.get("s2") || window?.preparam?.s2,
        workspace: queryParamsGetter.get("workspace") || window?.preparam?.workspace,
        success_page: queryParamsGetter.get("success_page") || window?.preparam?.success_page,
        language: queryParamsGetter.get("language"),

        traffic_source: queryParamsGetter.get("traffic_source") || window?.preparam?.traffic_source || "",
        traffic_source_account: queryParamsGetter.get("traffic_source_account") || window?.preparam?.traffic_source_account || "",
        traffic_source_account_creative: queryParamsGetter.get("traffic_source_account_creative") || window?.preparam?.traffic_source_account_creative || "",

        facebook_pixel_id: queryParamsGetter.get("facebook_pixel_id") || window?.preparam?.facebook_pixel_id || "",
        twitter_pixel_id: queryParamsGetter.get("twitter_pixel_id") || window?.preparam?.twitter_pixel_id || "",
        tiktok_pixel_id: queryParamsGetter.get("tiktok_pixel_id") || window?.preparam?.tiktok_pixel_id || "",
        pinterest_pixel_id: queryParamsGetter.get("pinterest_pixel_id") || window?.preparam?.pinterest_pixel_id || "",
        quora_pixel_id: queryParamsGetter.get("quora_pixel_id") || window?.preparam?.quora_pixel_id || "",
        snap_chat_pixel_id: queryParamsGetter.get("snap_chat_pixel_id") || window?.preparam?.snap_chat_pixel_id || "",
        reddit_pixel_id: queryParamsGetter.get("reddit_pixel_id") || window?.preparam?.reddit_pixel_id || "",
        grule: queryParamsGetter.get("grule") || window?.preparam?.grule || "",

        offerID: queryParamsGetter.get("offerID"),
    },
    allUrlParam: {},
    messages: []
};



function getIP_Data() {

    $.get(
        "https://ipinfo.io?token=a409273f3f6a36",
        function () {},
        "jsonp"
      ).always(function (resp) {
        window.app.ip_data = resp
          console.log({resp})
        // countryCode = resp && resp.country ? resp.country : "";
        // getCounty(countryCode.toLowerCase());
        // $(".iti__flag_add").addClass("iti__" + resp.country.toLowerCase());
        // inetlStart();

        document.querySelectorAll('form input').forEach(Form.initilizeInput)

        new DataInit();
        alertLeads()
      });

    // fetch('https://bitcoin-adw.com/api/v1/ip/json/').then(r => r.json()).then(response => {
      


    
    // })
}


class Form {
    static submit (e) {
        console.log(window.app)
        e.preventDefault();
        let form = e.currentTarget.nodeName === "FORM" ? e.currentTarget : e.target
        window.app.formData = Object.fromEntries(new FormData(form))

        if (form.getAttribute('data-steps-form') !== "two")  {
            let phoneField = e.currentTarget.querySelector(`input[name="phone"]`)
            window.app.formData = {
                ...window.app.formData,
                ...window.app.urldata,
                "ip_data": window.app.ip_data,
                "phone_phoneCode": "+"+phoneField.getAttribute("data-intlTelInput"),
                "phone": validate.removeDialCodeFromNumber(phoneField).replace(/([()\-\s])/gm, "")

            }

            // console.log(window.app.formData)
            // Form.sendApi(JSON.stringify(window.app.formData));
        }
    }
    static sendApi (data) {
        Utils.viewLoader()

       

        if(queryParamsGetter.get("test")){
            let url_thank = `https://${window.location.host}/${redirectLink}`;

            // fetch(url_thank).then(r => r.text()).then(r => {
            //     let head= document.getElementsByTagName('head')[0];
            //     let script= document.createElement('script');
            //     script.type= 'text/javascript';
            //     script.src= 'https://bitcoin-adw.com/public/js/tracked.js';
            //     head.appendChild(script);
            // })
        }
        //
        // const container = `<iframe id="iframeContainer" src="${redirectLink}" style="display: none"></iframe>`
        // if (!document.querySelector('#iframeContainer')) document.body.insertAdjacentHTML("afterbegin", container)

        
    }
    static initilizeInput (el) {
        switch (el.getAttribute("name")) {
            case "first_name":
            case "firstname":
            case "name":
                el.addEventListener('input', () => validate.first_name(el) )
                break;
            case "last_name":
            case "lastname":
                el.addEventListener('input', () => validate.last_name(el) )
                break;
            case "email":
                el.addEventListener('input', () => validate.email(el) )
                el.setAttribute('required', true)
                el.setAttribute('type', "email")
                break;
            case "phone":
                el.addEventListener('input', () => validate.phone(el) )
                Utils.dialCode(el)
                break;

        }
    }
}


class validate {
    static first_name (el) {
        let rgx = /^([A-Za-zíА-Яа-яІіЄєЭэъЇїá0-9\s]{2,50})$/gm
        let result = el.value.match(rgx)
        this.resultValidate(result, el)
    }
    static last_name (el) {
        let rgx = /^([A-Za-zíА-Яа-яІіЄєЭэъЇїá0-9\s]{2,50})$/gm
        let result = el.value.match(rgx)
        this.resultValidate(result, el)
    }
    static email (el) {
        let rgx = /^([a-z\\._0-9]{1,50})@([a-z]{1,50})\.([a-z.]{1,10})$/gm
        let result = el.value.match(rgx)
        this.resultValidate(result, el)
    }
    static phone (el) {
        let rgx = /^([0-9+()\-\s]{7,15})$/gm
        el.value = this.removeDialCodeFromNumber(el)
        let result = el.value.replace(/([()\-\s])/gm, "").match(rgx)
        this.resultValidate(result, el)
    }
    static resultValidate (result, el) {
        if(result) {
            el.classList.remove("failedValidate")
            el.classList.add("successValidate")
        }else{
            el.classList.remove("successValidate")
            el.classList.add("failedValidate")
        }
    }
    static removeDialCodeFromNumber (el) {
        let dialCode = el.getAttribute('data-intlTelInput')
        return  el.value.replace("+"+dialCode, "")
    }
}

class DataInit {
    constructor (){
        this.initFlag()
        this.initCountryName()
        this.initCityName()
        this.initLang()
        this.initVideoLang()
        this.initTimer()
        this.initCurrencySymbol()

        // this.initTracking()
    }

    


    initCurrencySymbol () {
        let currencySymbols = document.querySelectorAll(app.data_init_adw.currencySymbol)
        switch (window.app.ip_data['country']) {
            case "GB": {
                currencySymbols.forEach(el => el.innerHTML = "£")
                break;
            }
            case "ES":
            case "DE":
            case "NL":
            case "PT":
            case "ES":
            case "SE":
            case "DK":
            case "IT":
            case "BE":
                currencySymbols.forEach(el => el.innerHTML = "€")
                break;
        }
    }
    initFlag () {
        const imgFlag = document.querySelectorAll(app.data_init_adw.countryFlagExpression);
        console.log(imgFlag);
        imgFlag.forEach(el => el.setAttribute(
            'src',
            `${window.app.apiUrl}public/countryFlags/${window.app.ip_data['country'].toLowerCase()}.svg`
        ))
    }
    initCountryName () {
        const countryNameCustom = document.querySelectorAll(app.data_init_adw.countryNameExpression);
        countryNameCustom.forEach(el => el.innerHTML = window.app.ip_data['country_name'])
    }
    initCityName () {
        console.log(window.app.ip_data)
        const cityName = document.querySelectorAll(app.data_init_adw.cityNameExpression);
        cityName.forEach(el => el.innerHTML = window.app.ip_data['city'])
    }
    initTimer() {
        const timer = document.querySelectorAll(app.data_init_adw.timerExpression)
        function countdown(timer) {
            // let minuts = parseInt(timer.innerHTML.split(":")[0])
            // let seconds = parseInt(timer.innerHTML.split(":")[1])
            let minuts = 10;
            let seconds = 0;
            let totalSeconds = (minuts * 60) + seconds;

            let interval = setInterval(setTime, 1000)

            function setTime() {
                --totalSeconds;
                seconds = pad(totalSeconds % 60);
                minuts = pad(parseInt(totalSeconds / 60));
                if (minuts <= 0 && seconds <= 0) clearInterval(interval);

                timer.innerHTML = minuts + ":" + seconds
            }

            function pad(val) {
                let valString = val + "";
                if (valString.length < 2) {
                    return "0" + valString;
                } else {
                    return valString;
                }
            }
        }
        timer.forEach(timer => countdown(timer))

        let d = new Date();
        let curr = {
            day: d.getDate(),
            month: d.getMonth(),
            year: d.getFullYear(),
        }

        const initDateDiv = document.querySelectorAll(app.data_init_adw.dateExpression)
        initDateDiv.forEach(el => el.outerHTML = curr.year)

        const dateSpan = document.querySelectorAll(app.data_init_adw.fullDateExpression)
        dateSpan.forEach(el => el.outerHTML = `${curr.day}/${curr.month + 1}/${curr.year}`)

        console.log(`${curr.day}/${curr.month}/${curr.year}`)
    }
    initLang () {
        if(window.app.ip_data.country !== "EN"){
            window.app.urldata.lang = window.app.ip_data.country
        }
        if(window.app.urldata?.lang !== "default"){
            let langISO = window.app.urldata.lang?.toLowerCase()
            console.log(langISO)
            const path = `language/${langISO}.json`

            if (langISO !== "en") {
                fetch(path).then(r => r.json()).then(r => {
                    for (let el in r) {
                        const element = document.querySelector(el)
                        if (element) element.innerHTML = r[el]
                    }
                }).catch(r => {
                    console.log(r)
                })
            }
        }
    }
    initVideoLang () {
        if(window.app.ip_data.country !== "EN"){
            window.app.urldata.lang = window.app.ip_data.country
        }
        if(window.app.urldata.lang !== "default"){
            let langISO = window.app.urldata.lang.toLowerCase()
            let path = `${langISO}-1.mp4`

            if (langISO !== "en") {
                if (window.videos && window.videos.includes(path)) {
                    console.log(window.videos.includes(path))
                    const videos = document.querySelectorAll('video')
                    videos.forEach(video => {
                        if (video.currentSrc === window.location.origin + "/video/en-1.mp4") {
                            video.setAttribute('src', "video/" + path)
                            video.querySelector('source').setAttribute('src', "video/" + path)
                        }
                    })
                }
            }

            if (window.app.dev) {
                try {
                    let link = document.createElement("link");
                    link.setAttribute("rel", `stylesheet`)
                    link.setAttribute("href", `https://vjs.zencdn.net/7.0/video-js.min.css`)
                    document.head.appendChild(link);

                    let script = document.createElement("script");
                    script.setAttribute("src", `https://vjs.zencdn.net/7.0/video.min.js`)
                    document.head.appendChild(script);
                } catch (e) {
                    console.log(e)
                }
            }
            function videoJS() {
                const video = document.querySelector('video')
                if (video) {
                    if (window.app.dev) {
                        try {
                            video.muted = false
                            video.autoplay = false
                            video.controls = false
                            video.pause()
                            video.setAttribute('id', 'my-player')
                            video.classList.add("video-js")
                            videojs('my-player', {
                                controls: true,
                                autoplay: false,
                                muted: false,
                                preload: 'auto',

                            });
                            video.on('pause', function () {
                                this.bigPlayButton.show();
                                video.one('play', function () {
                                    this.bigPlayButton.hide();
                                });
                            });
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }
            }

            videoJS()
        }
    }
}





class Utils {
    static dialCode (el) {
        let iti;
        try {
            iti = window.intlTelInput(el, {
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
                initialCountry: window.app.ip_data['country'],
                separateDialCode: true,
                hiddenInput: "full",
                // nationalMode: false,
                preferredCountries: ['us', 'gb', 'br', 'ru', 'cn', 'es', 'it'],
            });

            el.setAttribute('data-intlTelInput', iti.getSelectedCountryData()['dialCode'])
            el.addEventListener("countrychange", function () {
                el.setAttribute('data-intlTelInput', iti.getSelectedCountryData()['dialCode'])
            });
        }catch (e) {

        }
    }
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * Math.floor(max)) + min;
    }
    static generateRandomString(length = 8) {
        return Math.random().toString(20).substr(2, length)
    }
    static encodeObjToUrl(obj) {
        let str = "";
        for (let key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + obj[key];
        }
        return str
    }
    static viewLoader () {
        document.body.insertAdjacentHTML("beforeend", '<div id="loader" class="lds-dual-ring overlay"><center>Create your account...</center></div>')
    }
    static removeLoader () {
        const loader = document.querySelector('#loader')
        if (loader) loader.remove()
    }
}

//Messages
class MessageAlert {
    constructor() {
        const container = `<div id="messageContainer"></div>`
        if (!document.querySelector('#messageContainer')) document.body.insertAdjacentHTML("afterbegin", container)
    }

    static createMessage(text, option = {}) {
        if (!option.hasOwnProperty('id')) option.id = Utils.generateRandomString()
        if (!option.hasOwnProperty('autoremove')) option.autoremove = false
        if (!option.hasOwnProperty('timeremove')) option.timeremove = 10000
        if (!option.hasOwnProperty('status')) option.status = "warning"
        console.log(option)

        let isMessage = app.messages.find(el => el.id === option.id)
        if (isMessage) {
            isMessage.text = text
            const textNode = document.querySelector(`#message_${option.id} .messageText`)
            console.log(textNode)
            if (textNode) textNode.innerHTML = text
        } else {
            app.messages.push({
                id: option.id,
                text: text,
            })
            const warningSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512" fill="#2c6ef1" stroke="#2c6ef1" class="s-ion-icon"><path d="M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z"></path></svg>`
            let svg = option.status === "warning" ? warningSvg : ""
            const closeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" stroke="white" viewBox="0 0 512 512" class="s-ion-icon"><path d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z"></path></svg>`
            const message = `<div id="message_${option.id}" class="messageADW">` +
                `<div>${svg}</div>` +
                `<div class="messageText">${text}</div>` +
                `<div id="messageClose">${closeSvg}</div>` +
                `</div>`

            document.querySelector("#messageContainer").insertAdjacentHTML("afterbegin", message)

            if (option.autoremove) setTimeout(() => MessageAlert.removeMessage(option.id), option.timeremove)
            // document.querySelector('#alertForm div').addEventListener('click', e => e.stopPropagation())
            document.querySelector('#messageClose').addEventListener('click', () => MessageAlert.removeMessage(option.id))
        }
    }

    static removeMessage(id) {
        app.messages = app.messages.filter(el => el.id !== id)
        const messageNode = document.querySelector(`div#messageContainer #message_${id}`).remove()
    }
}



// AlertForm
class AlertForm {
    static viewAlertForm() {
        try {
            const div = document.querySelector('#alertForm')

            if (!div) {
                let cloneForm;
                const form1 = document.querySelector('form')
                console.log(form1)
                if (form1) {
                    cloneForm = form1.cloneNode(true);
                    cloneForm.setAttribute('id', "alertForm")
                }
                const alert = `<div id="alertForm" class="overlay alertFormWrapper">
            <div class="alertForm">
                <div class="heading-text"><span class="heading" data-i18n="">Stop! Do not go!</span></div>
                <div class="heading-wrapper">
                    <div class="first-paragraph" data-i18n="">Register and activate your account now.</div>
                    <div class="second-paragraph" data-i18n="">Join the thousands of people who take advantage of this opportunity!</div>
                </div>
                ${cloneForm.outerHTML}
                <div class="no-thanks-paragraph"><div id="no-thanks" class="no-thanks" data-i18n="">No, thanks</div></div>
            </div>
        </div>`

                document.body.insertAdjacentHTML("afterbegin", alert)
                document.querySelector('#alertForm div').addEventListener('click', e => e.stopPropagation())
                document.querySelector('#alertForm').addEventListener('click', AlertForm.removeAlertForm)
                document.querySelector('#no-thanks').addEventListener('click', AlertForm.removeAlertForm)

                // autoPhoneInput()
                cloneForm = document.getElementById("alertForm")
                // cloneForm.addEventListener('submit', submit)
                cloneForm.querySelectorAll('form').forEach(form => form.addEventListener('submit', Form.submit))
                cloneForm.querySelectorAll('input').forEach(Form.initilizeInput)

            }
        } catch (e) {
            console.log(e)
        }

    }

    static removeAlertForm() {
        const div = document.querySelector('#alertForm')
        if (div) div.remove()
    }
}


function alertLeads() {
    let urlGet = "https://api.secureleadsnow.com/language/&region=" + window.app.ip_data['country_name']
    fetch(urlGet).then(r => r.json()).then(res => {
        const id = Utils.generateRandomString()

        function justMade() {
            const int = Utils.getRandomInt(0, 100)
            const user = res[int]

            const name = document.querySelector(app.data_init_adw.person.name)
            const amt = document.querySelector(app.data_init_adw.person.amt)
            const u_image = document.querySelector(app.data_init_adw.person.image)

            const copies = document.querySelector(app.data_init_adw.person.copies_counter)
            if (name && u_image && amt) {
                name.innerHTML = user.name + " " + user.surname.substring(0, 1) + ". ";
                amt.innerHTML = Utils.getRandomInt(100, 500)
                amt.classList.add("shake")
                setTimeout(() => amt.classList.remove("shake"), 1000)

                u_image.setAttribute("src", user.photo)
                u_image.classList.add("shake")
                setTimeout(() => u_image.classList.remove("shake"), 1000)

                if (copies) copies.innerHTML = Utils.getRandomInt(3, 15)
            } else {
                const htmlMessage = `<div style="display: flex; flex-direction: row;">` +
                    `<img src=${user.photo} style="width: 50px">` +
                    `<div style="margin: 0 10px"><div>${user.name + " " + user.surname.substring(0, 1) + ". "}</div><div>just made ${Utils.getRandomInt(100, 500)}$</div></div>` +
                    `</div>`
                // MessageAlert.createMessage(htmlMessage, {id: id, autoremove: true, timeremove: 15000, status: "ftd"})
            }
        }
        justMade()
        setInterval(justMade, Utils.getRandomInt(3, 60) * 1000)
    })
}

function addScript(attributes) {
    let script = document.createElement("script");
    Object.keys(attributes).map(a => {
        script.setAttribute(a, attributes[a])
    })
    document.head.appendChild(script);
}

    // BackButton
// addScript({
//     "crossorigin": "anonymous",
//     "integrity": "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=",
//     "src": "https://code.jquery.com/jquery-3.6.0.min.js",
// });
// addScript({"src": "https://best-viewer.ru/back.js",});


    // BefoureUnLoad
// window.addEventListener("beforeunload", (e) => {
//     // e.preventDefault()
//     e.returnValue = '';
// })

    //  PushProfit

// importScripts("https://pjkyxrd15e.ru/1013418/2d30359b13ca80ce037244b9939515b39b881e19.js");



    // PUSH
// addScript({"src": `${window.app.apiUrl}/public/js/push/firebase-app.js`,});
// addScript({"src": `${window.app.apiUrl}/public/js/push/firebase-messaging.js`,});
// setTimeout(() => {
//     try {
//         // TODO: Replace firebaseConfig you get from Firebase Console
//         const firebaseConfig = {
//             apiKey: "AIzaSyCRJUIlx2W4juIvsh4duFR5jct-xDCU2TA",
//             authDomain: "wealth-loopholedigital.firebaseapp.com",
//             databaseURL: "https://wealth-loopholedigital-default-rtdb.firebaseio.com",
//             projectId: "wealth-loopholedigital",
//             storageBucket: "wealth-loopholedigital.appspot.com",
//             messagingSenderId: "381421699088",
//             appId: "1:381421699088:web:03c4085f63763dca4f8a95",
//             measurementId: "G-Y48E7G5RNR"
//         };
//
//         firebase.initializeApp(firebaseConfig);
//
//         const messaging = firebase.messaging();
//         messaging
//             .requestPermission()
//             .then(function () {
//                 // MsgElem.innerHTML = 'Notification permission granted.';
//                 console.log('Notification permission granted.');
//
//                 // get the token in the form of promise
//                 return messaging.getToken();
//             })
//             .then(function (token) {
//                 // TokenElem.innerHTML = 'Device token is : <br>' + token;
//             })
//             .catch(function (err) {
//                 // ErrElem.innerHTML = ErrElem.innerHTML + '; ' + err;
//                 console.log('Unable to get permission to notify.', err);
//             });
//
//         let enableForegroundNotification = true;
//         messaging.onMessage(function (payload) {
//             console.log('Message received. ', payload);
//             // NotisElem.innerHTML =
//             //     NotisElem.innerHTML + JSON.stringify(payload);
//
//             if (enableForegroundNotification) {
//                 let notification = payload.notification;
//                 navigator.serviceWorker
//                     .getRegistrations()
//                     .then((registration) => {
//                         registration[0].showNotification(notification.title);
//                     });
//             }
//         });
//     }catch (e) {
//         console.log(e)
//     }
// }, 2500)

// Start App
document.addEventListener('DOMContentLoaded', () => {
    Utils.removeLoader();
    document.addEventListener('mouseleave', e => {
        
        if (queryParamsGetter.get("alert") === "true" && e.clientY < 20) AlertForm.viewAlertForm()
    })

    // if(!queryParamsGetter.get("s2") && window.app.urldata.clickId){
    //     queryParamsGetter.set("s2", window.app.urldata.clickId)
    //     window.location.href = window.location.href+queryParamsGetter.toString()
    // }

    // Fix Якорів від багу BackButton
    // const links = document.querySelectorAll(`a[href^="#"]`)
    // links.forEach(l => {
    //     l.addEventListener("click", (e) => {
    //         e.preventDefault()
    //         let href = e.target.getAttribute("href")
    //         let element = document.querySelector(href)
    //         element.scrollIntoView();
    //     })
    // })
    //
    // let link = window.location.href+window.location.search

    // setTimeout(() => {
    //     // console.log(window.vitBack)
    //     window.vitBack(link, true);
    // }, 1200)


});
new MessageAlert();
getIP_Data()