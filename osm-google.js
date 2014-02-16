var map;

function init() {
    map = new OpenLayers.Map({
        div: "map",
        projection: new OpenLayers.Projection("EPSG:900913")
    });
    
    var osm = new OpenLayers.Layer.OSM();            
    var gmap = new OpenLayers.Layer.Google("Google Streets");
    
    map.addLayers([osm, gmap]);

    map.addControl(new OpenLayers.Control.LayerSwitcher());

    map.setCenter(
        new OpenLayers.LonLat( 18.063141, 59.329950).transform(
            new OpenLayers.Projection("EPSG:4326"),
            map.getProjectionObject()
        ), 
        15
    );
}
