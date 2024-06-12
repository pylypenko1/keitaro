function detectMobileDevice() {
  let e = false;
  if ('maxTouchPoints' in navigator) {
    e = navigator.maxTouchPoints > 0;
  }
  return e;
}
function vimeoPlaceholderClickHandler(e) {
  const l = e.currentTarget;
  l.removeEventListener('click', vimeoPlaceholderClickHandler);
  delete l.dataset.placeholder;
  const o = `https://player.vimeo.com/video/${l.dataset.vimeoSrc}`;
  const t = detectMobileDevice() ? '&muted=1' : '';
  l.innerHTML = `<iframe class="js-success-video-object" src="${o}?autoplay=1${t}" allow="autoplay; fullscreen" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
}
