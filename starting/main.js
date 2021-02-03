const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field
    }

    get field() {
        return this._field
    }

    updateField(x, y){
        this._field[y][x] = pathCharacter
    }

    checkField(x, y){
        console.log(x + y)
        return this._field[y][x]
    }

    print() {
        this._field.forEach((element) => {
            let line = ''
            element.forEach((element) => {
                line += element
            })
            console.log(line)
        })
    }
}

const myField = new Field([
    ['*', '░', 'O', '░', '░', '░', '░', '░'],
    ['░', 'O', '░', 'O', '░', 'O', '░', '░'],
    ['░', 'O', '░', '░', '░', 'O', '░', '░'],
    ['░', 'O', '░', 'O', 'O', 'O', '░', '░'],
    ['░', 'O', '░', '░', 'O', '░', 'O', '░'],
    ['░', 'O', '░', '░', '░', '░', 'O', '░'],
    ['░', '░', 'O', 'O', '░', '░', 'O', '░'],
    ['░', '░', '░', '░', '░', 'O', 'O', '^'],
    ['░', '░', 'O', 'O', '░', '░', 'O', '░']
]);

let running = true;
let feedBack = 'Game started';

//playerLocation = [X, Y]
let playerLocation = [0, 0]
const maxY = myField.field.length
const maxX = myField.field[0].length
console.log('maxY ' + maxY);
console.log('maxX ' + maxX);

while (running) {
    console.clear()
    myField.print()

    console.log(playerLocation + feedBack)
    let direction = prompt('Move player(WASD): ')

    switch (direction) {
        case 'x':
            feedBack = 'Exiting game'
            running = false
            break;
        case 'a':
            if (playerLocation[0] === 0) {
                feedBack = 'Invalid movement'
            } else {
                feedBack = 'Moved left'
                playerLocation[0] -= 1
            }
            break;
        case 'w':
            if (playerLocation[1] === 0) {
                feedBack = 'Invalid move'
            } else {
                feedBack = 'Moved Up'
                playerLocation[1] -= 1
            }
            break;
        case 'd':
            if (playerLocation[0] === maxX) {
                feedBack = 'Invalid movement'
            } else {
                feedBack = 'Moved right'
                playerLocation[0] += 1
            }
            break;
        case 's':
            if (playerLocation[1] === maxY) {
                feedBack = 'Invalid movement'
            } else {
                feedBack = 'Moved down'
                playerLocation[1] += 1
            }
            break;
        default:
            feedBack = '-Invalid input-\nWASD: Move player\nX: Exit game'
    }
    updateLocation(playerLocation[0], playerLocation[1])
    myField.updateField(playerLocation[0], playerLocation[1])
}

function updateLocation(numX, numY) {
    if (myField.checkField(playerLocation[0], playerLocation[1]) === hat) {
        running = false
        console.log("You've won the game!!!!");
    }else if(myField.checkField(playerLocation[0], playerLocation[1]) === hole){
        running = false
        console.log("No you fell in a hole and lost :(");
    }
}