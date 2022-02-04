let board = ['', '', '', '', '', '', '', '', ''];
let symbols = ['x', 'o'];
let playerTime = 0;

let gameOver = false;

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let currentPlayer = document.getElementById('playerTime');

function handleMove(position){

    if(board[position] == ''){

        board[position] = symbols[playerTime];

        gameOver = isOver();
        console.log(gameOver)

        if(!gameOver){

            playerTime == 0 ? playerTime = 1 : playerTime = 0;
            currentPlayer.innerText = `Vez de jogador ${playerTime+1}`;

        }

    }

    return gameOver;
    
}

function isOver (){

    for(let i = 0; i < winStates.length; i++){

        let sequence = winStates[i];

        let pos0 = sequence[0];
        let pos1 = sequence[1];
        let pos2 = sequence[2];

        //console.log(board[pos0], board[pos1], board[pos2]);

        let filledPositions = 0;
        board.forEach((item) => {
            if(item != ''){
                filledPositions++;
            }
        })

        if(board[pos0] == board[pos1] &&
        board[pos0] == board[pos2] && board[pos0] != ''){

            updateSquares()
            return true;

        } else if(filledPositions == 9){

            console.log(filledPositions)
            updateSquares()
            return true;
            
        }

    }

    return false;

}