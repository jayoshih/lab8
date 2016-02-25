
function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.8849813, lng:-117.2413856};

  // Create a map object and specify the DOM element for display.
  window.map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });

   map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
  });

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      map:  window.map,
      title: 'UCSD'
  });
}


function placeMarkerAndPanTo(latLng, map) {
  $("#photo_modal").modal("toggle");
   $("#camera-video").css("display", "block");
    $("#camera-button").css("display", "block");
  var found = false;
  window.loc = latLng;
   window.marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
  map.panTo(latLng);
}