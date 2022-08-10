const state = { 
//Creates object that you re-use.
gameElement: document.querySelector('.game'),
cells: Array(9).fill(null),
	//Array function takes length parameter so you don't need to re-type code.

	symbols: ['o', 'x'],
	winningCombinations: [
		[0, 1, 2], //Top Row.
		[3, 4, 5], //Middle row
		[6, 7, 8], //Bottom row
		[0, 3, 6], //left column
		[1, 4, 7], //Middle column
		[2, 5, 8], //Right column
		[0, 4, 8], //Diag left
		[2, 4, 6], //Diag right
	]
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

				if (checkForWinner()) {


				}
			})
		}


		state.gameElement.append(cellContainer)
	}
}

function checkForWinner() {
	return state.winningCombinations.some(function (combo) {
		const cells = combo.map(function (index) {
			return state.cells[index]
		})
	})

}

drawBoard();



