'use strict';

angular.module('77DigitalAngularDemoApp')
  .factory('contactoService', ['$http','$q',function($http,$q) {
    return{
      guardarContacto: function(contactoForm){
        var deferred = $q.defer();
        $http.post('http://tgj.jit.su/contactos/crear',contactoForm).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      },
      listarContactos: function(){
        var deferred = $q.defer();
        $http.get('http://tgj.jit.su/contactos/listado').success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      },
      actualizarContacto: function(contactoObj){
        var deferred = $q.defer();
        $http.post('http://tgj.jit.su/contactos/actualizar',contactoObj).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      },
      eliminarContacto: function(contactoObj){
        var deferred = $q.defer();
        $http.post('http://tgj.jit.su/contactos/eliminar',contactoObj).success(function(data){
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      }
    };
  }]);