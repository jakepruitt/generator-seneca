'use strict';

function config($stateProvider, $urlRouterProvider, $locationProvider) {
  // Default route to /
  $urlRouterProvider.otherwise('/');

  $stateProvider
  // Front logged in state of application
  .state('home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController as home',
    url: '/'
  });
}

angular
  .module('app')
  .config(config);
