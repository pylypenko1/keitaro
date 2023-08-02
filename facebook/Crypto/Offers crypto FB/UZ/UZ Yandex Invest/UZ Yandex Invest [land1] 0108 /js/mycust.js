function setUpCountryInfo(countryData) {
    $(' .countryFlag').css("background-image", 'url("https://qqqq.uno/flags/flags-iso/flat/24/' + countryData.CountryIso + '.png")');
    $(' .countryPhoneCodeSpan').text('+' + countryData.PhoneCode);

    window.jQuery(' .localPhone').attr({
        "data-countryName": countryData.CountryNameRu,
        "data-countryCode": countryData.CountryIso,
        "data-countryPhoneCode": countryData.PhoneCode
    });
    window.jQuery(' .localPhone').attr({
        "data-minNumbers": countryData.MinNumbersOfDigits,
        "data-maxNumbers": countryData.MaxNumbersOfDigits
    });
}

function getAllCountries() {
    window.jQuery.ajax({
        type: "GET",
        url: 'https://qqqq.uno/Form770capital/backendApi/countrySearch.php',
        data: {lang: 'ru'},
        success: function (countries) {
            var countriesArr = JSON.parse(countries);
            for (var i = 0; i < countriesArr.length; i++) {
                $('.countrieslist').append('<div class="dropdown-item country_item" data-country_name="' + countriesArr[i][1] + '" data-iso="' + countriesArr[i][0] + '"' +
                    'data-country_code="' + countriesArr[i][3] + '" data-min_numbers="' + countriesArr[i][4] + '"' +
                    'data-max_numbers="' + countriesArr[i][5] + '"' +
                    ' style="background-image: url(https://qqqq.uno/flags/flags-iso/flat/24/' + countriesArr[i][0] + '.png)">' + countriesArr[i][1] + '</div>');
            }
            $('.country_item').click(setUpCountryWhenChoosing);
        }

    });
}

function setUpCountryWhenChoosing(event) {
    var target = event.target.dataset;
    var countryData = new Object();
    countryData.PhoneCode = target.country_code;
    countryData.CountryNameRu = target.country_name;
    countryData.CountryIso = target.iso;
    countryData.MinNumbersOfDigits = target.min_numbers;
    countryData.MaxNumbersOfDigits = target.max_numbers;
    setLocalPhoneInfo(target.iso);
    setUpCountryInfo(countryData);
}

function detectCountry() {
    window.jQuery.ajax({
        url: 'https://qqqq.uno/Form770capital/backendApi/ipAddr.php',
        success: function (userip) {
            var a = 5;
            window.jQuery.ajax({
                url: 'https://api.maxicapital.group/dictionary/countryiso?ip=' + userip,
                success: function (iso) {
                    if (iso) {
                        setLocalPhoneInfo(iso);
                        return iso;
                    }
                }
            });
        }
    });


}

function setLocalPhoneInfo(iso) {
    window.jQuery.ajax({
        url: 'https://qqqq.uno/Form770capital/backendApi/countryInfo.php?param_iso=' + iso,
        success: function (data) {
            var countryData = JSON.parse(data);
            setUpCountryInfo(countryData);
        },
        error: function () {
            var countryData = JSON.parse('{"CountryIso":"RU","CountryNameRu":"\u0420\u043e\u0441\u0441\u0438\u044F","CountryNameEn":"Russian Federation","PhoneCode":"7","MinNumbersOfDigits":"10","MaxNumbersOfDigits":"10"}');
            setUpCountryInfo(countryData);
        }
    });
};


detectCountry();
getAllCountries();