import carPark from './carPark.js';

const carParks = {
    "Blackdale Car Park": new carPark(1, "Blackdale Car Park", 60, 60, []),
    "N&N Hospital": new carPark(2, "N&N Hospital", 600, 600, []),
    "UEA Main Car Park": new carPark(3, "UEA Main Car Park", 300, 300, []),
    "SU Car Park": new carPark(4, "SU Car Park", 20, 20, []),
    "Ziggurat Car Park": new carPark(5, "Ziggurat Car Park", 80, 80, []),
    "Chancellors Drive Car Park": new carPark(6, "Chancellors Drive Car Park", 50, 50, [])
};

// document.getElementById('location-ms').addEventListener('click', function() {
//     return carParks['Blackdale Car Park'];
// });
// document.getElementById('location-col').addEventListener('click', function() {
//     return carParks['N&N Hospital'];
// });
// document.getElementById('location-sp').addEventListener('click', function() {
//     return carParks['UEA Main Car Park'];
// });
// document.getElementById('location-su').addEventListener('click', function() {
//     return carParks['SU Car Park'];
// });
// document.getElementById('location-tw').addEventListener('click', function() {
//     return carParks['Ziggurat Car Park'];
// });
// document.getElementById('location-cd').addEventListener('click', function() {
//     return carParks['Chancellors Drive Car Park'];
// });
