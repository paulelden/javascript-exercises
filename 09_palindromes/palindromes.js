const palindromes = function (str) {
    let alpha = Array.from('abcdefghijklmnopqrstuvwxyz');
    let arr = str.toLowerCase().split('');
    let arrFiltered = arr.filter(letter => alpha.includes(letter.toLowerCase()));
    return (arrFiltered.join('') === arrFiltered.reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
