let objUTM = {
  offer: 'Tesler_app',
  userFirst: '',
  userEmail: '',
  target: '',
  creo: '',
  source: '',
  buyer: '',
};

let currentUrl = window.location.href;

if (currentUrl.indexOf('?') !== -1) {
  let splitUrl = currentUrl.split('?');
  let arrAttr = splitUrl[1].split('&');

  for (let i = 0; i < arrAttr.length; i++) {
    if (arrAttr[i].indexOf('first') !== -1) {
      objUTM.userFirst = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('email') !== -1) {
      objUTM.userEmail = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('targ') !== -1) {
      objUTM.target = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('creo') !== -1) {
      objUTM.creo = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('source') !== -1) {
      objUTM.source = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('buyer') !== -1) {
      objUTM.buyer = arrAttr[i].split('=')[1];
    }
  }
}
