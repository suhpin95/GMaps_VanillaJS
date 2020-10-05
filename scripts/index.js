function initMap() {
    let mapDiv = document.getElementById("map");
    let initialPosition = {
        lat: 16.7692289,
        lng: 82.1291935,
        nameOfCity: "Kuyyeru",
    };
    let mapConfigObj = {
        center: initialPosition,
        zoom: 12,
    };
    let map = new google.maps.Map(mapDiv, mapConfigObj);
    const infoWindow = new google.maps.InfoWindow({
        content: initialPosition["nameOfCity"],
    });
    
    let marker = new google.maps.Marker({
        position: initialPosition,
        map,
        draggable: true,
    });
    // Event Listener
    marker.addListener("click", (markerEvent) => {
        infoWindow.open(map, marker);
        let strAddress = getCitythroughGeoCode(markerEvent.latLng.toJSON());
        console.log("in Mark event listner"+strAddress)
        infoWindow.setContent(strAddress);
        
        // This Makes entry on to front end
        addList(strAddress);
    });

    // Adding the places in the list
    function addList(address) {
        let toVisit = document.createElement("li");
        toVisit.innerHTML = address;
        document.getElementById("cardList").append(toVisit);
    }

    function getCitythroughGeoCode(geoCode) {
        const latlng = {
            lat: parseFloat(geoCode['lat']),
            lng: parseFloat(geoCode['lng']),
        };
        let geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    console.log("Successful")
                    const address = results[0].formatted_address;
                    return address;
                } else {
                    window.alert("No results found");
                }
            } else {
                window.alert("Geocoder failed due to: " + status);
            }
        });
    }
}
