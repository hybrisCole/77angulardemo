'use strict';

describe('Controller: CrearContactoCtrl', function () {

  // load the controller's module
  beforeEach(module('77DigitalAngularDemoApp'));

  var CrearContactoCtrl, scope,$httpBackend, 
  contactoData = {'provincia':'San Jose','nombreCompleto':'Jorge Alberto Cole Palacios','direccion1':'77Digital','direccion2':'Plaza Florencia, local #16','ciudad':'Escazu'};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_) {
    //$httpBackend = _$httpBackend_;
    //$httpBackend.when('POST', 'http://sharelocapi.jit.su/contacto',contactoData).respond({msg:"OK!"});
    scope = $rootScope.$new();
    CrearContactoCtrl = $controller('CrearContactoCtrl', {
      $scope: scope
    });
  }));

  it('deberia haber un listado de las provincias de Costa Rica en el Scope', function () {
    expect(scope.provincias.length).toBe(7);
  });

  it('San Jose deberia ser la provincia seleccionada por defcto', function () {
    expect(scope.contactoForm.provincia).toBe("San Jose");
  });

  it('deberia retornar un mensaje de OK cuando se guarda un contacto',function(){
    scope.contactoForm = contactoData;
    expect(scope.guardandoContacto).toBe(false);
    //$httpBackend.expectPOST('http://sharelocapi.jit.su/contacto',contactoData);
    scope.guardarContacto();
    expect(scope.guardandoContacto).toBe(true);
    scope.$root.$digest();
    expect(scope.guardandoContacto).toBe(false);
    //$httpBackend.flush();
    expect(scope.modalMessage).toBe("Se ha creado un nuevo contacto");
  });
});
