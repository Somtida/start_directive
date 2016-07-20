'use strict';

var app = angular.module('myDirectiveModule', []);

app.directive('myCustomForm', function(){
  return{
    restrict: 'E',
    scope: {
      fields: '<',
      onSubmit: '='
    },
    // controller: 'myCustomForm',
    templateUrl: '/html/myCustomForm.html'
  }
})

app.controller('myCustomForm', function($scope){
  console.log('$scope: ', $scope);
  $scope.submit = (data) => {
    console.log('submit ', data);
  }
})

app.directive('myTextColor', function(){
  return{
    restrict: 'A',
    link: function(scope, el, attrs){
      el.css('color', attrs.myTextColor);
    }
  }
})

app.directive('myDraggable', ['$document', function($document) {
  return {
    link: function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
      //  border: '1px solid red',
      //  backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  };
}]);

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
    },
    link: function(scope, element, attrs, controller, transcludeFn){
      // console.log('scope: ', scope);
      // console.log('element: ', element);
      element.children('table.table').addClass('table-hover');
      // element.css('background-color', '#000');
      // console.log('attrs: ',attrs);
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
