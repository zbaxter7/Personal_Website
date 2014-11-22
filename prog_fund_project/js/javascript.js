// Batting Average Calculator - Programming Fundamentals Final Project 
//- Zach Baxter 5/6/2014


function battingAverageAndMessage(userHits, userAtBats, userName){
  
  var message;
  var userBattingAvg;

  userBattingAvg = userHits / userAtBats;
  
  if(userBattingAvg >= 0.750){
    message = userName + " has a very high average!";
  }else if(userBattingAvg >= 0.500){
    message = userName + " is getting a hit over 50% of the time!";
  }else if(userBattingAvg >= 0.250){
    message = userName + "'s batting average is mediocre.";
  }else if(userBattingAvg < 0.250){
    message = userName + "'s average is extremely low!";
  }
  
  // Putting the message and batting average in appropriate array
  messageDisplay.push(message);
  battingAvg.push(userBattingAvg.toFixed(3));
}

function groupAverage(hits, atBats){
  
  groupAvg = (hits[0] + hits[1] + hits[2]) / (atBats[0] + atBats[1] + atBats[2]);

  document.getElementById("groupAvg").innerHTML = groupAvg.toFixed(3);
}


function sendDataToTable(){

  document.getElementById("playerName1").innerHTML = playerNames[0];
  document.getElementById("playerName2").innerHTML = playerNames[1];
  document.getElementById("playerName3").innerHTML = playerNames[2];
  document.getElementById("battingAvg1").innerHTML = battingAvg[0];
  document.getElementById("battingAvg2").innerHTML = battingAvg[1];
  document.getElementById("battingAvg3").innerHTML = battingAvg[2];
  document.getElementById("message1").innerHTML = messageDisplay[0];
  document.getElementById("message2").innerHTML = messageDisplay[1];
  document.getElementById("message3").innerHTML = messageDisplay[2];

}


// Declaring Variables
var atBats = [];
var battingAvg = [];
var groupAvg;
var hits = [];
var messageDisplay = [];
var playerNames = [];
var userAtBats;
var userHits;
var userName;


alert("You will enter the names and statistics of 3 players one at a time, " +
      "Hit \"OK\" to proceed");

//Loop collecting Names and statistics. Calculating Batting Average
for(var count = 0; count < 3; count++){
  userName = prompt("Enter a player's name");
  playerNames.push(userName);
  
  userHits = prompt("How many Hits does " + userName + " have?");
  userHits = Number(userHits);
  
  userAtBats = prompt("How many at-bats does " + userName + " have?");
  userAtBats = Number(userAtBats);
  
  if(userHits > userAtBats){
    alert("I think you mixed up hits and at-bats. We can keep going anyways " +
          "or refresh to try again");
  }
  
  // Function to calculate Batting Average and generate a message
  battingAverageAndMessage(userHits, userAtBats, userName);
  
  // Pushing hits and at-bats into appropriate arrays
  hits.push(userHits);
  atBats.push(userAtBats);
}

groupAverage(hits, atBats);

sendDataToTable();






