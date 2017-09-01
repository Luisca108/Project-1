function Fire(speed, posx) {
  //this.positionX = parseInt(Math.floor(Math.random() * screenWidth));
  this.life = 100;
  this.positionX = posx;
  this.positionY = 100;
  this.speed = speed;
  this.flag = false;
  this.element = $("<div>").addClass('fire');
  this.element.css({
    top: this.positionY,
    left: this.positionX,
    position: "absolute"
  });
  // $("#pig").append(this.element);
  $("#container").append(this.element);
};

Fire.prototype.goDown = function() {
  this.positionX += 1
};

Fire.prototype.moveFire = function() {
 this.positionY = (this.positionY + this.speed);
 this.element.css({
   top: this.positionY,
   position: 'absolute'
 });
 if(this.positionY > $("#container").height()-this.element.height()){
   this.element.remove();
   this.flag = true;
 }
};
