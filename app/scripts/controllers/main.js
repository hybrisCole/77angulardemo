'use strict';

var app = angular.module('77DigitalAngularDemoApp');

app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.techies = [
    {
      nombre:'Angular UI Directives',
      link:'http://angular-ui.github.io/bootstrap'
    },
    {
      nombre:'Raspe indiscriminado de snippets en Bootsnipp :>',
      link:'http://bootsnipp.com'
    },
    {
      nombre:'Generador de Yeoman para AngularJS',
      link:'https://github.com/yeoman/generator-angular'
    }
  ];
}]);