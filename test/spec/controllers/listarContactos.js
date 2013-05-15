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
    $httpBackend.when('POST', 'http://tgj.jit.su/contactos/actualizar').respond({msg:"OK!"});
    $httpBackend.when('POST', 'http://tgj.jit.su/contactos/eliminar').respond({msg:"OK!"});
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

  it('deberia retornar un listado de contactos', function () {
    expect(scope.contactosCargados).toBe(false);
    $httpBackend.expectGET('http://tgj.jit.su/contactos/listado');  
    ListarContactosCtrl = controller('ListarContactosCtrl', { $scope: scope });
    $httpBackend.flush();
    expect(scope.myData).toBe(contactoData);
    expect(scope.contactosCargados).toBe(true);
  });

  it('deberia modificar un Contacto',function(){
    expect(scope.actualizandoContacto).toBe(false);
    scope.contactoSeleccionado = [contactoData];
    $httpBackend.expectPOST('http://tgj.jit.su/contactos/actualizar',contactoData);
    scope.actualizarContacto();
    expect(scope.actualizandoContacto).toBe(true);
    $httpBackend.flush();
    expect(scope.actualizandoContacto).toBe(false);
    expect(scope.alerts[0].type).toBe('success');
    expect(scope.alerts[0].msg).toBe('El contacto se ha modificado correctamente.');
  });


  it('deberia mostrar error a la hora de modificar un Contacto si no hay seleccionados',function(){
    scope.contactoSeleccionado = [];    
    scope.actualizarContacto();
    expect(scope.alerts[0].type).toBe('error');
    expect(scope.alerts[0].msg).toBe('Seleccione un Contacto para poder modificarlo');
    $httpBackend.flush();
  });

  it('deberia eliminar un Contacto',function(){
    expect(scope.eliminandoContacto).toBe(false);
    scope.contactoSeleccionado = [contactoData];
    $httpBackend.expectPOST('http://tgj.jit.su/contactos/eliminar',contactoData);
    scope.eliminarContacto();
    expect(scope.eliminandoContacto).toBe(true);
    $httpBackend.flush();
    expect(scope.eliminandoContacto).toBe(false);
    expect(scope.alerts[0].type).toBe('success');
    expect(scope.alerts[0].msg).toBe('El contacto se ha eliminado correctamente.');
  });

  it('deberia mostrar error a la hora de eliminar un Contacto si no hay seleccionados',function(){
    scope.contactoSeleccionado = [];    
    scope.eliminarContacto();
    expect(scope.alerts[0].type).toBe('error');
    expect(scope.alerts[0].msg).toBe('Seleccione un Contacto para poder elminarlo');
    $httpBackend.flush();
  });


});
