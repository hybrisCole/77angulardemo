'use strict';

describe('Controller: ListarContactosCtrl', function () {

  // load the controller's module
  beforeEach(module('77DigitalAngularDemoApp'));

  var ListarContactosCtrl, scope,$httpBackend, controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_) {        
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'http://tgj.jit.su/contactos/listado').respond({"provincia":"San Jose","nombreCompleto":"dgfdfg","direccion1":"dfgfgdf","direccion2":"dfdfdfg","ciudad":"fdg","_id":"519273ed04dda90000000014","__v":0});
    scope = $rootScope.$new();    
    ListarContactosCtrl = $controller('ListarContactosCtrl', {
      $scope: scope
    });    
    controller = $controller;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('obtener listado de contactos', function () {
    $httpBackend.expectGET('http://tgj.jit.su/contactos/listado');  
    ListarContactosCtrl = controller('ListarContactosCtrl', { $scope: scope });
    $httpBackend.flush();
  });
});
