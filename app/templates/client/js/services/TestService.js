'use strict';

function TestService($http) {
  return $http.get('http://localhost:4040/api/test');
}

// Service for testing the seneca back-end
angular
  .module('app')
  .service('TestService', TestService);
