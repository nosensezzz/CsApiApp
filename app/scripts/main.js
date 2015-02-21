define(function (require) {
    require('jquery');
    ko = require('knockout');
    sammy = require('sammy');
    AppViewModel = require('ko_app');
    text = require('text');

    var app = new AppViewModel(),
        html_main = $("#main");
    ko.applyBindings(app);
    
    var routing = sammy(function () {
        this.get("#/", function () {
            $("#main").text("");
        });
        
        this.get("#/game", function () {
            require(['game'], function (vm) {
                app.viewmodel(new vm());
                app.viewmodel().load(html_main);
            });
        });
       
        this.get("#/test", function () {
            require(['test/viewmodel'], function (vm) {
                app.viewmodel(new vm());
                app.viewmodel().callme();
            });
        });



        this.get("#/api/value", function () {
            $.ajax({
                type: 'GET',
                url: '/api/values/5',
                //dataType: 'json',

                success: function (a) {
                    console.log(a);
                },
            });
        });

        this.notFound = function () {
            // 
        }
    }).run();

});