let firebaseConfig = {
    apiKey: "AIzaSyDsLGQUDdrrrxq5V_mcTUY1HpGT8168P8A",
    authDomain: "utkansh-2023-nitj.firebaseapp.com",
    projectId: "utkansh-2023-nitj",
    storageBucket: "utkansh-2023-nitj.appspot.com",
    messagingSenderId: "754641140210",
    appId: "1:754641140210:web:1ff8239de9a1b27ad1936b",
    measurementId: "G-3EZ2KXFV0M",
    databaseURL:"https://utkansh-2023-nitj-default-rtdb.firebaseio.com/"
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
