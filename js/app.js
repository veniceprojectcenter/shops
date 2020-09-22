var app = angular.module("storesapp", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $routeProvider
    .when("/index", {
      templateUrl: "views/map.html",
    })
    .otherwise("/index");
});
