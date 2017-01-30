'use strict';

/**
 * @ngdoc overview
 * @name siteLessApp
 * @description
 * # siteLessApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'app.home',
    'app.header',
    'app.footer',
    'app.view1'
  ])
  // .directive('header', function () {
  //   return {
  //     restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
  //     replace: true,
  //     scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
  //     templateUrl: "views/header.html",
  //     controller: ['$scope', '$filter', function ($scope, $filter) {
  //       // Your behaviour goes here :)
  //     }]
  //   }
  // })
  // .directive('footer', function () {
  //   return {
  //     restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
  //     replace: true,
  //     templateUrl: "views/footer.html",
  //     controller: ['$scope', '$filter', function ($scope, $filter) {
  //       // Your behaviour goes here :)
  //     }]
  //   }
  // })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/home/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .when('/view1', {
        templateUrl: 'scripts/view1/view1.html',
        controller: 'view1Controller',
        controllerAs: 'view1'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
