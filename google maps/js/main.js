var map, infoWindow;

function initMap(position) {
    console.log(position);
    var uluru = {
        lat: 52.1727293,
        lng: 21.0305053
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru,
        styles: [
            {
                elementType: 'geometry',
                stylers: [{
                    color: '#57ba4a'
                }]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#242f3e'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#f4ea05'
                }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#6b9a76'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ff0000'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#372121'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#9ca5b3'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#746855'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#1f2835'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#f3d19c'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#2f3948'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#d59563'
                }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#00fdcd'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#515c6d'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#17263c'
                }]
            }
          ]
    });


    var image = {
        url: 'https://vignette.wikia.nocookie.net/miraculumbiedronkaiczarnykot/images/8/85/Cat-xxl.png/revision/latest?cb=20160122174744&path-prefix=pl',
        scaledSize: new google.maps.Size(50, 50),
    };
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image

    });

    var directionService = new google.maps.DirectionsService;
    var directionDisplay = new google.maps.DirectionsRenderer({
        map: map
    });

    document.getElementById('nawiguj').addEventListener('click', function () {
        userLocalization(directionService, directionDisplay);
    })

}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        initMap(position);
    })
}

function userLocalization() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var userCurrentlocalization = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            console.log(userCurrentlocalization);
        })
    }
};