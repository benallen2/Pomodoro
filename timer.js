function setDur(){

}



function countDown(duration, text, callback){
	var startTime = Date.now();
	var difference;
	var minutes;
	var seconds;

	
	function sessionTimer(){
		difference = duration - (((Date.now() - startTime) / 1000) | 0);

		minutes = (difference / 60) | 0;
		seconds = (difference % 60) | 0;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        text.textContent = minutes + ":" + seconds;
			if (minutes == "00" && seconds == "00"){
					clearInterval(check);
				}
	};
	

	var check = setInterval(sessionTimer, 1000);
	
}


$(document).ready(function(){
	$(".btn").click(function(){
		var breakDur = parseInt($("#breakTime").html()) * 60;
		var duration = parseInt($("#timer").html()) * 60;
		text = document.querySelector("#countdown");
		countDown(duration, text);
	})
})
