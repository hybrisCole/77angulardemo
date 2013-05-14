'use strict';

angular.module('77DigitalAngularDemoApp').controller('ListarContactosCtrl',
  ['$scope','contactoService', function ($scope,contactoService) {
    contactoService.listarContactos().then(function(data){
      console.log(JSON.stringify(data));
      $scope.contactosData = data;
    });
    $scope.gridOptions = {
      data: 'contactosData',
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
