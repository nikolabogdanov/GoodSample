'use strict';

homeModule.directive('faqs', function () {
  return {
    restrict: 'A', //This menas that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
    replace: true,
    scope: {user: '='}, // This is one of the cool things :). Will be explained in post.
    templateUrl: "scripts/faqs/faqs.html",
    controller: ['$scope', '$filter', function ($scope, $filter) {
      // Your behaviour goes here :)
    }]
  };
});
/**
 * Created by nikola on 1/26/2017.
 */
