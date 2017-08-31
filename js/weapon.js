function Weapon(positionX, weapon) {
  this.positionX = positionX;
  this.weapon = weapon;
}

Weapon.prototype.shoot = function (){
  this.positionX +=30
}


Weapon.prototype.reset = function (sword) {
  document.getElementById("sword").reset()
}

Weapon.prototype.createNewWeapon = function() {
  setTimeOut(function(){
    this.reset(this.sword)
  }.bind(this), 500)
}
