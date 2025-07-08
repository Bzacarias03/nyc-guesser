//import * as React from 'react';
import Map from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -73.93567,
        latitude: 40.64817,
        zoom: 11,
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle={`https://api.maptiler.com/maps/0197eb34-bcc7-7eed-b35a-396c93f1b7ad/style.json?key=gafoM7tYdb5TwN6IJ4cB`}
      maxZoom={12.5}
    />
  );
}

export default App;