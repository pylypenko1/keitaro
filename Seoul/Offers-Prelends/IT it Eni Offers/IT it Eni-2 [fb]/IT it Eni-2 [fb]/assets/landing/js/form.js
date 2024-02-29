var phoneRegex, numLimit, phoneccValue, countryName, countryList;
var countryData = {
    ru: { phoneRegex: /^9[0-9]{9}$/i, numLimit: 10, phoneccValue: "7", countryName: "Russia", phonePlaceholder: "912 345-67-89" },
    kz: { phoneRegex: /^7[0-9]{9}$/i, numLimit: 10, phoneccValue: "7", countryName: "Kazakhstan", phonePlaceholder: "771 000 9998" },
    tr: { phoneRegex: /^5[0-9]{9}$/i, numLimit: 10, phoneccValue: "90", countryName: "Turkey", phonePlaceholder: "501 234-56-78" },
    ua: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "380", countryName: "Ukraine", phonePlaceholder: "12 34-56-789" },
    es: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "34", countryName: "Spain", phonePlaceholder: "612 34 56 78" },
    in: { phoneRegex: /^[0-9]{10}$/i, numLimit: 10, phoneccValue: "91", countryName: "India", phonePlaceholder: "81234 56789" },
    md: { phoneRegex: /^[0-9]{8,9}$/i, numLimit: 9, phoneccValue: "373", countryName: "Moldova", phonePlaceholder: "0621 12 345" },
    ca: { phoneRegex: /^[0-9]{10}$/i, numLimit: 10, phoneccValue: "1", countryName: "Canada", phonePlaceholder: "506-234-5678" },
    cz: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "420", countryName: "Czech Republic", phonePlaceholder: "601 123 456" },
    mx: { phoneRegex: /^[0-9]{10}$/i, numLimit: 10, phoneccValue: "52", countryName: "Mexico", phonePlaceholder: "222 123 4567" },
    cl: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "56", countryName: "Chile", phonePlaceholder: "2 2123 4567" },
    pe: { phoneRegex: /^[0-9]{8,9}$/i, numLimit: 9, phoneccValue: "51", countryName: "Peru", phonePlaceholder: "912 345 678" },
    de: { phoneRegex: /^[0-9]{6,11}$/i, numLimit: 11, phoneccValue: "49", countryName: "Germany", phonePlaceholder: "1512 3456789" },
    it: { phoneRegex: /^[0-9]{6,10}$/i, numLimit: 10, phoneccValue: "39", countryName: "Italy", phonePlaceholder: "312 345 6789" },
    sk: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "421", countryName: "Slovakia", phonePlaceholder: "912 123 456" },
    az: { phoneRegex: /^[0-9]{9,12}$/i, numLimit: 12, phoneccValue: "994", countryName: "Azerbaijan", phonePlaceholder: "40 123 45 67" },
    am: { phoneRegex: /^[0-9]{8,10}$/i, numLimit: 10, phoneccValue: "374", countryName: "Armenia", phonePlaceholder: "77 123456" },
    by: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "375", countryName: "Belarus", phonePlaceholder: "29 1234567" },
    kg: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "996", countryName: "Kyrgyzstan", phonePlaceholder: "700 123456" },
    tj: { phoneRegex: /^[0-9]{9,12}$/i, numLimit: 12, phoneccValue: "992", countryName: "Tajikistan", phonePlaceholder: "93 1234567" },
    uz: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "998", countryName: "Uzbekistan", phonePlaceholder: "90 1234567" },
    ee: { phoneRegex: /^[0-9]{7,8}$/i, numLimit: 8, phoneccValue: "372", countryName: "Estonia", phonePlaceholder: "51234567" },
    lv: { phoneRegex: /^[0-9]{8,9}$/i, numLimit: 9, phoneccValue: "371", countryName: "Latvia", phonePlaceholder: "22 123456" },
    lt: { phoneRegex: /^[0-9]{8,9}$/i, numLimit: 9, phoneccValue: "370", countryName: "Lithuania", phonePlaceholder: "612 34567" },
    ge: { phoneRegex: /^[0-9]{9}$/i, numLimit: 9, phoneccValue: "995", countryName: "Georgia", phonePlaceholder: "555 123456" },
};

var countryValue = Array.from(new Set($('input[name=countryCode]').val().toLowerCase().split(',').map(function(item) {
    return item.trim();
}).filter(function(item) {
    return item !== '';
})));
countryValue.sort();
countryList = countryValue;

console.log(countryValue);

function autoGeo(value) {
    if ($('input[name=countryCode]').attr('autogeo') !== undefined) {
        $.ajax({
            url: 'https://ipinfo.io/json',
            method: 'GET',
            dataType: 'json',
            success: function(response, countries) {
                countries = value;
                var countryISO = response.country.toLowerCase();
                console.log('User country is:', countryISO);
                if (value.indexOf(countryISO) > 0) {
                    value = countryISO;
                    numRule(value);;
                }
            },
            error: function() {
                console.log('Error GEO request');
            }
        });
    }
}

if (countryValue.length > 1) {
    pre_countryValue = countryValue[0];
    numRule(pre_countryValue);
    $(document).ready(function() {
        autoGeo(countryValue);
    });
} else {
    var countryValue = countryValue.join(',');
    numRule(countryValue);
}

function numRule(countryValue) {

    var caseError = false;
    var countryListOne = false;
    $('.phone').removeClass(function(index, className) {
        return (className.match(/(^|\s)phone-\S+/g) || []).join(' ');
    });
    if ($('.phone-wrap').length) {
        $('.phone').siblings().remove();
        $('.phone').unwrap();
        $('.phone').removeAttr('style');
    }
    if (!countryData.hasOwnProperty(countryValue)) {
        console.log('script for ' + countryValue + ' not exist');
        var matchingValue = Object.keys(countryData).sort().filter(function(value) {
            return countryList.includes(value);
        });
        if (matchingValue.length > 1) {
            countryValue = matchingValue[0];
        } else if (matchingValue.length === 1) {
            countryValue = matchingValue;
            countryListOne = true;
        } else {
            countryValue = Object.keys(countryData).sort()[0];
            countryList = Object.keys(countryData);
            $(document).ready(function() {
                autoGeo(countryList);
            });
        }
    }

    function CountryCase(countryValue) {
        if (countryData.hasOwnProperty(countryValue)) {
            var cntrData = countryData[countryValue];
            phoneRegex = cntrData.phoneRegex;
            numLimit = cntrData.numLimit;
            phoneccValue = cntrData.phoneccValue;
            countryName = cntrData.countryName;
            phonePlaceholder = cntrData.phonePlaceholder;
            $('.phone').attr('placeholder', phonePlaceholder);
        } else {
            caseError = true;
        }
    }

    $('.phone').each(function() {
        var wrapper = $('<div class="phone-wrap">');
        var wrapper_flag = $('<div class="phone-wrap-flag">');
        var flag = $('<img class="phone-country">').attr('src', 'assets/landing/img/flags/' + countryValue + '.webp');
        var label = $('<label>');
        $(this).wrap(wrapper);
        $(this).before(wrapper_flag);
        wrapper_flag.append(flag);
        wrapper_flag.append(label);
    });

    var arrowWidth = 0;
    if (countryList.length > 1 && countryListOne !== true) {
        arrowWidth = 10;
        var flagArrow = $('<div>').addClass('country-arrow');
        $('.phone-wrap-flag label').after(flagArrow);
        var container = $('<div>').addClass('countries-wrap');
        var list = $('<ul>').addClass('countries-ul');

        for (var i = 0; i < countryList.length; i++) {
            caseError = false;
            var countryCode = countryList[i];
            CountryCase(countryCode);
            if (caseError !== true) {
                var listItem = $('<li>').addClass('country-li').attr('data-code', countryCode);
                list.append(listItem);
                var listCountryFlag = $('<img>').addClass('country-img').attr('src', 'assets/landing/img/flags/' + countryCode + '.webp');
                listItem.append(listCountryFlag);
                var listCountryName = $('<span>').addClass('country-name').text(countryName);
                listItem.append(listCountryName);
                var listCountryCode = $('<span>').addClass('country-code').text('+' + phoneccValue);
                listItem.append(listCountryCode);

                $('.phone').removeClass(function(index, className) {
                    return (className.match(/(^|\s)phone-\S+/g) || []).join(' ');
                });
            }
        }

        $('.phone-wrap').append(container.append(list));
        $('.countries-ul').each(function() {
            var ul = $(this);
            var sortedItems = ul.children('.country-li').sort(function(a, b) {
                var nameA = $(a).find('.country-name').text().toUpperCase();
                var nameB = $(b).find('.country-name').text().toUpperCase();
                return nameA.localeCompare(nameB);
            });
            ul.append(sortedItems);
        });
        $('.phone-wrap-flag').attr('style', 'cursor:pointer !important;');
        $('.phone-wrap-flag').hover(
            function() {
                $(this).addClass('focus');
            },
            function() {
                $(this).removeClass('focus');
            }
        );
        $('.phone-wrap-flag').on('click', function(event) {
            $(this).siblings('.countries-wrap').addClass('active');
        });
        $('.country-li').click(function() {
            var countryCode = $(this).attr('data-code');
            numRule(countryCode);
        });
    }

    CountryCase(countryValue);
    $('.phone-wrap-flag label').text('+' + phoneccValue);

    $('form').each(function() {
        if ($(this).find('input[name=forename]').length > 0) {

            var inpBgClr = $(this).find('input:not(:hidden)').css('background-color');
            $(this).find('input').attr('style', function(index, value) {
                if (value === undefined) {
                    value = "";
                }
                if (value.indexOf('background-color') === -1) {
                    value += 'background-color:' + inpBgClr + ' !important;';
                }
                return value;
            });
            var inpClr = $(this).find('input').css('color');
            $(this).find('.phone-wrap-flag label').attr('style', function(index, value) {
                if (value === undefined) {
                    value = "";
                }
                return value + 'color:' + inpClr + ' !important;';
            });
            $(this).find('.phone-wrap-flag .country-arrow').attr('style', function(index, value) {
                if (value === undefined) {
                    value = "";
                }
                return value + 'border-top-color:' + inpClr + ' !important;';
            });
            var inpFntSz = $(this).find('input').css('font-size');
            $(this).find('.phone-wrap-flag label').attr('style', function(index, value) {
                if (value === undefined) {
                    value = "";
                }
                return value + 'font-size:' + inpFntSz + ' !important;';
            });
            $(this).find('.phone').attr('style', function(index, value) {
                if (value === undefined) {
                    value = "";
                }
                if (phoneccValue.length === 1) {
                    var paddingValue = parseInt(inpFntSz) / 2;
                } else if (phoneccValue.length === 2) {
                    var paddingValue = parseInt(inpFntSz);
                } else {
                    var paddingValue = parseInt(inpFntSz) * 1.5;
                }
                return value + 'padding-left: calc(2rem + ' + inpFntSz + ' + ' + (parseInt(paddingValue) + parseInt(arrowWidth)) + 'px) !important;';
            });
            $(this).find('.phone').attr('style', function(index, value) {
                if (value === undefined) {
                    value = "";
                }
                return value + 'background-color:' + inpBgClr + ' !important;';
            });

            if ($(this).find('input[name=phonecc]').length > 0 || $(this).find('input[name=country]').length > 0) {
                $(this).find('input[name=phonecc]').remove();
                $(this).find('input[name=country]').remove();
            }

            var phonecc = $('<input>').attr({
                type: 'hidden',
                name: 'phonecc',
                class: 'phonecc',
                value: phoneccValue
            });
            $(this).append(phonecc);
            var country = $('<input>').attr({
                type: 'hidden',
                name: 'country',
                value: countryValue
            });
            $(this).append(country);
        }
    });
}


// Form input validation

jQuery.extend(jQuery.validator.messages, {
    required: ""
});

$.validator.addMethod("forename", function(value, element) {
    return this.optional(element) || /^[\p{Letter}\p{Mark}\- ]{2,25}$/u.test(value);
}, "");

$.validator.addMethod("surname", function(value, element) {
    return this.optional(element) || /^[\p{Letter}\p{Mark}\- ]{2,25}$/u.test(value);
}, "");
$.validator.addMethod("email", function(value, element) {
    return (this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value));
}, "");
$.validator.addMethod("phone", function(value, element) {
    return this.optional(element) || phoneRegex.test(value);
}, "");
$("form input, button[type=submit]").click(function() {
    var form = $(this).parents('form:first');
    form.validate({
        rules: {
            forename: {
                required: true,
            },
            surname: {
                required: true,
            },
            phone: {
                required: true,
            },
            email: {
                required: true,
            },
            forename: "required forename",
            surname: "required surname",
            phone: "required phone",
            email: "required email",
        },
        errorPlacement: function(error, element) {}
    });
});

$("button[type=submit]").click(function() {
    var form = $(this).parents('form:first');
    if (form.valid()) {
        var data = $(this).closest("form").serialize();
        console.log(data);
        form.submit(function() {
            $("button[type='submit']").prop('disabled', true);
            $("button[type='submit']").text('');
            $("button[type='submit']").addClass('loading-btn');
        });
    }
});


// Phone validation

(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on(
            "input keydown keyup mousedown mouseup select contextmenu drop",
            function() {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(
                        this.oldSelectionStart,
                        this.oldSelectionEnd
                    );
                } else {
                    this.value = "";
                }
            }
        );
    };
})(jQuery);

function limitText(field, maxChar) {
    var ref = $(field),
        val = ref.val();
    if (val.length >= maxChar) {
        ref.val(function() {
            console.log(val.substr(0, maxChar))
            return val.substr(0, maxChar);
        });
    }
}
$(".phone").inputFilter(function(value) {
    return /^\d*$/.test(value);
});
$(".phone").on('keyup', function() {
    limitText(this, numLimit)
});