'use strict';

var testArray = require('../lib/testArray');

module.exports = function(app) {
  app.controller('mapController', ['$scope', '$http', function($scope, $http){
    $scope.test = 'hello';
    $scope.markers = testArray;
    $scope.markersShown = [];
    $scope.testMarker = new google.maps.Marker({
      position: new google.maps.LatLng(47.620171, -122.337062),
      title: "test marker"
    });

    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(47.620171, -122.337062),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);


    //initialize map with all markers for that area
    $scope.initialize = function() {

      for(var i = 0; i < $scope.markers.length; i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.markers[i].lat, $scope.markers[i].long),
          title: $scope.markers[i].name
        });
        marker.setMap(map);
      };

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

    $scope.filterMarkersByType = function(foodType) {
      setAllMap(null);

      console.log('hit filter');
      for (var i = 0; i < $scope.markers.length; i++) {
        if($scope.markers[i].type == foodType) {
          $scope.markersShown.push($scope.markers[i]);
        }
      }

      for(i = 0; i < $scope.markersShown.length; i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.markersShown[i].lat, $scope.markersShown[i].long),
          title: $scope.markersShown[i].name
        });
        marker.setMap(map);
      };

    };

  }]);
};
