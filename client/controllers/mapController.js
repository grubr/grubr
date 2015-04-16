'use strict';

module.exports = function(app) {
  app.controller('mapController', ['$scope', function($scope){
    $scope.test = "hello";
    $scope.testMarker = new google.maps.Marker({
      position: new google.maps.LatLng(47.620171, -122.337062),
      title: "test marker"
    });
    function initialize() {
      var mapCanvas = document.getElementById('map-canvas');
      var mapOptions = {
        center: new google.maps.LatLng(47.620171, -122.337062),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
      $scope.testMarker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }]);
}
