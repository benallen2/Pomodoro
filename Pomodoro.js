var sessionTimer = 25;
var breakTimer = 5;

function currentTime (){// sets the time at the bottom to current time based on browser location
	var timeNow = new Date();
	var h = timeNow.getHours();
	var m = timeNow.getMinutes();
	var s = timeNow.getSeconds();
	m = timeCheck(m);
	s = timeCheck(s);
	if(h > 5 && h < 18){
	document.getElementById("current").innerHTML = "Current Time: " + h + ":" + m + ":" + s + "<i class='fa fa-sun-o' aria-hidden='true'></i>";
	var t = setTimeout(currentTime, 800);
	}
	else {
	document.getElementById("current").innerHTML = "Current Time: " + h + ":" + m + ":" + s + "<i class='fa fa-moon-o' aria-hidden='true'></i>";
	var t = setTimeout(currentTime, 800);
	}
}

function timeCheck(i){// adds a zero infront of the time if it is less than 10
	if (i < 10){
		i = "0" + i;
	};
	return i;
}

function plusIt(){
$("#sessionPlus").click(function(){
	sessionTimer++;
	document.getElementById("sessionTime").innerHTML = sessionTimer + " Mins";
	document.getElementById("timer").innerHTML = sessionTimer;
	});
$("#breakPlus").click(function(){
	breakTimer++;
	document.getElementById("breakTime").innerHTML = breakTimer + " Mins";
	});
};

function minusIt(){
$("#sessionMinus").click(function(){
	sessionTimer--;
	document.getElementById("sessionTime").innerHTML = sessionTimer + " Mins";
	document.getElementById("timer").innerHTML = sessionTimer;
	});
$("#breakMinus").click(function(){
	breakTimer--;
	document.getElementById("breakTime").innerHTML = breakTimer + " Mins";
	});
};



$(document).ready(function(){
	currentTime();
	timeCheck();
	plusIt();
	minusIt();
	document.getElementById("sessionTime").innerHTML = sessionTimer + " Mins";
	document.getElementById("breakTime").innerHTML = breakTimer + " Mins";
});