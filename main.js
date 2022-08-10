const state = { 
//Creates object that you re-use.
	gameElement: document.querySelector('.game'),
	cells: Array(9).fill(null) 	
	//Array function takes length parameter so you don't need to re-type code.
}


function drawBoard() {
	for (let i = 0; i < 9; i++) {
		const cellContainer = document.createElement('div')
		cellContainer.classList.add('cell')


		if (state.cells[i]) { //Does the cell have something in it? Then the code runs.
			const cellSymbol = document.creatElement('p')
			cellSymbol.innerText = 'this is text'
			cellContainer.append(cellSymbol)

		} else { //If not, this code runs. 
			cellContainer.addEventListener('click', function () {
				state.cells[i] = 'x'

				drawBoard() 
				//Re-draws the grid again after something is clicked.
		})



		}


		state.gameElement.append(cellContainer)
	}
}

drawBoard();



