"use strict";

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var arsenal = {
    lat: 42.361340,
    lng: -71.164772
  }; // The map, centered at arsenal

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: arsenal
  }); // The marker, positioned at Uluru

  var marker = new google.maps.Marker({
    position: arsenal,
    map: map
  });
}