function initMap() {
    const mapOptions = {
        zoom: 10,
        center: {lat: 49.2827, lng: -123.1207}, 
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Marker
    const marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map,

    });

    //  Click listener to marker
    marker.addListener("click", () => {
      alert("Campfire Cozy!");
    });
  }

//   InitMap is a JavaScript function for initializing a Google Map on a webpage. It uses the Google Maps JavaScript API to create a map, set its options, place a marker on it, and add an interactive feature (a click event listener) to the marker.

//   "function initMap() {...}" declares a function named initMap. This function could be called directly in your JavaScript code or triggered by an event, such as the loading of the webpage.

// "const map = new google.maps.Map(document.getElementById("map"), mapOptions);" creates a new Google Map inside the element with the ID "map" on the webpage, using the options specified in mapOptions. (I put Vancouver's geographical coordinates.)

