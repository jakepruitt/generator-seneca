'use strict';

function HomeController(TestService) {
  var home = this;

  home.working = false;

  TestService.success(function(data) {
    home.working = data.working;
  });
}

angular
  .module('app')
  .controller('HomeController', HomeController);
