const capitalizeStr = require("./capitalizeStr.js");

test("No arguments given", () => {
  expect(capitalizeStr()).toBe("");
});

test("Empty string argument given", () => {
  expect(capitalizeStr("")).toBe("");
});

test("Null argument given", () => {
  expect(capitalizeStr(null)).toBe("");
});

test("String containing only space/spaces given", () => {
  expect(capitalizeStr(" ")).toBe("");
});

test("Returns given value", () => {
  expect(capitalizeStr("apple")).toBe("Apple");
});

test("Capitalize first word only", () => {
  expect(capitalizeStr("hello world")).toBe("Hello world");
});

test("Capitalize 1 letter string", () => {
  expect(capitalizeStr("a")).toEqual("A");
});

test("Capitalize first word only", () => {
  expect(capitalizeStr(" hello world ")).toBe("Hello world");
});

test("Capitalize string with number as first charcter", () => {
  expect(capitalizeStr("9gag")).toBe("9gag");
});

test("Capitalize character even if number", () => {
  expect(capitalizeStr("1Hello")).toBe("1Hello");
});

test("Capitalize array items", () => {
  expect(capitalizeStr(["hello", "hi", "hey"])).toEqual(["Hello", "Hi", "Hey"]);
});

test("Capitalize array with 1 item", () => {
  expect(capitalizeStr(["hello"])).toEqual(["Hello"]);
});
