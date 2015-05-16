(function(App) {
    App.PreloadCtrl = new App.BaseCtrl(function () {
        this.game.load.image('baddie', '/assets/img/baddie.jpg');
        this.game.load.image('tower-tree','/assets/img/tower-tree.jpg');
    });
})(window.App);
