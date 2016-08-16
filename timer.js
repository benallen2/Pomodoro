var timeouts = [];
var b = function breakcountDown(duration, text){
	var startTime = Date.now();
	var difference;
	var minutes;
	var seconds;
	text = document.getElementById("countdown");
	
	function breakTimer(){
		difference = duration - (((Date.now() - startTime) / 1000) | 0);

		minutes = (difference / 60) | 0;
		seconds = (difference % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        text.textContent = minutes + ":" + seconds;
			if (minutes == "00" && seconds == "00"){
					clearInterval(check);
					$("#countdown").empty();
					a(parseInt($("#timer").html()), text);
				}
			if (difference <= 0) {
            startTime = Date.now() + 1000;
        }
	};

	var check = setInterval(breakTimer, 1000);
	timeouts.push(check);
	
}


var a = function countDown(duration, text){
	var startTime = Date.now();
	var difference;
	var minutes;
	var seconds;
	text = document.getElementById("countdown");
	
	function sessionTimer(){
		difference = duration - (((Date.now() - startTime) / 1000) | 0);

		minutes = (difference / 60) | 0;
		seconds = (difference % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        text.textContent = minutes + ":" + seconds;
			if (minutes == "00" && seconds == "00"){
					clearInterval(check);
					$("#countdown").empty();
					b(parseInt($("#breakTimer").html()), text);
				}
		if (difference <= 0) {
            startTime = Date.now() + 1000;
        }
	};
	
	var check = setInterval(sessionTimer, 1000);
	timeouts.push( check );
}


$(document).ready(function(){
	$("#start").click(function(){
		var breakDur = parseInt($("#breakTimer").html());// need to put back *60 when done
		var duration = parseInt($("#timer").html());// put back *60
		text = document.getElementById("countdown");
		a(duration, text);
	
		});	
	$("#stop").click(function(){
			for (var i = 0; i < timeouts.length; i++){
				clearInterval(timeouts[i])
			}
		})
	});
