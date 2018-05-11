 var latlng = new google.maps.LatLng(41.862274, -87.701328);

    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false,
        scrollwheel: false,
        styles: [{"stylers": [{"saturation": -100}, {"gamma": 1}]}, {"elementType": "labels.text.stroke", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.business", "elementType": "labels.text", "stylers": [{"visibility": "off"}]},
            {"featureType": "poi.business", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.place_of_worship", "elementType": "labels.text", "stylers": [{"visibility": "off"}]},
            {"featureType": "poi.place_of_worship", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"visibility": "simplified"}]},
            {"featureType": "water", "stylers": [{"visibility": "on"}, {"saturation": 50}, {"gamma": 0}, {"hue": "#50a5d1"}]}, {"featureType": "administrative.neighborhood", "elementType": "labels.text.fill", "stylers": [{"color": "#333333"}]},
            {"featureType": "road.local", "elementType": "labels.text", "stylers": [{"weight": 0.5}, {"color": "#333333"}]}, {"featureType": "transit.station", "elementType": "labels.icon", "stylers": [{"gamma": 1}, {"saturation": 50}]}]};

    var map = new google.maps.Map(document.getElementById('google-map-8609'), myOptions);

    // Marker Image
    var image = 'http://veented.info/crexis/wp-content/themes/crexis/img/marker.png';



    var myLatlng = new google.maps.LatLng(41.862274, -87.701328);



    var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h4>' +
            'Office 1' +
            '</h4>' +
            '<p>' +
            'Your description goes here.' +
            '</p>' +
            '</div>';


    var marker = new MarkerWithLabel({
        position: myLatlng,
        draggable: true,
        raiseOnDrag: true,
        icon: ' ',
        map: map,
        labelContent: '<i class="fa fa-map-marker vntd-gmap-marker vntd-gmap-marker1"></i>',
        labelAnchor: new google.maps.Point(22, 50),
        labelClass: "labels" // the CSS class for the label
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    google.maps.event.addListener(marker, 'click', function (e) {
        infowindow.open(map, this);
    });



    var myLatlngSecond = new google.maps.LatLng(41.858774, -87.685328);



    var contentStringSecond = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h4>' +
            'Office 2' +
            '</h4>' +
            '</div>';

    var marker2 = new MarkerWithLabel({
        position: myLatlngSecond,
        draggable: true,
        raiseOnDrag: true,
        icon: ' ',
        map: map,
        labelContent: '<i class="fa fa-map-marker vntd-gmap-marker vntd-gmap-marker2"></i>',
        labelAnchor: new google.maps.Point(22, 50),
        labelClass: "labels" // the CSS class for the label
    });

    marker2.setMap(map);

    var infowindow2 = new google.maps.InfoWindow({
        content: contentStringSecond
    });


    google.maps.event.addListener(marker2, 'click', function (e) {
        infowindow2.open(map, this);
    });

