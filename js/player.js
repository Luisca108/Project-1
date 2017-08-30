function Player(positionX) {
  this.positionX = positionX;
}

Player.prototype.goLeft = function (){
  this.positionX -=8
}

Player.prototype.goRigth = function (){
  this.positionX +=8
}
