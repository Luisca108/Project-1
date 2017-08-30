var keys = {};
var fps = 200;
var screenWidth = 1069;

$(document).ready(function() {
  var player = new Player(0);
  var enemy = new Enemy(0);
  var weapon = new Weapon(0);
  setInterval(checkControls, 40)
  setInterval(checkWeapon, 40)
  setInterval(pigMovement, 1000 / fps)

  $(document).keydown(function(e) {
    keys[e.keyCode] = true;
  }).keyup(function(e) {
    delete keys[e.keyCode];
  });


  //player
  function checkControls() {

    if (keys[39]) {
      if (player.positionX < 1336.500 - 150) {
        player.goRigth();
        weapon.goRigth();
        skeleton.style.left = player.positionX + "px";
        sword.style.left = weapon.positionX + "px";
        $("#skeleton").css("transform", "rotateY(360deg)");
      }
    } else if (keys[37]) {
      if (player.positionX > 0) {
        player.goLeft();
        weapon.goLeft();
        skeleton.style.left = player.positionX + "px";
        sword.style.left = weapon.positionX + "px";
        $("#skeleton").css("transform", "rotateY(180deg)");
      }
    }
  }

  //pig
  function pigMovement() {

    switch (enemy.orientation) {

      case "right":

        if (enemy.positionX <= screenWidth) {
          enemy.goRigth();
        }
        else {
          enemy.flip()
        }
        break;

      case "left":

        if (enemy.positionX >= 0) {
          enemy.goLeft();
        }
        else {
          enemy.flip()
        }
        break;
    }

    // updateenemy on screenWidth
    if (enemy.positionX <= screenWidth) {
      pig.style.left = enemy.positionX + "px";

    } else if(enemy.positionX >= -1) {
        pig.style.left = enemy.positionX + "px";
     }



  }


  //weapon
  function checkWeapon() {

    if (keys[32]) {
      weapon.goUp();
      sword.style.bottom = weapon.positionX + "px";
      $("#sword").show();
    } else {
      $("#sword").hide();
    }
  }


});
