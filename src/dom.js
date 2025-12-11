import {Ship,Gameboard,Player} from './battleship';


const selectType = document.querySelector('select');


const startButton = document.querySelector('button.start');
startButton.addEventListener('click',handleStart);

const gameBoard1 = document.querySelector('.player1>.gameboard');
const gameBoard2 = document.querySelector('.player2>.gameboard');

export function createPlayers (player1,player2,type) {

    let player1name = player1.value;
    let player2name = player2.value;
    let playerType = type.value;

    let player1Obj = new Player(player1name,'real');
    let player2Obj = new Player(player2name, playerType);

    return [player1Obj, player2Obj];
}

function handleStart() {
    
    const player1 = document.querySelector('#player1name');
    const player2 = document.querySelector('#player2name');

    let players =createPlayers(player1,player2,selectType);

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

function renderGameboard (gameboards){
    
    let [gameboard1Obj,gameboard2Obj] = gameboards;

    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            let tile = document.createElement('div');
            let tileClone = document.createElement('div');

            tile.classList = 'tile';
            tileClone.classList = 'tile';

            tile.id = `${i},${j}`;
            tileClone.id = `${i},${j}`;

            tile.innerHTML = `${gameboard1Obj.board[i][j]}`;
            tileClone.innerHTML = `${gameboard1Obj.board[i][j]}`;

            gameBoard1.appendChild(tile);
            gameBoard2.appendChild(tileClone);
        }
    }
}

function placeShips (player1, player2){

    player1.gameboard.place([1,2],[1,5]);
    player1.gameboard.place([3,2],[3,4]);
    player1.gameboard.place([8,1],[9,1]);
    player1.gameboard.place([7,2],[7,3]);

    player2.gameboard.place([1,2],[1,5]);
    player2.gameboard.place([3,2],[3,4]);
    player2.gameboard.place([8,1],[9,1]);
    player2.gameboard.place([7,2],[7,3]);

}