(function(App) {
    var it = 0;

    App.UpdateCtrl = new App.BaseCtrl(function () {
        var path = App.path;
        var baddie = App.baddie;

        baddie.x = path[it].x * 30;
        baddie.y = path[it].y * 30;
        it++
        if (it>= path.length)
            it = 0;
    });
})(window.App);
