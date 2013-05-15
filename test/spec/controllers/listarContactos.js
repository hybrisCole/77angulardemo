'use strict';

describe('Controller: ListarContactosCtrl', function () {

  // load the controller's module
  beforeEach(module('77DigitalAngularDemoApp'));

  var ListarContactosCtrl, scope,$httpBackend, controller,
  contactoData = {"provincia":"San Jose","nombreCompleto":"Jorge Alberto Cole Palacios","direccion1":"77Digital","direccion2":"Plaza Florencia, local #16","ciudad":"Escazu","_id":"519273ed04dda90000000014","__v":0};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_) {        
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'http://tgj.jit.su/contactos/listado').respond(contactoData);
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
    scope.contactosCargados = false;
    $httpBackend.expectGET('http://tgj.jit.su/contactos/listado');  
    ListarContactosCtrl = controller('ListarContactosCtrl', { $scope: scope });
    $httpBackend.flush();
    expect(scope.contactosData).toBe(contactoData);
    scope.contactosCargados = true;
  });
});
