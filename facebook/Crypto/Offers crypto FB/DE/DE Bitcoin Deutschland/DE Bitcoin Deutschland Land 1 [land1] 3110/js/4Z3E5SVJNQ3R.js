var __HOST = '', tBodyEl, tMobileBody, countryName, currency;
var ipdata = {"city":"None","state":"None","country":"None","country_code":"None","phone_code":{"name":"None","dial_code":"None","code":"None","city":"None","state":"None","symbol":"None","vtt":"None"},"currency":{"name":"None","symbol":"None"},"currency_left_pos":false,"race_set":1,"vtt":"None","country_bitcoin_video_container_top":{"287":{"-404px":["de","at","ch","fr"]},"400":{"-430px":["de","at","ch","fr"],"-450px":["ar","cl","co","cr","es","mx","pa","pe","pr","ru","it","br"]},"450":{"-430px":["de","at","ch","fr"]},"540":{"-430px":["de","at","ch"],"-450px":["ar","cl","co","cr","es","mx","pa","pe","pr","ru","fr","it","br"]}},"tree_boxes_holder_h4_font_size":{"400":{"18px":["de","at","ch"]}},"frequently_head_button_font_size":{"18px":["de","at","ch"]},"format":"DD\/MM\/YYYY","city_first":false} 

function startData(cn, ci, cr) {
	countryName = cn;
	
	if(cr != '$' && cr != '€' && cr != '£') currency = '$';
	else currency = cr;
	
	setupHeaderWarning();
	regionCall();
	changeBidAsk();
	tBodyEl = $("tbody");
	tMobileBody = $(".results-mobile");
	setupTableContent();
	convertCurrencyOnLoad();
	setInterval(function() {
		changeBidAsk(currency);
	}, 5000);
}

var counter = 0, rand, error = false;
function regionCall() {
		var requestURL;
		if(!error) requestURL = 'https://uinames.com/api/?region='+countryName+'&ext&amount=50';
		else requestURL = 'https://uinames.com/api/?region=england&ext&amount=50';
		function reqListener () {
		  var myObj = JSON.parse(this.responseText);
		  if(myObj.error == 'Region or language not found') {
			  error = true;
			  regionCall('England');
			  return;
		  }
		  setInterval(function() {
			  $('img[data-subject="image"]').attr('src',myObj[counter].photo);
			  $('img[data-subject="image"]').removeClass().addClass('tada animated').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
				  $(this).removeClass();
			  });
			  $('span[data-subject="name"]').html(myObj[counter].name + ' ' +myObj[counter].surname.charAt(0) + '.');
			  $('span[data-subject="name"]').removeClass().addClass('fadeIn animated').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
				  $(this).removeClass();
			  });
			  rand = Math.floor(Math.random() * 450) + 50;
			  $('span[data-subject="amt"]').html(currency + rand);
			  $('span[data-subject="amt"]').removeClass().addClass('tada animated').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
				  $(this).removeClass();
			  });
			  counter++;
			  if(counter >= 49) counter++;
		  }, 4000);
		}
		
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", requestURL);
		oReq.send();
}

var usdt_btc;
function changeBidAsk() {
    $.ajax({
        url: "https://poloniex.com/public?command=returnTicker",
        type: "get",
        success: function(e) {
            usdt_btc = e.USDT_BTC;
            var bid = currency + parseFloat(usdt_btc.highestBid).toFixed(2);
            var ask = currency + parseFloat(usdt_btc.lowestAsk).toFixed(2);
            var old_bid = $("#bid-number").text();
            var old_ask = $("#ask-number").text();
            if (old_bid !== bid) {
                $("#bid-number").text(bid);
                $("#bid-number").removeClass().addClass("flip animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    $(this).removeClass();
                });
            }
            if (old_ask !== ask) {
                $("#ask-number").text(ask);
                $("#ask-number").removeClass().addClass("flip animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    $(this).removeClass();
                });
            }
        },
        error: function(e) {
                $("#bid-number").text('6532.56');
                $("#bid-number").removeClass().addClass("flip animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    $(this).removeClass();
                });
                $("#ask-number").text('6593.52');
                $("#ask-number").removeClass().addClass("flip animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    $(this).removeClass();
                });
        },
        complete: function() {}
    });
}

(function () {

    function IsNumeric(input) {
        return (input - 0) == input && ('' + input).replace(/^\s+|\s+$/g, "").length > 0;
    }

    function IsCharacters(input) {
        re = /^[A-Za-z]+$/;
        if (re.test(input)) {
            return true;
        } else {
            return false;
        }
    }

    function isValidCharacter(txt) {
        var regExp = /^[a-zA-Z0-9]*$/
        return regExp.test(txt);
    }

    if (typeof window.CustomEvent === "function") {
        return false;
    }

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
var currency_left_pos = true;
var race_set = 1;
var country_bitcoin_video_container_top = {};
var tree_boxes_holder_h4_font_size = {};
var frequently_head_button_font_size = {};
if (ipdata.currency_left_pos != undefined) {
    currency_left_pos = ipdata.currency_left_pos;
}
if (ipdata.race_set != undefined) {
    race_set = ipdata.race_set;
}
if (ipdata.country_bitcoin_video_container_top != undefined) {
    country_bitcoin_video_container_top = ipdata.country_bitcoin_video_container_top;
}
if (ipdata.tree_boxes_holder_h4_font_size != undefined) {
    tree_boxes_holder_h4_font_size = ipdata.tree_boxes_holder_h4_font_size;
}
if (ipdata.frequently_head_button_font_size != undefined) {
    frequently_head_button_font_size = ipdata.frequently_head_button_font_size;
}
var force_en = getURLParameter("en");
force_en = (force_en == 1) ? true : false;
var pixdis = getURLParameter("pixdis");
var pixid = getURLParameter("pixid");
var pixval = getURLParameter("pixval");
if (pixid == null) {
    pixid = "0000000000000";
}
if (pixval == null) {
    pixval = 0.5;
}
if (pixdis == null) {
    pixdis = 0;
}

function _RegistrationDone(data) {
    if (typeof pixel_reg !== "undefined") {
        $("body").append(pixel_reg);
    }
    $('[data-init="broker-url"]').attr("onclick", 'location.href = "' + data.redirect_url + '";');
    $('[data-init="broker-logo"]').each(function () {
        var obj = $(this);
        var imgurl = "shared-images/brokers/" + data.broker_image;
        obj.attr("src", imgurl);
    });
    $('[data-init="broker-name"]').each(function () {
        var obj = $(this);
        obj.html(data.broker_name);
    });
}

var names = ["Nikolai", "Nikolas", "Nile", "Nils", "Noah", "Noe", "Noel", "Nolan", "Norbert", "Norman", "Nyle", "Oakes", "Oakley", "Oberon", "Octavio", "Oisin", "Olaf", "Oli", "Oliver", "Ollie", "Olly", "Omar", "Kye", "Kylar", "Kyle", "Kylen", "Kyler", "Kyran", "Kyrin", "Kyron", "Lacey", "Lachlan", "Lake", "Lamar", "Lamont", "Joel", "Joey", "Johan", "John", "Johnathan", "Johnathon", "Johnnie", "Johnny", "Brady", "Braeden", "Bram", "Branden", "Brandon", "Brantley", "Braxton", "Bray", "Brayan", "Brayden", "Braydon", "Braylon", "Breck", "Brendan", "Brenden", "Brendon", "Brennan", "Brennon", "Brent", "Brentley", "Brenton", "Bret", "Brett", "Brevin", "Brevyn", "Brian", "Brice", "Bridie", "Brie", "Brighton", "Brinley", "Brock", "Brod", "Brodie", "Aaliyah", "Aarushi", "Abagail", "Abbey", "Abbi", "Abbie", "Abby", "Abi", "Abia", "Abigail", "Abree", "Abrianna", "Abrielle", "Aby", "Acacia", "Muriel", "Mya", "Myfanwy", "Myla", "Myra", "Myrna", "Myrtle", "Nadene", "Nadia", "Nadine", "Naja", "Nala", "Nana", "Nancy", "Nanette", "Naomi", "Natalia", "Rosemary", "Rosetta", "Rosie", "Rosy", "Rowan", "Rowena", "Roxana", "Roxanne", "Roxie", "Roxy", "Rozlynn", "Ruby", "Rue", "Ruth", "Ruthie", "Ryanne", "Rydel", "Rylee", "Ryleigh", "Rylie", "Sabina", "Sabine", "Sable", "Sabrina", "Sade",],
    _dateToday = moment().format(ipdata.format),
    cryptoCurrencyList = ["EOS/ETH", "LTC/EOS", "ETH/LTC", "BTC/ETH", "XLM/BTC"], translations, currencyRates,
    userCurrency, userCurrencySymbol, exchangeIndex, namesLocalised, validatorFirst, validatorLast, validatorEmail,
    validatorPassword, validatorPasswordConf, validatorPhone;
countryColors = {
    AT: ["#ed2939", "#ed2939"],
    UA: ["#0005ff", "#FDFF38"],
    FR: ["#666666", "#0005ff"],
    AU: ["#00008b", "#ff0000"],
    CH: ["#ff0000", "#ff0000"],
    DE: ["#000000", "#dd0000"],
    DK: ["#c60c30", "#c60c30"],
    GB: ["#ff0000", "#00008b"],
    IE: ["#169b62", "#ff883e"],
    IT: ["#009246", "#ce2b37"],
    NL: ["#ae1c28", "#21468b"],
    NO: ["#ef2b2d", "#002868"],
    NZ: ["#00247d", "#cc142b"],
    SE: ["#006aa7", "#fecc00"],
    ZA: ["#FFB612", "#007A4D"]
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getURLParameter(name) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
        } else {
            if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
    }
    return (query_string[name] != undefined) ? query_string[name] : "";
}

function generateRandom(init) {
    if (namesLocalised !== undefined) {
        var index = Math.floor(Math.random() * namesLocalised.length);
        var rName = namesLocalised[index].name + " " + namesLocalised[index].surname.charAt(0) + ".";
        var name = rName;
    } else {
        var rName = getRandomInt(names.length - 1);
        var name = names[rName];
    }
    var rCrypto = getRandomInt(cryptoCurrencyList.length - 1);
    var rValue = getRandomInt(1000);
    if (typeof translations == "undefined") {
        var just_won = "just won";
    } else {
        var just_won = 'just won a trade..';
    }
    if (init === 1) {
        var currency_new = "<span data-init='visitor-currency-symbol'>" + currency + "</span><span data-init='profit-value-zero'>" + rValue + "</span>";
        return "<tr><td><b><a data-init='table-user-name'>" + name + "</a></b> <a data-i18n='in-table-just-won-trade'>just won a trade</a>...</td><td><b>" + currency_new + "</b></td><td>" + _dateToday + "</td><td>" + cryptoCurrencyList[rCrypto] + '</td><td><img src="./images/AUCF3AKQVJZH.png"/></td></tr>';
    } else {
        var currency_new = currency + (rValue * 3);
        return "<tr><td><b>" + name + "</b> " + just_won + "...</td><td><b>" + currency_new + "</b></td><td>" + _dateToday + "</td><td>" + cryptoCurrencyList[rCrypto] + '</td><td><img src="./images/AUCF3AKQVJZH.png"/></td></tr>';
    }
}

function generateRandomMobile(init) {
    if (namesLocalised !== undefined) {
        var index = Math.floor(Math.random() * namesLocalised.length);
        var rName = namesLocalised[index].name + " " + namesLocalised[index].surname.charAt(0) + ".";
        var name = rName;
    } else {
        var rName = getRandomInt(names.length - 1);
        var name = names[rName];
    }
    var rCrypto = getRandomInt(cryptoCurrencyList.length - 1);
    var rValue = getRandomInt(1000);
    if (typeof translations == "undefined") {
        var just_won = "just won a trade..";
    } else {
        var just_won = 'just won a trade..';
    }
    if (init === 1) {
        var currency_new = "<span data-init='visitor-currency-symbol'>" + currency + "</span><span data-init='profit-value-zero'>" + rValue + "</span>";
        return "<div class=\"single-result\">\n                    <p><b><a data-init='table-user-name'>" + name + "</a></b> <a data-i18n='in-table-just-won-trade'>just won a trade</a>...</p>\n                    <div>\n                        <span>Profit</span>\n                        <span><b>" + currency_new + "</b></span>\n                    </div>\n                    <div>\n                        <span>Trade Time</span>\n                        <span>" + _dateToday + "</span>\n                    </div>\n                    <div>\n                        <span>Cryptocurrency</span>\n                        <span>" + cryptoCurrencyList[rCrypto] + '</span>\n                    </div>\n                    <div>\n                        <span>Results</span>\n                        <span><img src="./images/AUCF3AKQVJZH.png"/></span>\n                    </div>\n                </div>';
    } else {
        var currency_new = currency + (rValue * 3);
        return '<div class="single-result">\n                    <p><b>' + name + "</b> " + just_won + "...</p>\n                    <div>\n                        <span>Profit</span>\n                        <span><b>" + currency_new + "</b></span>\n                    </div>\n                    <div>\n                        <span>Trade Time</span>\n                        <span>" + _dateToday + "</span>\n                    </div>\n                    <div>\n                        <span>Cryptocurrency</span>\n                        <span>" + cryptoCurrencyList[rCrypto] + '</span>\n                    </div>\n                    <div>\n                        <span>Results</span>\n                        <span><img src="./images/AUCF3AKQVJZH.png"/></span>\n                    </div>\n                </div>';
    }
}

function startIntervalForTrade() {
    setInterval(function () {
        tBodyEl.prepend(generateRandom());
        jQuery(tBodyEl.children()[9]).remove();
        tMobileBody.prepend(generateRandomMobile());
        jQuery(tMobileBody.children()[10]).remove();
    }, 3000);
}

function setupTableContent() {
    for (var i = 0; i < 10; i++) {
        tBodyEl.append(generateRandom(1));
        tMobileBody.append(generateRandomMobile(1));
    }
    setTimeout(startIntervalForTrade, 3000);
}

function setupHeaderWarning() {
    $(".todayDate").html(_dateToday);
    var eventTime = moment().add(6, "minutes").add(38, "seconds");
    var currentTime = moment();
    var diffTime = eventTime.diff(currentTime);
    var duration = moment.duration(diffTime, "milliseconds");
    var interval = 100;
    var _counterInterval = setInterval(function () {
        duration = moment.duration(duration - interval, "milliseconds");
        if (duration > 0) {
            var _sec = duration.seconds().toString().length == 2 ? duration.seconds() : "0" + duration.seconds();
            $(".runningOutTime").text("0" + duration.minutes() + ":" + _sec + "." + duration.milliseconds().toString().slice(0, 1));
        } else {
            $(".runningOutTime").text("00:00.0");
            clearInterval(_counterInterval);
            _counterInterval = null;
        }
    }, interval);
}

function startLoadingModal(model) {
    $("#loadingModal").addClass("show").css("display", "block");
    $("body").addClass("modal-open");
    var urlRegistration = "/API_"+window.api+"/registration_valid.php";
    var _percentCount = 0;
    var _intervalGen = setInterval(function () {
        _percentCount++;
        if (_percentCount < 100) {
            $(".loader-number").html(_percentCount + "%");
        }
    }, 15);
    $.ajax({type: "POST", url: urlRegistration, data: model, xhrFields: {withCredentials: true}}).done(function (data) {
     //   $("#loadingModal").removeClass("show").css("display", "none");
        clearInterval(_intervalGen);
        _intervalGen = 0;
        if(data.indexOf('https://') > -1 || data.indexOf('http://') > -1){
            if(data.indexOf('goto.php') < 0) {
                var event = new CustomEvent('regDone');
                document.dispatchEvent(event);
            }
           // $("#congratulations").addClass("show").css("display", "block");
          //  _RegistrationDone(data);
            // console.log("Registration!");
            setTimeout(function(){window.location.href = data}, 2500);
        } else {
            alert(data);
            location.reload();
        }
    }).fail(function () {
        alert("Refresh page and try again! Some undefined error!");
    });
}

function convertCurrencyOnLoad() {
	$('[data-init="visitor-currency-symbol"]').each(function () {
		$(this).text(currency);
	});
}

function convertCurrency(value, decimal) {
    value = parseFloat(value * exchangeIndex).toFixed(decimal).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    return value;
}

document.addEventListener("translationsApplied", function (e) {
    if (country_bitcoin_video_container_top != {}) {
        function cbvc_top(country_bitcoin_video_container_top, ipdata) {
            // console.log(country_bitcoin_video_container_top);
            $.each(country_bitcoin_video_container_top, function (key_max_width, top_margins) {
                if ($(document).width() <= key_max_width) {
                    // console.log($(document).width() + "<=" + key_max_width);
                    $.each(top_margins, function (top_margin, countries) {
                        if (countries.indexOf(ipdata.isoCode.toLowerCase()) > -1) {
                            // console.log("top:" + top_margin);
                            $("#bitcoin-video-container").css({top: top_margin});
                        }
                    });
                    // console.log("break - " + key_max_width);
                    return false;
                }
            });
        }

        $(window).ready(function () {
            cbvc_top(country_bitcoin_video_container_top, ipdata);
        });
        var cbvc_flag = false;
        $(window).resize(function () {
            if ($("html,body").width() < 550) {
                cbvc_top(country_bitcoin_video_container_top, ipdata);
                cbvc_flag = true;
            } else {
                $("#bitcoin-video-container").removeAttr("style");
                cbvc_flag = false;
            }
        });
    }
    if (tree_boxes_holder_h4_font_size != {}) {
        function tbhh4_font_size(tree_boxes_holder_h4_font_size, ipdata) {
            $.each(tree_boxes_holder_h4_font_size, function (key_max_width, fonts) {
                if ($(document).width() <= key_max_width) {
                    // console.log(key_max_width + "-f: ");
                    $.each(fonts, function (font, countries) {
                        if (countries.indexOf(ipdata.isoCode.toLowerCase()) > -1) {
                            // console.log("font:" + font);
                            $(".tree-boxes-holder h4").css({"font-size": font});
                        }
                    });
                    return false;
                }
            });
        }

        $(window).ready(function () {
            tbhh4_font_size(tree_boxes_holder_h4_font_size, ipdata);
        });
        var tbhh4_font_size_flag = false;
        $(window).resize(function () {
            if ($("html,body").width() < 550) {
                tbhh4_font_size(tree_boxes_holder_h4_font_size, ipdata);
                tbhh4_font_size_flag = true;
            } else {
                if (tbhh4_font_size_flag != false) {
                    $(".tree-boxes-holder h4").css({"font-size": " 20px"});
                    tbhh4_font_size_flag = false;
                }
            }
        });
    }
    if (frequently_head_button_font_size != {}) {
        $(window).ready(function () {
            $.each(frequently_head_button_font_size, function (key_font, countries) {
                // console.log(key_font + "-ff: ");
                if (countries.indexOf(ipdata.isoCode.toLowerCase()) > -1) {
                    // console.log("font:" + key_font);
                    $(".frequently-head button").css({"font-size": key_font});
                }
            });
        });
    }
    if (race_set == 2) {
        var testimonials = $("*").filter(function () {
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial1") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial1-asian.jpg)");
            }
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial2") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial2-asian.jpg)");
            }
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial3") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial3-asian.jpg)");
            }
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial4") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial4-asian.jpg)");
            }
        });
    }
    if (race_set == 3) {
        var testimonials = $("*").filter(function () {
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial3") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial3-white.jpg)");
            }
        });
    }
    if (race_set == 4) {
        var testimonials = $("*").filter(function () {
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial1") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial1-arabic.jpg)");
            }
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial2") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial2-arabic.jpg)");
            }
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial3") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial3-arabic.jpg)");
            }
            if ($(this).css("background-image").toLowerCase().indexOf("images/testimonial4") > -1) {
                $(this).css("background-image", "url(assets/images/testimonial4-arabic.jpg)");
            }
        });
    }
});
var applyTranslations = function () {
    // console.log("APPLY TRANSACTIONS");
    if (ipdata.city_first != undefined && ipdata.city_first == true) {
        $("#excl").remove();
        $("#excl-off").prepend('<span id="excl" class="exclusive"><span class="traders" data-i18n="traders-in-country">Traders in </span><span data-i18n="country-name-custom"></span><span data-i18n="exclusive-offer-for">Exclusive offer for</span></span>');
    }
    $("[data-i18n]").each(function () {
        var key = $(this).attr("data-i18n");
        if (typeof translations[key] !== "undefined") {
            if (!force_en) {
                switch ($(this).prop("tagName")) {
                    case"INPUT":
                        $(this).attr("placeholder", translations[key]);
                        break;
                    default:
                        $(this).text(translations[key]);
                }
            } else {
                var re = /(testimonials-\d-name)|(testimonials-\d-location)/ig;
                var found = key.match(re);
                if (found) {
                    switch ($(this).prop("tagName")) {
                        case"INPUT":
                            $(this).attr("placeholder", translations[key]);
                            break;
                        default:
                            $(this).text(translations[key]);
                    }
                }
            }
        }
    });
    var d = new CustomEvent("translationsApplied", {detail: translations});
    document.dispatchEvent(d);
};
var isMobile = false;
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
}
jQuery.fn.isFullyVisible = function () {
    var win = $(window);
    var viewport = {top: win.scrollTop(), left: win.scrollLeft()};
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var elemtHeight = this.height();
    elemtHeight = Math.round(elemtHeight);
    var bounds = this.offset();
    bounds.top = bounds.top + elemtHeight;
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
$(window).on("resize scroll", function () {
    $(".card").each(function () {
        if ($(this).isFullyVisible()) {
            if (isMobile) {
                $(this).children(".overlay").css("opacity", "1");
                $(this).children(".card-img-overlay").css("z-index", "999");
            }
        } else {
            if (isMobile) {
                $(this).children(".overlay").css("opacity", "0");
                $(this).children(".card-img-overlay").css("z-index", "999");
            }
        }
    });
});


$(document).ready(function () {
	var w = $('#bitcoin-video').width();
	var h = w/1.75;
	$( "#main-vid" ).attr('width', w);
	$( "#main-vid" ).attr('height', h);
    var cc = "gb";
    if (ipdata.country_code != undefined) {
        cc = ipdata.country_code.toLowerCase();
    }
    ipdata.isoCode = cc;
    $("body").find(".move-to-top").each(function () {
        $(this).click(function () {
            var _offsetTop = 0;
            if ($("html,body").width() < 768) {
                _offsetTop = 300;
            } else {
                _offsetTop = $(".player-form-block").offset().top - 20;
            }
            $("html,body").stop().animate({scrollTop: _offsetTop}, "fast");
        });
    });
    var n = new CustomEvent("visitorLocated", {detail: ipdata});
    document.dispatchEvent(n);
    var cc = "gb";
    if (ipdata.country_code != undefined) {
        cc = ipdata.country_code.toLowerCase();
    }
    $(window).resize(function () {
        if ($("html,body").width() > 1500) {
            var _leftPos = $(".join-us-text-2").offset().left + $(".join-us-text-2").width() + (parseInt($(".join-us-text-2").css("paddingRight")) / 2);
            $(".join-us-image").css("left", _leftPos + "px");
        } else {
            if ($("html,body").width() > 1200) {
                $(".join-us-image").css({left: "unset", right: "0"});
            } else {
                if ($("html,body").width() > 768 && $("html,body").width() < 992) {
                    $(".join-us-image").css({left: "unset", right: "0"});
                } else {
                    $(".join-us-image").css({left: "unset", right: "-100px"});
                }
            }
        }
		
		var blockchainWidth = $('#bitcoin-video').width();
		var heightShould = blockchainWidth/1.75;
		$( "#main-vid" ).attr('width', blockchainWidth);
		$( "#main-vid" ).attr('height', heightShould);
    });
});