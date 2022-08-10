function drawBoard() {
	const gameElement = document.querySelector('.game')

	for (let i = 0; i < 9; i++) {
		const cellContainer = document.createElement('div')
		cellContainer.classList.add('cell')


		cell.addEventListener('click', function () { //Function at this place means only this cell has access to the function.
			console.log("Something was clicked")
		})


		gameElement.append(cellContainer)
	}
}

drawBoard();



