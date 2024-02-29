let objUTM = {
  country: 'ca',
  offer: 'QuantumAI',
  target: '',
  creo: '',
  buyer: '',
  preland: '',
};

let currentUrl = window.location.href;

if (currentUrl.indexOf('?') !== -1) {
  let splitUrl = currentUrl.split('?');
  let arrAttr = splitUrl[1].split('&');

  for (let i = 0; i < arrAttr.length; i++) {
    if (arrAttr[i].indexOf('preland') !== -1) {
      objUTM.preland = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('targ') !== -1) {
      objUTM.target = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('creo') !== -1) {
      objUTM.creo = arrAttr[i].split('=')[1];
    }

    if (arrAttr[i].indexOf('buyer') !== -1) {
      objUTM.buyer = arrAttr[i].split('=')[1];
    }
  }
}
objUTM.target = objUTM.preland + objUTM.target;
