// app.js file content
console.log("Hello World")
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}



const conversionRates = {
    "EURtoUSD": 1.07,
    "USDtoJPY": 156.5,
    "JPYtoGBP": 0.87
};

// We declare the function with the exact name "fromEuroToDollar"
// const fromEuroToDollar = function(valueInEuro) {
//     let valueInDollar = valueInEuro * conversionRates.EURtoUSD;
//     return valueInDollar;
// };

// const fromDollarToYen = function(valueInDollar) {
//     let valueInYen = valueInDollar * conversionRates.USDtoJPY;
//     return valueInYen;
// };

// const fromYenToPound = function(valueInYen) {
//     let valueInPound = valueInYen * conversionRates.JPYtoGBP;
//     return valueInPound;
// };

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 149.03;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0072;
    return valueInPound; 
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

// // Just a console log for ourselves
// console.log(sum(7,3))
// // We declare the function with the exact name "fromEuroToDollar"
// const fromEuroToDollar = function(valueInEuro) {
//     // Convert the given valueInEuro to dollars
//     let valueInDollar = valueInEuro * 1.07;
//     // return the dollar value
//     return valueInDollar;
// }
// const fromDollarToYen = function(valueInDollar) {
//     // Convert the given valueInDollar to dollars

//     let valueInYen = valueInDollar * fromEuroToDollar (156.5);
//     // return the dollar value
//     return valueInYen;
// }
// const fromYenToPound = function(valueInYen) {
//     // Convert the given valueInYen to dollars
//     let valueInPound = valueInYen * fromDollarToYen (0.87);
//     // return the dollar value
//     return valueInPound;
// }


// // One euro is:
// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }