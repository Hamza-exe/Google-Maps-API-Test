'use strict';

mapboxgl.accessToken = 'pk.eyJ1IjoibW91cmlidXMiLCJhIjoiY2wxd2lkZmh1MDB5dzNlc2pxdTgwcTQ4YyJ9.8AQnsSGfZv0nvk48pylE7Q';


const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  center: [0, 0], // starting position [lng, lat]
  zoom: 15 // starting zoom
});


// The 'success' callback function
function showLocation(position) {
  // const longitude = position.coords.longitude;
  // const latitude = position.coords.latitude;
  // Object destructuring
  const { longitude, latitude } = position.coords;
  map.setCenter([longitude, latitude]);
  console.log(`Longitude: ${longitude}`);
  console.log(`Latitude: ${latitude}`);
}

// The 'failure' callback function
function errorHandler() {
  console.log('Nope');
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(showLocation, errorHandler);
} else {
  console.log('Geolocation is not supported by your browser');
}


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})
