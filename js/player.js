function Player(positionX) {
  this.positionX = positionX;
  this.counter = 5;
}

Player.prototype.goLeft = function (){
  this.positionX -=10
}

Player.prototype.goRigth = function (){
  this.positionX +=10
}

Player.prototype.movement = function (){

  if (keys[39]) {
    if (this.positionX < 1336.500 - 150) {
      this.goRigth();
      skeleton.style.left = this.positionX + "px";
      $("#skeleton").css("transform", "rotateY(360deg)");
    }
  } else if (keys[37]) {
    if (this.positionX > 0) {
      this.goLeft();
      skeleton.style.left = this.positionX + "px";
      $("#skeleton").css("transform", "rotateY(180deg)");
    }
  }
}

Player.prototype.check = function() {
  var collide = $("#skeleton").collision(".fire");

  if (collide[0]) {
    $(".fire").remove();
    this.life =  $("progress").attr("value")
    $("progress").attr("value", this.life - 20)
    //aqui pones la suma del contador this.contaordegolpes.

    this.counter--
    if(this.counter <= 0){
     $('.gameOver').css('visibility','visible');
     $('#button').css('visibility','visible');
   } else {
     $('.gameOver').css('visibility','hidden');
     $('#button').css('visibility','hidden');
   }
  }
}
