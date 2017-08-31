function Player(positionX) {
  this.positionX = positionX;
}

Player.prototype.goLeft = function (){
  this.positionX -=8
}

Player.prototype.goRigth = function (){
  this.positionX +=8
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
