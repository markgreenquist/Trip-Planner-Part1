const mapboxgl = require('mapbox-gl');


let buildMarker = (type, coordinatesArr) => {
  let markerImage;
  switch (type) {
    case 'Activity':
      markerImage = 'http://i.imgur.com/WbMOfMl.png';
      break;
    case 'Hotel':
      markerImage = 'http://i.imgur.com/D9574Cu.png';
      break;
    case 'Restaurant':
      markerImage = 'http://i.imgur.com/cqR6pUI.png';
      break;
  }

  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = 'url(' + markerImage;



let marker = new mapboxgl.Marker(markerDomEl).setLngLat(coordinatesArr);
return marker;

}

module.exports = buildMarker;

// Activity: http://i.imgur.com/WbMOfMl.png
// Hotel: http://i.imgur.com/D9574Cu.png
// Restaurant: http://i.imgur.com/cqR6pUI.png

