var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

btnlocation.addEventListener('click', e => {
  
  const map = document.getElementById('map');

  //Obtiene latitude y longitude
  const location = (position) => {
    let latitude = position.coords.latitude;
    let longuitude = position.coords.longitude;
    //Agrega latitude y longitude a mapa
    const imgURL = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longuitude + "&size=375x300&markers=color:red%7C" + latitude + "," + longuitude + "&key=AIzaSyBUaz17mTrasil6s3EjOP1NkpWqxRooDns&libraries=places";
    map.innerHTML = "<img src='" + imgURL + "'>";
  }

  const error = () => {
    alert('No se pudo obtener tu ubicación');
  }

  navigator.geolocation.getCurrentPosition(location, error);

});

