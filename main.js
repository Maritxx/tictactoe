function drawBoard() {
	const gameElement = document.querySelector('.game')

	const cellContainer = document.createElement('div')
	cellContainer.classList.add('cell')

	gameElement.append(cellContainer)
}