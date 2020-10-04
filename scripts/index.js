function initMap() {
    let mapDiv = document.getElementById("map");
    let position = {
        lat: 16.7692289,
        lng: 82.1291935,
    };
    let mapConfigObj = {
        center: position,
        zoom: 12,
    };

    let map = new google.maps.Map(mapDiv, mapConfigObj);
    var marker = new google.maps.Marker({
        position,
        map,
    });
}
