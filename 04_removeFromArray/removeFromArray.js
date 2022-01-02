const removeFromArray = function(arr, ...nums) {
    let args = Array.from(arguments);
    args.shift();
    arr = arr.filter(val => !args.includes(val));
    return arr;
};

removeFromArray([1,2,3,4], 2,3)

// Do not edit below this line
module.exports = removeFromArray;
