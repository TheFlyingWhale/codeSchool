const _ = {
    clamp(number, lower, upper) {
        var lowerClampedValue = Math.max(number, lower);
        console.log(lowerClampedValue);
        var clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
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
        return startValue <= number && number < endValue ? true : false;
    },
    words(str) {
        return str.split(' ');
    },
    pad(str, num){
        if(str.length >= num){
            return str;
        }
        const startPaddingLength = Math.floor((num - str.length)/2);
        const endPaddingLength = num - str.length - startPaddingLength;
        return ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
    },
    has(obj, key) {
        return obj.hasOwnProperty(key) ? true : false;
    },
    invert(obj){
        let invertedObject = {};
        for(let key in obj){
            const originalValue = obj[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject;
    },
    findKey(obj, predicate){
        for(let key in obj){
            let value = obj[key];
            predicateReturnValue = predicate(value);
            if(predicateReturnValue){
                return key;
            }
            return undefined;
        }
    },
    drop(arr, num) {
        let newArray = [];
        //console.log(arr.length - num);
        if (arr.length < num) {
            return false;
        } else if (!num) {
            for(let i = 1; i < arr.length; i++){
                newArray.push(arr[i]);
            }
        } else {
            for (let i = arr.length - num; i < arr.length; i++) {
                newArray.push(arr[i]);
            }
        }
        return newArray;
    },
    dropWhile(arr, predicate){
        let dropNumber = arr.findIndex((element, index) => {
            return !predicate(element, index, arr);
        });
        let droppedArray = this.drop(arr, dropNumber);
        return droppedArray;
    },
    chunk(arr, size=1) {
        let arrayChunks = [];
        for(let i = 0; i < arr.length; i += size){
            let arrayChunk = arr.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
    
};




// Do not write or modify code below this line.
module.exports = _;