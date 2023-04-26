const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;

    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) =>{
    let valueInEuro = valueInDollar/1.2

    return Number((valueInEuro*127.9).toFixed(2))
}

console.log(fromDollarToYen(2))

const fromYenToPound = (valueInYen) =>{
    let valueInEuro = valueInYen/127.9

    return Number((valueInEuro*0.8).toFixed(2));
}

console.log(fromYenToPound(10000))


// here we use the famous "two sum" function
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// then we export the function for the test to use it
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };