'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA Template for Visual Studio';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /about
    .controller('AboutCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | About';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /login
    .controller('LoginCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Sign In';
        // TODO: Authorize a user
        $scope.login = function () {
            $location.path('/mis-ligas');
            return false;
        };
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
        $scope.register = function() {
            $location.path('/register');
            return false;
        };
    }])

    //Path: /register
    .controller('RegisterCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Register';
        // TODO: Register a new user
        $scope.login = function () {
            $location.path('/login');
            return false;
        };

    }])

    //Path: /forgot-password
    .controller('ForgotPasswordCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | Forgot Password';
        // TODO: Register a new user
        $scope.RecoverPassword = function () {
                $scope.ShowMessage = true;
            return false;
        };

    }])

        //Path: /mis-ligas
    .controller('MisLigasCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'AngularJS SPA | MisLigas';
        // TODO: Ver Ligas
        $scope.misligas = [];
        var liga1 = {
            id : 1,
            nombre: "Inglesa",
            proximo_Fecha: new Date(),
            proximo_Encuentro: "Man U vs Arsenal",
            aciertos: 4,
            puntos: 6
        };
        var liga2 = {
            id: 2,
            nombre: "Hondureña",
            proximo_Fecha: new Date(),
            proximo_Encuentro: "Olimpia vs Maraton",
            aciertos: 5,
            puntos: 8
        };
        $scope.misligas.push(liga1);
        $scope.misligas.push(liga2);
        $scope.Rien = function () {
            return false;
        };
    }])
            //Path: /española
    .controller('LigaCtrl', ['$scope', '$location', '$window', '$stateParams', function ($scope, $location, $window, $stateParams) {
        $scope.$root.title = 'AngularJS SPA | Liga';
        console.log($stateParams.idLiga);
        $scope.misligas = [];
        var liga1 = {
            id: 1,
            nombre: "Inglesa",
            proximo_Fecha: new Date(),
            proximo_Encuentro: "Man U vs Arsenal",
            listado_De_Juegos: [{jornada:1,equipo1:"Barca",equipo2:"Madrid",result1:1,result2:0},{}],
            aciertos: 4,
            puntos: 6
        };
        var liga2 = {
            id: 2,
            nombre: "Hondureña",
            proximo_Fecha: new Date(),
            proximo_Encuentro: "Olimpia vs Maraton",
            aciertos: 5,
            puntos: 8
        };
        $scope.misligas.push(liga1);
        $scope.misligas.push(liga2);
        // TODO: Ver Ligas
        $scope.Rien2 = function () {
            return false;
        };
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);