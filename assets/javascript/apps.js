
  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAuGsGYpV8lYMY0Dbc8RxvVX4xw6dxOfN8",
    authDomain: "train-scheduler-71f25.firebaseapp.com",
    databaseURL: "https://train-scheduler-71f25.firebaseio.com",
    projectId: "train-scheduler-71f25",
    storageBucket: "train-scheduler-71f25.appspot.com",
    messagingSenderId: "563548609509"
  };
  firebase.initializeApp(config);

//Variables
var database = firebase.database();
// Add new train when add train button is clicked
$("#submit").on("click", function(event) {
  event.preventDefault();


    //Assign values to the Id"s in the HTML
   var trainName = $("#enterTrain").val().trim();
   var destination = $("#enterDest").val().trim();
   var firstTrain = $("#firstTrain").val().trim();
   var frequency = $("#enterFrequency").val().trim();
   
   //Push new train data to Firebase
   database.ref().push({
       train: trainName,
       destination: destination,
       firstTrain: firstTrain,
       frequency: frequency,
   });

   //clear data boxes
   $("#enterTrain").val("");
   $("#enterDest").val("");
   $("#firstTrain").val("");
   $("#enterFrequency").val("");
   
  });

database.ref().on("child_added", function (childSnapshot) {
var trainName = childSnapshot.val().train;
var destination = childSnapshot.val().destination;
var firstTrain = childSnapshot.val().firstTrain;
var frequency = childSnapshot.val().frequency;


var firstTime = firstTrain;
var tFrequency = frequency;

// Next Train Trip 
var nextTrainTrip = moment(nextTrain).format("hh:mm A")

// convert the first time
var firstTimeConverted = moment(firstTime, "HH:mm");
//console.log(firstTimeConverted)

// Current Time
var currentTime = moment();
//console.log("Current Time is: " + moment(currentTime).format("HH:mm"));

// Difference between the times
var diffTime = moment().diff(firstTimeConverted, "minutes");
//console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
//console.log("Time apart: " + tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
//console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

// create the new row to DOM
var newRow = $("<tr>").append( 
$("<td>").text(train),
$("<td>").text(destination),
$("<td>").text(frequency),
$("<td>").text(nextTrainTrip),
$("<td>").text(tMinutesTillTrain),
);

// Add the newRow to the table
$("#timeTable > tbody").append(newRow);
});



//pseudocode:
/* When adding trains, administrators should be able to submit the following:
Train Name
Destination
First Train Time -- in military time
Frequency -- in minutes
Code this app to calculate when the next train will arrive; this should be relative to the current time.
Users from many different machines must be able to view same train times. */





