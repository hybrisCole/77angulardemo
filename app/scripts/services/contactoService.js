'use strict';

angular.module('77DigitalAngularDemoApp')
  .factory('contactoService', ['$http','$q',function($http,$q) {
    var contactos = [{id:'f31a57cd-6375-3ad0-148b-6611692be2c0','provincia':'San Jose','nombreCompleto':'Jorge Alberto Cole Palacios','direccion1':'77Digital','direccion2':'Plaza Florencia, local #16','ciudad':'Escazu'}],
      msgOK = {msg:'OK!'},
      guid = (function() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return function() {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      };
    })();
    return{
      guardarContacto: function(contactoForm){
        var deferred = $q.defer();
        contactoForm.id = guid();
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
        _.each(contactos,function(contacto){
          if(contactoObj.id === contacto.id){
            contacto = contactoObj;
            console.log('match');
          }
        });
        var deferred = $q.defer();
        deferred.resolve(msgOK);
        return deferred.promise;
      },
      eliminarContacto: function(contactoObj){
        contactos = _.without(contactos,contactoObj);
        var deferred = $q.defer();
        deferred.resolve(msgOK);
        return deferred.promise;
      }
    };
  }]);