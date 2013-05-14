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

    $scope.openModal = function () {
      $scope.modalContacto = true;
    };

    $scope.closeModal = function () {
      $scope.modalContacto = false;
    };

    $scope.modalOpts = {
      backdropFade: true,
      dialogFade:true
    };

    $scope.guardarContacto = function(){
      contactoService.guardarContacto($scope.contactoForm).then(function(data){        
        if(data.msg === "OK!"){          
          $scope.contactoForm = {provincia: "San Jose"};
          $scope.modalMessage = "Se ha creado un nuevo contacto";
          $scope.openModal();
        }else if(data.msg === "FAIL"){
          $scope.modalMessage = "La creacion de un contacto ha fallado";
          $scope.openModal();
        }
      });
    };
  }]);
