$(function () {
    ! function playBeep() {
        // var audio = document.getElementById('music');
        // audio.pause();
        // var checkAudio = false;

        var date = new Date();
        console.log(date.getDate() + ' ' + (date.getMonth() + 1) + ' ' + date.getFullYear());
        $('.current-date').text(date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear());
        // $('body').on('click', function () {
        //     if (!checkAudio) {
        //         audio.play();
        //         checkAudio = true;
        //     }
        // }
        // );
    }
        ();
    ! function showLogoLocalization() {
        var isoCountriesRev = {
            'afghanistan': 'af',
            'aland islands': 'ax',
            'albania': 'al',
            'algeria': 'dz',
            'american samoa': 'as',
            'andorra': 'ad',
            'angola': 'ao',
            'anguilla': 'ai',
            'antarctica': 'aq',
            'antigua and barbuda': 'ag',
            'argentina': 'ar',
            'armenia': 'am',
            'aruba': 'aw',
            'australia': 'au',
            'austria': 'at',
            'azerbaijan': 'az',
            'bahamas': 'bs',
            'bahrain': 'bh',
            'bangladesh': 'bd',
            'barbados': 'bb',
            'belarus': 'by',
            'belgium': 'be',
            'belize': 'bz',
            'benin': 'bj',
            'bermuda': 'bm',
            'bhutan': 'bt',
            'bolivia': 'bo',
            'bosnia and herzegovina': 'ba',
            'botswana': 'bw',
            'bouvet island': 'bv',
            'brazil': 'br',
            'british indian ocean territory': 'io',
            'brunei darussalam': 'bn',
            'bulgaria': 'bg',
            'burkina faso': 'bf',
            'burundi': 'bi',
            'cambodia': 'kh',
            'cameroon': 'cm',
            'canada': 'ca',
            'cape verde': 'cv',
            'cayman islands': 'ky',
            'central african republic': 'cf',
            'chad': 'td',
            'chile': 'cl',
            'china': 'cn',
            'christmas island': 'cx',
            'cocos (keeling) islands': 'cc',
            'colombia': 'co',
            'comoros': 'km',
            'congo': 'cg',
            'congo, democratic republic': 'cd',
            'cook islands': 'ck',
            'costa rica': 'cr',
            'cote d\'ivoire': 'ci',
            'croatia': 'hr',
            'cuba': 'cu',
            'cyprus': 'cy',
            'czech republic': 'cz',
            'denmark': 'dk',
            'djibouti': 'dj',
            'dominica': 'dm',
            'dominican republic': 'do',
            'ecuador': 'ec',
            'egypt': 'eg',
            'el salvador': 'sv',
            'equatorial guinea': 'gq',
            'eritrea': 'er',
            'estonia': 'ee',
            'ethiopia': 'et',
            'falkland islands (malvinas)': 'fk',
            'faroe islands': 'fo',
            'fiji': 'fj',
            'finland': 'fi',
            'france': 'fr',
            'french guiana': 'gf',
            'french polynesia': 'pf',
            'french southern territories': 'tf',
            'gabon': 'ga',
            'gambia': 'gm',
            'georgia': 'ge',
            'germany': 'de',
            'ghana': 'gh',
            'gibraltar': 'gi',
            'greece': 'gr',
            'greenland': 'gl',
            'grenada': 'gd',
            'guadeloupe': 'gp',
            'guam': 'gu',
            'guatemala': 'gt',
            'guernsey': 'gg',
            'guinea': 'gn',
            'guinea-bissau': 'gw',
            'guyana': 'gy',
            'haiti': 'ht',
            'heard island & mcdonald islands': 'hm',
            'holy see (vatican city state)': 'va',
            'honduras': 'hn',
            'hong kong': 'hk',
            'hungary': 'hu',
            'iceland': 'is',
            'india': 'in',
            'indonesia': 'id',
            'iran, islamic republic of': 'ir',
            'iraq': 'iq',
            'ireland': 'ie',
            'isle of man': 'im',
            'israel': 'il',
            'italy': 'it',
            'jamaica': 'jm',
            'japan': 'jp',
            'jersey': 'je',
            'jordan': 'jo',
            'kazakhstan': 'kz',
            'kenya': 'ke',
            'kiribati': 'ki',
            'korea': 'kr',
            'kuwait': 'kw',
            'kyrgyzstan': 'kg',
            'lao people\'s democratic republic': 'la',
            'latvia': 'lv',
            'lebanon': 'lb',
            'lesotho': 'ls',
            'liberia': 'lr',
            'libyan arab jamahiriya': 'ly',
            'liechtenstein': 'li',
            'lithuania': 'lt',
            'luxembourg': 'lu',
            'macao': 'mo',
            'macedonia': 'mk',
            'madagascar': 'mg',
            'malawi': 'mw',
            'malaysia': 'my',
            'maldives': 'mv',
            'mali': 'ml',
            'malta': 'mt',
            'marshall islands': 'mh',
            'martinique': 'mq',
            'mauritania': 'mr',
            'mauritius': 'mu',
            'mayotte': 'yt',
            'mexico': 'mx',
            'micronesia, federated states of': 'fm',
            'moldova': 'md',
            'monaco': 'mc',
            'mongolia': 'mn',
            'montenegro': 'me',
            'montserrat': 'ms',
            'morocco': 'ma',
            'mozambique': 'mz',
            'myanmar': 'mm',
            'namibia': 'na',
            'nauru': 'nr',
            'nepal': 'np',
            'netherlands': 'nl',
            'netherlands antilles': 'an',
            'new caledonia': 'nc',
            'new zealand': 'nz',
            'nicaragua': 'ni',
            'niger': 'ne',
            'nigeria': 'ng',
            'niue': 'nu',
            'norfolk island': 'nf',
            'northern mariana islands': 'mp',
            'norway': 'no',
            'oman': 'om',
            'pakistan': 'pk',
            'palau': 'pw',
            'palestine, state of': 'ps',
            'panama': 'pa',
            'papua new guinea': 'pg',
            'paraguay': 'py',
            'peru': 'pe',
            'philippines': 'ph',
            'pitcairn': 'pn',
            'poland': 'pl',
            'portugal': 'pt',
            'puerto rico': 'pr',
            'qatar': 'qa',
            'reunion': 're',
            'romania': 'ro',
            'russian federation': 'ru',
            'rwanda': 'rw',
            'saint barthelemy': 'bl',
            'saint helena': 'sh',
            'saint kitts and nevis': 'kn',
            'saint lucia': 'lc',
            'saint martin': 'mf',
            'saint pierre and miquelon': 'pm',
            'saint vincent and grenadines': 'vc',
            'samoa': 'ws',
            'san marino': 'sm',
            'sao tome and principe': 'st',
            'saudi arabia': 'sa',
            'senegal': 'sn',
            'serbia': 'rs',
            'seychelles': 'sc',
            'sierra leone': 'sl',
            'singapore': 'sg',
            'slovakia': 'sk',
            'slovenia': 'si',
            'solomon islands': 'sb',
            'somalia': 'so',
            'south africa': 'za',
            'south georgia and sandwich isl.': 'gs',
            'spain': 'es',
            'sri lanka': 'lk',
            'sudan': 'sd',
            'suriname': 'sr',
            'svalbard and jan mayen': 'sj',
            'swaziland': 'sz',
            'sweden': 'se',
            'switzerland': 'ch',
            'syrian arab republic': 'sy',
            'taiwan': 'tw',
            'tajikistan': 'tj',
            'tanzania': 'tz',
            'thailand': 'th',
            'timor-leste': 'tl',
            'togo': 'tg',
            'tokelau': 'tk',
            'tonga': 'to',
            'trinidad and tobago': 'tt',
            'tunisia': 'tn',
            'turkey': 'tr',
            'turkmenistan': 'tm',
            'turks and caicos islands': 'tc',
            'tuvalu': 'tv',
            'uganda': 'ug',
            'ukraine': 'ua',
            'united arab emirates': 'ae',
            'united kingdom': 'gb',
            'united states': 'us',
            'united states outlying islands': 'um',
            'uruguay': 'uy',
            'uzbekistan': 'uz',
            'vanuatu': 'vu',
            'venezuela': 've',
            'viet nam': 'vn',
            'virgin islands, british': 'vg',
            'virgin islands, u.s.': 'vi',
            'wallis and futuna': 'wf',
            'western sahara': 'eh',
            'yemen': 'ye',
            'zambia': 'zm',
            'zimbabwe': 'zw'
        };
        function getCountryName(countryName) {
            if (isoCountriesRev.hasOwnProperty(countryName)) {
                return isoCountriesRev[countryName];
            }
            else {
                return false;
            }
        }
        var countryName = $('#countryNameSrc').text().trim().toLowerCase(),
            countryCode = getCountryName(countryName);
        if (countryCode) {
            if (countryCode === 'us') countryCode = 'com';
            $('#locoLogo').text('.' + countryCode);
        }
    }
        ();
    ! function playGiftBoxGame() {
        $('#p_modal1').modal('show');
        $('#p_modal_button1').on('click', function () {
            $('#p_modal1').modal('hide');
        }
        );
        $('.try').on('click', function () {
            if ($(this).hasClass('abierta')) return;
            $('#boxes').addClass('noevents');
            if (!$('.try.abierta').length) {
                $(this).addClass('abierta');
                setTimeout(function () {
                    $('#p_modal2').modal('show');
                    $('#boxes').removeClass('noevents');
                    setTimeout(function () {
                        $('.circle-loader .checkmark').show();
                    }
                        , 750);
                }
                    , 2000);
                return;
            }
            $(this).addClass('abierta premiazo');
            setTimeout(function () {
                $('.div_img_gift').fadeIn();
                InitializeConfetti();
                setTimeout(function () {
                    $('#p_modal3').modal('show');
                    $('#boxes').removeClass('noevents');
                }
                    , 1500);
                setTimeout(function () {
                    DeactivateConfetti();
                }
                    , 4E3);
            }
                , 2000);
        }
        );
        $('#p_modal_button2').on('click', function () {
            $('#p_modal2').modal('hide');
        }
        );
    }
        ();
}
);
