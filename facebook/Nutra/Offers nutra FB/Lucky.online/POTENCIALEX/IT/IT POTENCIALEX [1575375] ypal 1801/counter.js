var yandex = {
    "v24": 66012382,
    "v25": 66012388,
    "v26": 66503218,
    "v27": 66503257,
    "v28": 66503281,
	"v29": 67757101,
	"v30": 67870720,
    "v31": 68617432,
    "v32": 69451791,
    "v33": 69451794,
    "v34": 69451800,
    "v35": 69451806,
    "v36": 69594106,
    "v37": 69591901,
	"v38": 70205893,
    "v39": 70615186,
    "v40": 71159446,
    "v41": 71160673,
    "v42": 74566474,
    "v43": 76930792,
    "v44": 77651965,
    "v45": 77652016,
    "v46": 77652079,
    "v47": 77652223,
    "v48": 78314968,
    "v49": 84186775,
    "v50": 86011967,
    "v51": 86500298,
	"v52": 86814181,
	"v53": 86915207,
	"v54": 87273789,
	"v55": 87538215,
	"v56": 88301338,
	"v57": 88719541,
	"v58": 88965828,
	"v59": 88976193,
	"v60": 89334722,
	"v68": 90186681,
	"v71": 90696639,
	"v72": 90696634,
};

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : '';
}

var site = $_GET('version').replace('it', '').replace('39', '').replace('prelp', '')

if (!site) {
    var site = document.location.pathname
        .replace(/\/+/g, '')
        .replace('index.html', '')
        .replace('index2.html', '')
        .replace('prelp', '')
        .replace('it', '')
        .replace('39', '')
        .replace('confirm.html', '');

}
(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(yandex[site], "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});