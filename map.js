var map = new maplibregl.Map({
  container: 'map',
  style: 'https://straight-in-to-the-lights.geo.clam.tw/styles/MapTiler%20Toner/style.json', // Style URL; see our documentation for more options
  center: [121.5320921, 25.0675437], // Initial focus coordinate
  zoom: 8
});

// MapLibre GL JS does not handle RTL text by default,
// so we recommend adding this dependency to fully support RTL rendering if your style includes RTL text
maplibregl.setRTLTextPlugin('https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js');


map.on('load', () => {
  map.addSource('tritri', {
    type: 'vector',
    url: 'https://playtriangle.clam.tw/triangle'
  });
  map.addLayer({
    'id': 'thistri',
    'type': 'fill',
    'source': 'tritri',
    'source-layer': 'triangle_2',
    'layout': {},
    'paint': {
      'fill-color': '#39C5BB',
      'fill-opacity': 0.8
    }
  });
});

// Add zoom and rotation controls to the map.
map.addControl(new maplibregl.NavigationControl());

