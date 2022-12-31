var firebaseConfig = {
    apiKey: "AIzaSyA4klkL1c57gIbCS7kGGu5mlOPCNtL1Gsw",
    authDomain: "utkansh2020-7858e.firebaseapp.com",
    databaseURL: "https://utkansh2020-7858e.firebaseio.com",
    projectId: "utkansh2020-7858e",
    storageBucket: "utkansh2020-7858e.appspot.com",
    messagingSenderId: "907622140597",
    appId: "1:907622140597:web:60c069b5b2ce8e024accfc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(async function (user) {
    if (user) {
        document.getElementById('sign-out').style.display="block";
        document.getElementById('login').style.display = "none";
    } else{

        document.getElementById('sign-out').style.display="none";
        document.getElementById('login').style.display = "block";
    }
});
