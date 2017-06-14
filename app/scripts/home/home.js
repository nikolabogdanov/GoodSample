'use strict';

var homeModule = angular.module('app.home', []);

homeModule
  .controller('homeController', function ($scope, customerService, $translate) {

    console.log('ma faka');

    function init() {
      $scope.customers = customerService.getCustomers();
    }
    $scope.addCustomer = function (){
      if ($scope.newCustomer.name !== undefined && $scope.newCustomer.city !== undefined) {
        customerService.addCustomer({name: $scope.newCustomer.name, city: $scope.newCustomer.city});
      }
    };

    $scope.customers = [];

    init();
  });

homeModule.factory('customerFactory', function () {
  var factory = {};
  var customers = [
    {name: 'Dave Johnes', city: 'Zaicher'},
    {name: 'Ivan Stoyanov', city: 'Kozludui'},
    {name: 'To6ko Kolev', city: 'Lom'},
    {name: 'Gosho ot Po4ivka', city: 'New York'},
    {name: 'Sasho Dikov', city: 'New York'},
    {name: 'Reneta Indjova', city: 'Sofia'}
  ];

  factory.getCustomers = function () {
    return customers;
  };
  return factory;
});

homeModule.service('customerService', function (customerFactory) {

  var customers;

  function init() {
    customers = customerFactory.getCustomers();
  }

  this.getCustomers = function () {
    return customers;
  };

  this.addCustomer = function (newCustomer) {
    customers.push(newCustomer);
  };

  init();
});

