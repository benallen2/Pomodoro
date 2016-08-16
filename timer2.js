var Timer = function(){
	var count =  0; //milleseconds
	var run =  false;
	var onBreak = false;
	
	this.set = function(minutes){
		count = 6000 * minutes;
	};

	this.start = function(){
				setInterval(function(){
					if((count > 0) && (run) ){
						count--;
					}
				},1);
	
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
		//TODO format output or make 2 functions this.getMinutes() this.getSeconds()
		return count;
	};
}
