'use strict';

angular.module('77DigitalAngularDemoApp')
  .controller('HeaderCtrl', ['$scope', function ($scope) {
    $scope.urls = [
      {
        nombre:'Crear Contacto',
        link:'#/crearContacto',
        icon:'icon-user'
      },
      {
        nombre:'Listar Contactos',
        link:'#/listarContactos',
        icon:'icon-th-list'
      }
    ];
  }]
);