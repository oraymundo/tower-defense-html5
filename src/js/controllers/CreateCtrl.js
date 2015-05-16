(function(App) {

    App.CreateCtrl = new App.BaseCtrl(function () {
        this.game.time.slowMotion = 8.0;
        
        App.baddie = App.Game.add.sprite(0, 0, 'baddie');
        App.baddie.scale.set(0.5, 0.5);

        App.towertree = App.Game.add.sprite(0,0,'tower-tree');
        App.towertree.scale.set(0.5, 0.5);

        var levelOne = new LevelOne();
        levelOne.draw();

        App.level = {
            levelOne: new BaseLevel()
        };
        //App.level.levelOne.findPath(0,0, Math.floor(Math.random() * 30), Math.floor(Math.random() * 30));
        App.level.levelOne.findPath(0,0, 29, 19);
    });

})(window.App);
