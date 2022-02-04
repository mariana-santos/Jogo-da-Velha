document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
});

function handleClick (event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(() => {
            setWins();
            restart();
        }, 1200)
    }else{

    }
    
    updateSquares()
}

function updateSquares(){

    let squares = document.querySelectorAll('.square');

    if(!gameOver){
        squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        //console.log(symbol);

        if(symbol != ''){
            if(symbol == 'x'){
                square.innerHTML = '<i class="fas fa-times x"></i>';
            }
            else {
                square.innerHTML = '<i class="far fa-circle o"></i>';
            }
        }
        })
    }
}

function setCurrentPlayer(){
    let currentPlayer = players[playerTime];
    let former = players[formerPlayer];

    currentPlayer.style.background = '#af4de791'
    former.style.background = '#282a36'

    // console.log('formerplayer', former)
    // console.log('playertime', playerTime)
    // console.log('currentplayer', currentPlayer)

}

function setWins(){
    playerOne.innerHTML = playerOneWins;
    playerTwo.innerHTML = playerTwoWins;
    velha.innerHTML = velhaWins;
}