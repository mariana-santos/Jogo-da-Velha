let board = ['', '', '', '', '', '', '', '', ''];
let symbols = ['x', 'o'];
let playerTime = 0;

let currentPlayer = document.getElementById('playerTime');

function handleMove(position){

    if(board[position] == ''){

        board[position] = symbols[playerTime];
        playerTime == 0 ? playerTime = 1 : playerTime = 0;

        currentPlayer.innerText = `Vez de jogador ${playerTime+1}`;

    }
    
}