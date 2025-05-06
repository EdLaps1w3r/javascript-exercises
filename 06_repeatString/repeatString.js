const repeatString = function(string, number) {
    let finalString = "";
    if (Number.isInteger(number) && number >= 0 == true) {
        for (let i = 0; i < number; i++) {
            finalString = finalString + string;
        }
    } else {
        finalString = "ERROR"
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
