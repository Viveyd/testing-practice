/*eslint-env es6*/
const caesarCipher = require("./caesarCipherV2.js");

test("Error no arguments", () => {
  expect(() => {
    caesarCipher();
  }).toThrow("No arguments given!");
});

test("Shifted string with only string arg", () => {
  expect(caesarCipher("hi")).toBe("gh");
});

test("Shifted string with only string arg", () => {
  expect(caesarCipher("az")).toBe("zy");
});

test("Ignores non-alphabet characters", () => {
  expect(caesarCipher("hi!")).toBe("gh!");
});

test("String characters keep original case", () => {
  expect(caesarCipher("Hi!")).toBe("Gh!");
});

test("Error with non-string argument", () => {
  expect(() => {
    caesarCipher(3, []);
  }).toThrow();
});

test("Shift right by value of optional shift num", () => {
  expect(caesarCipher("Hi", 2)).toBe("Fg");
});

test("Error with multiple string arguments", () => {
  expect(() => {
    caesarCipher("Hi!", "Hello.");
  }).toThrow("Invalid arguments given");
});
