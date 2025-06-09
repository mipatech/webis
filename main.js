const map = L.map('map').setView([41.9, 12.5], 6); // Italia

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

// GeoJSON incorporato
const geojsonData = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "properties": { "name": "Area Test" },
    "geometry": {
      "type": "Polygon",
      "coordinates": [[
        [12.45, 41.9],
        [12.6, 41.9],
        [12.6, 42.0],
        [12.45, 42.0],
        [12.45, 41.9]
      ]]
    }
  }]
};

// Aggiunge i dati GeoJSON alla mappa
L.geoJSON(geojsonData).addTo(map);
