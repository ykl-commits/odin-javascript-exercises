const add = function(a, b) {
	return Number(a + b);
};

const subtract = function(a, b) {
	return Number(a - b)
};

const sum = function(numbers) {
	return Number(numbers.reduce((acc, val) => acc + val, 0));
};

const multiply = function(numbers) {
  return Number(numbers.reduce((acc, val) => acc * val, 1));
};

const power = function(number, toPower = 1) {
	return Number(number ** toPower);
};

const factorial = function(numbers) {
  let result = 1
  for (let i = 2; i <= numbers; i++) {
    result *= i;
  }
  return result;
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
