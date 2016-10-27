(function() {
    'use strict';

    angular.module("academy", ['ngRoute', 'ngMaterial', 'academy.form'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'form.template.html',
                    controller: academy.form.FormController,
                    controllerAs: 'vm'
                })
                .otherwise('/')
        }]).config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue-grey')
            .warnPalette('red')
            .backgroundPalette('brown');
    });
})();