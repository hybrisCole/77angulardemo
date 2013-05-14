'use strict';

describe('Controller: CrearContactoCtrl', function () {

  // load the controller's module
  beforeEach(module('77DigitalAngularDemoApp'));

  var CrearContactoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
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
});
