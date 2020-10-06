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

    //Info Window
    const infoWindow = new google.maps.InfoWindow({
        content: initialPosition["nameOfCity"],
    });
    
    // Marker
    let marker = new google.maps.Marker({
        position: initialPosition,
        map,
        draggable: true,
    });
    
    // Event Listener
    marker.addListener("click", (markerEvent) => {
        changeName(markerEvent);
        infoWindow.open(map, marker);
    });

    async function changeName(markerEvent){
        let strAddress = await getCitythroughGeoCode(markerEvent.latLng.toJSON());
        console.log(strAddress);
        infoWindow.setContent(strAddress);
    }

    // should take time to resolve
    function getCitythroughGeoCode(geoCode) {
        const latlng = {
            lat: parseFloat(geoCode['lat']),
            lng: parseFloat(geoCode['lng']),
        };
        
        let geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({ location: latlng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    const address = results[0].formatted_address;
                    return new Promise(resolve => {
                        if(resolve){
                              return address
                        } else{
                            return "Error";
                        }
                      });
                } else {
                    window.alert("No results found");
                }
            } else {
                window.alert("Geocoder failed due to: " + status);
            }
        });
    }

    // Adding the places in the list
    function addList(address) {
        let toVisit = document.createElement("li");
        toVisit.innerHTML = address;
        document.getElementById("cardList").append(toVisit);
    }
}
