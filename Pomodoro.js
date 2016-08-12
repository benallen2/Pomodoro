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

function startClick(){
	$("#startBtn").click(function(){
		$(this).html() == "Start!" ? $(this).html("Stop!") : $(this).html("Start!");
		$("#hourglass").toggleClass( "fa-spin" );
		console.log(Date.now());
	});
}




function plusIt(){// adds to break and session timer
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

function minusIt(){// subtracts from break and session timer
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
	startClick();
	document.getElementById("sessionTime").innerHTML = sessionTimer + " Mins";
	document.getElementById("breakTime").innerHTML = breakTimer + " Mins";
});