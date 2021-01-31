const carMakes = ['Jaguar', 'Audi', 'Ferrari']
const carColors = ['Red', 'Green', 'Blue']

class Car {
    constructor(make, color, milage = 0) {
        this._make = make
        this._color = color
        this._milage = milage
    }

    get make() {
        return this._make
    }

    set make(newMake) {
        this._make = newMake
    }

    get color() {
        return this._color
    }

    set color(newColor) {
        this._color = newColor
    }

    drive(length = 1) {
        this._milage += length
    }
}

const createRandomCars = (num) => {
    const cars = []
    for (let i = 0; i < num; i++) {
        const name = carMakes[Math.floor(Math.random() * carMakes.length)]
        const make = carColors[Math.floor(Math.random() * carColors.length)]
        const car = new Car(name, make)
        cars.push(car)
    }
    return cars
}

const cars = createRandomCars(5)

cars[0].drive(10)

console.log(cars)