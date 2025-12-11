import {Ship,Gameboard,Player} from './battleship';

let turn = 0;
let playerOne  = '';
let playerTwo = ''; 

const selectType = document.querySelector('select');

//event listeners
const startButton = document.querySelector('button.start');
startButton.addEventListener('click',handleStart);

const gameArea = document.querySelector('.gamearea');
const gameBoard1 = document.querySelector('.player1>.gameboard');
const gameBoard2 = document.querySelector('.player2>.gameboard');

//start of the game

function handleStart() {
    
    const player1 = document.querySelector('#player1name');
    const player2 = document.querySelector('#player2name');

    let players =createPlayers(player1,player2,selectType);
    playerOne = players[0];
    playerTwo = players[1];

    placeShips(players[0],players[1]);

    renderGameboard([players[0].gameboard,players[1].gameboard]);

    const menu = document.querySelector('.menu');
    
    const player1name = document.createElement('div');
    player1name.innerHTML = `<h2>${player1.value}</h2>`;

    const player2name = document.createElement('div');
    player2name.innerHTML = `<h2>${player2.value}</h2>`;
    
    
    menu.innerHTML = '';

    menu.appendChild(player1name);
    menu.appendChild(player2name);
}

export function createPlayers (player1,player2,type) {

    let player1name = player1.value;
    let player2name = player2.value;
    let playerType = type.value;

    let player1Obj = new Player(player1name,'real');
    let player2Obj = new Player(player2name, playerType);

    return [player1Obj, player2Obj];
}

function placeShips (player1, player2){

    computerPlace(player1)

    if(player2.type === 'com'){
        computerPlace(player2);
    }
    else {
       computerPlace(player2);
    }
    

}

//render Gameboard each time
function renderGameboard (gameboards){

    //clear Gameboards
    gameBoard1.innerHTML= '';
    gameBoard2.innerHTML = '';
    
    let [gameboard1Obj,gameboard2Obj] = gameboards;

    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            let tile = document.createElement('div');
            let tileClone = document.createElement('div');

            tile.addEventListener('click',handleDamage);
            tileClone.addEventListener('click',handleDamage);

            tile.classList = 'tile';
            tileClone.classList = 'tile';

            tile.id = `${i},${j}`;
            tileClone.id = `${i},${j}`;
            let tilevalue = '';
            let tileClonevalue = '';

            //hiding gameboard based on playerTwo type
            if(playerTwo.type === 'com'){
                tilevalue = gameboard1Obj.board[i][j];
                tileClonevalue = gameboard2Obj.board[i][j] === 'X' || gameboard2Obj.board[i][j] === 'O'? gameboard2Obj.board[i][j]: '';
            }
            else{
                if(turn%2 === 0){
                    tilevalue = gameboard1Obj.board[i][j];
                    tileClonevalue = gameboard2Obj.board[i][j] === 'X' || gameboard2Obj.board[i][j] === 'O'? gameboard2Obj.board[i][j]: '';
                }
                else {
                    tilevalue = gameboard1Obj.board[i][j] === 'X' || gameboard1Obj.board[i][j] === 'O'? gameboard1Obj.board[i][j]: '';
                    tileClonevalue = gameboard2Obj.board[i][j];
                }
            }
            

            
            setTileColor(tile,tilevalue);
            setTileColor(tileClone,tileClonevalue);

            tile.innerHTML = `${tilevalue}`;
            tileClone.innerHTML = `${tileClonevalue}`;

            gameBoard1.appendChild(tile);
            gameBoard2.appendChild(tileClone);
        }
    }
}

function setTileColor(tile,char){

    switch (char) {
        case 0 : tile.style.backgroundColor = 'blue';
                    break;
        case 1 : tile.style.backgroundColor = 'yellow';
                    break;
        case 2 : tile.style.backgroundColor = 'green';
                    break;
        case 3 : tile.style.backgroundColor = 'violet';
                    break;
        case 4 : tile.style.backgroundColor = 'pink';
                    break;
        case 'X' : tile.style.backgroundColor = 'red';
                    break;
        case 'O' : tile.style.backgroundColor = 'black';
                    break;
        default: tile.style.backgroundColor = 'white';
            
    }
}

//damage tile turn by turn

function handleDamage(e){

    let currPlayer = playerOne;
    turn++;
    if(turn%2 === 0){
        currPlayer = playerTwo;
    }
    
    //handle wrong turn click
    if((e.target.parentElement.parentElement.className === 'player1' && currPlayer === playerOne) ||
    (e.target.parentElement.parentElement.className === 'player2' && currPlayer === playerTwo)){
        turn--;
        return null;
    }

    let pos = e.target.id;

    dealDamage([Number(pos[0]),Number(pos[2])],currPlayer);
    
    //ComputerPlayer Turn
    if(playerTwo.type === 'com'){
        dealDamage(computerHit(),playerTwo);
        turn++;
    }

    //endGameTrigger
    if(playerOne.gameboard.allSunk() || playerTwo.gameboard.allSunk()){
        endGame();
    }
}

function dealDamage(pos,currPlayer){
    
    let x = pos[0];
    let y = pos[1];

    if(currPlayer === playerOne){
        currPlayer = playerTwo;
    }
    else {
        currPlayer = playerOne;
    }

    currPlayer.gameboard.recieveAttack([x,y]);
    
    renderGameboard([playerOne.gameboard,playerTwo.gameboard]);
}

//Computer AI
function computerHit(){

    let x=0;
    let y=0;
    let legalMove = false;

    while(!legalMove){
        x = Math.floor(Math.random()*10);
        y = Math.floor(Math.random()*10);
        if(playerOne.gameboard.board[x][y] !== 'X'){
            legalMove = true;
        }
    }

    return [x,y];
}

function computerPlace(player){
    
    let shiplengths = [4,3,2,2];
    
    shiplengths.forEach((ship) => {
        let possible = false;

        while(!possible){
            let x = Math.floor(Math.random()*10);
            let y = Math.floor(Math.random()*10);
            let start = [x,y];
            let end = [];
            let hOrV = Math.floor(Math.random()*2);

            if(hOrV === 0 && x+(ship-1) < 10){
                end = [x+(ship-1),y];
            }
            else if(hOrV === 1 && y+(ship-1) <10){
                end = [x,y+(ship-1)];
            }
            else {
                continue;
            }

            possible = player.gameboard.place(start,end);
        }
    })
}

function endGame(){

    let winner = ''
    if(playerOne.gameboard.allSunk()){
        winner = playerTwo.name;
    }
    else{
        winner = playerOne.name;
    }
    gameArea.innerHTML = `<h1>GAME OVER!</h1><br><h2>${winner} has Won.</h2>`;
}