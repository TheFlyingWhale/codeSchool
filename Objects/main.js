import Car from './cars.js';

const newCar = new Car('Audi', 'White', 210)
newCar.logInfo();

const secCar = new Car('Honda', 'Orange', 333);
secCar.logInfo();

let cars = []

for (let i = 0; i < 10; i++) {
    cars.push(new Car().random())
    console.log(`${i}: ${cars[i].getInfo()}`);
}