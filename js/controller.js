// VARIABLE TO USE LATER
var keys = {};
var screenWidth = 1069;
var fire = [];
var dotsOfFire = 4;
// CONSTRUCT NEW OBJECTS
var player = new Player(0);
var enemy = new Enemy(0);

// DOCUMENT READY(
$(document).ready(function() {
  setInterval(movementChar, 40);
  setInterval(function(){
    _rainOfFire(dotsOfFire);
    //fireEnemy.check();
    console.log(fire);
  }, 1000)
  setInterval(_updateAll,40);

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
  }).keyup(function(e) {
    delete keys[e.keyCode];
  });
// FUNCTION TO REFRESH MOVEMENT
  function movementChar () {
    player.movement();
    enemy.movement();
  }
// var posicion = $('#pig').styte('left')
console.log();
  function _rainOfFire(x) {
    for (var i = 0; i < x-fire.length; i++){
      var speed = Math.random() * 10 + 3;
      fire.push(new Fire(speed, enemy.positionX));
      console.log(enemy.positionX);
      console.log(fire.positionX);
    }
  }

  function _updateAll() {
    player.check();
    fire = fire.filter(function (e) {
      return !e.flag;
    })
    fire.forEach(function (e){
      e.moveFire();

    })
  }
});
