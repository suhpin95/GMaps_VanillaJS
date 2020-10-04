function initMap() {
    let mapDiv = document.getElementById("map");
    let position = {
        lat: 16.7692289,
        lng: 82.1291935,
        nameOfCity : 'Kuyyeru'
    };
    let mapConfigObj = {
        center: position,
        zoom: 12,
    };
    let map = new google.maps.Map(mapDiv, mapConfigObj);
    const infowindow = new google.maps.InfoWindow({
        content: position['nameOfCity'],
      });
    let marker = new google.maps.Marker({
        position,
        map,
    });
    // Event Listener
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}


