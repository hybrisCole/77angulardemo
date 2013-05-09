'use strict';

var app = angular.module('77DigitalAngularDemoApp', ['ui.bootstrap']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/crearContacto', {
      templateUrl: 'views/crearContacto.html',
      controller: 'CrearContactoCtrl'
    })
    .when('/listarContactos', {
      templateUrl: 'views/listarContactos.html',
      controller: 'ListarContactosCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});