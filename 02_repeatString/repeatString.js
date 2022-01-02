const repeatString = function(string, num) {
    let counter = 0;
    let str = '';
    if (num < 0) {
        return 'ERROR';
    }
    else {
        while (counter < num) {
        str += string;
        counter++;
        }
    }
    
    return str;
};

// Do not edit below this line
module.exports = repeatString;
