define(function (require) {

    function TestViewModel() {
        this.value1 = ko.observable(3);
    }

    TestViewModel.prototype.callme = function () {
        var self = this;
        alert(self.value1());
    };

    return TestViewModel;
});