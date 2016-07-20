'use strict';

var app = angular.module('myDirectiveModule', []);

app.directive('myTable', function(){
  return{
    restrict: 'E',
    controller: 'myTableCtrl',
    templateUrl: '/js/myDirective/myDirective.html',
    scope: {
      list: '=',
      lists: '=',
      color: '<input'  // 1 way not parent child only
      // color: '=input'  // 2 way parent and child
      // color --> $scope.color  binding to input variable
    }
  };
});

app.controller('myTableCtrl', function($scope){
  console.log('myTableCtrl!');

  // $scope.color = 'blue';
  $scope.sortKey = (key) => {
    console.log("key: ", key);
    // $scope.sortOrder = key;
    // console.log("$scope.sortOrder: ", $scope.sortOrder);
    if($scope.sortOrder === key){
      $scope.sortOrder = `-${key}`;
      console.log("$scope.sortOrder: ", $scope.sortOrder);
    }else{
      $scope.sortOrder = key;
      console.log("$scope.sortOrder: ", $scope.sortOrder);
    }
  }
});


// app.directive('myDirective', function(){
//   return{
//     restrict: 'E',
//     templateUrl: '/js/myDirective/myDirective.html'
//   };
// });

// app.controller('myDirective', function($scope){
//   console.log('myDirective!');
//   $scope.color = 'blue';
// });
