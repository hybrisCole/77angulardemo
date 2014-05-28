'use strict';

describe('Controller: ListarContactosCtrl', function () {

  // load the controller's module
  beforeEach(module('77DigitalAngularDemoApp'));

  var ListarContactosCtrl, scope,$httpBackend, controller,timeout,
  contactoData = {"provincia":"San Jose","nombreCompleto":"Jorge Alberto Cole Palacios","direccion1":"77Digital","direccion2":"Plaza Florencia, local #16","ciudad":"Escazu","_id":"519273ed04dda90000000014","__v":0},
  contactoAEliminar = {id:'f31a57cd-6375-3ad0-148b-6611692be2c0','provincia':'San Jose','nombreCompleto':'Jorge Alberto Cole Palacios','direccion1':'77Digital','direccion2':'Plaza Florencia, local #16','ciudad':'Escazu'};

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$httpBackend_,$timeout) {
    timeout = $timeout;
    /*$httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'http://sharelocapi.jit.su/contacto').respond(contactoData);
    $httpBackend.when('POST', 'http://sharelocapi.jit.su/contacto').respond({msg:"OK!"});
    $httpBackend.when('DELETE', 'http://sharelocapi.jit.su/contacto').respond({msg:"OK!"});*/
    scope = $rootScope.$new();    
    ListarContactosCtrl = $controller('ListarContactosCtrl', {
      $scope: scope
    });
    controller = $controller;
  }));

  afterEach(function() {
    //$httpBackend.verifyNoOutstandingExpectation();
    //$httpBackend.verifyNoOutstandingRequest();
  });

  it('deberia retornar un listado de contactos, de entrada no hay nada', function () {
    expect(scope.contactosCargados).toBe(false);
    //$httpBackend.expectGET('http://tgj.jit.su/contactos/listado');
    //ListarContactosCtrl = controller('ListarContactosCtrl', { $scope: scope });
    //$httpBackend.flush();
    scope.$root.$digest();
    timeout.flush();
    expect(scope.myData.length).toBe(1);
    expect(scope.contactosCargados).toBe(true);
    //npm install
    //bower install
    //git fetch origin
    //git checkout -b no_http origin/no_http

  });

  it('deberia modificar un Contacto',function(){
    /*expect(scope.actualizandoContacto).toBe(false);
    scope.contactoSeleccionado = [contactoData];
    $httpBackend.expectPOST('http://tgj.jit.su/contactos/actualizar',contactoData);
    scope.actualizarContacto();
    expect(scope.actualizandoContacto).toBe(true);
    $httpBackend.flush();
    expect(scope.actualizandoContacto).toBe(false);
    expect(scope.alerts[0].type).toBe('success');
    expect(scope.alerts[0].msg).toBe('El contacto se ha modificado correctamente.');*/
  });


  it('deberia mostrar error a la hora de modificar un Contacto si no hay seleccionados',function(){
    scope.contactoSeleccionado = [];
    scope.actualizarContacto();
    expect(scope.alerts[0].type).toBe('error');
    expect(scope.alerts[0].msg).toBe('Seleccione un Contacto para poder modificarlo');
    //$httpBackend.flush();
  });

  it('Si se trata de eliminar un contacto sin con un contacto seleccionado',function(){
    scope.contactoSeleccionado[0] = contactoAEliminar;
    scope.eliminarContacto();
    scope.$root.$digest();
    expect(scope.alerts[0]).toEqual({type: 'success', msg: 'El contacto se ha eliminado correctamente.'});
  });

  it('Si se trata de eliminar un contacto sin haber seleccionado alguno',function(){
    scope.eliminarContacto();
    scope.$root.$digest();
    //expect(scope.alerts[0]).toEqual({type: 'error', msg: 'Seleccione un Contacto para poder elminarlo'});
  });

  it('deberia mostrar error a la hora de eliminar un Contacto si no hay seleccionados',function(){
    scope.contactoSeleccionado = [];
    scope.eliminarContacto();
    expect(scope.alerts[0].type).toBe('error');
    expect(scope.alerts[0].msg).toBe('Seleccione un Contacto para poder elminarlo');
    //$httpBackend.flush();
  });


});
