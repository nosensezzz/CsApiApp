define(function (require) {
    var ko = require('knockout');

    function app() {
        this.viewmodel = ko.observable();
    }

    return app;
});