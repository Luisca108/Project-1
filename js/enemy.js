function Enemy (positionX) {
  this.positionX = positionX;
  this.orientation = "right"
}

Enemy.prototype.goLeft = function() {
  this.positionX -= 8
  $("#pig").css("transform", "rotateY(180deg)");
}

Enemy.prototype.goRigth = function() {
  this.positionX += 8
  $("#pig").css("transform", "rotateY(360deg)");
}

Enemy.prototype.flip = function() {
  this.orientation = this.orientation === "left" ? "right" : "left"
}

Enemy.prototype.movement = function () {

  switch (this.orientation) {
    case "right":
      if (this.positionX <= screenWidth) {
        this.goRigth();
      } else {
        this.flip()
      }
      break;
    case "left":
      if (this.positionX >= 0) {
        this.goLeft();
      } else {
        this.flip()
      }
      break;
  }
  if (this.positionX <= screenWidth) {
    pig.style.left = this.positionX + "px";
  } else if (this.positionX >= -1) {
    pig.style.left = this.positionX + "px";
  }
}
