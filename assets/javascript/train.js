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
var database = firebase.database();

// other global variables
var dbName = "trains";



// jQuery wrapper
$(document).ready(function () {
    console.log("ready!");

    // grab DOM elements
    var trainsOutput = $('#trains-output');

    $('#btn-submit').click(function (event) {
        event.preventDefault();
        console.log('btn-submit clicked');
        
        var inputTrainName = $('#input-train-name').val().trim();
        var inputDestination = $('#input-destination').val().trim();
        var inputFirstTime = $('#input-first-time').val().trim();
        var inputFrequency = $('#input-frequency').val().trim();
        console.log(inputTrainName, inputDestination, inputFirstTime, inputFrequency);

        var newTR = $('<tr>');
        [inputTrainName, inputDestination, inputFrequency].forEach(element => {
            newTR.append($('<td>').text(element));
        });
        trainsOutput.append(newTR);


    }); // btn-submit click handler

}); // jQuery


