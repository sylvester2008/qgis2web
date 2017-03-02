var size = 0;
var ranges_prob3yrs = [[0.000000, 5.800000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,255,0,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })]],
[5.800000, 11.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,183,0,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })]],
[11.600000, 17.400000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,106,0,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })]],
[17.400000, 23.200000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(255,29,0,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })]],
[23.200000, 29.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(208,0,0,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
    })]]];
var styleCache_prob3yrs={}
var style_prob3yrs = function(feature, resolution){
    var value = feature.get("RupturePro");
    var style = ranges_prob3yrs[0][2];
    for (i = 0; i < ranges_prob3yrs.length; i++){
        var range = ranges_prob3yrs[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_prob3yrs[key]){
        var text = new ol.style.Text({
              font: '11.7px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_prob3yrs[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_prob3yrs[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};