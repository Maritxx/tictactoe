const state = { 
//Creates object that you re-use.
gameElement: document.querySelector('.game'),
cells: Array(9).fill(null),
	//Array function takes length parameter so you don't need to re-type code.

symbols: ['o', 'x']
}


function drawBoard() {
	console.log("DrawBoard has run");
	state.gameElement.innerHTML = ''

	for (let i = 0; i < state.cells.length; i++) {
		const cellContainer = document.createElement('div')
		cellContainer.classList.add('cell')


		if (state.cells[i]) { //Does the cell have something in it? Then the code runs.
			const cellSymbol = document.createElement('p')
			cellSymbol.innerText = state.cells[i]
			cellSymbol.classList.add('symbol')

			cellContainer.append(cellSymbol)
		} else { //If not, this code runs. 
			cellContainer.addEventListener('click', function () {
				state.symbols.reverse()
				const currentPlayerSymbol = state.symbols[0]

				state.cells[i] = currentPlayerSymbol


				drawBoard() 
				//Re-draws the grid again after something is clicked.
			})
		}


		state.gameElement.append(cellContainer)
	}
}

drawBoard();



