function initMap() {
    let mapDiv = document.getElementById('map');
    
    let mapConfigObj = {
        center: {
            lat: -34.397, 
            lng: 150.644
        },
        zoom: 8
    }

    let map = new google.maps.Map(mapDiv,  mapConfigObj);
    return map
} 

// import {} from "dotenv/config"

// let script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}&callback=initMap`;
// window.init = function() {
    
//     let mapDiv = document.getElementById('map');
    
//     let mapConfigObj = {
//         center: {
//             lat: -34.397, 
//             lng: 150.644
//         },
//         zoom: 8
//     }

//     let map = new google.maps.Map(mapDiv,  mapConfigObj);
//     return map
// }

// document.head.appendChild(script);