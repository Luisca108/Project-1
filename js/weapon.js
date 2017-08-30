function Weapon(positionX) {
  this.positionX = positionX;
}

Weapon.prototype.goUp = function (){
  this.positionX +=70
}

Weapon.prototype.goLeft = function (){
  this.positionX -=8
}

Weapon.prototype.goRigth = function (){
  this.positionX +=8
}
