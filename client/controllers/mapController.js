'use strict';

var testArray = require('../lib/testArray');

module.exports = function(app) {
  app.controller('mapController', ['$scope', '$http', function($scope, $http){
    $scope.test = 'hello';
    $scope.trucks = testArray;
    $scope.markersShown = [];
    $scope.allFoodTypes = getFoodTypes($scope.trucks);
    console.log($scope.allFoodTypes);

    $scope.map;

    //initialize map with all markers for that area
    $scope.initialize = function() {

      var mapCanvas = document.getElementById('map-canvas');
      var mapOptions = {
        center: new google.maps.LatLng(47.620171, -122.337062),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(mapCanvas, mapOptions);

      for(var i = 0; i < $scope.trucks.length; i++) {

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.trucks[i].lat, $scope.trucks[i].long),
          title: $scope.trucks[i].name
        });
        $scope.markersShown.push(marker);
        marker.setMap($scope.map);
        attachContent(marker, i);
      };

      function attachContent(marker, num) {
        var infowindow = new google.maps.InfoWindow({
          content: $scope.markersShown[num].title
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open($scope.map, marker);
        });
      }
    };

    google.maps.event.addDomListener(window, 'load', $scope.initialize);

    function getFoodTypes(allTrucks){
     var arr = [];
      var seen = {};
      for (var i = 0; i < allTrucks.length; i++){
        if(!seen[allTrucks[i].type]){
          seen[allTrucks[i].type] = true;
          arr.push(allTrucks[i].type);
        }
      }
      console.log(arr);
      return arr;
    }

    $scope.getAllTrucks = function() {
      $http({
        method: 'GET',
        url: '/INSERT ROUTE HERE'
      })
      .success(function(data) {
        $scope.trucks = data;
      })
      .error(function(data) {
        console.log(data);
      });
    };

    $scope.filterMarkersByType = function(foodType) {
      
      var infowindow = new google.maps.InfoWindow({});
      
      for(var i = 0; i < $scope.markersShown.length; i++) {
        console.log('marker removed');
        $scope.markersShown[i].setMap(null);
      };

      $scope.markersShown = [];

      for(var i = 0; i < $scope.trucks.length; i++) {
        if ($scope.trucks[i].type == foodType) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng($scope.trucks[i].lat, $scope.trucks[i].long),
            title: $scope.trucks[i].name
          });
          marker.setMap($scope.map);
          $scope.markersShown.push(marker);
          
          google.maps.event.addListener(marker, 'click', (function(marker) {
            return function() {
              infowindow.setContent(this.title);
              infowindow.open($scope.map, marker);
            }
          })(marker));
        }
      };
    };

    $scope.filterMarkersByName = function(foodName) {
      
      var infowindow = new google.maps.InfoWindow({});
      
      for(var i = 0; i < $scope.markersShown.length; i++) {
        $scope.markersShown[i].setMap(null);
      };

      $scope.markersShown = [];

      for(i = 0; i < $scope.trucks.length; i++) {
        if ($scope.trucks[i].name == foodName) {
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng($scope.trucks[i].lat, $scope.trucks[i].long),
            title: $scope.trucks[i].name
          });
          marker.setMap($scope.map);
          $scope.markersShown.push(marker);

          google.maps.event.addListener(marker, 'click', (function(marker) {
            return function() {
              infowindow.setContent(this.title);
              infowindow.open($scope.map, marker);
            }
          })(marker));
        }
      };
    };
  }]);
};
