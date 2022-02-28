/*eslint-env es6*/
module.exports = function analyzeArray(arr) {
  if (typeof arr === "undefined" || Array.isArray(arr) === false)
    throw new Error();
  const obj = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };
  if (arr.length === 0) return obj;

  obj.min = Infinity;
  obj.max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) throw new Error();
    obj.average += arr[i];
    obj.min = obj.min > arr[i] ? arr[i] : obj.min;
    obj.max = obj.max < arr[i] ? arr[i] : obj.ax;
    obj.length += 1;
  }
  obj.average = obj.average / obj.length;
  return obj;
};
