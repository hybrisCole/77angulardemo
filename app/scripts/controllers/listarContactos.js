'use strict';

angular.module('77DigitalAngularDemoApp').controller('ListarContactosCtrl',
  ['$scope','contactoService', function ($scope,contactoService) {
    $scope.contactosCargados = false;
    $scope.actualizandoContacto = false;
    $scope.contactoSeleccionado = [];
    $scope.provincias = [
      'San Jose',
      'Heredia',
      'Alajuela',
      'Cartago',
      'Guanacaste',
      'Limon',
      'Puntarenas'
    ];
    contactoService.listarContactos().then(function(data){
      $scope.myData = data;
      $scope.contactosCargados = true;      
    });
    $scope.gridOptions = {
      data: 'myData',
      selectedItems: $scope.contactoSeleccionado,
      multiSelect: false,
      columnDefs: [
        {
          field:'__v',
          visible:false
        },
        {
          field:'_id',
          visible:false
        },
        {
          field:'nombreCompleto',
          displayName:'Nombre Completo'
        },
        {
          field:'direccion1',
          displayName:'Direccion Linea 1'
        },
        {
          field:'direccion2',
          displayName:'Direccion Linea 2'
        },
        {
          field:'ciudad',
          displayName:'Ciudad'
        },
        {
          field:'provincia',
          displayName:'Provincia'
        }
      ]
    };
  }
]);
