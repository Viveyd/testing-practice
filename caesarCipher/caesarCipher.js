module.exports = function caesarCipher(targetStr, shiftNum) {
  if (typeof targetStr === "undefined" && typeof shiftNum === "undefined") {
    throw new Error("No arguments given!");
  }
  // Default shift num = 1
  shiftNum = shiftNum || 1;
  if (typeof targetStr !== "string" || isNaN(shiftNum)) {
    throw new Error("Invalid arguments given!");
  }
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const split = targetStr.split("");
  let letters = [];
  for (let i = 0; i < split.length; i += 1) {
    const curLtr = split[i];
    const curIdx = alphabet.indexOf(curLtr.toLowerCase());
    if (curIdx < 0) {
      letters[i] = split[i];
      continue;
    }
    const newIdx = curIdx - shiftNum;
    const adjIdx = newIdx >= 0 ? newIdx : newIdx + 26;
    letters[i] = charIsLowercase(curLtr)
      ? alphabet[adjIdx]
      : alphabet[adjIdx].toUpperCase();
  }
  return letters.join("");
};

// If char == char.toLowerCase() then it's already in lowercase
function charIsLowercase(char) {
  return char.toLowerCase() === char ? true : false;
}
