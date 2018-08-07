btnlocation.addEventListener('click', e => {
  const map = document.getElementById('map');

  //Obtiene latitude y longitude
  const location = (position) => {
    let latitude = position.coords.latitude;
    let longuitude = position.coords.longitude;
    //Agrega latitude y longitude a mapa
    const newmap = new google.maps.Map(map, {
      center: {lat: latitude, lng: longuitude},
      zoom: 8
    })
  }

  const error = () => {
    map.innerHTML = 'No se pudo obtener tu ubicación';
  }

  navigator.geolocation.getCurrentPosition(location, error);

});

/*var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }*/
