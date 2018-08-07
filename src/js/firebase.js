window.restaurantes = {
    
    //Initialize Firebase
    iniciaFirebase: () => {
        //Apis firebase
        var config = {
            apiKey: "AIzaSyCIXIAq7waEhrjeJZ6szZAh3ZW9g6IodXQ",
            authDomain: "time-to-eat-fa8cc.firebaseapp.com",
            databaseURL: "https://time-to-eat-fa8cc.firebaseio.com",
            projectId: "time-to-eat-fa8cc",
            storageBucket: "time-to-eat-fa8cc.appspot.com",
            messagingSenderId: "784615062161"
          };

          //Agregando apis a configuracion incial
          firebase.initializeApp(config);

        },
};