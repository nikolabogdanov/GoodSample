'use strict';

var view1Module = angular.module('app.view1', ['app.home']);
//
// var view1Module = angular.module('app.home', [])
//
// view1Module.controller('view1Controller', function($scope, customerService) {
//     $scope.customers = customerService.getCustomers();
//   }
// );var homeModule = angular.module('app.home', [])

view1Module.controller('view1Controller', function ($scope, customerService) {
    $scope.customers = customerService.getCustomers();
  }
);
