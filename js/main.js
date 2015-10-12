
(function (){


  setInterval (function(){
  var currentTime= new Date();
  var currentHours=currentTime.getHours();
  //console.log(hours);
  var currentMinutes=currentTime.getMinutes();
  var currentSeconds=currentTime.getSeconds();
  

  var displayHours=(currentHours < 10) ? ('0' + currentHours) : currentHours;
  var displayMinutes= (currentMinutes < 10) ? ('0' + currentMinutes) : currentMinutes;
  var displaySeconds = (currentSeconds< 10) ? ('0' + currentSeconds) : currentSeconds;

  var currentTimeString= '#' + displayHours + displayMinutes + displaySeconds;

  // $.clock=currentTimeString;
  $('#clock').text(currentTimeString).css('background-color', currentTimeString);
}, 1000);
})();
  // document.getElementById('clock').firstChild.nodeValue=currentTimeString;
// };
// $.clock=hexClock;
// var everySecond;
// function hexColor(){
//   everySecond=setInterval(change, 1000);
// }

// function change(){
//   clearInterval(everySecond);

// }


// $.clock
// for (var i =1; i < 61; i ++) {
//   console.log(i);
// }

// var changeColor;
// function changeColor(){
//   changeColor=setInterval(hexColor ,1000);
// };

// var newTime=();
// window.setInterval(newTime, 1000);



   
