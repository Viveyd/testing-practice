module.exports = function caesarCipher(targetStr, shiftNum) {
  if (typeof targetStr === "undefined" && typeof shiftNum === "undefined") {
    throw new Error("No arguments given!");
  }
  // Default shift num = 1
  shiftNum = shiftNum || 1;
  if (typeof targetStr !== "string" || isNaN(shiftNum)) {
    throw new Error("Invalid arguments given!");
  }

  let caesard = "";
  for (let i = 0; i < targetStr.length; i += 1) {
    // Get lowercase of each character
    let charCode = targetStr.toLowerCase().charCodeAt(i);
    const char = targetStr.slice(i, i + 1);
    if (charCode < 65 || charCode < 90) {
      caesard += char;
      continue;
    }
    charCode = targetStr.toUpperCase().charCodeAt(i);
    let newCharCode = charCode - shiftNum;
    if (newCharCode < 65) newCharCode += 26;
    let newChar = String.fromCharCode(newCharCode);
    caesard += charIsLowercase(char) ? newChar.toLowerCase() : newChar;
  }
  return caesard;
};

// If char == char.toLowerCase() then it's already in lowercase
function charIsLowercase(char) {
  return char.toLowerCase() === char ? true : false;
}
