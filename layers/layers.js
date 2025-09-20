var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TrialZona_2 = new ol.format.GeoJSON();
var features_TrialZona_2 = format_TrialZona_2.readFeatures(json_TrialZona_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrialZona_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrialZona_2.addFeatures(features_TrialZona_2);
var lyr_TrialZona_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrialZona_2, 
                style: style_TrialZona_2,
                popuplayertitle: 'Trial Zona',
                interactive: true,
    title: 'Trial Zona<br />\
    <img src="styles/legend/TrialZona_2_0.png" /> 1<br />\
    <img src="styles/legend/TrialZona_2_1.png" /> 2<br />\
    <img src="styles/legend/TrialZona_2_2.png" /> 3<br />\
    <img src="styles/legend/TrialZona_2_3.png" /> 4<br />\
    <img src="styles/legend/TrialZona_2_4.png" /> 5<br />\
    <img src="styles/legend/TrialZona_2_5.png" /> 6<br />\
    <img src="styles/legend/TrialZona_2_6.png" /> 7<br />\
    <img src="styles/legend/TrialZona_2_7.png" /> 8<br />\
    <img src="styles/legend/TrialZona_2_8.png" /> 9<br />\
    <img src="styles/legend/TrialZona_2_9.png" /> 10<br />\
    <img src="styles/legend/TrialZona_2_10.png" /> 11<br />\
    <img src="styles/legend/TrialZona_2_11.png" /> 12<br />\
    <img src="styles/legend/TrialZona_2_12.png" /> 13<br />\
    <img src="styles/legend/TrialZona_2_13.png" /> 14<br />\
    <img src="styles/legend/TrialZona_2_14.png" /> 15<br />\
    <img src="styles/legend/TrialZona_2_15.png" /> 16<br />\
    <img src="styles/legend/TrialZona_2_16.png" /> 17<br />\
    <img src="styles/legend/TrialZona_2_17.png" /> 18<br />\
    <img src="styles/legend/TrialZona_2_18.png" /> 19<br />\
    <img src="styles/legend/TrialZona_2_19.png" /> 20<br />\
    <img src="styles/legend/TrialZona_2_20.png" /> 21<br />\
    <img src="styles/legend/TrialZona_2_21.png" /> 22<br />\
    <img src="styles/legend/TrialZona_2_22.png" /> 23<br />\
    <img src="styles/legend/TrialZona_2_23.png" /> 24<br />\
    <img src="styles/legend/TrialZona_2_24.png" /> 25<br />\
    <img src="styles/legend/TrialZona_2_25.png" /> 26<br />\
    <img src="styles/legend/TrialZona_2_26.png" /> 27<br />\
    <img src="styles/legend/TrialZona_2_27.png" /> 28<br />\
    <img src="styles/legend/TrialZona_2_28.png" /> 29<br />\
    <img src="styles/legend/TrialZona_2_29.png" /> 30<br />\
    <img src="styles/legend/TrialZona_2_30.png" /> 31<br />\
    <img src="styles/legend/TrialZona_2_31.png" /> 32<br />\
    <img src="styles/legend/TrialZona_2_32.png" /> 33<br />\
    <img src="styles/legend/TrialZona_2_33.png" /> 34<br />\
    <img src="styles/legend/TrialZona_2_34.png" /> 35<br />\
    <img src="styles/legend/TrialZona_2_35.png" /> 36<br />\
    <img src="styles/legend/TrialZona_2_36.png" /> 37<br />\
    <img src="styles/legend/TrialZona_2_37.png" /> 38<br />\
    <img src="styles/legend/TrialZona_2_38.png" /> 39<br />\
    <img src="styles/legend/TrialZona_2_39.png" /> <br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_TrialZona_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_TrialZona_2];
lyr_TrialZona_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NOZN': 'NOZN', 'PENGGUNAAN': 'PENGGUNAAN', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'JMLSMPL': 'JMLSMPL', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'JNSZN': 'JNSZN', 'Luas_M2': 'Luas_M2', 'HISTZONE': 'HISTZONE', 'Kode': 'Kode', });
lyr_TrialZona_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NOZN': 'TextEdit', 'PENGGUNAAN': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'JMLSMPL': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'JNSZN': 'Range', 'Luas_M2': 'TextEdit', 'HISTZONE': 'TextEdit', 'Kode': 'Range', });
lyr_TrialZona_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'NOZN': 'inline label - always visible', 'PENGGUNAAN': 'inline label - always visible', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'JMLSMPL': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'JNSZN': 'hidden field', 'Luas_M2': 'no label', 'HISTZONE': 'inline label - always visible', 'Kode': 'no label', });
lyr_TrialZona_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});