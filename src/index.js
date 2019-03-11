const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoibWFya2dyZWVucXVpc3QiLCJhIjoiY2p0NGpqNnprMDE2dzN5bzF6ZW5kbXN1ZCJ9.teIY0gzT4AsrlydNPThlUA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

let marker = buildMarker('Restaurant', [-87.6354, 41.8885]);
// or Chicago [-87.6354, 41.8885] or NYC [-74.009151, 40.705086]
marker.addTo(map);
