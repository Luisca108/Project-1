// VARIABLE TO USE LATER
var keys = {};
var screenWidth = 1069;
var fire = [];
var dotsOfFire = 10;
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

  function _rainOfFire(x) {
    for (var i = 0; i < x-fire.length; i++){
      var speed = Math.random() * 10 + 10;
      fire.push(new Fire(speed, enemy.positionX - 200));
    }
  }

  function _updateAll() {
    fire = fire.filter(function (e) {
      return !e.flag;
    })
    fire.forEach(function (e){
      e.moveFire();
    })
  }
});
