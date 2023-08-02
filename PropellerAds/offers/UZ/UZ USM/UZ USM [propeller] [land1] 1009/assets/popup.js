var pieces = 100,
    speed = 1,
    pieceW = 58,
    pieceH = 58;


for (var i = pieces - 1; i >= 0; i--) {
  $('#popup').prepend('<div class="piece" style="width:'+pieceW+'px; height:'+pieceH+'px"></div>');
};

function breakGlass(from){
  if (from === "reverse"){
    $('.piece').each(function(){
      TweenLite.to($(this), speed, {x:0, y:0, rotationX:0, rotationY:0, opacity: 1, z: 0});
    });
    return;
  }


  $('.piece').each(function(){
    var distX = getRandomArbitrary(-250, 250),	
        distY = getRandomArbitrary(-250, 250),
        rotY  = getRandomArbitrary(-720, 720),
        rotX  = getRandomArbitrary(-720, 720),
        z = getRandomArbitrary(-500, 500);

    if(!from){
      TweenLite.to($(this), speed, {x:distX, y:distY, rotationX:rotX, rotationY:rotY, opacity: 0, z: z});	
    } else {
      TweenLite.from($(this), speed, {x:distX, y:distY, rotationX:rotX, rotationY:rotY, opacity: 0, z: z});	
    }				
  });	
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

