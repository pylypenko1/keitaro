
const subId = getUrlParameter('clickId');
const pb = new Image();
pb.src = 'https://keitaro-leadar.ink/f6c793a/postback?subid=' + subId + '&status=lead';
pb.style.display = 'none';
document.body.appendChild(pb);
