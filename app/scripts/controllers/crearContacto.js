'use strict';

angular.module('77DigitalAngularDemoApp')
  .controller('CrearContactoCtrl', ['$scope','contactoService', function ($scope,contactoService) {
    $scope.contactoForm = {provincia: "San Jose"};
    $scope.provincias = [
      'San Jose',
      'Heredia',
      'Alajuela',
      'Cartago',
      'Guanacaste',
      'Limon',
      'Puntarenas'
    ];    
    $scope.guardarContacto = function(){
      contactoService.guardarContacto($scope.contactoForm).then(function(data){
        console.log(data);
      });
    };
  }]);
