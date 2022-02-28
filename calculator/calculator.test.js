const calculator = require("./calculator.js");

// Method exists test

test("Call add method", () => {
  expect(calculator.add()).toBeDefined();
});

test("Call subtract method", () => {
  expect(calculator.subtract()).toBeDefined();
});

test("Call multiply method", () => {
  expect(calculator.multiply()).toBeDefined();
});

test("Call divide method", () => {
  expect(calculator.divide()).toBeDefined();
});

// Correct return value test

test("Pass two numbers to add method and get sum", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("Pass two numbers to subract method and get dif", () => {
  expect(calculator.subtract(1, 1)).toBe(0);
});

test("Pass two numbers to subract method and get diff", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("Pass two numbers to multiply method and get product", () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});

test("Pass two numbers to divide method and get quotient 1", () => {
  expect(calculator.divide(1, 1)).toBe(1);
});

test("Pass two numbers to divide method and get quotient 2", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

// NaN args test

test("Pass NaN arguments to add method and get error", () => {
  expect(() => {
    calculator.add([1, 3], "gi");
  }).toThrow();
});

test("Pass NaN arguments to subtract method and get error", () => {
  expect(() => {
    calculator.subtract([1, 3], "gi");
  }).toThrow();
});

test("Pass NaN arguments to multiply method and get error", () => {
  expect(() => {
    calculator.multiply([1, 3], "gi");
  }).toThrow();
});

test("Pass NaN arguments to divide method and get error", () => {
  expect(() => {
    calculator.divide([1, 3], "gi");
  }).toThrow();
});

// Float test

test("Pass two floating numbers to add method and get sum", () => {
  expect(calculator.add(1.3334, 0.6666)).toBe(2);
});

test("Pass two floating numbers (positive or negative) to add method and get sum", () => {
  expect(calculator.add(1.3334, -0.6666)).toBe(0.6668);
});

// String Numbers test
test("Pass two string number to add method and get sum", () => {
  expect(calculator.add("5", "5")).toBe(10);
});

test("Pass two string number to add method and get sum", () => {
  expect(calculator.add("5", "-5")).toBe(0);
});

test("Pass two string number to subtract method and get sum", () => {
  expect(calculator.subtract("5", "5")).toBe(0);
});

test("Pass two string number to multiply method and get sum", () => {
  expect(calculator.subtract("5", "5")).toBe(0);
});

test("Pass two string number to divide method and get sum", () => {
  expect(calculator.subtract("5", "5")).toBe(0);
});
