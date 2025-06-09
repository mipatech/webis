const map = L.map('map').setView([41.9028, 12.4964], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Measure tool
L.control.measure({
  primaryLengthUnit: 'meters',
  primaryAreaUnit: 'sqmeters'
}).addTo(map);

// Example GeoJSON
const features = {
  "type": "FeatureCollection",
  "features": [{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [12.4964, 41.9028]
    },
    "properties": {
      "name": "Punto di esempio",
      "descrizione": "Questo è un punto su Roma"
    }
  }]
};

const geojsonLayer = L.geoJSON(features, {
  onEachFeature: function (feature, layer) {
    layer.on('click', function () {
      const props = feature.properties;
      document.getElementById('info').innerHTML = `
        <strong>${props.name}</strong><br>
        ${props.descrizione}
      `;
    });
  }
}).addTo(map);
