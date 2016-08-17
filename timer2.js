var Timer = function(){
	var count =  0; //seconds
	var run =  false;
	var onBreak = false;
	
	this.set = function(minutes){
		count = 60 * minutes;
	};

	this.start = function(){
				setInterval(function(){
					if((count > 0) && (run) ){
						count--;
					}
				}, 1000);
	
	};
	
	this.stop = function(){
		if(run === false){
			run = true;
		}
		else{
			run = false;
		}
		
	}; 

	this.getOnBreak = function(){
		return onBreak;
	};

	this.toggleBreak = function(){
		onBreak = !onBreak;
	}

	this.get = function(){
		console.log(count);
		minutes = Math.floor(count / 60);
		seconds = count % 60;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        var display = minutes + ":" + seconds;
		//TODO format output or make 2 functions this.getMinutes() this.getSeconds()
		return display;
	
	};
}
