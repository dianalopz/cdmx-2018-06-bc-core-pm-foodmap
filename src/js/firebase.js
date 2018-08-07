window.restaurantes = {
    
    //Initialize Firebase
    iniciaFirebase: () => {
        //Apis firebase
        var config = {
            apiKey: "AIzaSyCiLDBi-b0s3qQ7StQwIpepNwyEX65LHyo",
            authDomain: "affamato-project.firebaseapp.com",
            databaseURL: "https://affamato-project.firebaseio.com",
            projectId: "affamato-project",
            storageBucket: "affamato-project.appspot.com",
            messagingSenderId: "371498322149"
          };

          //Agregando apis a configuracion incial
          firebase.initializeApp(config);

        },
};