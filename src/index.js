module.exports = function getZerosCount(number, base) {
    let simpleNumbers = {};
    let i = 2;
    let res = 0;

    for ( ; i <= base; i++) {
        while (base % i == 0) {
            simpleNumbers[i] = simpleNumbers[i] ? simpleNumbers[i] + 1 : 1;
            base /= i;
        }
    }
    
    for (key in simpleNumbers) {
        let tempNum = number;
        let tempRes = 0;

        while (tempNum > 0) {
            tempNum = Math.floor(tempNum / key);
            tempRes += tempNum;
        }

        if (res == 0 || res > Math.floor(tempRes / simpleNumbers[key]))
            res = Math.floor(tempRes / simpleNumbers[key]);
    }

    return res;
}