var phoneRegex, numLimit, phoneccValue, countryName, countryList;
var countryData = {
    ru: { phoneRegex: /^9[0-9]{9}$/i, numLimit: 10, phoneccValue: "7", countryName: "Russia", phonePlaceholder: "912 345-67-89" },
    kz: { phoneRegex: /^7[0-9]{9}$/i, numLimit: 10, phoneccValue: "7", countryName: "Kazakhstan", phonePlaceholder: "771 000 9998" },
    tr: { phoneRegex: /^[1-9][0-9]{9}$/i, numLimit: 10, phoneccValue: "90", countryName: "Turkey", phonePlaceholder: "501 234-56-78" },
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
    at: { phoneRegex: /^[0-9]{7,13}$/i, numLimit: 13, phoneccValue: "43", countryName: "Austria", phonePlaceholder: "660 1234567" },
    be: { phoneRegex: /^[0-9]{8,10}$/i, numLimit: 10, phoneccValue: "32", countryName: "Belgium", phonePlaceholder: "470 123456" },
    bg: { phoneRegex: /^[0-9]{7,9}$/i, numLimit: 9, phoneccValue: "359", countryName: "Bulgaria", phonePlaceholder: "888 123456" },
    dk: { phoneRegex: /^[0-9]{8,11}$/i, numLimit: 11, phoneccValue: "45", countryName: "Denmark", phonePlaceholder: "42 12 34 56" },
    fi: { phoneRegex: /^[0-9]{8,12}$/i, numLimit: 12, phoneccValue: "358", countryName: "Finland", phonePlaceholder: "041 2345678" },
    fr: { phoneRegex: /^[0-9]{9,11}$/i, numLimit: 11, phoneccValue: "33", countryName: "France", phonePlaceholder: "06 12 34 56 78" },
    is: { phoneRegex: /^[0-9]{7,9}$/i, numLimit: 9, phoneccValue: "354", countryName: "Iceland", phonePlaceholder: "661 1234" },
    ie: { phoneRegex: /^[0-9]{8,11}$/i, numLimit: 11, phoneccValue: "353", countryName: "Ireland", phonePlaceholder: "085 1234567" },
    lu: { phoneRegex: /^[0-9]{8,12}$/i, numLimit: 12, phoneccValue: "352", countryName: "Luxembourg", phonePlaceholder: "628 123456" },
    me: { phoneRegex: /^[0-9]{9,12}$/i, numLimit: 12, phoneccValue: "382", countryName: "Montenegro", phonePlaceholder: "067 123456" },
    nl: { phoneRegex: /^[0-9]{9,11}$/i, numLimit: 11, phoneccValue: "31", countryName: "Netherlands", phonePlaceholder: "06 12345678" },
    no: { phoneRegex: /^[0-9]{8,12}$/i, numLimit: 12, phoneccValue: "47", countryName: "Norway", phonePlaceholder: "412 34 567" },
    pt: { phoneRegex: /^[0-9]{9,12}$/i, numLimit: 12, phoneccValue: "351", countryName: "Portugal", phonePlaceholder: "912 345 678" },
    ro: { phoneRegex: /^[0-9]{9,12}$/i, numLimit: 12, phoneccValue: "40", countryName: "Romania", phonePlaceholder: "0712 345 678" },
    se: { phoneRegex: /^[0-9]{8,12}$/i, numLimit: 12, phoneccValue: "46", countryName: "Sweden", phonePlaceholder: "070-123 45 67" },
    gb: { phoneRegex: /^[0-9]{10,11}$/i, numLimit: 11, phoneccValue: "44", countryName: "United Kingdom", phonePlaceholder: "07700 900123" },
    ad: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "376", countryName: "Andorra", phonePlaceholder: "312 345" },
    ae: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "971", countryName: "United Arab Emirates", phonePlaceholder: "50 123 4567" },
    af: { phoneRegex: /^[0-9]{7,9}$/i, numLimit: 9, phoneccValue: "93", countryName: "Afghanistan", phonePlaceholder: "701234567" },
    ag: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Antigua and Barbuda", phonePlaceholder: "268 7234567" },
    ai: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Anguilla", phonePlaceholder: "264 2351234" },
    al: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "355", countryName: "Albania", phonePlaceholder: "66 123 4567" },
    ao: { phoneRegex: /^[0-9]{7,9}$/i, numLimit: 9, phoneccValue: "244", countryName: "Angola", phonePlaceholder: "923 123 456" },
    aq: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "672", countryName: "Antarctica", phonePlaceholder: "12345" },
    ar: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "54", countryName: "Argentina", phonePlaceholder: "9 11 2345 6789" },
    as: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "American Samoa", phonePlaceholder: "684 7331234" },
    au: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "61", countryName: "Australia", phonePlaceholder: "4123 4567" },
    aw: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "297", countryName: "Aruba", phonePlaceholder: "560 1234" },
    ax: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "358", countryName: "Aland Islands", phonePlaceholder: "4123456789" },
    ba: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "387", countryName: "Bosnia and Herzegovina", phonePlaceholder: "61 123 456" },
    bb: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Barbados", phonePlaceholder: "246 250 1234" },
    bd: { phoneRegex: /^[0-9]{8,12}$/i, numLimit: 12, phoneccValue: "880", countryName: "Bangladesh", phonePlaceholder: "15 12345 6789" },
    bf: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "226", countryName: "Burkina Faso", phonePlaceholder: "70 12 34 56" },
    bh: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "973", countryName: "Bahrain", phonePlaceholder: "3600 1234" },
    bi: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "257", countryName: "Burundi", phonePlaceholder: "79 123 456" },
    bj: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "229", countryName: "Benin", phonePlaceholder: "90 01 12 34" },
    bl: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "590", countryName: "Saint Barthelemy", phonePlaceholder: "690 301234" },
    bm: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Bermuda", phonePlaceholder: "441 3701234" },
    bn: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "673", countryName: "Brunei", phonePlaceholder: "712 3456" },
    bo: { phoneRegex: /^[0-9]{7,9}$/i, numLimit: 9, phoneccValue: "591", countryName: "Bolivia", phonePlaceholder: "71234567" },
    bq: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "599", countryName: "Bonaire, Sint Eustatius and Saba", phonePlaceholder: "318 1234" },
    br: { phoneRegex: /^[0-9]{7,13}$/i, numLimit: 13, phoneccValue: "55", countryName: "Brazil", phonePlaceholder: "11 9 1234 5678" },
    bs: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Bahamas", phonePlaceholder: "242 359 1234" },
    bt: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "975", countryName: "Bhutan", phonePlaceholder: "17 12 34 56" },
    bw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "267", countryName: "Botswana", phonePlaceholder: "71 123 456" },
    bz: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "501", countryName: "Belize", phonePlaceholder: "622 1234" },
    cd: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "243", countryName: "Democratic Republic of the Congo", phonePlaceholder: "99 123 4567" },
    cf: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "236", countryName: "Central African Republic", phonePlaceholder: "70 01 23 45" },
    cg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "242", countryName: "Republic of the Congo", phonePlaceholder: "06 123 4567" },
    ch: { phoneRegex: /^[0-9]{7,13}$/i, numLimit: 13, phoneccValue: "41", countryName: "Switzerland", phonePlaceholder: "76 123 45 67" },
    ci: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "225", countryName: "Ivory Coast", phonePlaceholder: "01 23 45 67" },
    ck: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "682", countryName: "Cook Islands", phonePlaceholder: "71 234" },
    cm: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "237", countryName: "Cameroon", phonePlaceholder: "7 1234 5678" },
    cn: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "86", countryName: "China", phonePlaceholder: "131 2345 6789" },
    co: { phoneRegex: /^[0-9]{10,12}$/i, numLimit: 12, phoneccValue: "57", countryName: "Colombia", phonePlaceholder: "321 1234567" },
    cr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "506", countryName: "Costa Rica", phonePlaceholder: "8312 3456" },
    cu: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "53", countryName: "Cuba", phonePlaceholder: "5 1234567" },
    cv: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "238", countryName: "Cape Verde", phonePlaceholder: "991 12 34" },
    cw: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "599", countryName: "Curacao", phonePlaceholder: "9 5181234" },
    cx: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "61", countryName: "Christmas Island", phonePlaceholder: "4123 4567" },
    cy: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "357", countryName: "Cyprus", phonePlaceholder: "96 123456" },
    dj: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "253", countryName: "Djibouti", phonePlaceholder: "77 83 10 01" },
    dm: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Dominica", phonePlaceholder: "767 2251234" },
    do: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Dominican Republic", phonePlaceholder: "809 234 5678" },
    dz: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "213", countryName: "Algeria", phonePlaceholder: "55 123 45 67" },
    ec: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "593", countryName: "Ecuador", phonePlaceholder: "099 123 4567" },
    eg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "20", countryName: "Egypt", phonePlaceholder: "10 1234 5678" },
    eh: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "212", countryName: "Western Sahara", phonePlaceholder: "65 123456" },
    er: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "291", countryName: "Eritrea", phonePlaceholder: "7 123 456" },
    et: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "251", countryName: "Ethiopia", phonePlaceholder: "91 123 4567" },
    fj: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "679", countryName: "Fiji", phonePlaceholder: "701 2345" },
    fk: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "500", countryName: "Falkland Islands", phonePlaceholder: "51234" },
    fm: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "691", countryName: "Micronesia", phonePlaceholder: "350 1234" },
    fo: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "298", countryName: "Faroe Islands", phonePlaceholder: "211234" },
    ga: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "241", countryName: "Gabon", phonePlaceholder: "06 03 12 34" },
    gd: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Grenada", phonePlaceholder: "473 4151234" },
    gf: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "594", countryName: "French Guiana", phonePlaceholder: "694 201234" },
    gg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "44", countryName: "Guernsey", phonePlaceholder: "7781 123456" },
    gh: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "233", countryName: "Ghana", phonePlaceholder: "23 123 4567" },
    gi: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "350", countryName: "Gibraltar", phonePlaceholder: "57123456" },
    gl: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "299", countryName: "Greenland", phonePlaceholder: "22 12 34" },
    gm: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "220", countryName: "Gambia", phonePlaceholder: "301 2345" },
    gn: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "224", countryName: "Guinea", phonePlaceholder: "601 12 34 56" },
    gp: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "590", countryName: "Guadeloupe", phonePlaceholder: "690 301234" },
    gq: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "240", countryName: "Equatorial Guinea", phonePlaceholder: "222 123 456" },
    gr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "30", countryName: "Greece", phonePlaceholder: "691 234 5678" },
    gt: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "502", countryName: "Guatemala", phonePlaceholder: "5123 4567" },
    gu: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Guam", phonePlaceholder: "671 3001234" },
    gw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "245", countryName: "Guinea-Bissau", phonePlaceholder: "955 012 345" },
    gy: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "592", countryName: "Guyana", phonePlaceholder: "609 1234" },
    hk: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "852", countryName: "Hong Kong", phonePlaceholder: "5123 4567" },
    hn: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "504", countryName: "Honduras", phonePlaceholder: "9123 4567" },
    hr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "385", countryName: "Croatia", phonePlaceholder: "92 123 4567" },
    ht: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "509", countryName: "Haiti", phonePlaceholder: "34 10 1234" },
    hu: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "36", countryName: "Hungary", phonePlaceholder: "20 123 4567" },
    id: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "62", countryName: "Indonesia", phonePlaceholder: "812 1234 5678" },
    il: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "972", countryName: "Israel", phonePlaceholder: "50 123 4567" },
    im: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "44", countryName: "Isle of Man", phonePlaceholder: "7924 123456" },
    io: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "246", countryName: "British Indian Ocean Territory", phonePlaceholder: "380 1234" },
    iq: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "964", countryName: "Iraq", phonePlaceholder: "0791 234 5678" },
    ir: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "98", countryName: "Iran", phonePlaceholder: "912 345 6789" },
    je: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "44", countryName: "Jersey", phonePlaceholder: "7797 123456" },
    jm: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Jamaica", phonePlaceholder: "876 2101234" },
    jo: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "962", countryName: "Jordan", phonePlaceholder: "77 123 4567" },
    jp: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "81", countryName: "Japan", phonePlaceholder: "090 1234 5678" },
    ke: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "254", countryName: "Kenya", phonePlaceholder: "712 123456" },
    kh: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "855", countryName: "Cambodia", phonePlaceholder: "12 345 678" },
    ki: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "686", countryName: "Kiribati", phonePlaceholder: "72012345" },
    km: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "269", countryName: "Comoros", phonePlaceholder: "321 23 45" },
    kn: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Saint Kitts and Nevis", phonePlaceholder: "869 7652915" },
    kp: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "850", countryName: "North Korea", phonePlaceholder: "192 1234" },
    kr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "82", countryName: "South Korea", phonePlaceholder: "010 1234 5678" },
    kw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "965", countryName: "Kuwait", phonePlaceholder: "500 12345" },
    ky: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Cayman Islands", phonePlaceholder: "345 323 1234" },
    la: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "856", countryName: "Laos", phonePlaceholder: "20 99 999 999" },
    lb: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "961", countryName: "Lebanon", phonePlaceholder: "71 123 456" },
    lc: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Saint Lucia", phonePlaceholder: "758 2845678" },
    li: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "423", countryName: "Liechtenstein", phonePlaceholder: "660 234 567" },
    lk: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "94", countryName: "Sri Lanka", phonePlaceholder: "71 234 5678" },
    lr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "231", countryName: "Liberia", phonePlaceholder: "077 012 3456" },
    ls: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "266", countryName: "Lesotho", phonePlaceholder: "5012 3456" },
    ly: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "218", countryName: "Libya", phonePlaceholder: "91 123 4567" },
    ma: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "212", countryName: "Morocco", phonePlaceholder: "0650 123456" },
    mc: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "377", countryName: "Monaco", phonePlaceholder: "612 345 678" },
    mf: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "590", countryName: "Saint Martin", phonePlaceholder: "690 301234" },
    mg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "261", countryName: "Madagascar", phonePlaceholder: "32 12 345 67" },
    mh: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "692", countryName: "Marshall Islands", phonePlaceholder: "235 1234" },
    mk: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "389", countryName: "Macedonia", phonePlaceholder: "72 123 456" },
    ml: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "223", countryName: "Mali", phonePlaceholder: "71 12 34 56" },
    mm: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "95", countryName: "Myanmar", phonePlaceholder: "09 123 4567" },
    mn: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "976", countryName: "Mongolia", phonePlaceholder: "8812 3456" },
    mo: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "853", countryName: "Macao", phonePlaceholder: "6612 3456" },
    mp: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Northern Mariana Islands", phonePlaceholder: "670 234 5678" },
    mq: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "596", countryName: "Martinique", phonePlaceholder: "696 201234" },
    mr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "222", countryName: "Mauritania", phonePlaceholder: "22 12 34 56" },
    ms: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Montserrat", phonePlaceholder: "664 492 3456" },
    mt: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "356", countryName: "Malta", phonePlaceholder: "9696 1234" },
    mu: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "230", countryName: "Mauritius", phonePlaceholder: "5251 2345" },
    mv: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "960", countryName: "Maldives", phonePlaceholder: "771 2345" },
    mw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "265", countryName: "Malawi", phonePlaceholder: "991 123 456" },
    my: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "60", countryName: "Malaysia", phonePlaceholder: "12 345 6789" },
    mz: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "258", countryName: "Mozambique", phonePlaceholder: "82 123 4567" },
    na: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "264", countryName: "Namibia", phonePlaceholder: "81 123 4567" },
    nc: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "687", countryName: "New Caledonia", phonePlaceholder: "75 12 34" },
    ne: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "227", countryName: "Niger", phonePlaceholder: "93 12 34 56" },
    nf: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "672", countryName: "Norfolk Island", phonePlaceholder: "3 81234" },
    ng: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "234", countryName: "Nigeria", phonePlaceholder: "0802 123 4567" },
    ni: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "505", countryName: "Nicaragua", phonePlaceholder: "8123 4567" },
    np: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "977", countryName: "Nepal", phonePlaceholder: "984 1234567" },
    nr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "674", countryName: "Nauru", phonePlaceholder: "555 1234" },
    nu: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "683", countryName: "Niue", phonePlaceholder: "1234" },
    nz: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "64", countryName: "New Zealand", phonePlaceholder: "021 123 456" },
    om: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "968", countryName: "Oman", phonePlaceholder: "91 123 456" },
    pa: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "507", countryName: "Panama", phonePlaceholder: "6123 4567" },
    pf: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "689", countryName: "French Polynesia", phonePlaceholder: "87 12 34 56" },
    pg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "675", countryName: "Papua New Guinea", phonePlaceholder: "7010 1234" },
    ph: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "63", countryName: "Philippines", phonePlaceholder: "912 345 6789" },
    pk: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "92", countryName: "Pakistan", phonePlaceholder: "301 2345678" },
    pl: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "48", countryName: "Poland", phonePlaceholder: "512 345 678" },
    pm: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "508", countryName: "Saint Pierre and Miquelon", phonePlaceholder: "055 12 34" },
    pn: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "870", countryName: "Pitcairn", phonePlaceholder: "56 123" },
    pr: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Puerto Rico", phonePlaceholder: "787 234 5678" },
    ps: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "970", countryName: "Palestine", phonePlaceholder: "59 123 4567" },
    pw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "680", countryName: "Palau", phonePlaceholder: "620 1234" },
    py: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "595", countryName: "Paraguay", phonePlaceholder: "0961 456789" },
    qa: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "974", countryName: "Qatar", phonePlaceholder: "3319 1234" },
    re: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "262", countryName: "Réunion", phonePlaceholder: "692 123456" },
    rs: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "381", countryName: "Serbia", phonePlaceholder: "60 1234567" },
    rw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "250", countryName: "Rwanda", phonePlaceholder: "72 123 4567" },
    sa: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "966", countryName: "Saudi Arabia", phonePlaceholder: "05 1234 5678" },
    sb: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "677", countryName: "Solomon Islands", phonePlaceholder: "74 21234" },
    sc: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "248", countryName: "Seychelles", phonePlaceholder: "2 510 123" },
    sd: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "249", countryName: "Sudan", phonePlaceholder: "091 123 1234" },
    sg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "65", countryName: "Singapore", phonePlaceholder: "8123 4567" },
    sh: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "290", countryName: "Saint Helena, Ascension and Tristan da Cunha", phonePlaceholder: "51234" },
    si: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "386", countryName: "Slovenia", phonePlaceholder: "031 234 567" },
    sj: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "47", countryName: "Svalbard and Jan Mayen", phonePlaceholder: "412 34 567" },
    sl: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "232", countryName: "Sierra Leone", phonePlaceholder: "076 123456" },
    sm: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "378", countryName: "San Marino", phonePlaceholder: "66 66 12 12" },
    sn: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "221", countryName: "Senegal", phonePlaceholder: "70 123 45 67" },
    so: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "252", countryName: "Somalia", phonePlaceholder: "7 1123456" },
    sr: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "597", countryName: "Suriname", phonePlaceholder: "741 2345" },
    ss: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "211", countryName: "South Sudan", phonePlaceholder: "977 123 456" },
    st: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "239", countryName: "Sao Tome and Principe", phonePlaceholder: "981 2345" },
    sv: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "503", countryName: "El Salvador", phonePlaceholder: "7012 3456" },
    sx: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Sint Maarten", phonePlaceholder: "721 5205678" },
    sy: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "963", countryName: "Syria", phonePlaceholder: "0944 567 890" },
    sz: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "268", countryName: "Eswatini", phonePlaceholder: "7612 3456" },
    tc: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Turks and Caicos Islands", phonePlaceholder: "649 231 1234" },
    td: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "235", countryName: "Chad", phonePlaceholder: "63 01 23 45" },
    tf: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "262", countryName: "French Southern and Antarctic Lands", phonePlaceholder: "0129 12 34 56" },
    tg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "228", countryName: "Togo", phonePlaceholder: "90 123 456" },
    th: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "66", countryName: "Thailand", phonePlaceholder: "08 1234 5678" },
    tk: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "690", countryName: "Tokelau", phonePlaceholder: "1234" },
    tl: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "670", countryName: "Timor-Leste", phonePlaceholder: "7721 2345" },
    tm: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "993", countryName: "Turkmenistan", phonePlaceholder: "8 66 123456" },
    tn: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "216", countryName: "Tunisia", phonePlaceholder: "20 123 456" },
    to: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "676", countryName: "Tonga", phonePlaceholder: "771 5123" },
    tt: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Trinidad and Tobago", phonePlaceholder: "868 291 1234" },
    tv: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "688", countryName: "Tuvalu", phonePlaceholder: "901234" },
    tw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "886", countryName: "Taiwan", phonePlaceholder: "0912 345 678" },
    tz: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "255", countryName: "Tanzania", phonePlaceholder: "623 123 456" },
    ug: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "256", countryName: "Uganda", phonePlaceholder: "712 345 678" },
    um: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "United States Minor Outlying Islands", phonePlaceholder: "123 456 7890" },
    us: { phoneRegex: /^[0-9]{10,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "United States", phonePlaceholder: "555 123 4567" },
    uy: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "598", countryName: "Uruguay", phonePlaceholder: "091 234 567" },
    va: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "39", countryName: "Vatican City", phonePlaceholder: "312 345 6789" },
    vc: { phoneRegex: /^[0-9]{7,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "Saint Vincent and the Grenadines", phonePlaceholder: "784 4301234" },
    ve: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "58", countryName: "Venezuela", phonePlaceholder: "0412 1234567" },
    vg: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "British Virgin Islands", phonePlaceholder: "284 300 1234" },
    vi: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "1", countryName: "United States Virgin Islands", phonePlaceholder: "340 642 1234" },
    vn: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "84", countryName: "Vietnam", phonePlaceholder: "091 234 56 78" },
    vu: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "678", countryName: "Vanuatu", phonePlaceholder: "591 2345" },
    wf: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "681", countryName: "Wallis and Futuna", phonePlaceholder: "501234" },
    ws: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "685", countryName: "Samoa", phonePlaceholder: "75 12345" },
    ye: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "967", countryName: "Yemen", phonePlaceholder: "771 234 567" },
    yt: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "262", countryName: "Mayotte", phonePlaceholder: "639 123456" },
    za: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "27", countryName: "South Africa", phonePlaceholder: "071 123 4567" },
    zm: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "260", countryName: "Zambia", phonePlaceholder: "095 1234567" },
    zw: { phoneRegex: /^[0-9]{6,12}$/i, numLimit: 12, phoneccValue: "263", countryName: "Zimbabwe", phonePlaceholder: "071 123 4567" }
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

            var inpBgClr = $(this).find('input[name=forename]').css('background-color');
            $(this).find('input').not('input[type=checkbox]').attr('style', function(index, value) {
                if (value === undefined) {
                    value = "";
                }
                if (value.indexOf('background-color') === -1) {
                    value += 'background-color:' + inpBgClr + ' !important;';
                }
                return value;
            });
            var inpClr = $(this).find('input[name=forename]').css('color');
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
            var inpFntSz = $(this).find('input[name=forename]').css('font-size');
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
$("form input").keypress(function(event) {
    if (event.which === 13) {
        event.preventDefault();
    }
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