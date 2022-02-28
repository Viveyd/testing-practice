const calculator = {
  add(a, b) {
    if (typeof a == "undefined" || typeof b == "undefined") return 0;
    if (isNaN(a) || isNaN(b)) throw new Error();
    return +a + +b;
  },
  subtract(a, b) {
    if (typeof a == "undefined" || typeof b == "undefined") return 0;
    if (isNaN(a) || isNaN(b)) throw new Error();
    return a - b;
  },
  multiply(a, b) {
    if (typeof a == "undefined" || typeof b == "undefined") return 0;
    if (isNaN(a) || isNaN(b)) throw new Error();
    return a * b;
  },
  divide(a, b) {
    if (typeof a == "undefined" || typeof b == "undefined") return 0;
    if (isNaN(a) || isNaN(b)) throw new Error();
    return a / b;
  },
};

module.exports = calculator;
