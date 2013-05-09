'use strict';

var app = angular.module('77DigitalAngularDemoApp', ['ui.bootstrap']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});