var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_prob3yrs = new ol.format.GeoJSON();
var features_prob3yrs = format_prob3yrs.readFeatures(geojson_prob3yrs, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_prob3yrs = new ol.source.Vector();
jsonSource_prob3yrs.addFeatures(features_prob3yrs);var lyr_prob3yrs = new ol.layer.Vector({
                source:jsonSource_prob3yrs, 
                style: style_prob3yrs,
                title: "prob_30yrs"
            });

lyr_prob3yrs.setVisible(true);
var layersList = [baseLayer,lyr_prob3yrs];
