function initMap() {
    let mapDiv = document.getElementById("map");
    let initialPosition = {
        lat: 16.7692289,
        lng: 82.1291935,
    };
    let mapConfigObj = {
        center: initialPosition,
        zoom: 12,
    };
    let map = new google.maps.Map(mapDiv, mapConfigObj);

    //Info Window
    const infoWindow = new google.maps.InfoWindow();
    
    // Marker
    let marker = new google.maps.Marker({
        position: initialPosition,
        map,
        draggable: true,
    });
    
    // Event Listener
    marker.addListener("click", (markerEvent) => {
        getCitythroughGeoCode(markerEvent.latLng.toJSON());
        infoWindow.open(map, marker);
    });

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
                            infoWindow.setContent(address);
                            addList(address);
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
        //create a paragraph tag
        let toVisit = document.createElement("li");
        // set the classname 
        toVisit.className = "list-group-item";
        toVisit.innerHTML = address;
        document.getElementsByClassName("list-group")[0].append(toVisit);
    }
}
