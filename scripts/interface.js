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

        updateSquares();
        setTimeout(() => {
            //alert('acabou')
            currentPlayer.innerText = 'ACABOY'
        }, 10)
    }else{
        updateSquares();
    }
    
    
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