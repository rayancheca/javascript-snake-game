
var G;

function init(){

document.addEventListener("keydown", capture_keypress);

G = new Game();

draw_board();

}

function start(){
	
setInterval(function(){ draw_board(); }, 10);

setInterval(function(){ G.run(); },  75);	
	
}

function reset(){


}

function capture_keypress(event){

	const LEFT_KEY = 37;
	const RIGHT_KEY = 39;
	const UP_KEY = 38;
	const DOWN_KEY = 40;
	const UP_KEY2 = 87;
	const DOWN_KEY2 = 83;
	const LEFT_KEY2 = 65;
	const RIGHT_KEY2 = 68;
	const SPACE_BAR = 32;

	if(G.started == false){

		G.started = true;
		
		start();
		
	}

	if (event.keyCode === UP_KEY ||event.keyCode === UP_KEY2){
  
		G.move(0);

	}
	
	if (event.keyCode === RIGHT_KEY || event.keyCode === RIGHT_KEY2){
  
		G.move(1);

	}

	if (event.keyCode === DOWN_KEY || event.keyCode === DOWN_KEY2){
  
		G.move(2);

	}
	
	if (event.keyCode === LEFT_KEY || event.keyCode === LEFT_KEY2){
  
		G.move(3);

	}
	if (event.keyCode === SPACE_BAR){
  
		this.snake.grow();

	}
}



function draw_board(){
	
	if(document.getElementById('board') == undefined){
	
		table = document.createElement('table');
		table.id = "board";
		
		tr = [];
		
		for(i = 0; i < G.size; i++){
			
			tr[i] = document.createElement('tr');
		
			for(j = 0; j < G.size; j++){
				
				td = document.createElement('td');
				
				td.id = i + "x" + j;
			
				
				tr[i].appendChild(td);
				
			}
			
			table.appendChild(tr[i]);
			
		}
		
		document.body.appendChild(table);
		
	}
	
	
	
	
	for(yy = 0; yy < G.size; yy++){
		
		for(xx = 0; xx < G.size; xx++){
			
		
			if(G.snake.isSnake({x: yy, y: xx})){
				
				document.getElementById(xx + "x" + yy).style.background = "#000";
				
			}else if(G.food.isFood({x: yy, y: xx})){
				
				document.getElementById(xx + "x" + yy).style.background = "#F00";//"url ('imagenes/manzana.jpg')"
				
			}else{
				
				document.getElementById(xx + "x" + yy).style.background = "#EEE";
				
			}
			
			
			
		}
		
	} 
	
	

}

function cloneObj(src) {
  return JSON.parse(JSON.stringify(src));
}
