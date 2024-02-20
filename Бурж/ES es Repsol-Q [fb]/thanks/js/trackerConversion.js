(function () {
  var matches = document.cookie.match(new RegExp('(?:^|; )' + 'subid' + '=([^;]*)'));
  var subId = matches ? decodeURIComponent(matches[1]) : undefined;
  var pb = new Image();
  pb.src = 'https://nanometer.space/0a62660/postback?subid=' + subId + '&status=lead';
  pb.style.display = 'none';
  document.body.appendChild(pb);
})();
