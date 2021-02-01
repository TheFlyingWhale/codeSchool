const carMakes = ['Jaguar', 'Audi', 'Ferrari', 'Honda', 'BMW']
const carColors = ['Red', 'Green', 'Blue', 'White', 'Black']

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

    logInfo(){
        console.log(`This ${this.make} is ${this._color} and have driven ${this._milage} km`);
    }

    getInfo(){
        return `This ${this.make} is ${this._color} and have driven ${this._milage} km`
    }

    random(){
        this._make = carMakes[Math.floor(Math.random() * carMakes.length)]
        this._color = carColors[Math.floor(Math.random() * carColors.length)]
        this._milage = Math.floor(Math.random()* 1000)
        return this;
    }
}

export default Car;