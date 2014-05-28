'use strict';

describe('Controller: CrearContactoCtrl', function () {

  // load the controller's module
  beforeEach(module('77DigitalAngularDemoApp'));

  var CrearContactoCtrl, scope,$httpBackend, 
  contactoData = {'provincia':'San Jose','nombreCompleto':'Jorge Alberto Cole Palacios','direccion1':'77Digital','direccion2':'Plaza Florencia, local #16','ciudad':'Escazu'},
  provinciasMock = [
    'San Jose',
    'Heredia',
    'Alajuela',
    'Cartago',
    'Guanacaste',
    'Limon',
    'Puntarenas'
  ];

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

  it('el objeto de provincias deberia ser igual al mock de provincias', function () {
    expect(provinciasMock).toEqual(scope.provincias);
  });

  it('San Jose deberia ser la provincia seleccionada por defcto', function () {
    expect(scope.contactoForm.provincia).toBe("San Jose");
  });

  it('Hola Mundo deberia ser una funcion', function () {
    expect(typeof scope.holaMundo).toBe("function");
  });

  it('holamundovar deberia ser null al inicio, y booleano despues de llamar la funcion', function () {
    expect(scope.holaMundoVar).toBeUndefined();
    scope.holaMundo();
    expect(scope.holaMundoVar).not.toBeNull();
    scope.holaMundoVar = null;
    expect(scope.holaMundoVar).toBeNull();
  });

  it('deberia retornar un mensaje de OK cuando se guarda un contacto',function(){
    scope.contactoForm = contactoData;
    expect(scope.guardandoContacto).toBe(false);
    scope.guardarContacto();
    expect(scope.guardandoContacto).toBe(true);
    scope.$root.$digest();
    expect(scope.guardandoContacto).toBe(false);
    expect(scope.modalMessage).toBe("Se ha creado un nuevo contacto");
  });
});
