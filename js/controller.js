var keys = {};
var fps = 200;
var screenWidth = 1069;

$(document).ready(function() {
  var player = new Player(0);
  var enemy = new Enemy(0);
  var weapon = new Weapon(0);
  var fireEnemy = new Fire(0);
  setInterval(checkControls, 40)
  setInterval(pigMovement, 1000 / fps)


  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  }).keyup(function(e) {
    delete keys[e.keyCode];
  });


  //player
  function checkControls() {
    $("#sword").appendTo($("#skeleton"));

    if (keys[39]) {
      if (player.positionX < 1336.500 - 150) {
        player.goRigth();
        skeleton.style.left = player.positionX + "px";
        $("#skeleton").css("transform", "rotateY(360deg)");
      }
    } else if (keys[37]) {
      if (player.positionX > 0) {
        player.goLeft();
        skeleton.style.left = player.positionX + "px";
        $("#skeleton").css("transform", "rotateY(180deg)");
      }
    }
    if (keys[32]) {
      weapon.shoot();
      sword.style.bottom = weapon.positionX + "px";
      $("#sword").show();
    } else {
      $("#sword").hide();
    }
  }

  //pig
  function pigMovement() {

    $("#fire").appendTo($("#pig"));
    var newtop = $('#fire').position().top + 1;
    $('#fire').css('top', newtop + 'px');
    setTimeout(function(){ $('#fire').css('top', newtop + 'px');; }, 3000);

    switch (enemy.orientation) {

      case "right":

        if (enemy.positionX <= screenWidth) {
          enemy.goRigth();
        } else {
          enemy.flip()
        }
        break;

      case "left":

        if (enemy.positionX >= 0) {
          enemy.goLeft();
        } else {
          enemy.flip()
        }
        break;
    }

    // updateenemy on screenWidth
    if (enemy.positionX <= screenWidth) {
      pig.style.left = enemy.positionX + "px";

    } else if (enemy.positionX >= -1) {
      pig.style.left = enemy.positionX + "px";
    }
    check();
  }


//collision
check = function() {
  var collide = $("#fire").collision("#skeleton");

  if (collide[0]) {
    
  }
}


});
