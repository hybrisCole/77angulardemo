'use strict';

angular.module('77DigitalAngularDemoApp').controller('ListarContactosCtrl',
  ['$scope','contactoService','$timeout', function ($scope,contactoService,$timeout) {
    $scope.contactosCargados = false;
    $scope.actualizandoContacto = false;
    $scope.eliminandoContacto = false;
    $scope.alerts = [];
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
    var listarContactos = function(){
      contactoService.listarContactos().then(function(data){
        $timeout(function(){
          $scope.myData = data;
          $scope.contactosCargados = true;
        },1000);
      });
    };
    listarContactos();

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

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
    $scope.actualizarContacto = function(){
      if($scope.contactoSeleccionado[0]){
        $scope.actualizandoContacto = true;
      }else{
        $scope.alerts.push({type: 'error', msg: 'Seleccione un Contacto para poder modificarlo'});
      }
    };
    $scope.eliminarContacto = function(){
      if($scope.contactoSeleccionado[0]){
        $scope.eliminandoContacto = true;
      }else{
        $scope.alerts.push({type: 'error', msg: 'Seleccione un Contacto para poder elminarlo'});
      }
    };
  }
]);
