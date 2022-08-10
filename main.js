const state = { //Creates object that you re-use.
	gameElement: document.querySelector('.game')
	cells: Array(9).fill(null) 								//Array function takes length parameter so you don't need to re-type code.
}


function drawBoard() {
	for (let i = 0; i < 9; i++) {
		const cellContainer = document.createElement('div')
		cellContainer.classList.add('cell')


		cellContainer.addEventListener('click', function () {
			state.cells[i] = 'x'
		})


		gameElement.append(cellContainer)
	}
}

drawBoard();



