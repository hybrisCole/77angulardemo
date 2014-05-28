'use strict';

describe('Service: contactoService', function () {

  // load the service's module
  beforeEach(module('77DigitalAngularDemoApp'));

  // instantiate service
  var contactoService, $httpBackend,timeout,
  contactoObj = {
    id:'f31a57cd-6375-3ad0-148b-6611692be2c0',
    'nombreCompleto':'Mr Trouble',
    'direccion1':'77 Digital',
    'direccion2':'Plaza Florencia, local #16, Guachipelin',
    'ciudad':'Escazu',
    'provincia':'San Jose'
  };
  beforeEach(inject(function(_contactoService_,$injector,$timeout) {
    contactoService = _contactoService_;
    $httpBackend = $injector.get('$httpBackend');
    timeout = $timeout;
  }));

  it('should do something', function () {
    expect(!!contactoService).toBe(true);    
  });

  it('should return FAIL when calling guardarContacto', function () {

  });
});
