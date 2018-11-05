$(document).ready(function () {

var config = {
    apiKey: "AIzaSyCR_IW-DBhW_na7WWSI12WFhQ7pRLr7A78",
    authDomain: "class-1112018.firebaseapp.com",
    databaseURL: "https://class-1112018.firebaseio.com",
    projectId: "class-1112018",
    storageBucket: "class-1112018.appspot.com",
    messagingSenderId: "183918733886"
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





