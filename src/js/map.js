//Conexion con firebase
window.restaurantes.iniciaFirebase();
const db = firebase.firestore();


//Google Maps
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

//Red db de firebase
let print = document.getElementById('restaurantes');

db.collection("places").onSnapshot((querySnapshot) => {
  print.innerHTML = '';
    querySnapshot.forEach((doc) => {
      print.innerHTML += `<div class="card m-3">
        <img class="card-img-top" src="${doc.data().url}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${doc.data().name}</h5>
          <p class="card-text">Type: ${doc.data().type}</p>
          <p class="card-text">Price: ${doc.data().price}</p>
          <p class="card-text">Rate: ${doc.data().rate}</p>
          <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">Reed more</button>
        </div>
      </div>
      <!--Modal-->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">${doc.data().name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p class="card-text">Address: ${doc.data().address}</p>
              <p class="card-text">Phone: ${doc.data().phone}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`;
    });
});
