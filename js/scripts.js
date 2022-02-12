$.getJSON('/data/SchoolInfo.json', function(SchoolInfo) {
  console.log(SchoolInfo)

  mapboxgl.accessToken = 'pk.eyJ1IjoiY29oZW5jaGEiLCJhIjoiY2t6aG5vNWc4M2M5ZzJvcHEyeXdlaG91eSJ9.9pc4iJCoEFwGMj5aLOJ1Eg' ;

  var map = new mapboxgl.Map({
    container: 'map-container', // HTML container id
    style: 'mapbox://styles/mapbox/dark-v9', // style URL
    center: [-73.9665, 40.7812], // starting position as [lng, lat]
    zoom: 9,
    });

    SchoolInfo.forEach(function(SchoolInfo) {
      var mapMarker = new mapboxgl.Marker()
    .setLngLat([SchoolInfo.longitude, SchoolInfo.latitude])
    .addTo(map);
    })

  })
