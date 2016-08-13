

	

function countDown(duration, text){
	var startTime = Date.now();
	var difference;
	var endTime;
	var minutes;
	var seconds;

	
	function timer(){
		difference = duration - (((Date.now() - startTime) / 1000) | 0);

		minutes = (difference / 60) | 0;
		seconds = (difference % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        text.textContent = minutes + ":" + seconds;

        if (difference <= 0){// adds a second to start exactly at SessionTimer start
        	startTime = Date.Now() + 1000;
        }
	};
	timer();
	setInterval(timer, 1000);	

}

$(document).ready(function(){
	var duration = sessionTimer * 60;
var sessionText = $("#wtf").html();
var sessionTimer = parseInt(sessionText, 10);
	console.log(sessionTimer);

	$("#startBtn").click(function(){
		text = document.querySelector("#countdown")
		countDown(duration, text);
		
	})
})