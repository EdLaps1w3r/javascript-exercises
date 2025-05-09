const palindromes = function (string) {
    let fixedStringIntial = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim().toLowerCase();
    let fixedStringFinal = fixedStringIntial.replaceAll(" ", "");
    console.log(fixedStringFinal);
    let splitString = fixedStringFinal.split("");
    let reverseSplit = splitString.reverse();
    let reverseString = reverseSplit.join("");
    console.log(reverseString);
    if (reverseString == fixedStringFinal) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
