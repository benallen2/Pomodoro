
function getit(session){
	var start = Date.now();
	var duration = session * 60000;
	var finish = start + duration;
	var diff = duration - (((Date.now() - start) / 1000) | 0);
	console.log(diff);
	console.log(start);
	console.log(finish);
	if (finish < start){
		alert("Done");
		}

}





var x = 5;

$(document).ready(function(){


	$(".btn").click(function(){
		var here = $(".fillCircle");
		here.toggleClass("red");
		myfunc();
	});
})

function myfunc(){
	document.getElementById("fillCircle").style.WebkitTransitionDuration = x + "s";
	document.getElementById("fillCircle").style.transitionDuration = x + "s";
}