'use strict';

angular.module('77DigitalAngularDemoApp')
  .factory('contactoService', ['$http','$q',function($http,$q) {
    var contactos = [{'provincia':'San Jose','nombreCompleto':'Jorge Alberto Cole Palacios','direccion1':'77Digital','direccion2':'Plaza Florencia, local #16','ciudad':'Escazu'}],
      msgOK = {msg:'OK!'},
      msgFail = {msg:'FAIL'};
    return{
      guardarContacto: function(contactoForm){
        var deferred = $q.defer();
        contactos.push(contactoForm);
        deferred.resolve(msgOK);
        /*$http.post('http://sharelocapi.jit.su/contacto',contactoForm).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });*/
        return deferred.promise;
      },
      listarContactos: function(){
        var deferred = $q.defer();
        /*$http.get('http://sharelocapi.jit.su/contacto').success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });*/
        deferred.resolve(contactos);
        return deferred.promise;
      },
      actualizarContacto: function(contactoObj){
        var deferred = $q.defer();
        $http.put('http://sharelocapi.jit.su/contacto'+contactoObj.id,contactoObj).success(function(){
          deferred.resolve(msgOK);
        }).error(function(){
          deferred.reject(msgFail);
        });
        return deferred.promise;
      },
      eliminarContacto: function(contactoObj){
        var deferred = $q.defer();
        $http.delete('http://sharelocapi.jit.su/contacto',contactoObj).success(function(){
          deferred.resolve(msgOK);
        }).error(function(){
          deferred.reject(msgFail);
        });
        return deferred.promise;
      }
    };
  }]);