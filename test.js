const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('converts 1 Euro to 1.07 USD', () => {
    expect(fromEuroToDollar(1)).toBe(1.07);
});

test('converts 1 USD to the correct amount of JPY', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(149.03);
});

test('converts 1 JPY to the correct amount of GBP', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.0072);
});