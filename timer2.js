var Timer = function(){
	var count =  0; //milleseconds
	var run =  false;
	var onBreak = false;
	
	this.set = function(minutes){
		count = 1000 * minutes;
	};

	this.start = function(){
				setInterval(function(){
					if((count > 0) && (run) ){
						count--;
					}
				}, 1);
	
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
		
		minutes = Math.floor(count / 60 / 1000);
		seconds = Math.floor(count / 1000) % 60;

		minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;


        var display = minutes + ":" + seconds;

		//TODO format output or make 2 functions this.getMinutes() this.getSeconds()
		return display;
	
	};
}
