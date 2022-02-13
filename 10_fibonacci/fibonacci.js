const fibonacci = function(val) {
    let n1 = 0, n2 = 1, next;
    if (val < 0) { return "OOPS"; }
    for (let i = 1; i <= val; i++) {
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
