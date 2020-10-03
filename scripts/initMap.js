require('dotenv').config();

var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
window.init = function() {
    console.log(process.env);
}

document.head.appendChild(script);