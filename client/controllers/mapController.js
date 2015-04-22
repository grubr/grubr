'use strict';

module.exports = function(app) {
  app.controller('mapController', ['$scope', '$http', function($scope, $http){
    $scope.test = 'hello';
    $scope.markers = [];
    $scope.markersShown = [];
    $scope.testMarker = new google.maps.Marker({
      position: new google.maps.LatLng(47.620171, -122.337062),
      title: "test marker"
    });

    $scope.initialize = function() {
      var mapCanvas = document.getElementById('map-canvas');
      var mapOptions = {
        center: new google.maps.LatLng(47.620171, -122.337062),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
      $scope.testMarker.setMap(map);
    };

    google.maps.event.addDomListener(window, 'load', $scope.initialize);

    $scope.getAllMarkers = function() {
      $http({
        method: 'GET',
        url: '/INSERT ROUTE HERE'
      })
      .success(function(data) {
        $scope.markers = data;
        $scope.markersShown = data;
      })
      .error(function(data) {
        console.log(data);
      });
    };

    $scope.filterMarkers = function(filter) {

    }

  }]);
}
