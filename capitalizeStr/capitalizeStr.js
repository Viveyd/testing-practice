module.exports = function capitalizeStr(str) {
  let capitalized;
  if (str == undefined || str == null || str == "") return "";
  if (Object.prototype.toString.call(str) === "[object Array]") {
    capitalized = [];

    for (let i = 0; i < str.length; i++) {
      const copy = [...str[i]];
      copy[0] = copy[0].toUpperCase();
      capitalized[i] = copy.join("");
    }
    return capitalized;
  }
  capitalized = str.trim();
  if (capitalized == "") return "";
  capitalized = capitalized.split("");
  capitalized[0] = capitalized[0].toUpperCase();
  return capitalized.join("");
};
