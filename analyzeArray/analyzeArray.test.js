const analyzeArray = require("./analyzeArray.js");

test("Error if no array passed", () => {
  expect(() => {
    analyzeArray();
  }).toThrow();
});

test("Pass empty array get object with zero value", () => {
  expect(analyzeArray([])).toEqual({ average: 0, min: 0, max: 0, length: 0 });
});

test("Pass array with 3 numbers get object average", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test("Pass array with 3 numbers get object min", () => {
  expect(analyzeArray([1, 2, 3]).min).toBe(1);
});

test("Pass array with 3 numbers get object max", () => {
  expect(analyzeArray([1, 2, 3]).max).toBe(3);
});

test("Pass array with 3 numbers get object length", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

test("Pass array with 3 numbers", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("Pass array with floating numbers", () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("Error when passed non-array arg", () => {
  expect(() => {
    analyzeArray(1);
  }).toThrow();
});

test("Error when passed array contains NaN", () => {
  expect(() => {
    analyzeArray([1, "b", [1, 2, 3]]);
  }).toThrow();
});
