//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------

// How to make this not public? Add to .gitignore
var firebaseConfig = {
    apiKey: "AIzaSyAMNaY4EwaCdE7IJ2Ssblj9r4wyh9v0N3o",
    authDomain: "comp1800-202410-demo-56df1.firebaseapp.com",
    projectId: "comp1800-202410-demo-56df1",
    storageBucket: "comp1800-202410-demo-56df1.appspot.com",
    messagingSenderId: "84809374686",
    appId: "1:84809374686:web:d9ebba8105afab923adb4f"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
