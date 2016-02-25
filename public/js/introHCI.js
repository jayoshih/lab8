'use strict';

window.locations = [];
window.map = null;

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
//$.get("/pictures", initializeList);
  initCamera();
}

function initializeList(results){
	console.log(results);
	window.locations = results;
	for(var i = 0; i < results.length; i++){
		var marker = new google.maps.Marker({
	      position: results[i]["location"],
	      map:  window.map
	  });
	}
}

