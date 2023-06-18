function Food(game){
	this.game = game
	this.food = [];
	
}

Food.prototype.generateFood = function(){
	while (true){
		
	x = Math.floor((Math.random() * (this.game.size - 1)) + 1);
	y = Math.floor((Math.random() * (this.game.size - 1)) + 1);	
    e = {x:x,y:y,d:null};
    if (!this.game.snake.isSnake(e)){
		break;
	}		
	}
	this.food.push({x:x,y:y,d:null});
																						
	
	
	
}

Food.prototype.isFood = function(position){
	
	for (i=0;i<this.food.length;i++	){
		if(this.food[i] != null){
		if(this.food[i].x == position.x && this.food[i].y == position.y){
			
			return true;
		}		
		}
	}
	
	return false;
	
}

Food.prototype.deleteFood = function(position){
	
	for (i=0;i<this.food.length;i++	){
		
		if(this.food[i] != null){
		if(this.food[i].x == position.x && this.food[i].y == position.y){
			
			delete this.food[i];
		}
		}
	}
	
	
}
