//Array containing names
let names = ['Ole','Petter','Magnus', 'Po', 'Phillip','Patrick', 'Per', 'Ola', 'Pi'];
//Array containing numbers
let numbers = [5, 10, 15, 20];

//Uses the forEach to log each name
names.forEach(name => console.log(name));

//Uses the forEach to log each name + Derp
names.forEach(name => console.log(`${name} Derp`));

//Uses the forEach to log each name and inform if it is more or less than 3 letters
names.forEach(name => name.length > 4 ? console.log(`${name} contains more than 3 letters`) : console.log(`${name} containes 3 or less letters`));

//Uses forEach to greet everyone in given array
names.forEach(names => {
    console.log(`Hello there ${names}`);
});

//Function that takes a greets a person in a stoked way
const stokedGreeting = name => {
    console.log(`OMG HELLO ${name}!!!`);
}

//Calls the stokedGreeting on the names array
names.forEach(stokedGreeting);

/* 
    array.forEach()
    is used to loop trough an arary and do something for each item
*/

//Uses map to create objects based on names and store it in an array
let namesToInfoObject = names.map(name => {
    return {
        name: name,
        length: name.length
    }
});

/*
    array.map()
    is used to reaturn a new array based on given array
*/

//Uses for each to loop trouch an object and print its keys and values
namesToInfoObject.forEach((object) => {
    for(const [key, value] of Object.entries(object)){
        console.log(`${key}: ${value}`);
    }
    console.log('');
});

//Function that calculates the square of given numbers
const toSquare = num => num * num;

//Logs the squared results of numbers
console.log('toSquare: ' + numbers.map(toSquare));

//Function that takes an argument of names and return array with names capitalized + exclamation mark
const shoutName = array => {
    return names.map(array=>{return `${array.toUpperCase()}!`});
}

//Logs capitalized names
console.log(shoutName(names));

/*
    array.filter()
    is used to create an array that fullfils criterias
*/

//Uses filter to create an array containing names with only 3 letters
let namesWithThreeLetters = names.filter(name => {
    if(name.length === 3){
        return name;
    }
});

//Uses filter to create an array containing names with 3 or less letters
let namesWithThreeOrLessLetters = names.filter(name => {
    if(name.length <= 3){
        return name;
    }
});

console.log('Names with 3 letters');
//Uses forEach to log each name in array
namesWithThreeLetters.forEach( name => console.log(name));

//Uses forEach to log each name in array
console.log('\nNames with 3 or less letters');
namesWithThreeOrLessLetters.forEach(name => console.log(name));

/*
    array.reduce()
    It reduces an array to a single value
    Usually used with numbers, such as finding the sum of all the numbers in an array
*/

//Multiplies each value in the array to return the sum
let sum = numbers.reduce((a, b) => {
    return a + b;
});

//Combines all the names to one string
let nameSum = names.reduce((a, b) => {
    return a + b;
})

console.log('\n'+sum);

console.log('\n'+nameSum);

/**
 * Array.find()
 * Returns the first value of an provided array that stisfies to provided testing function
 */

//Finds the first name that contains more than 6 letters
let criminal = names.find(name => name.length > 6);

console.log('\n'+criminal);

//Finds the first number thats larger than 12
let largeNumber = numbers.find(number => number > 12);

console.log(largeNumber);

/**
 * Array.findIndex()
 * Takes a value and find the value index in an array
 */

 //Prints to console the given name and its index in the names array
 const findName = givenName => {
     let name = givenName;
     nameCapitalized = name[0].toUpperCase() + name.slice(1);
     console.log(`The index of ${nameCapitalized} is ${names.indexOf(nameCapitalized)}`);
 }

 findName('Phillip');