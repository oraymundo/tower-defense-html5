(function(App) {
    var it = 0;

    App.UpdateCtrl = new App.BaseCtrl(function() {
        var path = App.path;
        var baddie = App.baddie;

        baddie.x = path[it].x * 20;
        baddie.y = path[it].y * 20;
        it++
        if (it >= path.length - 1)
            it = 0;


        if (game.input.activePointer.isDown) {
            //  Boom!
            if (game.time.now > nextFire && bullets.countDead() > 0) {
                nextFire = game.time.now + fireRate;
                var bullet = bullets.getFirstExists(false);
                bullet.reset(turret.x, turret.y);
                bullet.rotation = game.physics.arcade.moveToPointer(bullet, 1000, game.input.activePointer, 500);
            }
        }


    });
})(window.App);
