window.restaurantes = {
    
    //Initialize Firebase
    iniciaFirebase: () => {
        //Apis firebase
        const config = {
            apiKey: "AIzaSyBJPOZsUg2GtNivv8uyWMtNnt2XGOnjwO4",
            authDomain: "restaurantes-a1f02.firebaseapp.com",
            databaseURL: "https://restaurantes-a1f02.firebaseio.com",
            projectId: "restaurantes-a1f02",
            storageBucket: "restaurantes-a1f02.appspot.com",
            messagingSenderId: "807184694516"
          };

          //Agregando apis a configuracion incial
          firebase.initializeApp(config);

        },
};