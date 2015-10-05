// $(document).ready(function() {
// Must call up whole date, and then the hours, minutes, and seconds

      


window.setInterval( function(){
      var currentTime = new Date();
      var hours = currentTime.getHours();
      // console.log(hours);
      var minutes = currentTime.getMinutes();
      var seconds = currentTime.getSeconds();
      
        // document.getElementById('h').value = h;
        // document.getElementById('m').value = m;
        // document.getElementById('s').value = s;
    


      // console.log(currentTime); 
      // console.log(minutes);
  
// Bonus Learning: Let's set up AM/PM meridiem for a 12-hour format 



var meridiem = "AM"; 

// If the hours is greater than 12

if (hours > 12) {
    hours = hours - 12; //convert to 12-hour format
    meridiem = "PM";
}

//0 AM and 0 PM should read as 12

if (hours === 0) {
    hours = 12;
}

//Format hours less than 10
if (minutes <  10){
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}

var time = hours + ":" + minutes + ":" + seconds;
console.log(time);

$('#clock').text(time);}, 1000);




// var intervalID = window.setInterval(time, 1000);
// }

//this gets a "handle" to the clock div in our HTML
 // window.setInterval(time, 1000);

// var clockDiv = document.getElementById('clock');
// clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
// displayTime();

// });

//Makes the clock 'tick' by running displayTime function every second
//$(document).ready(function(){
   