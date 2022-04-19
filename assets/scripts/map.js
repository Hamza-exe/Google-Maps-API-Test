'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoibW91cmlidXMiLCJhIjoiY2wxd2lkZmh1MDB5dzNlc2pxdTgwcTQ4YyJ9.8AQnsSGfZv0nvk48pylE7Q';

// The 'success' callback function
function showLocation(position) {
    // const longitude = position.coords.longitude;
    // const latitude = position.coords.latitude;
    // Object destructuring
    const { longitude, latitude } = position.coords;
    
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [longitude, latitude], // starting position [lng, lat]
            zoom: 15 // starting zoom
        });

    console.log(`Longitude: ${longitude}`);
    console.log(`Latitude: ${latitude}`);
  }
  
  // The 'failure' callback function
  function errorHandler() {
    console.log('Nope');
  }
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
  } else {
    console.log('Geolocation is not supported by your browser');
  }
  

