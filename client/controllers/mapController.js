'use strict';

module.exports = function(app) {
  app.controller('mapController', ['$scope', function($scope){
    $scope.test = "hello";
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  }]);
}
