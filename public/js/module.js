'use strict';

var app = angular.module('myApp', ['ui.router', 'ngCookies', 'oitozero.ngSweetAlert', 'myDirectiveModule']);

app.constant('TOKENNAME', 'authtoken');

app.run(function(User) {
  User.readToken();
});

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: '/html/loginregister.html',
      controller: 'loginRegisterCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/html/loginregister.html',
      controller: 'loginRegisterCtrl'
    })


    .state('profile', {
      url: '/profile',
      templateUrl: '/html/profile.html',
      controller: 'profileCtrl',
      resolve: {
        CurrentUser: function(User) {
          return User.getProfile();
        }
      }
    })

    // .state('addStock', {
    //   url: '/addStock/:id',
    //   templateUrl: '/html/addStock.html',
    //   controller: 'stockCtrl',
    //   params: {id: null}
    // })



  $urlRouterProvider.otherwise('/');
});
