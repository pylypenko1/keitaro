let objUTM = {
  country: 'kz',
  offer: 'Halyk-Q3',
  target: '',
  creo: ''
};

let arrPixelID = {};
let currentUrl = window.location.href;

if (currentUrl.indexOf('?') !== -1) {
  let splitUrl = currentUrl.split('?');
  let arrAttr = splitUrl[1].split('&');

  for (let i = 0; i < arrAttr.length; i++) {
    if (arrAttr[i].indexOf('utm_target') !== -1) {
      objUTM.target = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('utm_creative') !== -1) {
      objUTM.creo = arrAttr[i].split('=')[1];
    }
  }
}