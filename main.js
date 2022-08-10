function drawBoard() {
	const gameElement = document.querySelector('.game')

	for (let i = 0; i < 9; i++) {
		const cellContainer = document.createElement('div')
		cellContainer.classList.add('cell')


		cellContainer.addEventListener('click', function () {
			console.log(`Cell ${i} was clicked`)
		})


		gameElement.append(cellContainer)
	}
}

drawBoard();



