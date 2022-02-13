const add = function(a,b) {
  return (a+b);
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	if ( !arr[0] ) { 
    return 0; 
  }
  else if ( !arr[1]) { 
    return arr[0] 
  }
  else {
    let total = arr.reduce(function (num1, num2) {
      return num1 + num2;
  });
  return total;
  }
};

const multiply = function(arr) {
  return arr.reduce((num1, num2) => { return num1 * num2} );
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
  let rval = 1;
  for (let i = 2; i <= num; i++) {
    rval = rval * i;
  }
  return rval;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
