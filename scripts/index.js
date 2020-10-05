function initMap() {
    let mapDiv = document.getElementById("map");
    let initialPosition = {
        lat: 16.7692289,
        lng: 82.1291935,
        nameOfCity : 'Kuyyeru'
    };
    let mapConfigObj = {
        center: initialPosition,
        zoom: 12,
    };
    let map = new google.maps.Map(mapDiv, mapConfigObj);
    const infoWindow = new google.maps.InfoWindow({
        content: initialPosition['nameOfCity'],
      });
    let marker = new google.maps.Marker({
        position: initialPosition,
        map,
        draggable:true
    });
    // Event Listener
    marker.addListener("click", (markerEvent) => {
        infoWindow.open(map, marker);
        infoWindow.setContent(markerEvent.latLng.toString());
        infoWindow.open(map);
        addList()
    });

    // Adding the places in the list
    function addList () {
        let toVisit = document.createElement("li");
        toVisit.innerHTML = initialPosition['nameOfCity']
        document.getElementById('cardList').append(toVisit)
    }
}

