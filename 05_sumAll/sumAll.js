const sumAll = function(num1,num2) {
    let result = 0;
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    else if (num1 < num2) {
        result += num1;
        while (num1 < num2) {
        num1++;
        result += num1;
        }
        return result;
    }
    else {
        result += num1;
        while (num1 > num2) {
            num1--;
            result += num1;
            }
        return result;
    }

};

// Do not edit below this line
module.exports = sumAll;
