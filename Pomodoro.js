
var sessionTimer = 25;
var breakTimer = 5;
var timeouts = [];

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
	$("#startBtn").click(function(){//spins hourglass
		$("#hourglass").addClass( "fa-spin" );
	});
}
function stopClick(){
	$("#stopBtn").click(function(){
		$("#hourglass").removeClass( "fa-spin" );
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

var b = function breakcountDown(duration, text){
	var startTime = Date.now();
	var difference;
	var minutes;
	var seconds;
	text = document.getElementById("timer");
	
	function breakTimer(){
		difference = duration - (((Date.now() - startTime) / 1000) | 0);

		minutes = (difference / 60) | 0;
		seconds = (difference % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        text.textContent = minutes + ":" + seconds;
			if (minutes == "00" && seconds == "00"){
					clearInterval(check);
					$("#timer").empty();
					a((parseInt($("#sessionTime").html()) * 60), text);
					$("#command").html("Work Time!");
				}
			else if (difference <= 0) {
            startTime = Date.now() + 1000;
        }

	};
	transitionrev();
	var check = setInterval(breakTimer, 1000);
	timeouts.push(check);
	
}

var a = function countDown(duration, text){
	var startTime = Date.now();
	var difference;
	var minutes;
	var seconds;
	text = document.getElementById("timer");
	
	function sessionTimer(){
		difference = duration - (((Date.now() - startTime) / 1000) | 0);

		minutes = (difference / 60) | 0;
		seconds = (difference % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        text.textContent = minutes + ":" + seconds;
			if (minutes == "00" && seconds == "00"){
					clearInterval(check);
					$("#timer").empty();
					b((parseInt($("#breakTime").html()) * 60), text);
					$("#command").html("Break Time!");
				}
			else if (difference <= 0) {
           	 	startTime = Date.now() + 1000;
        }
	};
	transitionfunc();
	var check = setInterval(sessionTimer, 1000);
	timeouts.push(check);
}


function transitionfunc(){// color change transition
	var x = parseInt($("#sessionTime").html()) * 60;
	document.getElementById("fillCircle").style.WebkitTransitionDuration = x + "s";
	document.getElementById("fillCircle").style.transitionDuration = x + "s";
	var here = $(".fillCircle");
	here.addClass("red");
}
function transitionrev(){// color change transition
	var x = parseInt($("#breakTime").html()) * 60;
	document.getElementById("fillCircle").style.WebkitTransitionDuration = x + "s";
	document.getElementById("fillCircle").style.transitionDuration = x + "s";
	var here = $(".fillCircle");
	here.removeClass("red");
}

$(document).ready(function(){

	currentTime();
	timeCheck();
	plusIt();
	minusIt();
	startClick();
	stopClick();

	$("#startBtn").click(function(){
		var breakDur = parseInt($("#breakTime").html()) * 60;// add *60 on finish
		var duration = parseInt($("#sessionTime").html()) * 60;
		text = document.querySelector("#timer");
		a(duration, text);
	});

	$("#reset").click(function(){
		location.reload();
	});
	$("#stopBtn").click(function(){
		for(var i = 0; i < timeouts.length; i++){
			clearInterval(timeouts[i]);
		}
	})

});



