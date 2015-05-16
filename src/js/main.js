(function(preload, create, update) {
    App.Game = new Phaser.Game(900, 600, Phaser.AUTO);

    var GameState = function() {
        this.preload = App.PreloadCtrl;
        this.create = App.CreateCtrl;
        this.update = App.UpdateCtrl;
    }

    App.Game.state.add('game', GameState, true);
    App.Game.input.onDOwn.add(this.jump,this);

})(App.preload, App.create, App.update);
