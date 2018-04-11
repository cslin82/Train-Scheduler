
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4BxBf9kG3jICJYjZbwPkuqpnjBqOkhjQ",
    authDomain: "csl-hw7.firebaseapp.com",
    databaseURL: "https://csl-hw7.firebaseio.com",
    projectId: "csl-hw7",
    storageBucket: "csl-hw7.appspot.com",
    messagingSenderId: "670394771122"
  };
  firebase.initializeApp(config);

// jQuery wrapper
$(document).ready(function () {
    console.log("ready!");


    firebase.initializeApp(config);
    var database = firebase.database();

});


