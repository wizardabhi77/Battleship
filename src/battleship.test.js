import {Ship, Gameboard} from './battleship';

const dummyShip = new Ship(4);
const dummyBoard = new Gameboard();
const mockHit = jest.fn();

//Ship tests
test('hit method of Ship', () => {
    dummyShip.hit();
    expect(dummyShip.damage).toBe(1);
})

test('isSunk method of Ship', () => {
    dummyShip.hit();
    
    dummyShip.hit();
    
    dummyShip.hit();
    dummyShip.isSunk();
    expect(dummyShip.sunk).toBe(true);
})

//Gameboard tests

test('place method of Gameboard', () => {
    dummyBoard.place([1,2],[1,5]);

    expect(dummyBoard.ships[0].length).toBe(4);
    expect(dummyBoard.board[1][2]).toBe(0);
    expect(dummyBoard.board[1][3]).toBe(0);
    expect(dummyBoard.board[1][4]).toBe(0);
    expect(dummyBoard.board[1][5]).toBe(0);

    
})

test('recieveAttack method of Gameboard missed', () => {
    dummyBoard.recieveAttack([0,3]);
    expect(dummyBoard.missedShots).toContain('0,3');
})

test('recieveAttack method of Gameboard hit', () => {

    
    dummyBoard.recieveAttack([1,3]);
    expect(dummyBoard.ships[0].damage).toBe(1);
})

test('allSunk method of Gameboard if all ships are sunk', () => {
    
    dummyBoard.recieveAttack([1,2]);
    dummyBoard.recieveAttack([1,4]);
    dummyBoard.recieveAttack([1,5]);
    console.log(dummyBoard.ships);
    expect(dummyBoard.allSunk()).toBe(true);
})

test('allSunk method of Gameboard if all ships are not sunk', () => {
    dummyBoard.place([0,2],[0,3]);
    expect(dummyBoard.allSunk()).toBe(false);
})

