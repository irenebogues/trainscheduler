$(document).ready(function () {



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAuGsGYpV8lYMY0Dbc8RxvVX4xw6dxOfN8",
    authDomain: "train-scheduler-71f25.firebaseapp.com",
    databaseURL: "https://train-scheduler-71f25.firebaseio.com",
    projectId: "train-scheduler-71f25",
    storageBucket: "",
    messagingSenderId: "563548609509"
  };
  firebase.initializeApp(config);
  //this is where you can see all the firebase app

//Variable/s
    var database = firebase.database(); 

//Variables
var database = firebase.database();
var freq = parseInt(freq);
//Current time
var currentTime = moment();
console.log("Local Time: " + moment().format('HH:mm'));
$('#currentTime').text(currentTime);
});





 

//pseudocode:
/* When adding trains, administrators should be able to submit the following:
Train Name
Destination
First Train Time -- in military time
Frequency -- in minutes
Code this app to calculate when the next train will arrive; this should be relative to the current time.
Users from many different machines must be able to view same train times. */





