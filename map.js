// include map, set starting coordinates, set zoom level
var map = L.map('map').setView([28.1480, -81.8484], 6);

// include geocoder extension
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// gloabal variables for coordinates
// (done to make accessible for get functions to export into python)
var centerCoord = [0,0]
var SE_Corner = [0,0]
var NE_Conrer = [0,0]
var NW_Corner = [0,0]
var SW_Corner = [0,0]

// on location lookup, remove extension's default map pin/marker
var geocoder = L.Control.geocoder({
    defaultMarkGeocode: false
})
    // onClick function listening for button click event (e) 
    .on('markgeocode', function(e) {
        //bbox: geocoder function to pull lat/lng coords
        // returns in form of object, coords not accessible outside of object
        var bbox = e.geocode.bbox;

        // returns coords as string in the form "LatLng(0.0000, 0.0000)"
        var center = bbox.getCenter().toString()

        // parsing and splitting string to separate lat and lng coordinates as floats 
        let centerArr = center.split("(")

        let coordStr = centerArr[1]
        coordStr = coordStr.replace(")", "")

        let coordArr = coordStr.split(",")

        let centerLatStr = coordArr[0]
        let centerLngStr = coordArr[1]

        let centerLat = parseFloat(centerLatStr)
        let centerLng = parseFloat(centerLngStr)

        // setting new lat and lng coord variables to a center coord variable
        centerCoord = [centerLat,centerLng]

        //adding the distance from center to corner of 5x5 km^2 area to each center point, 
        // setting values for each point of the area
        SE_Corner = [centerLat-0.022558, centerLng+0.022558]
        NE_Conrer = [centerLat+0.022558, centerLng+0.022558]
        NW_Corner = [centerLat+0.022558, centerLng-0.022558]
        SW_Corner = [centerLat-0.022558, centerLng-0.022558]
        
        // adding the area of interest square to the map using the values set previously
        var poly = L.polygon([
            SE_Corner,
            NE_Conrer,
            NW_Corner,
            SW_Corner
        ]).addTo(map);
        map.fitBounds(poly.getBounds());
    })
    .addTo(map);

// accessible getters exported to be accessibly by python
export function getCenter() {
    return centerCoord;
}
export function getSE() {
    return SE_Corner;
}
export function getNE() {
    return NE_Conrer;
}
export function getNW() {
    return NW_Corner;
}
export function getSW() {
    return SW_Corner;
}
