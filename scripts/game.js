let board = ['', '', '', '', '', '', '', '', ''];
let symbols = ['x', 'o'];
let playerTime = 0;
let formerPlayer = 1;

let gameOver = false;

let playerOneWins = 0;
let playerTwoWins = 0;
let velhaWins = 0;

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

let playerOne = document.getElementById('playerOne');
let playerTwo = document.getElementById('playerTwo');
let velha = document.getElementById('velha');

let players = document.getElementsByClassName('player');

function handleMove(position){

    if(board[position] == ''){

        board[position] = symbols[playerTime];

        gameOver = isOver();
        console.log(gameOver)

        if(!gameOver){

            if (playerTime == 0) {

                playerTime = 1;
                formerPlayer = 0;

            } else {
                playerTime = 0;
                formerPlayer = 1;
            }

            setCurrentPlayer();
    
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

        updateSquares()

        let filledPositions = 0;
        board.forEach((item) => {
            if(item != ''){
                filledPositions++;
            }
        })

        if(board[pos0] == board[pos1] &&
        board[pos0] == board[pos2] && board[pos0] != ''){

            //updateSquares()
            playerTime == 0 ? playerOneWins++ : playerTwoWins++;
            console.log(playerTime, playerOneWins, playerTwoWins)
            return true;

        } else if(filledPositions == 9){

             console.log(filledPositions)
             //updateSquares();
             velhaWins++;
             return true;
            
         }
    }
    return false;
}

function restart(){

    let squares = document.querySelectorAll('.square');

    for(let i = 0; i < board.length; i++){
        board[i] = '';
        squares.forEach((square) => {
            if (square.hasChildNodes()) {
                square.removeChild(square.childNodes[0]);
              } 
        })
        playerTime = 0;
        formerPlayer = 1;
        setCurrentPlayer();
    }

    //console.log(board)
}