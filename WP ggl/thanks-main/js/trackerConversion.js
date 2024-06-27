const subId = getUrlParameter('clickId');
const pb = new Image();
pb.src = 'https://nanometer.space/0a62660/postback?subid=' + subId + '&status=lead';
pb.style.display = 'none';
document.body.appendChild(pb);
