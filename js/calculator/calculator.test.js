const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test('divide 15 / 5 to equal 3', () => {
  expect(calculator.divide(15, 5)).toBe(3);
});
test('multiply 4 * 5 to equal 20', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});
test('multiply 8 * 8 to equal 64', () => {
  expect(calculator.multiply(8, 8)).toBe(64);
});
//Me di cuenta que esa funcion da error porque espera que reciba 0, pero js manda "Infinity" y para corregirlo modifique la funcion divide en "calculator.js"
test('divide 10 / 0 should return 0', () => {
  expect(calculator.divide(10, 0)).toBe(0);
});