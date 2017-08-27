// $(document).ready(function() {
//
// });

var skeleton = document.getElementById('skeleton');
var container = document.getElementById("container");
var pig = document.getElementById('pig');

var skeletonLeft = 0;
var pigLeft = 0;


//skeleton move
function anim(e) {
  // alert(e.keyCode);
  if(e.keyCode == 39) {
    skeletonLeft += 8;
    skeleton.style.left = skeletonLeft + "px";
     if(skeletonLeft >= 900) {
       skeletonLeft -=0;
     }
  }
  if(e.keyCode == 37)
  skeletonLeft -= 8;
  skeleton.style.left = skeletonLeft + "px";
   if(skeletonLeft <= 0) {
    skeletonLeft += 2;
  }
}

document.onkeydown = anim;

//pig move
var fps = 200;
setInterval(function() {
  pigLeft += 1;
  pig.style.left = pigLeft + "px";
}, 1000/fps);
