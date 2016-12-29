﻿// Generated by IcedCoffeeScript 108.0.11
(function() {
  app.controller("LoginCtrl", [
    "$scope", "$http", function($scope, $http) {
      $scope.appSettings = appSettings;
      $scope.model = {};
      $scope.login = function() {
        $scope.isLoading = true;
        dialog.loading(".panel-body");
        return $http.post("/admin/account/login", $scope.model).success(function(data) {
          if (data.status > 0) {
            location.href = "/admin/home/index";
          } else {
            dialog.error("Failed to log in.", 5);
          }
          $scope.isLoading = false;
          return dialog.loaded(".panel-body");
        }).error(function(rep) {
          dialog.error("Request Error", 5);
          $scope.isLoading = false;
          return dialog.loaded(".panel-body");
        });
      };
    }
  ]);

}).call(this);