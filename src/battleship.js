
export class Ship {
    constructor(length) {
        this.length = length;
        this.damage = 0;
        this.sunk = false;
        this.location = [];
    }

    hit(){
        this.damage++;
    }

    isSunk(){
        if(this.damage >= this.length){
            this.sunk = true;
        }
        else{
            this.sunk = false;
        }
    }
}

export class Gameboard {
    constructor(){
        this.board = new Array(10).fill().map(() => Array(10).fill(''));
        this.ships = [];
        this.missedShots = [];

    }

    //place Methods
    place(start,end){
       
        
        let length = this.getLength(start,end);

        let ship = new Ship(length);

        this.ships.push(ship);

        let locations = this.getLocation(start,end,length);
        ship.location.push(...locations);
       
        let isPossible = true;

        locations.some((location) => {
            let [x,y] = location;
            
            if(this.board[x][y] !== ''){
                isPossible = false;
                return true;
            }
            this.board[x][y] = this.ships.length-1;
            return false;
        })
        if(!isPossible){
            this.ships.pop();
        }
        return isPossible;
    }

    getLength(start,end){
            
        let [startX,startY] = start;
            
        let [endX,endY] = end;
            
        let length = 0;
            
        if(startX === endX) {
                
            length = endY - startY;
            
        }
            
        else {
                
            length = endX - startX;
            
        }
            
        return length+1;
    }

    getLocation(start, end, length) {
        let [startX,startY] = start;
            
        let [endX,endY] = end;

        let locations = [];

        if(startX === endX) {
            locations.push(start);
            for(let i=0; i< length-2; i++){
                startY++;
                locations.push([startX,startY]);
            }
            locations.push(end);
            
        }
            
        else {
                
            locations.push(start);
            for(let i=0; i< length-2; i++){
                startX++;
                locations.push([startX,startY]);
            }
            locations.push(end);
            
        }

        return locations;
    }

    recieveAttack (hitLocation) {
        
        if(this.board[hitLocation[0]][hitLocation[1]] === 'X' || this.board[hitLocation[0]][hitLocation[1]] === 'O'){
            return null;
        }
        let ship = this.isHit(hitLocation);
        
        if(ship){
            ship.hit();
            this.board[hitLocation[0]][hitLocation[1]] = 'X';
        }
        else {
            this.missedShots.push(hitLocation.toString());
            this.board[hitLocation[0]][hitLocation[1]] = 'O';
        }
    }

    isHit(hitLocation) {
        
        let hit = false;
        this.ships.forEach((ship) => {
            
            ship.location.forEach((location) => {
                
                if(location.toString() === hitLocation.toString()){
                    hit = ship;
                }

            })
        })

        return hit;
    }

    allSunk() {

        let isAllSunk = true;
        this.ships.forEach((ship) => {
            ship.isSunk();
            if(!ship.sunk){
                isAllSunk = false;
            }
        })

        return isAllSunk;
    }
}


export class Player {
    constructor(name,type){
        this.name = name;
        this.type = type;
        this.gameboard = new Gameboard();
    }


}