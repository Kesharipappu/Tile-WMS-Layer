window.onload = init;

function init() {
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 3,
      //extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516]
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        zIndex: 1,
        visible: false,
        extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.1
      })
    ],
    target: 'js-map'
  })

  // Layer Group
  const layerGroup = new ol.layer.Group({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        zIndex: 0,
        visible: false,
        extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.1
      }),
      // Bing Maps Basemap Layer
      new ol.layer.Tile({
        source: new ol.source.BingMaps({
          // key: "Your Bingmaps API Key Here",
          key: "AqVS9ZdTKs_ygq0ohPEl9w5Q2kgcwfrizrQHHiCZOkyVUtNLvV4835ahP769E7Oi",
          imagerySet: 'CanvasGray'  // Road, CanvasDark, CanvasGray
        }),
        visible: false
      })
    ]
  })
  map.addLayer(layerGroup);

  // CartoDB BaseMap Layer
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
      attributions: '© CARTO'
    }),
    visible: false
  })
  map.addLayer(cartoDBBaseLayer);

  // TileDebug
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug(),
    visible: false
  })
  map.addLayer(tileDebugLayer);

  // Stamen basemap layer
  const stamenBaseLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: 'terrain-labels',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false
  })

  map.addLayer(stamenBaseLayer);

  const stamenBaseMapLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: true
  })
  map.addLayer(stamenBaseMapLayer);

  // tile ArcGIS REST API Layer
  const tileArcGISLayer = new ol.layer.Tile({
    source: new ol.source.TileArcGISRest({
      url: "http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Louisville/LOJIC_LandRecords_Louisville/MapServer"
    }),
    visible: true
  })
  map.addLayer(tileArcGISLayer);

  // NOAA WMS Layer
  const NOAAWMSLayer = new ol.layer.Tile({
    source: new ol.source.TileWMS({
      url: 'https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer?',
      params: {
        LAYERS: 5,
        FORMAT: 'image/png',
        TRANSPARENT: true
      },
      attributions: '<a href=https://nowcoast.noaa.gov/>© NOAA<a/>'
    })
  })
  map.addLayer(NOAAWMSLayer);
}


