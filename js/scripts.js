$.getJSON('/data/schoolinfo.json', function(SchoolInfo) {
  console.log(SchoolInfo)

  mapboxgl.accessToken = 'pk.eyJ1IjoiY29oZW5jaGEiLCJhIjoiY2t6aG5vNWc4M2M5ZzJvcHEyeXdlaG91eSJ9.9pc4iJCoEFwGMj5aLOJ1Eg' ;

  var map = new mapboxgl.Map({
    container: 'map-container', // HTML container id
    style: 'mapbox://styles/mapbox/dark-v9', // style URL
    center: [-73.9665, 40.7812], // starting position as [lng, lat]
    zoom: 10,
    });

    var color = 'purple'

    if (SchoolInfo.Borough === 'the Bronx') {
      color = 'orange'
    }
    if (SchoolInfo.Borough === 'Brooklyn') {
      color = 'steelblue'
    }
    if (SchoolInfo.Borough === 'Queens') {
      color = 'green'
    }
    if (SchoolInfo.Borough === 'Staten Island') {
      color = 'pink'
    }

    SchoolInfo.forEach(function(SchoolInfo) {
      var mapMarker = new mapboxgl.Marker({
        color: color
      })
    .setLngLat([SchoolInfo.longitude, SchoolInfo.latitude])
    .setPopup(new mapboxgl.Popup().setHTML(`
        <p><h2>${SchoolInfo.SchoolName}</h2></p>
        <p><h2> Year Founded: ${SchoolInfo.YearFound}</h2></p>
        <p><h2> Student Enrollemnt 2020: ${SchoolInfo.Enrollment2020}</h2></p>
      `))
    .addTo(map);
    })
})
