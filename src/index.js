import {Gameboard} from './battleship';
import {createPlayers} from './dom';
import './styles.css';
const gameBoard = new Gameboard();



gameBoard.place([1,2],[1,5]);
gameBoard.place([1,3],[2,3]);
gameBoard.place([0,2],[0,3]);

console.log(gameBoard.ships);
console.log(gameBoard.allSunk());

