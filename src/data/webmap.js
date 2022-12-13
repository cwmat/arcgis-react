import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

import '@arcgis/core/assets/esri/themes/light/main.css';

export const webmap = new ArcGISMap({
  basemap: 'streets-navigation-vector',
});

// Popup goodies 🎁
const template = {
  // autocasts as new PopupTemplate()
  title: 'Flood Gauge',
  content: '{status}',
};

// Add Layers
const layer = new FeatureLayer({
  url: 'https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/ahps_riv_gauges/MapServer/0',
  visible: false, // 🕵️ Set to false to hide the layer on startup
  popupTemplate: template,
});
webmap.add(layer);

// Create the MapView settings
const app = {
  map: webmap,
  center: [-79.54, 35.71],
  scale: 2400000,
  ui: {
    components: ['attribution', 'zoom', 'compass'],
  },
};

// Create the MapView
export let view = new MapView(app);

// Init function
export async function initialize(container) {
  view.container = container;
  return view;
}

// Toggle gauges function
export async function toggleGauges() {
  if (layer) layer.visible = !layer.visible;
}
