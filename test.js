test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)

})

test("One Dollar should be 1.206 Yens", function(){
    // importing the function from 'app.js'
    const { fromDollarToYen } = require('./app.js')

    const yens = fromDollarToYen(5)

    // if 1 dollar are 1.206 yens, then 2 dollars should be (2 * 1.279)
    const expected = 2 * 1.206;

    // this is the comparison for the unit test
    expect(fromDollarToYen(2)).toBe(2.412); //1 dollars are 1.279 yens, then 2 euros should be = (2 * 1.206)
})

test("One Yen should be 0.8 Pounds", function(){
    // importing the function from 'app.js'
    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(2)

    // if 1 yen are 0.8 pounds, then 4 yens should be (4 * 0.8)
    const expected = 2 * 0.8;

    // this is the comparison for the unit test
    expect(fromYenToPound(4)).toBe(3.2); //1 yen are 0.8 pounds, then 4 yens should be = (4 * 3.2)

})