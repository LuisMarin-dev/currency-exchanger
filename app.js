const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}
console.log(fromEuroToDollar(3.5));

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 1.206;

    return valueInYen;
    // return Number((valueInEuro*127.9).toFixed(2))
}
console.log(fromDollarToYen(5))

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;

    return valueInPound;
    // return Number((valueInEuro*0.8).toFixed(2));
}
console.log(fromYenToPound(2))


// here we use the famous "two sum" function
const sum = (a,b) => {
    return a + b
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// const fromDollarToYen = (valueInDollar) => {
//   let valueInYen = valueInDollar * 127.9;

//   return Number((valueInYen).toFixed(2));
// };

// const fromYenToPound = (valueInYen) => {
//   let valueInPound = valueInYen / 100 * 0.8;

//   return Number((valueInPound).toFixed(2));
// };

console.log(sum(7,3))

// then we export the function for the test to use it
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };