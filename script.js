let map, directionsService, directionsRenderer
let sourceAutocomplete, desAutocomplete

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 28.10869437531747, lng: 30.75207774654349 },
        zoom: 13
    })
    google.maps.event.addListener(map, "click", function (event) {
        this.setOptions({ scrollwheel: true })
    })
    directionsService = new google.maps.DirectionsService()
    directionsRenderer = new google.maps.DirectionsRenderer()
    directionsRenderer.setMap(map)

    var source = "ITI - Information Technology Institute (AlMinya), Damaris, Minya, Egypt"
    var dest = "Horus Resort Menia, Kornish Al Nile, الكورنيش، Minya, Egypt"

    let request = {
        origin: source,
        destination: dest,
        travelMode: 'DRIVING'
    }
    directionsService.route(request, function (result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result)
        }
    })
}
