function init(){
	const CELL_SIZE = 20;
	const gameField = document.getElementById('gamefield');
	gameField.style.width = `${CELL_SIZE}px`; 
	for (let x=0; x<20; x++){
		for(let y=0; y<20; y++){
			var cell = document.createElement('div');
			cell.id = `x${x}y${y}`;
			cell.style.position = 'absolute';
			cell.style.top = y*CELL_SIZE+'px';
			cell.style.left = x*CELL_SIZE+'px';
			cell.style.width = CELL_SIZE + 'px';
			cell.style.height = CELL_SIZE + 'px';

			const red = x * 10;
			const green = y * 10;
			const color = `rgb(${red}, ${green}, 0)`;
			cell.style.backgroundColor = color;
			gameField.appendChild(cell);
      if (x%2 && !(y%2)){
        cell.style.background = '#000';
      }
      if (!(x%2) && y%2){
        cell.style.background = '#000';
      }
    }
	}	
}
window.addEventListener('load', init);