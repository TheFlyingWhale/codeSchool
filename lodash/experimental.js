/**
 * clamp() is used to return a number between two numbers(range).
 * If the number is inside given range it retuns the number
 * If the number is outside given range it returns the highest or lowest range number
 */

function clamp(number, lower, upper) {
    console.log(`\nclamp(number:${number}, lower:${lower}, upper:${upper})`);

    //Takes given number and lower limit. Renturns the highest number
    const lowerClampedValue = Math.max(number, lower);
    console.log(`Math.max(${number}, ${lower}) = ${lowerClampedValue}`);

    //Takes lowerClampedValue and higher limit, returns the lowest number
    const clampedValue = Math.min(lowerClampedValue, upper);
    console.log(`Math.min(${lowerClampedValue}, ${upper}) = ${clampedValue}`);
}

//clamp(5, 2, 7);
//clamp(8, 2, 4);
//clamp(2, 5, 10);
//clamp(-10, -5, 5);

/**
 * inRange() is used to check if a number is within a given range.
 * 
 */

function inRange(number, start, end) {
    console.log(`\ninRange(${number}, ${start}, ${end})`);

    let startValue = 0;
    let endValue = 0;
    if (!end) {
        startValue = 0;
        endValue = start;
    } else {
        startValue = start;
        endValue = end;
    }
    if (end < start) {
        endValue = start;
        startValue = end;
    }

    console.log(`startValue = ${startValue}`);
    console.log(`endValue = ${endValue}`);

    return startValue <= number && number < endValue ? true : false;
}

//console.log(inRange(1, 3, 4));
//console.log(inRange(2, 10, 2));
//console.log(inRange(3, 5));
//console.log(inRange(2, 1, 3));

/**
 * words() takes a string and returns an array with all the words
 * wordsV2() simpler function
 */

let string = 'Hei jeg heter ole og liker å kode';

function words(str) {
    let arr = [];
    let word = '';

    for (let i = 0; i < str.length + 1; i++) {
        if (str[i] != ' ' && str[i] != undefined) {
            word += str[i];
        } else {
            arr.push(word);
            word = '';
        }
    }

    return arr;
}

function wordsV2(str) {
    return str.split(' ');
}

//console.log(words(string));
//console.log(wordsV2(string));

/**
 * pad() this does not work at the moment
 */

function pad(str, num) {
    if (str.length >= num) {
        return str;
    } else {
        const startPad = Math.floor((num - str.length) / 2);;
        const endPad = num - (str.length + startPad);
        return str.padEnd(endPad + str.length, '*').padStart(endPad + str.length + startPad, '*');
    }
}

//console.log(pad('ol', 11));

/**
 * has()
 */
const object = { "key": "value" };
const dog = { 'name': 'Tussi', 'age': 5 };

function has(obj, key) {
    return obj.hasOwnProperty(key) ? true : false;
}

function hasV2(obj, key) {
    const hasValue = obj[key];
    if (hasValue != undefined) {
        return true
    } return false;
}

//console.log(has(dog, 'name'));
//console.log(hasV2(dog, 'name'));

/**
 * invert()
 */

function invert(obj) {
    let invertedObject = {};
    for (const key in obj) {
        const originalValue = obj[key];
        invertedObject[originalValue] = key;
    }
    return invertedObject;
}

//console.log(invert(dog));

/**
 * findKey()
 */

function findKey(obj, predicate) {
    for (let key in obj) {
        let value = obj[key];
        predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
            return key;
        }
        return undefined;
    }
}

/**
 * drop()
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function drop(arr, num) {
    let newArray = [];
    //console.log(arr.length - num);
    if (arr.length < num) {
        return false;
    } else if (!num) {
        for (let i = 1; i < arr.length; i++) {
            newArray.push(arr[i]);
        }
    } else {
        for (let i = arr.length - num; i < arr.length; i++) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

//console.log(drop(numbers, 5));
//console.log(drop(numbers));

/**
 * dropWhile()
 */

function dropWhile(arr, predicate) {
    let dropNumber = arr.findIndex((element, index) => {
        return !predicate(element, index, arr);
    });
    let droppedArray = this.drop(arr, dropNumber);
    return droppedArray;
}

/**
 * chunk() go trough the last couple to really understand them
 */

function chunk(arr, size = 1) {
    if (!size) {
        size = 1;
    }
    let arrayChunks = [];
    for(let i = 0; i < arr.length; i += size){
        let arrayChunk = arr.slice(i, i + size);
        arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
}