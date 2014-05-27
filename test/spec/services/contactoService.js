'use strict';

describe('Service: contactoService', function () {

  // load the service's module
  beforeEach(module('77DigitalAngularDemoApp'));

  // instantiate service
  var contactoService, $httpBackend,
  contactoObj = {
    'nombreCompleto':'Mr Trouble',
    'direccion1':'77 Digital',
    'direccion2':'Plaza Florencia, local #16, Guachipelin',
    'ciudad':'Escazu',
    'provincia':'San Jose'
  };
  beforeEach(inject(function(_contactoService_,$injector) {
    contactoService = _contactoService_;
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should do something', function () {
    expect(!!contactoService).toBe(true);    
  });

  it('should return OK when calling guardarContacto', function () {
    /*var message = undefined;
    $httpBackend.expectPOST('http://tgj.jit.su/contactos/crear',contactoObj
    ).respond(
      {'msg':'OK!'}
    );
    runs(function(){
      contactoService.guardarContacto(contactoObj).then(function(value){
        message = value;
      });
      $httpBackend.flush();
    });
    waitsFor(function() { return message !== undefined; }, 500);
    runs(function() {
      expect(message.msg).toBe('OK!');
    });*/
  });

  it('should return FAIL when calling guardarContacto', function () {
    /*var message = undefined;
    $httpBackend.expectPOST('http://tgj.jit.su/contactos/crear',contactoObj
    ).respond(
      {'msg':'FAIL'}
    );
    runs(function(){
      contactoService.guardarContacto(contactoObj).then(function(value){
        message = value;
      });
      $httpBackend.flush();
    });

    waitsFor(function() { return message !== undefined; }, 500);

    runs(function() {
      expect(message.msg).toBe('FAIL');
    });*/
  });
});
