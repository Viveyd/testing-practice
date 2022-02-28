module.exports = function reverseString(str) {
  if (typeof str === "string" || typeof str === "number") {
    const string = str.toString();
    const split = string.split("");
    const len = split.length - 1;
    const reversedArr = [];
    for (let i = len; i >= 0; i--) {
      reversedArr[len - i] = split[i];
    }
    const reversedStr = reversedArr.join("");
    return reversedStr;
  }
  return str;
};
