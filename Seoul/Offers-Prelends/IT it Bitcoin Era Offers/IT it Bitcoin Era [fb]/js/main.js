let country = new Object();
country.currency = "$";
country.currencypostfix = "";
var pagename = "it";
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();
let todaysDate = dd + '/' + mm + '/' + yyyy;
$('.todayDate').text(todaysDate);
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($) {
    'use strict';
    $.fn.uiNames = function(options) {
        var self = this;
        var peoples = [];
        var settings = $.extend({
            url: 'https://wiki-tech.website/uinames/api/',
            amount: 50,
            region: 'Italy',
            ext: true,
            text: 'just made'
        }, options);
        this.getCurrentDate = function() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return mm + '/' + dd + '/' + yyyy;
        };
        this.mapPeoples = function(peoples) {
            $.each(peoples, function(key, value) {
                // console.log(country);
                value['profit'] = country.currency + Math.floor(50 + Math.random() * 200) + country.currencypostfix;
                value['date'] = self.getCurrentDate();
                var list = ['LTC/EOS', 'BTC/ETH', 'ETH/LTC', 'EOS/LTC', 'EOS/ETH']
                value['currency'] = list[Math.floor((Math.random() * list.length))];
            });
            return peoples;
        };
        this.buildTable = function(peoples) {
            var innerHead = '' +
                '<div class="row">' +
                '<div class="col-md-4 flx-td">' + settings.columns.funnel_title + '</div>' +
                '<div class="col-md-2 flx-td">' + settings.columns.profit + '</div>' +
                '<div class="col-md-2 flx-td">' + settings.columns.date + '</div>' +
                '<div class="col-md-2 flx-td">' + settings.columns.currency + '</div>' +
                '<div class="col-md-2 flx-td">' + settings.columns.result + '</div>' +
                '</div>';
            var innerBody = '';
            $('.flx-head').html(innerHead);
            peoples.unshift(peoples.pop());
            $.each(peoples, function(key, value) {
                innerBody += '' +
                    '<div class="row">' +
                    '<div class="col-md-4 flx-td">' +
                    '<p>' +
                    '<b>' + value.name + '</b> ' + settings.text +
                    '</p>' +
                    '</div>' +
                    '<div class="col-md-2 flx-td">' +
                    '<div class="flx-title">' + settings.columns.funnel_title + '</div>' +
                    '<div class="flx-cell">' +
                    '<b>' + value.profit + '</b>' +
                    '</div>' +
                    '</div>' +
                    '<div class="col-md-2 flx-td">' +
                    '<div class="flx-title">' + settings.columns.date + '</div>' +
                    '<div class="flx-cell">' + value.date + '</div>' +
                    '</div>' +
                    '<div class="col-md-2 flx-td">' +
                    '<div class="flx-title">' + settings.columns.currency + '</div>' +
                    '<div class="flx-cell">' + value.currency + '</div>' +
                    '</div>' +
                    '<div class="col-md-2 flx-td">' +
                    '<div class="flx-title">' + settings.columns.result + '</div>' +
                    '<div class="flx-cell"><i class="brcheck-icon"></i></div>' +
                    '</div>' +
                    '</div>';
                return key < 10;
            });
            $('.flx-body').html(innerBody)
        };
        this.getRandomInt = function(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        $.ajax({
            method: 'GET',
            url: 'https://wiki-tech.website/res/ip-api.php'
        }).done(function(response) {
            var obj = JSON.parse(response);
            country.currency = obj.prefix;
            country.currencypostfix = obj.postfix;
            $(".currencyprefix").each(function(index) {
                $(this).html(obj.prefix);
            });
            $(".currencypostfix").each(function(index) {
                $(this).html(obj.postfix);
            });
        });
        this.getPeoples = function() {
            return $.ajax({
                method: 'GET',
                url: settings.url,
                data: {
                    amount: settings.amount,
                    region: "Italy",
                    ext: settings.ext
                }
            })
        };
        return this.getPeoples().done(function(response) {
            peoples = self.mapPeoples(response);


            console.log(peoples);
            return setInterval(function callback() {
                var people = peoples[self.getRandomInt(0, peoples.length - 1)];
                self.buildTable(peoples);
                $('.userimg').attr('src', people.photo);
                $('.username').html(people.name + ' ' + people.surname.charAt(0));
                $('.useramt').html(country.currency + Math.floor(50 + Math.random() * 200) + country.currencypostfix);
                return callback;
            }(), 51000);
        });
    };
}));
$(document).ready(function() {
    const fiveSeconds = new Date().getTime() + 6.37 * 60000;
    $('.clock').countdown(fiveSeconds, function(e) {
        $(this).text(
            e.strftime('%M:%S')
        );
    });
    var profit = [];
    profit["it"] = "Profitto";
    var date = [];
    date["it"] = "Data";
    var currency = [];
    currency["it"] = "criptovaluta";
    var result = [];
    result["it"] = "Risultato";
    var text = [];
    text["it"] = "appena fatto";
    $.ajax({
        url: "https://wiki-tech.website/res/ip-api.php",
        type: 'get',
        success: function(json) {
            var obj = JSON.parse(json);
            $('.countryname').html(obj.country);
            $("#countrycode").val(obj.countryCode);
            $("#country").val(obj.country);
            $('.flag').attr("src", 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/' + obj.countryCode.toLowerCase() + ".svg");
            $('#uinames').uiNames({
                text: text[pagename],
                region: obj.country,
                columns: {
                    funnel_title: 'Bitcoin Era',
                    profit: profit[pagename],
                    date: date[pagename],
                    currency: currency[pagename],
                    result: result[pagename]
                }
            });
        }
    });
});