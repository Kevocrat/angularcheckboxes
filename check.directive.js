if(!academy) {
    var academy = {};
}
if(!academy.form) {
    academy.form = {};
}
academy.form.formCheckDirective = function () {
    return {
        restrict: 'E',
        templateUrl: 'checkbox.html',
        scope:{
            question:'=',
            model:'='
        },
        replace:true
    }
};
