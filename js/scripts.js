$.getJSON('/data/SchoolInfo.json', function(SchoolInfo) {
  console.log(SchoolInfo)

  mapboxgl.accessToken = 'pk.eyJ1IjoiY29oZW5jaGEiLCJhIjoiY2t6aG5vNWc4M2M5ZzJvcHEyeXdlaG91eSJ9.9pc4iJCoEFwGMj5aLOJ1Eg' ;

  var map = new mapboxgl.Map({
    container: 'map-container', // HTML container id
    style: 'mapbox://styles/mapbox/dark-v9', // style URL
    center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
    zoom: 13
    });
})
