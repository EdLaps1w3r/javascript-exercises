
const sumAll = function(int1, int2) {
    if (Number.isInteger(int1) && int1 > 0) {
        if (Number.isInteger(int2) && int2 > 0){
            const arr = [int1, int2];
            let lower = Math.min(...arr);
            let upper = Math.max(...arr);
            let totalSum = 0;
            for (let i = lower; i <= upper; i++) {
                totalSum = totalSum + i;
                console.log(totalSum)
            }
            return totalSum;
        }
    }
    return "ERROR"

};


// Do not edit below this line
module.exports = sumAll;
