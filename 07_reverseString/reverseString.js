const reverseString = function(string) {
    let splitString = string.split("");
    let reverseSplit = splitString.reverse();
    let reverseString = reverseSplit.join("");
    return reverseString;
}

// Do not edit below this line
module.exports = reverseString;
