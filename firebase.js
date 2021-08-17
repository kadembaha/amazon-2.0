var firebaseConfig = {
    apiKey: "AIzaSyDXIq2-Qv4nUiYekD1u2nwI7VdFAGKEbOA",
    authDomain: "clone-two-c3ecd.firebaseapp.com",
    projectId: "clone-two-c3ecd",
    storageBucket: "clone-two-c3ecd.appspot.com",
    messagingSenderId: "383374160228",
    appId: "1:383374160228:web:15af709c9452bca2d28a71",
    measurementId: "G-38CMB4EXP7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var db = firebase.firestore();