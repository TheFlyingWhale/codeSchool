// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

/**
 * validateCred()
 * Takes a credit card number and checks if its valid
 */
const validateCred = arr => {
    const recievedArr = [];
    for (let i = 0; i < arr.length; i++) {
        recievedArr.push(arr[i]);
    }
    const checkNumber = recievedArr.pop();
    const reversedArr = recievedArr.reverse();
    const multipliedArr = [];
    for (let i = 0; i < reversedArr.length; i++) {
        if (i % 2 === 0) {
            if (reversedArr[i] * 2 >= 10) {
                multipliedArr.push(reversedArr[i] * 2);
            } else {
                multipliedArr.push(reversedArr[i] * 2);
            }
        } else {
            multipliedArr.push(reversedArr[i]);
        }
    }
    const subtractArr = [];
    for (let i = 0; i < multipliedArr.length; i++) {
        if (multipliedArr[i] >= 10) {
            subtractArr.push(multipliedArr[i] - 9);
        } else {
            subtractArr.push(multipliedArr[i]);
        }
    }
    let sum = 0;
    for (let i = 0; i < subtractArr.length; i++) {
        sum += subtractArr[i];
    }
    const beforeModula = sum + checkNumber;
    const afterModula = beforeModula % 10;
    if (!afterModula) {
        return true;
    } else {
        return false;
    }
}

/**
 * findInvalidCards()
 * 
 */

const findInvalidCards = nestArr => {
    const invalidCards = [];
    for (let i = 0; i < nestArr.length; i++) {
        if (!validateCred(nestArr[i])) {
            invalidCards.push(nestArr[i]);
        }
    }
    return invalidCards;
}

const idInvalidCardCompanies = nestArr => {
    const companies = [];
    for (let i = 0; i < nestArr.length; i++) {
        switch (nestArr[i][0]) {
            case 3:
                console.log('- Amex' + `\t\t${nestArr[i].join('-')}`);
                if(companies.indexOf('Amex') === -1){
                    companies.push('Amex');
                }
                break;
            case 4:
                console.log('- Visa' + `\t\t${nestArr[i].join('-')}`);
                if(companies.indexOf('Visa') === -1){
                    companies.push('Visa');
                }
                break;
            case 5:
                console.log('- Mastercard' + `\t${nestArr[i].join('-')}`);
                if (companies.indexOf('Mastercard') === -1) {
                    companies.push('Mastercard');
                }
                break;
            case 6:
                console.log('- Discover' + `\t${nestArr[i].join('-')}`);
                if (companies.indexOf('Discover') === -1) {
                    companies.push('Discover');
                }
                break;
            default:
                console.log('Company not found' + `\t${nestArr[i].join('-')}`);
        }
    }
    console.log(`Contact: \t${companies}`);
}

//console.log(`test ${batch.indexOf(valid3)}`);

//console.log(findInvalidCards([mystery1, mystery2, mystery3, mystery4, mystery5]));
//console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5]));
//console.log(findInvalidCards(batch));
//console.log(valid2.length);
idInvalidCardCompanies(findInvalidCards(batch));


