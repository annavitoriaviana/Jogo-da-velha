let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

const checkWinner = () => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.textContent = `${currentPlayer} venceu!`;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        message.textContent = 'Empate!';
    }
};

const handleCellClick = (index) => {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
};

const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => cell.textContent = '');
    message.textContent = '';
};

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(index));
});

resetBtn.addEventListener('click', resetGame);
