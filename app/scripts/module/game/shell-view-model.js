define(function (require) {

    var html = require('text!/app/scripts/module/game/views/shell.html');

    function GameViewModel() {
        this.value1 = ko.observable(5);
    }

    GameViewModel.prototype.load = function (Phtml) {
        Phtml.append(html);
        alert('1');
        Phtml.empty();
    };

    GameViewModel.prototype.callme = function () {
        var self = this;
        alert(self.value1());
        $("#main").text("game");
        console.log(html);
        
    };

    return GameViewModel;
});