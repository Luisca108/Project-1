// $(document).ready(function() {
//
// });

var skeleton = document.getElementById('skeleton');
var container = document.getElementById("container");
var pig = document.getElementById('pig');

var skeletonLeft = 0;
var pigLeft = 0;
var pigRight = 0;


//skeleton move
function anim(e) {
  // alert(e.keyCode);
  if(e.keyCode == 39) {
    if (skeletonLeft< 1336.500 - 150) {
    skeletonLeft += 8;
    skeleton.style.left = skeletonLeft + "px";
   }
    $("#skeleton").css("transform", "rotateY(360deg)");
  }

  if(e.keyCode == 37) {
    if (skeletonLeft > 0) {
   skeletonLeft -= 8;
   skeleton.style.left = skeletonLeft + "px";
   }
    $("#skeleton").css("transform", "rotateY(180deg)");
  }
}

document.onkeydown = anim;

//pig move
var fps = 200;
setInterval(function() {
  if (pigLeft< 1336.500 - 268) {
    pigLeft += 1;
    pig.style.left = pigLeft + "px";
  }
}, 1000/fps);
