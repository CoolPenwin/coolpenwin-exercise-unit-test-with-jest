
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
expect(fromEuroToDollar(3.5)).toBeClo (3.745)});

test("10$ should be 14.903Yen", function() {
    const { fromDollarToYen } = require('./app.js');
expect(fromDollarToYen(10)).toBeClo (14.903)});

test("1000 yens should be 7 pounds", function() {
    const { fromYenToPound } = require('./app.js');
expect(fromYenToPound(1000)).toBeClosed (7.2)});
