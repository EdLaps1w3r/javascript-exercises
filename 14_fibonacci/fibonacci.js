const fibonacci = function(num) {
    let numProccessed = parseInt(num);
    if (Number.isInteger(numProccessed) == true && numProccessed >= 0) {
        let nextFibNum = 0
        let fibonacci = [];
        for (let i = 0; i <= numProccessed; i++) {
            let previousFibNum1 = fibonacci[(i - 1)];
            let previousFibNum2 = fibonacci[(i - 2)];
            if (isNaN(previousFibNum1) == false && isNaN(previousFibNum2) == false) {
                nextFibNum = previousFibNum1 + previousFibNum2;
            } else if (isNaN(previousFibNum1) == false) {
                nextFibNum = previousFibNum1 + 1;
            };
            fibonacci.push(nextFibNum);
        };
    return fibonacci[numProccessed];
    } else {
        return "OOPS";
    };
};


// Do not edit below this line
module.exports = fibonacci;
