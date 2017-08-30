function Enemy(positionX, flag) {
  this.positionX = positionX;
  this.orientation = "right"
}

Enemy.prototype.goLeft = function() {
  this.positionX -= 1
  $("#pig").css("transform", "rotateY(180deg)");
}

Enemy.prototype.goRigth = function() {
  this.positionX += 1
  $("#pig").css("transform", "rotateY(360deg)");
}

Enemy.prototype.flip = function() {
  this.orientation = this.orientation === "left" ? "right" : "left"
}
