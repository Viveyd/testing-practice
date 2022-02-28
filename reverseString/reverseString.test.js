const reverseString = require("./reverseString.js");

test("Pass empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Pass none", () => {
  expect(reverseString()).toBe();
});

test("Pass no-space-string return reversed", () => {
  expect(reverseString("abcde")).toBe("edcba");
});

test("Pass spaced-string return reversed", () => {
  expect(reverseString("abc de")).toBe("ed cba");
});

test("Pass number return reversed", () => {
  expect(reverseString(12345)).toBe("54321");
});
